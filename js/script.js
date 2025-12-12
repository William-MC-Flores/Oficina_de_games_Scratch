document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("mousedown", () => {
        btn.style.transform = "scale(0.95)";
    });

    btn.addEventListener("mouseup", () => {
        btn.style.transform = "scale(1)";
    });
});

function atualizarLinkAtivo() {
    const paginaAtual = window.location.pathname.split('/').pop() || 'index.html';
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === paginaAtual) {
            link.classList.add('active');
        }
    });
}

atualizarLinkAtivo();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.curso-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

document.querySelectorAll('.recurso-box').forEach(box => {
    box.style.opacity = '0';
    box.style.transform = 'translateY(20px)';
    box.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(box);
});

document.querySelectorAll('.depoimento-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

document.querySelectorAll('.stat-box').forEach(box => {
    box.style.opacity = '0';
    box.style.transform = 'translateY(20px)';
    box.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(box);
});

document.querySelectorAll('.faq-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        if (!document.getElementById('scrollTopBtn')) {
            const btn = document.createElement('button');
            btn.id = 'scrollTopBtn';
            btn.innerHTML = '↑';
            btn.style.cssText = `
                position: fixed;
                bottom: 30px;
                right: 30px;
                width: 50px;
                height: 50px;
                background: #FFD700;
                color: #667eea;
                border: none;
                border-radius: 50%;
                font-size: 24px;
                font-weight: 800;
                cursor: pointer;
                z-index: 99;
                transition: 0.3s;
                box-shadow: 0 10px 25px rgba(255, 215, 0, 0.4);
            `;
            btn.onclick = scrollToTop;
            btn.onmouseover = () => {
                btn.style.transform = 'scale(1.1)';
            };
            btn.onmouseout = () => {
                btn.style.transform = 'scale(1)';
            };
            document.body.appendChild(btn);
        }
    } else {
        const btn = document.getElementById('scrollTopBtn');
        if (btn) btn.remove();
    }
});

document.querySelectorAll('.cta, .cta-big, .btn-curso').forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('Um novo jogador está chegando!');
    });
});

const formularioContato = document.getElementById('formulario-contato');
if (formularioContato) {
    formularioContato.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const assunto = document.getElementById('assunto').value;
        const mensagem = document.getElementById('mensagem').value;
        
        console.log('Formulário enviado:', { nome, email, assunto, mensagem });
        
        alert('Obrigado ' + nome + '! Seu mensagem foi recebida. Responderemos em breve!');
        
        formularioContato.reset();
    });
}

function enableInteractiveTitles() {
    const headings = document.querySelectorAll('h1,h2,h3');
    headings.forEach(h => {
        if (h.dataset.interactive === '1') return;
        const words = h.textContent.trim().split(/\s+/);
        h.textContent = '';
        const wrapper = document.createElement('div');
        wrapper.style.position = 'relative';
        wrapper.style.display = 'inline-block';
        
        if (typeof window._wordIdCounter === 'undefined') window._wordIdCounter = 0;
        words.forEach((w, idx) => {
            const span = document.createElement('span');
            span.className = 'draggable-word';
            const colorClasses = ['yellow','purple','blue','orange'];
            const colorClass = colorClasses[idx % colorClasses.length];
            span.classList.add(colorClass);
            span.textContent = w;
            span.style.display = 'inline-block';
            span.style.margin = '4px 6px';
            span.style.cursor = 'default';
            span.style.fontSize = 'inherit';
            span.style.fontFamily = "'Cascadia Code', monospace";
            const id = 'w' + (++window._wordIdCounter);
            span.setAttribute('data-word-id', id);
            span.setAttribute('data-word-text', w);
            wrapper.appendChild(span);
            wrapper.appendChild(document.createTextNode(' '));
        });
        h.appendChild(wrapper);
        h.dataset.interactive = '1';
    });

    window._layoutEnabled = true;
    
    function activateLayoutMode() {
        const words = Array.from(document.querySelectorAll('.draggable-word')).map((el, idx) => {
            const rect = el.getBoundingClientRect();
            let colorClass = 'yellow';
            ['yellow','purple','blue','orange'].forEach(c => { if (el.classList.contains(c)) colorClass = c; });
            return {
                id: el.getAttribute('data-word-id'),
                text: el.getAttribute('data-word-text') || el.textContent,
                left: rect.left,
                top: rect.top,
                width: rect.width || 280,
                height: rect.height || 52,
                colorClass: colorClass
            };
        });

        if (window.LayoutCanvas) {
            window.LayoutCanvas.enable(words);
            document.querySelectorAll('.draggable-word').forEach(w => w.style.visibility = 'hidden');
        }
    }
    
    setTimeout(activateLayoutMode, 100);
}

document.addEventListener('DOMContentLoaded', () => {
    enableInteractiveTitles();
});
