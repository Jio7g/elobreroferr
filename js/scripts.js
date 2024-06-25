document.addEventListener('DOMContentLoaded', function() {
  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  
  function toggleNavbarScrolledClass() {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  }

  // Check the scroll position when the page is loaded
  toggleNavbarScrolledClass();

  // Listen for the scroll event
  window.addEventListener('scroll', toggleNavbarScrolledClass);

  // Inicializar Swiper para el carrusel de imágenes en la sección de Héroe
  const heroSwiper = new Swiper('.heroSwiper', {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    effect: 'fade',
    speed: 1000,
    on: {
      slideChangeTransitionStart: function () {
        const heroContent = document.querySelector('.hero-content');
        heroContent.classList.add('animate');
      },
      slideChangeTransitionEnd: function () {
        const heroContent = document.querySelector('.hero-content');
        heroContent.classList.remove('animate');
      },
    },
  });

  // Inicializar Swiper para el carrusel de productos populares
  const popularProductsSwiper = new Swiper('.popularProductsSwiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  // Inicializar Swiper para el carrusel de testimonios
  const testimonialsSwiper = new Swiper('.testimonialsSwiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  // Inicializar Swiper para el carrusel de marcas
  const brandsSwiper = new Swiper('.brandsSwiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

  // Manejo del menú desplegable móvil
  const menuBtn = document.getElementById('menu-btn');
  const closeBtn = document.getElementById('close-menu');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && closeBtn && mobileMenu) {
    menuBtn.addEventListener('click', function() {
      mobileMenu.classList.add('active');
    });

    closeBtn.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
    });
  }

  // Animación de scroll para la imagen en Tienda El Obrero
  const tiendaElObreroSection = document.getElementById('tienda-el-obrero');
  const imagenElObrero = tiendaElObreroSection?.querySelector('.grid div:first-child img');

  if (imagenElObrero) {
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      imagenElObrero.style.transform = `translateY(${scrollPosition * 0.3}px)`;
    });
  }

  // Animación de scroll para la imagen en Tienda Mega Obrero
  const tiendaMegaObreroSection = document.getElementById('tienda-mega-obrero');
  const imagenMegaObrero = tiendaMegaObreroSection?.querySelector('.grid div:first-child img');

  if (imagenMegaObrero) {
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      imagenMegaObrero.style.transform = `translateY(${scrollPosition * 0.3}px)`;
    });
  }

  // Animación de hover en los iconos de redes sociales
  const socialIcons = document.querySelectorAll('.flex.justify-center a');

  socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      icon.classList.add('animate-pulse');
    });

    icon.addEventListener('mouseleave', () => {
      icon.classList.remove('animate-pulse');
    });
  });
});