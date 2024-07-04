new Vue({
  el: "#app",
  data: {
    // Estado del menú móvil
    mobileMenuOpen: false,
    // Desplazamiento vertical de la página
    offsetY: 0,
    // Texto para el efecto de máquina de escribir
    typewriterText: "",
    // Controla la visibilidad del contenido
    showContent: false,
    // Texto completo para el efecto de máquina de escribir
    fullText: "Bienvenido a Corporación El Obrero",
    // Array de objetos con información de las tiendas
    tiendas: [
      {
        nombre: "El Obrero",
        imagen: "img/tienda-el-obrero.png",
        descripcion:
          "Nuestra ferretería fundadora y pionera del negocio ferretero en Jocotán. Encontrarás un surtido completo de materiales, herramientas y artículos diversos para el hogar y proyectos pequeños.",
        link: "tienda-el-obrero.html",
        whatsapp: "https://wa.me/50230446809",
      },
      {
        nombre: "Mega Obrero",
        imagen: "img/tienda-mega-obrero.png",
        descripcion:
          "En Mega Obrero nos mantenemos fieles a nuestro compromiso de brindar productos ferreteros de la más alta calidad a precios realmente accesibles. Contamos con un servicio de fletes para entregarte los materiales directamente en la obra.",
        link: "tienda-mega-obrero.html",
        whatsapp: "https://wa.me/50230210754",
      },
    ],
    // Array de objetos con información de los servicios
    servicios: [
      {
          titulo: "Servicio de Fletes",
          icono: "fas fa-truck",
          descripcion: "Ofrecemos un servicio de fletes para entregarte los materiales directamente en la obra.",
          detalle: "Contamos con vehículos preparados para transportar todo tipo de materiales de construcción de manera segura y eficiente.",
          expandido: false
      },
      {
          titulo: "Herramientas Profesionales",
          icono: "fas fa-tools",
          descripcion: "Contamos con una amplia selección de herramientas profesionales de las mejores marcas.",
          detalle: "Nuestro equipo te ayudará a elegir las herramientas adecuadas para tus proyectos y necesidades específicas.",
          expandido: false
      },
      {
          titulo: "Artículos para el Hogar",
          icono: "fas fa-home",
          descripcion: "Encuentra una gran variedad de artículos para el hogar y proyectos de mejora.",
          detalle: "Desde accesorios de baño hasta decoración y muebles, tenemos todo lo que necesitas para hacer de tu hogar un lugar acogedor.",
          expandido: false
      },
      {
          titulo: "Materiales de Construcción",
          icono: "fa-solid fa-person-digging",
          descripcion: "Ofrecemos una amplia gama de materiales de construcción de alta calidad.",
          detalle: "Desde cemento y block hasta las mejores herramientas de construcción, tenemos todo lo que necesitas para tus proyectos de construcción y remodelación.",
          expandido: false
      }
    ],
    // Array de objetos con los valores de la empresa
    companyValues: [
      {
          title: "Calidad",
          icon: "fas fa-award",
          description: "Ofrecemos productos de la más alta calidad para nuestros clientes.",
          additionalInfo: "Trabajamos con las mejores marcas y materiales."
      },
      {
          title: "Servicio",
          icon: "fas fa-handshake",
          description: "Nos comprometemos a brindar un servicio excepcional en cada interacción con nuestros clientes.",
          additionalInfo: "Nuestro equipo estrá a su diposición para ofrecerle asesoramiento."
      },
      {
          title: "Integridad",
          icon: "fas fa-shield-alt",
          description: "Actuamos con honestidad y transparencia en todo lo que hacemos.",
          additionalInfo: "La confianza de nuestros clientes es el fundamento de nuestro éxito."
      }
    ],
    // Array de objetos con información de las marcas
    marcas: [
      { nombre: "cementos-progreso", imagen: "img/marcas/cementos-progreso.png" },
      { nombre: "rotoplas", imagen: "img/marcas/rotoplas-logo.webp" },
      { nombre: "tolsen", imagen: "img/marcas/tolsen-logo.jpg" },
      { nombre: "Stanley", imagen: "img/marcas/stanley-logo.png" },
      { nombre: "ingco", imagen: "img/marcas/ingco-logo.svg" },
      { nombre: "Truper", imagen: "img/marcas/truper-logo.png" },
      { nombre: "Makita", imagen: "img/marcas/makita-logo.webp" },
      { nombre: "toolcraft", imagen: "img/marcas/toolcraft.svg" },
      { nombre: "Powertech", imagen: "img/marcas/Powertech.png" },
      { nombre: "tlc", imagen: "img/marcas/tcl-logo.svg" },
      { nombre: "eagle", imagen: "img/marcas/eagle-logo.svg" },
      { nombre: "bellota", imagen: "img/marcas/bellota-logo.svg" },
      { nombre: "imacasa", imagen: "img/marcas/imacasa-logo.png" },
      { nombre: "gerfor", imagen: "img/marcas/gerfor-logo.png" },
      

    ],
    // Array de objetos con información de redes sociales
    redesSociales: [
      {
        nombre: "El Obrero",
        redes: [
          {
            nombre: "Facebook",
            icono: "fab fa-facebook",
            link: "https://www.facebook.com/profile.php?id=61558228610765",
          },
          {
            nombre: "Instagram",
            icono: "fab fa-instagram",
            link: "https://www.instagram.com/obrerojocotan",
          },
        ],
      },
      {
        nombre: "Mega Obrero",
        redes: [
          {
            nombre: "Facebook",
            icono: "fab fa-facebook",
            link: "https://www.facebook.com/ferreteriamegaobrero3",
          },
          {
            nombre: "Instagram",
            icono: "fab fa-instagram",
            link: "https://www.instagram.com/megaobrero",
          },
        ],
      },
    ],
  },
  methods: {
    // Método para alternar la visibilidad del menú móvil
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    // Método para manejar el evento de desplazamiento
    handleScroll() {
      this.offsetY = window.pageYOffset;
    },
    // Método para crear el efecto de máquina de escribir
    typewriterEffect() {
      let i = 0;
      const interval = setInterval(() => {
        if (i < this.fullText.length) {
          this.typewriterText += this.fullText.charAt(i);
          i++;
        } else {
          clearInterval(interval);
        }
      }, 100);
    },
    // Método para expandir y contraer el detalle de un servicio
    expandServicio(index) {
      this.servicios[index].expandido = true;
    },
    contraerServicio(index) {
        this.servicios[index].expandido = false;
    },
  },
  // Ciclo de vida: cuando el componente se monta en el DOM
  mounted() {
    // Agregar evento de scroll
    window.addEventListener("scroll", this.handleScroll);
    // Iniciar efecto de máquina de escribir
    this.typewriterEffect();
    // Mostrar contenido después de 1 segundo
    setTimeout(() => {
      this.showContent = true;
    }, 1000);
  },
  // Ciclo de vida: antes de que el componente se destruya
  beforeDestroy() {
    // Remover evento de scroll para evitar memory leaks
    window.removeEventListener("scroll", this.handleScroll);
  },
});
