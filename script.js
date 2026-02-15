document.addEventListener('DOMContentLoaded', function() {
    // Получаем элементы
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.body;
    
    // Создаем оверлей
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);
    
    // Функция открытия/закрытия меню
    function toggleMenu() {
        // Переключаем классы
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        body.classList.toggle('menu-open');
        
        // Блокируем/разблокируем скролл страницы
        if (mobileMenu.classList.contains('active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }
    }
    
    // Открытие/закрытие по клику на гамбургер
    hamburger.addEventListener('click', toggleMenu);
    
    // Закрытие по клику на оверлей
    overlay.addEventListener('click', toggleMenu);
    
    // Закрытие по клику на ссылку в меню
    const menuLinks = document.querySelectorAll('.mobile-menu__link');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Если меню открыто, закрываем его
            if (mobileMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
    
    // Закрытие меню при нажатии на Esc
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && mobileMenu.classList.contains('active')) {
            toggleMenu();
        }
    });
    
    // Закрытие меню при изменении размера окна (если перешли на десктоп)
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && mobileMenu.classList.contains('active')) {
            toggleMenu();
        }
    });
});