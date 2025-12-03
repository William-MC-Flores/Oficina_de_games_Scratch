// Menu Hamburger Mobile
// Controlador do menu de navegação mobile que aparece/desaparece ao clicar no botão hamburger

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!hamburgerBtn) return; // Se não existir hamburger, sai

    // Toggle do menu hamburger
    hamburgerBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        hamburgerBtn.classList.toggle('active');
        header.classList.toggle('mobile-menu-open');
        navMenu.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link de navegação
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburgerBtn.classList.remove('active');
            header.classList.remove('mobile-menu-open');
            navMenu.classList.remove('active');
        });
    });

    // Fechar menu ao clicar fora (apenas em mobile)
    document.addEventListener('click', function(e) {
        const isMobile = window.innerWidth <= 480;
        
        if (isMobile && header.classList.contains('mobile-menu-open')) {
            // Se clicou fora do header e fora do hamburger, fecha o menu
            if (!header.contains(e.target) && !hamburgerBtn.contains(e.target)) {
                hamburgerBtn.classList.remove('active');
                header.classList.remove('mobile-menu-open');
                navMenu.classList.remove('active');
            }
        }
    });

    // Fechar menu ao redimensionar a janela (quando voltar para desktop)
    window.addEventListener('resize', function() {
        if (window.innerWidth > 480) {
            hamburgerBtn.classList.remove('active');
            header.classList.remove('mobile-menu-open');
            navMenu.classList.remove('active');
        }
    });
});
