(function(){
    const canvas = document.getElementById('scratch-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let deviceRatio = window.devicePixelRatio || 1;

    function resize() {
        deviceRatio = window.devicePixelRatio || 1;
        const w = canvas.clientWidth || 600;
        const h = canvas.clientHeight || 380;
        canvas.width = Math.floor(w * deviceRatio);
        canvas.height = Math.floor(h * deviceRatio);
        canvas.style.width = w + 'px';
        canvas.style.height = h + 'px';
        ctx.setTransform(deviceRatio, 0, 0, deviceRatio, 0, 0);
        draw();
    }

    // Blocks: hat (main) + stack blocks
    const blocks = [];

    // Create hat block (main starter)
    const hat = {
        id: 'hat-1',
        type: 'hat',
        x: 18,
        y: 12,
        w: 360,
        h: 64,
        color: '#5CB85C', 
        textColor: '#fff',
        text: 'quando bandeira verde clicada',
        child: null,
    };

    const COLOR_YELLOW = '#FFCC00'; 
    const COLOR_PURPLE = '#9966CC'; 
    const COLOR_SKY = '#4DA6FF';    
    const COLOR_ORANGE = '#FF8C33'; 

    const example1 = { id: 2, type: 'stack', x: 18, y: 100, w: 360, h: 52, color: COLOR_ORANGE, text: 'set pontos to 0', textColor: '#5D4037', child: null, parent: null };
    const example2 = { id: 3, type: 'stack', x: 18, y: 168, w: 360, h: 52, color: COLOR_SKY, text: 'move 40 steps', textColor: '#fff', child: null, parent: null };
    const example3 = { id: 4, type: 'stack', x: 18, y: 236, w: 360, h: 52, color: COLOR_PURPLE, text: 'rotate 45 degrees', textColor: '#fff', child: null, parent: null };
    const example4 = { id: 5, type: 'stack', x: 18, y: 304, w: 360, h: 52, color: COLOR_YELLOW, text: 'change pontos by 1', textColor: '#5D4037', child: null, parent: null };
    const example5 = { id: 6, type: 'stack', x: 18, y: 372, w: 360, h: 52, color: COLOR_ORANGE, text: 'change pontos by -1', textColor: '#fff', child: null, parent: null };

    blocks.push(hat, example1, example2, example3, example4, example5);

    let dragging = null;
    let offset = {x:0, y:0};

    function drawHatBlock(b) {
        const r = 12;
        // shadow
        ctx.fillStyle = 'rgba(0,0,0,0.14)';
        ctx.fillRect(b.x+3, b.y+6, b.w, b.h);

        // body
        ctx.fillStyle = b.color;
        roundRect(ctx, b.x, b.y, b.w, b.h, r);
        ctx.fill();

        // small flag icon (green) on left
        const flagX = b.x + 12;
        const flagY = b.y + 14;
        ctx.fillStyle = '#2E7D32';
        ctx.beginPath();

        ctx.lineTo(flagX, flagY);
        ctx.lineTo(flagX + 18, flagY + 6);
        ctx.lineTo(flagX, flagY + 12);
        ctx.closePath();
        ctx.fill();

        // red stop icon (drawn on top-right of canvas area, not part of hat)
        // text
        ctx.fillStyle = b.textColor;
        ctx.font = 'bold 16px Cascadia Code, monospace';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        ctx.fillText(b.text, b.x + 42, b.y + b.h/2);

        // highlight if executing
        if (typeof executingId !== 'undefined' && executingId === b.id) {
            ctx.save();
            ctx.strokeStyle = '#FFD54F';
            ctx.lineWidth = 4;
            roundRect(ctx, b.x-2, b.y-2, b.w+4, b.h+4, 14);
            ctx.stroke();
            ctx.restore();
        }
    }

    function drawStackBlock(b) {
        // draw main rounded body with an integrated top-notch (avoid destination-out)
        const r = 10;
        const notchHeight = 14;
        const notchWidth = 44;
        const nx = b.x + Math.max(24, Math.round((b.w - notchWidth)/2));

        // shadow (simple rounded rect shadow)
        ctx.fillStyle = 'rgba(0,0,0,0.12)';
        roundRect(ctx, b.x+3, b.y+6, b.w, b.h, r);
        ctx.fill();

        // body path with top notch included
        ctx.beginPath();
        // start at top-left corner (after corner radius)
        ctx.moveTo(b.x + r, b.y);
        // top edge until notch start
        if (nx > b.x + r) ctx.lineTo(nx, b.y);
        // notch curve down and up
        ctx.quadraticCurveTo(nx + notchWidth/2, b.y + notchHeight, nx + notchWidth, b.y);
        // continue top edge to top-right corner
        ctx.lineTo(b.x + b.w - r, b.y);
        ctx.quadraticCurveTo(b.x + b.w, b.y, b.x + b.w, b.y + r);
        // right edge
        ctx.lineTo(b.x + b.w, b.y + b.h - r);
        ctx.quadraticCurveTo(b.x + b.w, b.y + b.h, b.x + b.w - r, b.y + b.h);
        // bottom edge
        ctx.lineTo(b.x + r, b.y + b.h);
        ctx.quadraticCurveTo(b.x, b.y + b.h, b.x, b.y + b.h - r);
        // left edge
        ctx.lineTo(b.x, b.y + r);
        ctx.quadraticCurveTo(b.x, b.y, b.x + r, b.y);
        ctx.closePath();

        ctx.fillStyle = b.color;
        ctx.fill();

        // draw bottom tab (protrusion) on top of body so it overlaps children
        drawBottomTab(b.x, b.y, b.w, b.h, 18);

        // text
        ctx.fillStyle = b.textColor;
        ctx.font = 'bold 15px Cascadia Code, monospace';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        ctx.fillText(b.text, b.x + 16, b.y + b.h/2);

        // highlight if executing
        if (typeof executingId !== 'undefined' && executingId === b.id) {
            ctx.save();
            ctx.strokeStyle = '#FFD54F';
            ctx.lineWidth = 4;
            roundRect(ctx, b.x-2, b.y-2, b.w+4, b.h+4, 12);
            ctx.stroke();
            ctx.restore();
        }
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

    function drawTopNotch(x, y, w, notchHeight) {
        // notch centered top
        const nw = 44; // notch width
        const nx = x + Math.max(24, (w - nw)/2);
        ctx.save();
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        ctx.moveTo(nx, y);
        ctx.quadraticCurveTo(nx + nw/2, y + notchHeight, nx + nw, y);
        ctx.lineTo(nx, y);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }

    function drawBottomTab(x, y, w, h, tabWidth) {
        // Draw a smooth tab protrusion centered along the bottom edge
        const tw = 44;
        const tx = x + Math.max(24, Math.round((w - tw)/2));
        const ty = y + h - 2; // start slightly overlapping
        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(tx + tw, ty);
        ctx.quadraticCurveTo(tx + tw/2, ty + tabWidth, tx, ty);
        ctx.closePath();
        ctx.fill();
    }

    // allow editing numeric fields inside block text on double-click
    canvas.addEventListener('dblclick', (e) => {
        const p = toLocal(e);
        const b = hitTest(p.x, p.y);
        if (!b || b.type === 'hat' || b.type === 'stopButton' || b.type === 'greenFlag') return;
        // find first number in text
        const m = b.text.match(/(-?\d+)/);
        if (m) {
            const current = m[1];
            const input = prompt('Editar valor do bloco (número):', current);
            if (input === null) return;
            const num = Number(input);
            if (Number.isNaN(num)) return alert('Valor inválido');
            // replace first occurrence of number with new value
            b.text = b.text.replace(/(-?\d+)/, String(num));
            // if this is a set or change, apply immediately to variables display when changed manually?
            if (/^set\s+\w+/i.test(b.text)) {
                // no immediate execution, just update text
            }
            renderVars();
            draw();
        }
    });

    function drawStopButton() {
        // draw small red octagon at top-right corner of canvas
        const size = 32;
        const padding = 14;
        const cx = canvas.clientWidth - padding - size/2;
        const cy = padding + size/2;
        const s = size/2;
        ctx.save();
        ctx.beginPath();
        // draw octagon
        const ratio = 0.3;
        for (let i = 0; i < 8; i++) {
            const ang = (Math.PI*2/8)*i - Math.PI/8;
            const r = s;
            const px = cx + Math.cos(ang) * r;
            const py = cy + Math.sin(ang) * r;
            if (i===0) ctx.moveTo(px,py); else ctx.lineTo(px,py);
        }
        ctx.closePath();
        ctx.fillStyle = '#EF5350';
        ctx.fill();
        // small white square inside
        ctx.fillStyle = '#fff';
        ctx.fillRect(cx - 6, cy - 6, 12, 12);
        ctx.restore();
        // return bounding box for hit testing
        return {x: cx - s, y: cy - s, w: s*2, h: s*2};
    }

    function drawGlobalGreenFlag() {
        // draw a small green flag button near top-right (left of stop button)
        const size = 32;
        const padding = 14;
        const gap = 10;
        const stopSize = 32;
        const cx = canvas.clientWidth - padding - stopSize - gap - size/2 - 2;
        const cy = padding + size/2;
        // pole
        ctx.save();
        ctx.strokeStyle = '#2E7D32';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(cx - 6, cy + 10);
        ctx.lineTo(cx - 6, cy - 10);
        ctx.stroke();
        // flag
        ctx.fillStyle = '#4CAF50';
        ctx.beginPath();
        ctx.moveTo(cx - 6, cy - 10);
        ctx.lineTo(cx + 10, cy - 4);
        ctx.lineTo(cx - 6, cy + 2);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
        return { x: cx - size/2, y: cy - size/2, w: size, h: size };
    }

    function draw() {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        // background
        ctx.fillStyle = '#f9fafb';
        ctx.fillRect(0,0,canvas.clientWidth, canvas.clientHeight);

        // ensure draw order: children first, parents after so notches reveal connected tabs
        reorderDrawOrder();
        // draw blocks in order
        blocks.forEach(b => {
            if (b.type === 'hat') drawHatBlock(b);
            else drawStackBlock(b);
        });

        // draw global green flag and stop button and store their bboxes
        globalFlagBox = drawGlobalGreenFlag();
        stopBox = drawStopButton();
    }

    let globalFlagBox = null;

    function hitTest(mx, my) {
        // hit test top-down
        for (let i = blocks.length -1; i >= 0; i--) {
            const b = blocks[i];
            if (mx >= b.x && mx <= b.x + b.w && my >= b.y && my <= b.y + b.h) return b;
        }
        // check stop button
        if (stopBox && mx >= stopBox.x && mx <= stopBox.x + stopBox.w && my >= stopBox.y && my <= stopBox.y + stopBox.h) return { type: 'stopButton' };
        if (globalFlagBox && mx >= globalFlagBox.x && mx <= globalFlagBox.x + globalFlagBox.w && my >= globalFlagBox.y && my <= globalFlagBox.y + globalFlagBox.h) return { type: 'greenFlag' };
        return null;
    }

    // Reorder blocks array so that if A is parent of B, A is after B (drawn later)
    function reorderDrawOrder() {
        let changed = true;
        while (changed) {
            changed = false;
            for (let i = 0; i < blocks.length; i++) {
                const b = blocks[i];
                if (b.child) {
                    const childIndex = blocks.findIndex(x => x.id === b.child);
                    if (childIndex !== -1 && childIndex > -1 && i < childIndex) {
                        // move parent after child
                        blocks.splice(i,1);
                        const insertAt = blocks.findIndex(x => x.id === b.child) + 1;
                        blocks.splice(insertAt, 0, b);
                        changed = true;
                        break;
                    }
                }
            }
        }
    }

    // Variables display and cat control hookup
    const variables = { pontos: 0 };
    const varsEl = document.getElementById('vars-terminal');
    function renderVars() {
        if (!varsEl) return;
        varsEl.textContent = Object.entries(variables).map(([k,v]) => `${k}: ${v}`).join('\n');
    }
    renderVars();

    // Cat controls
    const catEl = document.querySelector('.scratch-cat');
    const catState = { x: 0, y: 0, angle: 0 };
    function applyCatTransform() {
        if (!catEl) return;
        catEl.style.transform = `translate(${catState.x}px, ${catState.y}px) rotate(${catState.angle}deg)`;
    }
    applyCatTransform();

    function moveCat(steps) {
        // simple move to the right by default; could be improved to use angle
        catState.x += Number(steps) || 0;
        applyCatTransform();
    }
    function rotateCat(deg) {
        catState.angle += Number(deg) || 0;
        applyCatTransform();
    }

    // Execute a block action by parsing its text (very simple parser for demo)
    function executeBlockAction(b) {
        if (!b || !b.text) return;
        const t = b.text.trim();
        const mSet = t.match(/^set\s+(\w+)\s+to\s+(-?\d+)$/i);
        const mChange = t.match(/^change\s+(\w+)\s+by\s+(-?\d+)$/i);
        const mMove = t.match(/^move\s+(-?\d+)\s+steps/i);
        const mRotate = t.match(/^rotate\s+(-?\d+)\s*(deg|°|degrees)?/i);
        const mSay = t.match(/^say\s+\"(.+)\"/i);
        if (mSet) {
            const key = mSet[1];
            variables[key] = Number(mSet[2]);
            renderVars();
        } else if (mChange) {
            const key = mChange[1];
            variables[key] = (variables[key] || 0) + Number(mChange[2]);
            renderVars();
        } else if (mMove) {
            // move using current cat angle for direction
            const steps = Number(mMove[1]);
            const ang = (catState.angle || 0) * Math.PI / 180;
            const dx = Math.round(Math.cos(ang) * steps);
            const dy = Math.round(Math.sin(ang) * steps);
            catState.x += dx;
            catState.y += dy;
            applyCatTransform();
        } else if (mRotate) {
            const deg = Number(mRotate[1]);
            rotateCat(deg);
        } else if (mSay) {
            showSpeech(mSay[1]);
        }
    }

    // Speech bubble under cat
    let speechTimeout = null;
    function showSpeech(text) {
        const id = 'scratch-speech';
        let el = document.getElementById(id);
        if (!el) {
            el = document.createElement('div');
            el.id = id;
            el.style.position = 'absolute';
            el.style.pointerEvents = 'none';
            el.style.background = 'white';
            el.style.padding = '8px 10px';
            el.style.borderRadius = '12px';
            el.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
            el.style.fontFamily = 'Cascadia Code, monospace';
            el.style.fontWeight = '700';
            el.style.fontSize = '14px';
            document.body.appendChild(el);
        }
        // position near cat
        const rect = catEl ? catEl.getBoundingClientRect() : {left: 0, top: 0, width: 0};
        el.textContent = text;
        el.style.left = (rect.left + rect.width/2) + 'px';
        el.style.top = (rect.top - 36) + 'px';
        el.style.transform = 'translateX(-50%)';
        if (speechTimeout) clearTimeout(speechTimeout);
        speechTimeout = setTimeout(()=>{ if (el) el.remove(); }, 2500);
    }

    function toLocal(e) {
        const rect = canvas.getBoundingClientRect();
        return { x: (e.clientX - rect.left), y: (e.clientY - rect.top) };
    }

    let stopBox = null;
    let runQueue = [];
    let runHandle = null;

    // Execution state
    let executingSeq = null;
    let execIndex = 0;
    let execTimer = null;
    let executingId = null;

    function runSequenceFromHat() {
        if (execTimer) { clearTimeout(execTimer); execTimer = null; }
        const hatBlock = blocks.find(b => b.type === 'hat');
        const first = hatBlock && hatBlock.child ? blocks.find(b=>b.id===hatBlock.child) : null;
        if (!first) return;
        const seq = [];
        let cur = first;
        const seen = new Set();
        while (cur && !seen.has(cur.id)) {
            seq.push(cur);
            seen.add(cur.id);
            cur = cur.child ? blocks.find(b=>b.id===cur.child) : null;
        }
        executingSeq = seq;
        execIndex = 0;
        executingId = executingSeq.length ? executingSeq[0].id : null;
        // execute first immediately
        if (executingId) executeBlockAction(executingSeq[0]);
        draw();
        function step() {
            execIndex++;
            if (execIndex >= executingSeq.length) {
                executingSeq = null; executingId = null; execTimer = null; draw(); return;
            }
            executingId = executingSeq[execIndex].id;
            // execute current
            executeBlockAction(executingSeq[execIndex]);
            draw();
            execTimer = setTimeout(step, 700);
        }
        execTimer = setTimeout(step, 700);
    }

    canvas.addEventListener('mousedown', (e) => {
        const p = toLocal(e);
        const h = hitTest(p.x, p.y);
        if (!h) return;
        if (h.type === 'stopButton') {
            // stop any running sequence
            if (execTimer) { clearTimeout(execTimer); execTimer = null; executingSeq = null; executingId = null; draw(); }
            return;
        }
        if (h.type === 'greenFlag') {
            runSequenceFromHat();
            return;
        }
        // if clicked on hat area itself, also allow starting by clicking small flag drawn on hat
        if (h.type === 'hat') {
            const relX = p.x - h.x;
            const relY = p.y - h.y;
            if (relX >= 8 && relX <= 48 && relY >= 8 && relY <= 48) { runSequenceFromHat(); return; }
        }

        // otherwise start dragging block
        dragging = h;
        offset.x = p.x - h.x;
        offset.y = p.y - h.y;
        // bring to front
        const idx = blocks.indexOf(h);
        if (idx >=0) { blocks.splice(idx, 1); blocks.push(h); }
        draw();
    });

    window.addEventListener('mousemove', (e) => {
        if (!dragging) return;
        const p = toLocal(e);
        dragging.x = Math.max(6, Math.min(p.x - offset.x, canvas.clientWidth - dragging.w - 6));
        dragging.y = Math.max(6, Math.min(p.y - offset.y, canvas.clientHeight - dragging.h - 6));
        draw();
    });

    window.addEventListener('mouseup', (e) => {
        if (!dragging) return;
        // snapping: if near bottom of another block and types match, snap
        const snapThreshold = 18;
        let target = null;
        for (let b of blocks) {
            if (b===dragging) continue;
            // candidate when dragging top is near bottom of b and horizontally overlaps
            const dx = Math.abs((dragging.x + dragging.w/2) - (b.x + b.w/2));
            const dy = Math.abs((dragging.y) - (b.y + b.h));
            if (dy < snapThreshold && dx < (b.w * 0.6)) { target = b; break; }
        }
        if (target) {
            // determine visual column top so snapped block appears under the first/top block of that column
            let columnTop = target;
            while (columnTop.parent) {
                const p = blocks.find(b=>b.id===columnTop.parent);
                if (!p) break;
                columnTop = p;
            }
            // compute notch/tab sizes used in drawing
            const notchHeight = 14; // same value used when drawing top notch
            const tabHeight = 18;   // same value used when drawing bottom tab
            // center-align under columnTop and place so the child's top notch covers the target's bottom tab
            const desiredX = columnTop.x + Math.max(6, Math.round((columnTop.w - dragging.w)/2));
            // place child so that its top is slightly above target bottom so the notch (cutout) covers the tab
            const desiredY = target.y + target.h - Math.round(notchHeight * 0.7);
            dragging.x = desiredX;
            dragging.y = desiredY;

            // detach from previous parent
            if (dragging.parent) {
                const prev = blocks.find(b=>b.id===dragging.parent);
                if (prev && prev.child === dragging.id) prev.child = null;
            }

            // link logically to the target that the user dropped onto (so sequence follows target)
            const oldChildId = target.child || null;
            target.child = dragging.id;
            dragging.parent = target.id;
            if (oldChildId) {
                dragging.child = oldChildId;
                const oc = blocks.find(b=>b.id===oldChildId);
                if (oc) oc.parent = dragging.id;
            }
        } else {
            // remove parent if any
            if (dragging.parent) {
                const p = blocks.find(b=>b.id===dragging.parent);
                if (p && p.child === dragging.id) p.child = null;
                dragging.parent = null;
            }
        }
        dragging = null;
        draw();
    });

    window.addEventListener('resize', resize);
    resize();

    // --- Wire up DOM controls for cat and variables ---
    // rotate controls
    const rotInput = document.getElementById('cat-rotate-input');
    const rotLeftBtn = document.getElementById('cat-rotate-left');
    const rotRightBtn = document.getElementById('cat-rotate-right');
    const moveInput = document.getElementById('cat-move-input');
    const moveLeftBtn = document.getElementById('cat-move-left');
    const moveRightBtn = document.getElementById('cat-move-right');
    const moveUpBtn = document.getElementById('cat-move-up');
    const moveDownBtn = document.getElementById('cat-move-down');
    const resetBtn = document.getElementById('cat-reset');

    if (rotLeftBtn) rotLeftBtn.addEventListener('click', ()=>{ rotateCat(-Number(rotInput.value || 15)); });
    if (rotRightBtn) rotRightBtn.addEventListener('click', ()=>{ rotateCat(Number(rotInput.value || 15)); });
    if (moveLeftBtn) moveLeftBtn.addEventListener('click', ()=>{ catState.x -= Number(moveInput.value || 20); applyCatTransform(); });
    if (moveRightBtn) moveRightBtn.addEventListener('click', ()=>{ catState.x += Number(moveInput.value || 20); applyCatTransform(); });
    if (moveUpBtn) moveUpBtn.addEventListener('click', ()=>{ catState.y -= Number(moveInput.value || 20); applyCatTransform(); });
    if (moveDownBtn) moveDownBtn.addEventListener('click', ()=>{ catState.y += Number(moveInput.value || 20); applyCatTransform(); });
    if (resetBtn) resetBtn.addEventListener('click', ()=>{ catState.x = 0; catState.y = 0; catState.angle = 0; applyCatTransform(); });

    // allow clicking on vars terminal to reset variable for demo
    if (varsEl) {
        varsEl.addEventListener('click', ()=>{
            variables.pontos = 0; renderVars();
        });
    }
})();
