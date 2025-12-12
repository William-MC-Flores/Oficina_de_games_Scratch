
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!hamburgerBtn) return;

    hamburgerBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        hamburgerBtn.classList.toggle('active');
        header.classList.toggle('mobile-menu-open');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburgerBtn.classList.remove('active');
            header.classList.remove('mobile-menu-open');
            navMenu.classList.remove('active');
        });
    });

    document.addEventListener('click', function(e) {
        const isMobile = window.innerWidth <= 480;
        
        if (isMobile && header.classList.contains('mobile-menu-open')) {
            if (!header.contains(e.target) && !hamburgerBtn.contains(e.target)) {
                hamburgerBtn.classList.remove('active');
                header.classList.remove('mobile-menu-open');
                navMenu.classList.remove('active');
            }
        }
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 480) {
            hamburgerBtn.classList.remove('active');
            header.classList.remove('mobile-menu-open');
            navMenu.classList.remove('active');
        }
    });
});
