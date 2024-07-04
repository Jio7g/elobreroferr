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

  // Verifique la posición de desplazamiento cuando se carga la página
  toggleNavbarScrolledClass();

  // Listen for the scroll event
  window.addEventListener('scroll', toggleNavbarScrolledClass);

  // Inicializar Swiper para el carrusel de imágenes en la sección de hero
  const heroSwiper = new Swiper('.heroSwiper', {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    effect: 'fade',
    speed: 1250,
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

  const imageList = document.querySelector(".image-list");
  const slideButtons = document.querySelectorAll(".slide-button");
  const sliderScrollbar = document.querySelector(".slider-scrollbar");
  const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

  let autoScrollInterval;
  const autoScrollSpeed = 1; // Píxeles para mover por fotograma
  const autoScrollDelay = 3000; // Milisegundos entre cambios de dirección

  // Función para iniciar el desplazamiento automático
  const startAutoScroll = () => {
      let scrollDirection = 1; // 1 para derecha, -1 para izquierda
      let currentPosition = 0;

      autoScrollInterval = setInterval(() => {
          currentPosition += autoScrollSpeed * scrollDirection;
          
          if (currentPosition >= maxScrollLeft) {
              scrollDirection = -1;
              currentPosition = maxScrollLeft;
          } else if (currentPosition <= 0) {
              scrollDirection = 1;
              currentPosition = 0;
          }

          imageList.scrollLeft = currentPosition;
          updateScrollThumbPosition();
          handleSlideButtons();
      }, 16); // ~60fps
  };

  // Función para detener el desplazamiento automático
  const stopAutoScroll = () => {
      clearInterval(autoScrollInterval);
  };

  // Iniciar el desplazamiento automático
  startAutoScroll();

  // Slide images according to the slide button clicks
  slideButtons.forEach(button => {
      button.addEventListener("click", () => {
          stopAutoScroll(); // Stop auto-scroll when user interacts
          const direction = button.id === "prev-slide" ? -1 : 1;
          const scrollAmount = imageList.clientWidth * direction;
          imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
          setTimeout(startAutoScroll, 1000); // Resume auto-scroll after 1 second
      });
  });

   // Show or hide slide buttons based on scroll position
  const handleSlideButtons = () => {
      slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
      slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
  }

  // Update scrollbar thumb position based on image scroll
  const updateScrollThumbPosition = () => {
      const scrollPosition = imageList.scrollLeft;
      const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
      scrollbarThumb.style.left = `${thumbPosition}px`;
  }

  // Call these functions when image list scrolls
  imageList.addEventListener("scroll", () => {
      updateScrollThumbPosition();
      handleSlideButtons();
  });
});