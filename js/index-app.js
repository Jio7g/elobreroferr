new Vue({
    el: '#app',
    data: {
        mobileMenuOpen: false,
        tiendas: [
            {
                nombre: "El Obrero",
                imagen: "img/tienda-el-obrero.png",
                descripcion: "Nuestra ferretería fundadora y pionera del negocio ferretero en Jocotán. Encontrarás un surtido completo de materiales, herramientas y artículos diversos para el hogar y proyectos pequeños.",
                link: "tienda-el-obrero.html",
                whatsapp: "https://wa.me/50230446809"
            },
            {
                nombre: "Mega Obrero",
                imagen: "img/tienda-mega-obrero.png",
                descripcion: "En Mega Obrero nos mantenemos fieles a nuestro compromiso de brindar productos ferreteros de la más alta calidad a precios realmente accesibles. Contamos con un servicio de fletes para entregarte los materiales directamente en la obra.",
                link: "tienda-mega-obrero.html",
                whatsapp: "https://wa.me/50230210754"
            }
        ],
        servicios: [
            {
                titulo: "Servicio de Fletes",
                icono: "fas fa-truck",
                descripcion: "Ofrecemos un servicio de fletes para entregarte los materiales directamente en la obra.",
                detalle: "Contamos con vehículos preparados para transportar todo tipo de materiales de construcción de manera segura y eficiente."
            },
            {
                titulo: "Herramientas Profesionales",
                icono: "fas fa-tools",
                descripcion: "Contamos con una amplia selección de herramientas profesionales de las mejores marcas.",
                detalle: "Nuestro equipo te ayudará a elegir las herramientas adecuadas para tus proyectos y necesidades específicas."
            },
            {
                titulo: "Artículos para el Hogar",
                icono: "fas fa-home",
                descripcion: "Encuentra una gran variedad de artículos para el hogar y proyectos de mejora.",
                detalle: "Desde accesorios de baño hasta decoración y muebles, tenemos todo lo que necesitas para hacer de tu hogar un lugar acogedor."
            },
            {
                titulo: "Materiales de Construcción",
                icono: "fa-solid fa-person-digging",
                descripcion: "Ofrecemos una amplia gama de materiales de construcción de alta calidad.",
                detalle: "Desde cemento y block hasta las mejores herramientas de construcción, tenemos todo lo que necesitas para tus proyectos de construcción y remodelación. Garantizamos productos duraderos y a precios accesibles."
            }
        ],
        companyValues: [
            { title: 'Calidad', icon: 'fas fa-award', description: 'Ofrecemos productos de la más alta calidad para nuestros clientes.' },
            { title: 'Servicio', icon: 'fas fa-handshake', description: 'Nos comprometemos a brindar un servicio excepcional en cada interacción con nuestros clientes.' },
            { title: 'Integridad', icon: 'fas fa-shield-alt', description: 'Actuamos con honestidad y transparencia en todo lo que hacemos.' }
        ],
        marcas: [
            { nombre: "Marca 1", imagen: "img/marcas/marca1.jpeg" },
            { nombre: "Powertech", imagen: "img/marcas/Powertech.png" },
            { nombre: "Stanley", imagen: "img/marcas/stanley-logo.png" },
            { nombre: "Truper", imagen: "img/marcas/truper-logo-png-2.png" },
            { nombre: "Makita", imagen: "img/marcas/makita.jpg" }
        ],
        redesSociales: [
            {
                nombre: "El Obrero",
                redes: [
                    { nombre: "Facebook", icono: "fab fa-facebook", link: "https://www.facebook.com/profile.php?id=61558228610765" },
                    { nombre: "Instagram", icono: "fab fa-instagram", link: "https://www.instagram.com/obrerojocotan" }
                ]
            },
            {
              nombre: "Mega Obrero",
              redes: [
                  { nombre: "Facebook", icono: "fab fa-facebook", link: "https://www.facebook.com/ferreteriamegaobrero3" },
                  { nombre: "Instagram", icono: "fab fa-instagram", link: "https://www.instagram.com/megaobrero" }
              ]
          }
      ]
  },
  methods: {
      toggleMobileMenu() {
          this.mobileMenuOpen = !this.mobileMenuOpen;
      }
  },
});