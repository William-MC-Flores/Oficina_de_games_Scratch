// Menu hamburger toggle para celular
const hamburgerBtn = document.getElementById('hamburger-menu');
const navMenu = document.getElementById('nav-menu');
const header = document.querySelector('header');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('active');
        header.classList.toggle('mobile-menu-open');
        navMenu.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburgerBtn.classList.remove('active');
            header.classList.remove('mobile-menu-open');
            navMenu.classList.remove('active');
        });
    });

    // Fechar menu ao clicar fora (em telas pequenas)
    document.addEventListener('click', (e) => {
        const isMobile = window.innerWidth <= 480;
        if (isMobile && header.classList.contains('mobile-menu-open')) {
            if (!header.contains(e.target) && !hamburgerBtn.contains(e.target)) {
                hamburgerBtn.classList.remove('active');
                header.classList.remove('mobile-menu-open');
                navMenu.classList.remove('active');
            }
        }
    });
}

// Efeito de clique nos botões
document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("mousedown", () => {
        btn.style.transform = "scale(0.95)";
    });

    btn.addEventListener("mouseup", () => {
        btn.style.transform = "scale(1)";
    });
});

// Marcar link ativo no header baseado na página atual
function atualizarLinkAtivo() {
    const paginaAtual = window.location.pathname.split('/').pop() || 'index.html';
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === paginaAtual) {
            link.classList.add('active');
        }
    });
}

// Chamar ao carregar a página
atualizarLinkAtivo();

// Scroll suave para links internos
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

// Animação ao entrar na seção
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

// Observar cards de cursos
document.querySelectorAll('.curso-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Observar boxes de recursos
document.querySelectorAll('.recurso-box').forEach(box => {
    box.style.opacity = '0';
    box.style.transform = 'translateY(20px)';
    box.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(box);
});

// Observar cards de depoimentos
document.querySelectorAll('.depoimento-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Observar boxes de estatísticas
document.querySelectorAll('.stat-box').forEach(box => {
    box.style.opacity = '0';
    box.style.transform = 'translateY(20px)';
    box.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(box);
});

// Observar items de FAQ
document.querySelectorAll('.faq-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
});

// Função para rolar ao topo
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Mostrar/esconder botão "Voltar ao Topo"
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

// Logs de clique em CTAs
document.querySelectorAll('.cta, .cta-big, .btn-curso').forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('🎮 Um novo jogador está chegando!');
    });
});

// Formulário de contato
const formularioContato = document.getElementById('formulario-contato');
if (formularioContato) {
    formularioContato.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Pegar valores
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const assunto = document.getElementById('assunto').value;
        const mensagem = document.getElementById('mensagem').value;
        
        // Aqui você pode enviar para um servidor
        console.log('Formulário enviado:', { nome, email, assunto, mensagem });
        
        // Mostrar mensagem de sucesso
        alert('Obrigado ' + nome + '! Seu mensagem foi recebida. Responderemos em breve!');
        
        // Limpar formulário
        formularioContato.reset();
    });
}
