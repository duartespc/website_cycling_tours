/**
* Template Name: Regna
* Updated: Jan 09 2024 with Bootstrap v5.3.2
* Template URL: https://bootstrapmade.com/regna-bootstrap-onepage-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

const translations = {
  "pt": {
    "about": "Sobre Nós",
    "gallery": "Galeria",
    "team": "Equipa",
    "services": "Serviços",
    "contact": "Contacto",
    "checkUs": "Venha conhecer-nos!",
    "bookNow": "Reserve já!",
    "aboutUsPart1": "A Chain Cycling Tours nasceu da paixão comum de dois amigos.",
    "aboutUsPart2": "Pode perguntar-se por que escolhemos 'Chain Cycling Tours'. Bem, para nós a parte chave do nome é a 'Chain'. Na linguagem do ciclismo, todos sabemos o que significa, mas na linguagem comum também pode significar um laço, e é precisamente isso que procuramos criar.",
    "aboutUsPart3": "O nosso objetivo é partilhar experiências e criar laços com pessoas que partilhem a mesma paixão pelo ciclismo, como nós, e ao mesmo tempo mostrar um pouco do nosso belo Portugal.",
    "aboutUsPart4": "Está pronto para vir e mover a sua corrente connosco?",
    "galleryDescription": "Veja algumas das coisas que pode descobrir durante os nossos passeios!",
    "penaPalace": "Palácio da Pena",
    "customTour": "Passeio Personalizado",
    "bikeRental": "Aluguer de Bicicleta de Estrada",
    "helmetRental": "Aluguer de Capacete",
    "meetOurTeam": "Conheça a Nossa Equipa!",
    "founderTopGuide": "Fundador & Guia Principal",
    "descriptionDavidPart1": "Ciclista e Entusiasta de Granfondos",
    "descriptionDavidPart2": "Adora desporto, mas foi no ciclismo que encontrou a sua verdadeira paixão. Começou a pedalar em 2005, mas foi apenas após 2015 que começou a participar em alguns Fondos e a andar de bicicleta de uma forma mais séria.",
    "descriptionDavidPart3": "David pedalou um pouco por toda a Espanha e enfrentou algumas das subidas mais icónicas nos Pirenéus franceses, incluindo as lendárias subidas ao Plateau de Beille, Col de Peyresourde, Col d'Aspin, Tourmalet, Hourquette d'Ancizan, Hautacam e Col de Luz-Ardiden — todas elas são subidas regulares no Tour de France.",
    "descriptionNunoPart1": "Ciclista e Corredor Apaixonado. Entusiasta de Mediofondos.",
    "descriptionNunoPart2": "Conquistou algumas das subidas mais desafiantes no mundo do ciclismo, incluindo o lendário Stelvio, Passo Umbrail e Passo di Gavia em Itália—um testemunho tanto da sua resistência como do seu amor pelas rotas mais cénicas e exigentes do ciclismo.",
    "descriptionNunoPart3": "Para além das suas atividades no ciclismo, é um maratonista experiente, tendo completado as Seis Maratonas Mundiais e várias maratonas em menos de 3 horas, provando a sua versatilidade e o compromisso em ultrapassar os limites das suas capacidades atléticas.",
    "servicesDescription": "Veja as nossas ofertas!",
    "starting15": "A partir de 15€",
    "starting40": "A partir de 40€",
    "starting150": "A partir de 150€",
    "starting200": "A partir de 200€",
    "starting590": "A partir de 590€",
    "starting1390": "A partir de 1390€",
    "tourSintraDescription": "Um destino turístico de grande importância, famoso pela sua beleza pitoresca. O município tem vários palácios históricos, castelos, praias cénicas, parques e jardins.",
    "tourCabodaRocaDescription": "O ponto mais ocidental do continente europeu e de Portugal. Inclui um farol que começou a funcionar em 1772.",
    "tourArrabidaDescription": "Onde montanha e oceano se encontram perto de Setúbal.",
    "tourEspichelDescription": "",
    "tourEN222Description": "De Este a Oeste. Almedra - Vila Nova de Gaia através da icónica Rota da EN 222 (estrada nacional 222)",
    "tourEN2Description": "De Norte a Sul. Chaves a Faro numa viagem de 6 a 10 dias por Portugal de Norte a Sul pela icónica Rota da EN2 (Estrada Nacional 2)",
    "customTourDescription": "",
    "bikeRentalDescription": "",
    "helmetRentalDescription": "",
    "emailSent": "A sua mensagem foi enviada. Obrigado!",
    "sendEmailButton": "Enviar Mensagem",
    "customTour24h": "Tour Personalizado - 24h",
    "priceDepending": "Preço variável",
    "bikeRental24h": "Aluguer Bicicleta - 24h",
    "helmetRental24h": "Alugar Capacete - 24h",
    "loading": "A carregar",
    "namePlaceholder": "Nome",
    "emailPlaceholder": "Email",
    "subjectPlaceholder": "Assunto",
    "messagePlaceholder": "Mensagem",
    "showMore": "Ver Mais!"
  },
  "en": {
    "about": "About Us",
    "gallery": "Gallery",
    "team": "Team",
    "services": "Services",
    "contact": "Contact",
    "checkUs": "Check us out!",
    "bookNow": "Book Now!",
    "aboutUsPart1": "Chain Cycling Tours was born from a common passion of two friends.",
    "aboutUsPart2": "You may ask why we choose “Chain Cycling Tours”. Well, for us the key part of the name is the “Chain”. In cycling language, we all know what it means but in common language can also mean a bond and that's precisely what our end game is.",
    "aboutUsPart3": "Our goal is to share experiences and create bonds with people that have same passion for cycling like we do and at the same time show some of our beautiful Portugal.",
    "aboutUsPart4": "Are you ready to come and move your chain with us?",
    "galleryDescription": "Check out some of the things you can see you during our tours!",
    "penaPalace": "Pena Palace",
    "customTour": "Custom Tour",
    "bikeRental": "Road Bike Rental",
    "helmetRental": "Helmet Rental",
    "meetOurTeam": "Meet our Team!",
    "founderTopGuide": "Founder & Top Guide",
    "descriptionDavidPart1": "Cyclist and Granfondo Enthusiast",
    "descriptionDavidPart2": "Loves sports but was in cycling that he found his true passion. Started cycling in 2005 but was only after 2015 that he started doing some Fondos and riding his bike in a more serious way.",
    "descriptionDavidPart3": "David has pedaled across Spain and tackled some of the most iconic climbs in the French Pyrenees, including the legendary ascents of Plateau de Beille, Col de Peyresourde, Col d'Aspin, Tourmalet, Hourquette d'Ancizan, Hautacam, and Col de Luz-Ardiden — all of which are regular features in the Tour de France.",
    "descriptionNunoPart1": "Avid Cyclist and Runner.",
    "descriptionNunoPart2": "Mediofondo Enthusiast.",
    "descriptionNunoPart3": "Six World Major Marathons Finisher and Several Sub-3h Marathoner.",
    "servicesDescription": "Check out our offers!",
    "starting15": "Starting from 15€",
    "starting40": "Starting from 40€",
    "starting150": "Starting from 150€",
    "starting200": "Starting from 200",
    "starting590": "Starting from 590€",
    "starting1390": "Starting from 1390€",
    "tourSintraDescription": "A major tourist destination famed for its picturesqueness, the municipality has several historical palaces, castles, scenic beaches, parks and gardens.",
    "tourCabodaRocaDescription": "The most western point in mainland Portugal and Europe. Notably, the point includes a lighthouse that started operation in 1772.",
    "tourArrabidaDescription": "Where mountain and ocean colides near Setúbal.",
    "tourEspichelDescription": "",
    "tourEN222Description": "East to West. Almedra - Vila Nova de Gaia thru the iconic route of EN 222 (national road 222)",
    "tourEN2Description": "Nort to South. Chaves to Faro on 6 to 10 days ride across Portugal from North to South thru the iconic route of EN2 (National Road 2)",
    "customTourDescription": "",
    "bikeRentalDescription": "",
    "helmetRentalDescription": "",
    "emailSent": "Your message has been sent. Thank you!",
    "sendEmailButton": "Send Message",
    "customTour24h": "Custom Tour - 24h",
    "priceDepending": "Price depending on tour",
    "bikeRental24h": "Bike Rental - 24h",
    "helmetRental24h": "Helmet Rental - 24h",
    "loading": "Loading",
    "namePlaceholder": "Your Name",
    "emailPlaceholder": "Your Email",
    "subjectPlaceholder": "Subject",
    "messagePlaceholder": "Message",
    "showMore": "Show More Pictures!"
  }
};

(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 20
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });


  /**
   * Switch Language
   */
  const switchLanguage = (lang) => {
    document.querySelectorAll('[data-key]').forEach(elem => {
      const key = elem.getAttribute('data-key');
      // Explicitly handle placeholder updates for input and textarea
      if (elem.tagName.toLowerCase() === 'input' || elem.tagName.toLowerCase() === 'textarea') {
        if (translations[lang][key]) {
          elem.placeholder = translations[lang][key];  // Use direct assignment for placeholders
        }
      } else {
        // For other elements like div, button, etc., update their text content
        elem.textContent = translations[lang][key];
      }
    });
  };

  document.getElementById('languageSwitcher').addEventListener('change', function() {
    switchLanguage(this.value);
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()