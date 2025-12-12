// scratch-canvas.js
// Desenha blocos estilo Scratch num canvas e permite arrastar itens simples.

(function(){
    const canvas = document.getElementById('scratch-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    // Ajustar para DPI
    function resize() {
        const ratio = window.devicePixelRatio || 1;
        const w = canvas.clientWidth;
        const h = canvas.clientHeight;
        canvas.width = Math.floor(w * ratio);
        canvas.height = Math.floor(h * ratio);
        canvas.style.width = w + 'px';
        canvas.style.height = h + 'px';
        ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
        draw();
    }

    // Representação simples de blocos
    const blocks = [
        { id: 1, x: 20, y: 20, w: 200, h: 44, color: '#FFCC00', text: 'definir pontos para 0' },
        { id: 2, x: 20, y: 80, w: 260, h: 44, color: '#0FBD8C', text: 'mudar pontos por 1' },
        { id: 3, x: 20, y: 140, w: 220, h: 44, color: '#9966CC', text: 'se tocando em cor? então' }
    ];

    let dragging = null;
    let offset = {x:0,y:0};

    function roundRectPath(ctx, x, y, w, h, r) {
        const path = new Path2D();
        path.moveTo(x + r, y);
        path.lineTo(x + w - r, y);
        path.quadraticCurveTo(x + w, y, x + w, y + r);
        path.lineTo(x + w, y + h - r);
        path.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
        path.lineTo(x + r, y + h);
        path.quadraticCurveTo(x, y + h, x, y + h - r);
        path.lineTo(x, y + r);
        path.quadraticCurveTo(x, y, x + r, y);
        path.closePath();
        return path;
    }

    function drawBlock(b) {
        const pad = 0;
        const r = 10;
        // sombra
        ctx.fillStyle = 'rgba(0,0,0,0.08)';
        ctx.fill(roundRectPath(ctx, b.x+3, b.y+6, b.w, b.h, r));
        // corpo
        ctx.fillStyle = b.color;
        ctx.fill(roundRectPath(ctx, b.x, b.y, b.w, b.h, r));
        // texto
        ctx.fillStyle = '#111';
        ctx.font = '700 14px Cascadia Code, monospace';
        ctx.fillText(b.text, b.x + 14, b.y + 28);
    }

    function draw() {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        // fundo leve com grade
        ctx.fillStyle = '#f7f9fc';
        ctx.fillRect(0,0,canvas.width,canvas.height);
        // desenhar blocos
        blocks.forEach(drawBlock);
    }

    function hitTest(mx,my) {
        for (let i = blocks.length -1; i >=0; i--) {
            const b = blocks[i];
            if (mx >= b.x && mx <= b.x + b.w && my >= b.y && my <= b.y + b.h) return b;
        }
        return null;
    }

    function toLocal(e) {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        return {x,y};
    }

    canvas.addEventListener('mousedown', (e)=>{
        const p = toLocal(e);
        const b = hitTest(p.x,p.y);
        if (b) {
            dragging = b;
            offset.x = p.x - b.x;
            offset.y = p.y - b.y;
            // bring to front
            const idx = blocks.indexOf(b);
            blocks.splice(idx,1);
            blocks.push(b);
            draw();
        }
    });

    window.addEventListener('mousemove', (e)=>{
        if (!dragging) return;
        const p = toLocal(e);
        dragging.x = p.x - offset.x;
        dragging.y = p.y - offset.y;
        draw();
    });

    window.addEventListener('mouseup', ()=>{ dragging = null; });

    window.addEventListener('resize', resize);
    resize();
})();
