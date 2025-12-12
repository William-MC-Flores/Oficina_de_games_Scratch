
(function(){
    const COLOR_YELLOW = '#FFCC00';
    const COLOR_PURPLE = '#9966CC';
    const COLOR_SKY = '#4DA6FF';
    const COLOR_ORANGE = '#FF8C33';
    const colors = [COLOR_YELLOW, COLOR_PURPLE, COLOR_SKY, COLOR_ORANGE];

    let layoutCanvas = null;
    let layoutCtx = null;
    let layoutBlocks = [];
    let dragging = null;
    let offset = {x: 0, y: 0};
    let deviceRatio = window.devicePixelRatio || 1;
    let manuallyMovedBlocks = new Set();
    let maxZIndex = 100;
    let rafScheduled = false;

    function scheduleDraw() {
        if (rafScheduled) return;
        rafScheduled = true;
        requestAnimationFrame(() => {
            rafScheduled = false;
            draw();
        });
    }

    function roundRect(ctx, x, y, w, h, r) {
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.lineTo(x + w - r, y);
        ctx.quadraticCurveTo(x + w, y, x + w, y + r);
        ctx.lineTo(x + w, y + h - r);
        ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
        ctx.lineTo(x + r, y + h);
        ctx.quadraticCurveTo(x, y + h, x, y + h - r);
        ctx.lineTo(x, y + r);
        ctx.quadraticCurveTo(x, y, x + r, y);
        ctx.closePath();
    }

    function drawStackBlock(b) {
        const r = 10;
        const notchHeight = 14;
        const notchWidth = 44;
        const nx = b.x + Math.max(24, Math.round((b.w - notchWidth)/2));

        layoutCtx.fillStyle = 'rgba(0,0,0,0.12)';
        roundRect(layoutCtx, b.x+3, b.y+6, b.w, b.h, r);
        layoutCtx.fill();

        layoutCtx.beginPath();
        layoutCtx.moveTo(b.x + r, b.y);
        if (nx > b.x + r) layoutCtx.lineTo(nx, b.y);
        layoutCtx.quadraticCurveTo(nx + notchWidth/2, b.y + notchHeight, nx + notchWidth, b.y);
        layoutCtx.lineTo(b.x + b.w - r, b.y);
        layoutCtx.quadraticCurveTo(b.x + b.w, b.y, b.x + b.w, b.y + r);
        layoutCtx.lineTo(b.x + b.w, b.y + b.h - r);
        layoutCtx.quadraticCurveTo(b.x + b.w, b.y + b.h, b.x + b.w - r, b.y + b.h);
        layoutCtx.lineTo(b.x + r, b.y + b.h);
        layoutCtx.quadraticCurveTo(b.x, b.y + b.h, b.x, b.y + b.h - r);
        layoutCtx.lineTo(b.x, b.y + r);
        layoutCtx.quadraticCurveTo(b.x, b.y, b.x + r, b.y);
        layoutCtx.closePath();

        layoutCtx.fillStyle = b.color;
        layoutCtx.fill();

        drawBottomTab(b.x, b.y, b.w, b.h);

        layoutCtx.fillStyle = b.textColor;
        layoutCtx.font = 'bold 22px Cascadia Code, monospace';
        layoutCtx.textAlign = 'left';
        layoutCtx.textBaseline = 'middle';
        layoutCtx.fillText(b.text, b.x + 16, b.y + b.h/2);
    }

    function drawBottomTab(x, y, w, h) {
        const tw = 44;
        const tx = x + Math.max(24, Math.round((w - tw)/2));
        const ty = y + h - 2;
        layoutCtx.beginPath();
        layoutCtx.moveTo(tx, ty);
        layoutCtx.lineTo(tx + tw, ty);
        layoutCtx.quadraticCurveTo(tx + tw/2, ty + 18, tx, ty);
        layoutCtx.closePath();
        layoutCtx.fill();
    }

    function draw() {
        if (!layoutCanvas || !layoutCtx) return;
        layoutCtx.clearRect(0, 0, layoutCanvas.width, layoutCanvas.height);
        const blocksToDraw = [...layoutBlocks].sort((a, b) => (a.z || 0) - (b.z || 0));
        
        const scrollX = window.scrollX;
        const scrollY = window.scrollY;
        
        blocksToDraw.forEach(b => {
            if (b.domId && !dragging && !manuallyMovedBlocks.has(b.id)) {
                const el = document.querySelector('[data-word-id="' + b.domId + '"]');
                if (el) {
                    const r = el.getBoundingClientRect();
                    b.x = Math.round(r.left + scrollX);
                    b.y = Math.round(r.top + scrollY);
                    const padX = 24, padY = 10;
                    b.w = Math.max(120, Math.round((r.width || b.w) + padX * 2));
                    b.h = Math.max(40, Math.round((r.height || b.h) + padY));
                }
            }
            drawStackBlockWithScroll(b, scrollX, scrollY);
        });
    }
    
    function drawStackBlockWithScroll(b, scrollX, scrollY) {
        const adjustedBlock = {
            ...b,
            x: b.x - scrollX,
            y: b.y - scrollY
        };
        drawStackBlock(adjustedBlock);
    }

    function hitTest(x, y) {
        const docX = x + window.scrollX;
        const docY = y + window.scrollY;
        
        for (let b of layoutBlocks) {
            if (docX >= b.x && docX <= b.x + b.w && docY >= b.y && docY <= b.y + b.h) {
                return b;
            }
        }
        return null;
    }

    function initLayoutCanvas() {
        if (layoutCanvas) return;
        
        layoutCanvas = document.createElement('canvas');
        layoutCanvas.id = 'layout-overlay-canvas';
        layoutCanvas.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            z-index: 50;
            cursor: grab;
            display: none;
        `;
        document.body.appendChild(layoutCanvas);
        layoutCtx = layoutCanvas.getContext('2d');

        function resizeLayoutCanvas() {
            deviceRatio = window.devicePixelRatio || 1;
            const w = window.innerWidth;
            const h = window.innerHeight;
            layoutCanvas.width = Math.floor(w * deviceRatio);
            layoutCanvas.height = Math.floor(h * deviceRatio);
            layoutCanvas.style.width = w + 'px';
            layoutCanvas.style.height = h + 'px';
            layoutCtx.setTransform(deviceRatio, 0, 0, deviceRatio, 0, 0);
            scheduleDraw();
        }

        window.addEventListener('resize', resizeLayoutCanvas);
        window.addEventListener('scroll', scheduleDraw, {passive: true});
        resizeLayoutCanvas();
        
        layoutCanvas.addEventListener('touchstart', (e) => {
            if (hitTest(e.touches[0].clientX, e.touches[0].clientY)) {
                e.preventDefault();
            }
        }, {passive: false});
        
        window.addEventListener('pointerdown', (e) => {
            const x = e.clientX + window.scrollX;
            const y = e.clientY + window.scrollY;
            const hit = hitTest(e.clientX, e.clientY);
            if (hit) {
                dragging = hit;
                offset = {x: x - hit.x, y: y - hit.y};
                hit.z = ++maxZIndex;
                layoutCanvas.style.pointerEvents = 'auto';
                layoutCanvas.style.cursor = 'grabbing';
                e.preventDefault();
                e.stopPropagation();
                try {
                    layoutCanvas.setPointerCapture(e.pointerId);
                } catch (err) {
                }
            } else {
                layoutCanvas.style.pointerEvents = 'none';
            }
        }, {passive: false});

        window.addEventListener('pointermove', (e) => {
            const x = e.clientX + window.scrollX;
            const y = e.clientY + window.scrollY;

            if (dragging) {
                layoutCanvas.style.pointerEvents = 'auto';
                dragging.x = x - offset.x;
                dragging.y = y - offset.y;
                draw();
                return;
            }

            const hover = hitTest(e.clientX, e.clientY);
            if (hover) {
                layoutCanvas.style.pointerEvents = 'auto';
                layoutCanvas.style.cursor = 'grab';
            } else {
                layoutCanvas.style.pointerEvents = 'none';
                layoutCanvas.style.cursor = 'default';
            }
        });

        window.addEventListener('pointerup', () => {
            if (dragging) {
                manuallyMovedBlocks.add(dragging.id);
                dragging = null;
                layoutCanvas.style.cursor = 'grab';
                draw();
            }
            layoutCanvas.style.pointerEvents = 'none';
        }, {passive: false});
    }

    window.LayoutCanvas = {
        enable: function(words) {
            initLayoutCanvas();
            layoutBlocks = [];
            words.forEach((w, idx) => {
                let text, left, top, width, height, colorClass;
                if (typeof w === 'object' && w !== null) {
                    text = w.text || '';
                    left = typeof w.left === 'number' ? w.left : 50 + (idx % 4) * 320;
                    top = typeof w.top === 'number' ? w.top : 60 + Math.floor(idx / 4) * 80;
                    width = typeof w.width === 'number' ? w.width : 180;
                    height = typeof w.height === 'number' ? w.height : 40;
                    colorClass = w.colorClass || null;
                } else {
                    text = String(w);
                    left = 50 + (idx % 4) * 320;
                    top = 60 + Math.floor(idx / 4) * 80;
                    width = 220;
                    height = 52;
                    colorClass = null;
                }

                let color = colors[idx % colors.length];
                if (colorClass) {
                    if (colorClass === 'yellow') color = COLOR_YELLOW;
                    else if (colorClass === 'purple') color = COLOR_PURPLE;
                    else if (colorClass === 'blue') color = COLOR_SKY;
                    else if (colorClass === 'orange') color = COLOR_ORANGE;
                }

                const textColor = (color === COLOR_YELLOW || color === COLOR_ORANGE) ? '#5D4037' : '#fff';

                layoutCtx.font = 'bold 22px Cascadia Code, monospace';
                const textWidth = layoutCtx.measureText(text).width;
                const padX = 40;
                const padY = 10;
                const blockWidth = Math.max(120, Math.round(textWidth + padX * 2));
                const blockHeight = 52;

                const block = {
                    id: 'layout-' + idx,
                    text: text,
                    x: Math.round(left),
                    y: Math.round(top),
                    w: blockWidth,
                    h: blockHeight,
                    color: color,
                    textColor: textColor,
                    z: idx
                };
                if (typeof w === 'object' && w !== null && w.id) block.domId = w.id;
                layoutBlocks.push(block);
                maxZIndex = Math.max(maxZIndex, idx);
            });
            layoutCanvas.style.display = 'block';
            layoutCanvas.style.pointerEvents = 'auto';
            draw();
        },
        disable: function() {
            if (layoutCanvas) {
                layoutCanvas.style.display = 'none';
                layoutBlocks = [];
                manuallyMovedBlocks.clear();
            }
        }
    };
})();
