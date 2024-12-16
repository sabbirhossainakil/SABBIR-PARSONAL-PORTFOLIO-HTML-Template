// const lenis = new Lenis({
//   duration: 0.3,
//   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//   direction: "vertical",
//   gestureDirection: "vertical",
//   smooth: true,
//   mouseMultiplier: 1,
//   smoothTouch: false,
//   touchMultiplier: 2,
//   infinite: false,
// });

// get scroll value
// lenis.on("scroll", ({ scroll, limit, velocity, direction, progress }) => {
//   console.log({
//     scroll,
//     limit,
//     velocity,
//     direction,
//     progress,
//   });
// });

// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);

//
// function createScrollTrigger(triggerElement, timeline) {
//   ScrollTrigger.create({
//     trigger: triggerElement,
//     start: "top bottom",
//     onLeaveBack: () => {
//       timeline.progress(0);
//       timeline.pause();
//     },
//   });
//   ScrollTrigger.create({
//     trigger: triggerElement,
//     start: "top 80%",
//     onEnter: () => timeline.play(),
//   });
// }
/* ==========================
 NAVBAR SECTION START 
   ========================== */

const open = document.querySelector(".header-burger-menu");
const close = document.querySelector(".close");
var tl = gsap.timeline({ defaults: { duration: 1, ease: "expo.inOut" } });
open.addEventListener("click", () => {
  if (tl.reversed()) {
    tl.play();
  } else {
    tl.to("nav", { right: 0 })
      .to("nav", { height: "100vh" }, "-=.1")
      .to(
        "nav ul li a",
        { opacity: 1, pointerEvents: "all", stagger: 0.2 },
        "-=.8"
      )
      .to(".close", { opacity: 1, pointerEvents: "all" }, "-=.8")
      .to("nav h2", { opacity: 1 }, "-=1");
  }
});

close.addEventListener("click", () => {
  tl.reverse();
});
/* ==========================
 NAVBAR SECTION END 
   ========================== */
/* ==========================
 ABOUT SECTION START 
   ========================== */
/* ==========================
 ABOUT BUTTON SECTION START 
   ========================== */

const btn = document.querySelectorAll(".btn--primary");

btn.forEach(function (elem) {
  elem.addEventListener("mousemove", function (e) {
    const rect = elem.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    elem.style.setProperty("--x", `${x}px`);
    elem.style.setProperty("--y", `${y}px`);
  });
});

/* ==========================
 ABOUT BUTTON SECTION END 
   ========================== */
/* ==========================
 ABOUT COUNTER SECTION START 
   ========================== */
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");

  const startCounter = (counter) => {
    const target = parseInt(counter.textContent);
    const span = counter.querySelector("span");
    const speed = counter.dataset.speed / target;
    let count = 0;

    const updateCounter = () => {
      count++;
      counter.innerHTML = `${count} <span>${span.textContent}</span>`;
      if (count < target) {
        setTimeout(updateCounter, speed);
      }
    };

    updateCounter();
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          counter.classList.add("visible");
          startCounter(counter);
          observer.unobserve(counter);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => {
    observer.observe(counter);
  });
});

/* ==========================
 ABOUT COUNTER SECTION END 
   ========================== */
/* ==========================
 ABOUT SECTION END 
   ========================== */
/* ==========================
 TESTIMONIALS SECTION START 
   ========================== */
const testimonialsSwiper = new Swiper(".testimonials-swiper", {
  navigation: {
    nextEl: ".testimonials-button-next",
    prevEl: ".testimonials-button-prev",
  },
  pagination: {
    el: ".testimonials-pagination",
    type: "custom",
    renderCustom: function (testimonialsSwiper, current, total) {
      return `
            <div class="testimonials-pagination-current-wrapper">
            <span class="swipe-text">Swipe</span>
              <span class="testimonials-pagination-current">
                ${String(current).padStart(2, "0")}
              </span> 
              
            </div>
            
            <div class="testimonials-pagination-total-wrapper">
            <span class="swipe-separator">/</span>
            <span class="testimonials-pagination-total">
              ${String(total).padStart(2, "0")}
            </span>
              
            </div>
          `;
    },
  },
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  speed: 900,
});
/* ==========================
 TESTIMONIALS SECTION END 
   ========================== */
/* ==========================
 PRICING SECTION START 
   ========================== */
const pricingswiper = new Swiper(".pricing-swiper", {
  navigation: {
    nextEl: ".pricing-button-next",
    prevEl: ".pricing-button-prev",
  },
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  speed: 900,
  centeredSlides: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: false,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

/* ==========================
 PRICING SECTION END 
   ========================== */
/* ==========================
 BACK TO TOP  START 
   ========================== */
document.addEventListener("DOMContentLoaded", () => {
  const backToTopButton = document.getElementById("back-to-top");

  if (backToTopButton) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        backToTopButton.style.display = "block";
      } else {
        backToTopButton.style.display = "none";
      }
    });

    backToTopButton.addEventListener("click", (event) => {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});

/* ==========================
 BACK TO TOP  END 
   ========================== */
/* ==========================
ABOUT PAGE  START 
   ========================== */
document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress");

  const animateProgressBar = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const percentage = bar.getAttribute("data-percentage");
        bar.style.width = `${percentage}%`;
        observer.unobserve(bar);
      }
    });
  };

  const observer = new IntersectionObserver(animateProgressBar, {
    root: null,
    threshold: 0.1,
  });

  progressBars.forEach((bar) => {
    observer.observe(bar);
  });
});

/* ==========================
ABOUT PAGE  END 
   ========================== */

/* ==========================
PORTFOLIO PAGE  START 
   ========================== */

document.addEventListener("DOMContentLoaded", () => {
  const portfolio = document.querySelector(".portfolio");

  if (portfolio) {
    const portfolioSwiper = new Swiper(".portfolio-swiper", {
      slidesPerView: "auto",
      spaceBetween: 14,
      loop: true,
      speed: 6000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".portfolio-swiper-button-next",
        prevEl: ".portfolio-swiper-button-prev",
      },
      pagination: {
        el: ".portfolio-swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          if (index < 3) {
            return `<span class="${className}"></span>`;
          }
          return "";
        },
      },
      scrollbar: {
        el: ".portfolio-swiper-scrollbar",
        // hide: true,
      },
      freeMode: {
        enabled: true,
        momentum: false,
      },
    });

    portfolio.addEventListener("mouseenter", () => {
      portfolioSwiper.autoplay.stop();
    });

    portfolio.addEventListener("mouseleave", () => {
      portfolioSwiper.autoplay.start();
    });
  } else {
    console.warn("portfolio' not found.");
  }
});
/* ==========================
PORTFOLIO PAGE  END 
   ========================== */
/* ==========================
TRANSITION PAGE  START 
   ========================== */
let tlTop = null;
let tlBottom = null;
let windowWidth = window.innerWidth;

function setupAnimations() {
  if (tlTop) {
    tlTop.clear();
  }

  if (tlBottom) {
    tlBottom.clear();
  }

  gsap.utils.toArray(".transition_col-top").forEach((section) => {
    tlTop = gsap.timeline({
      scrollTrigger: {
        trigger: ".transition-trigger",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    tlTop.to(section, {
      y: () => -section.offsetHeight + window.innerHeight,
      ease: "sine.in",
    });
  });

  gsap.utils.toArray(".transition_col-bottom").forEach((section) => {
    tlBottom = gsap.timeline({
      scrollTrigger: {
        trigger: ".transition-trigger",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    tlBottom.to(section, {
      y: () => section.offsetHeight - window.innerHeight,
      ease: "sine.in",
    });
  });
}

window.addEventListener("resize", () => {
  if (window.innerWidth !== windowWidth) {
    windowWidth = window.innerWidth;
    setupAnimations();
  }
});

setupAnimations();
/* ==========================
TRANSITION PAGE  END 
   ========================== */
/* ==============================================================================
GSAP ANIMATION  START 
   ============================================================================== */

gsap.from(".hero-content-heading-wrap span", {
  y: 50,
  opacity: 0,
  duration: 0.5,
  stagger: 0.3,
});

const spans = document.querySelectorAll(".hero-content-heading-wrap span");

const tl2 = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

tl2.fromTo(spans, { y: 50, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.3 });

tl2.fromTo(
  ".char",
  {
    scale: 0.5,
    rotation: 180,
    opacity: 0,
  },
  { scale: 1, rotation: 0, opacity: 1, duration: 0.8 },
  "-=0.5"
);
tl2.from(".header-bottom p", {
  y: 50,
  opacity: 0,
  duration: 0.5,
  stagger: 0.3,
  ease: "power2.out",
});
tl2.from(".pixelate-image-wrap .pixelate-image", {
  width: 0,
  opacity: 0,
  duration: 0.5,
  stagger: 0.3,
  ease: "power2.out",
});
tl2.from(".pixelate-info h3, .pixelate-info span", {
  y: 20,
  opacity: 0,
  duration: 0.5,
  stagger: 0.3,
  ease: "power2.out",
});
tl2.from(".pixelate .button-rotate-wrap", {
  opacity: 0,
  scale: 0.5,
  duration: 0.5,
  stagger: 0.3,
  ease: "power2.out",
});

tl2.from(
  ".header-navbar-logo a",
  {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power2.out",
  },
  "a"
);

tl2.from(".header-menu-item", {
  scale: 0.8,
  opacity: 0,
  stagger: 0.2,
  duration: 0.6,
  ease: "back.out(1.7)",
});
tl2.from(
  ".header-burger-menu ",
  {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power2.out",
  },
  "a"
);
gsap.registerPlugin(ScrollTrigger);
const tl3 = gsap.timeline({
  defaults: {
    ease: "power3.out",
    duration: 0.5,
  },
  scrollTrigger: {
    trigger: ".about",
    start: "top 50%",
    end: "top 10%",
  },
});

tl3.from(".about-img", {
  opacity: 0,
  width: 0,
  duration: 0.5,
  ease: "power2.out",
});

tl3.from(".about-content h2", {
  opacity: 0,
  y: 30,
  rotationX: 10,
  scale: 0.9,
  duration: 0.5,
  ease: "power3.out",
});

tl3.from(".about-content h3", {
  opacity: 0,
  y: 30,
  rotationX: 10,
  scale: 0.9,
  duration: 0.5,
  ease: "power3.out",
});

tl3.from(".about-content p", {
  opacity: 0,
  y: 30,
  rotationX: 10,
  scale: 0.9,
  duration: 0.5,
  ease: "power3.out",
});
tl3.from(".about-btn-wrap", {
  opacity: 0,
  y: 30,
  rotationX: 10,
  scale: 0.9,
  duration: 0.5,
  ease: "power3.out",
});
tl3.from(".about-info-wrap .about-info", {
  opacity: 0,
  y: 30,
  rotationX: 10,
  scale: 0.9,
  duration: 0.5,
  ease: "power3.out",
  stagger: 0.3,
});

const tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".portfolio",
    scroller: "body",
    start: "top 60%",
    end: "top -20%",
    // markers: true,
    scrub: 2,
  },
});

tl4.from(".section-title span", {
  opacity: 0,
  y: 30,
  duration: 0.5,
  ease: "power3.out",
});
tl4.from(".section-title h2", {
  opacity: 0,
  y: 30,
  duration: 0.5,
  ease: "power3.out",
});
tl4.from(
  ".line1.left",
  {
    opacity: 0,
    x: -300,
    duration: 0.5,
    ease: "power3.out",
  },
  "line1"
);
tl4.from(
  ".line1.right",
  {
    opacity: 0,
    x: 300,
    duration: 0.5,
    ease: "power3.out",
  },
  "line1"
);
tl4.from(
  ".line2.left",
  {
    opacity: 0,
    x: -300,
    duration: 0.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".line2.left",
      start: "top 80%",
      end: "top 50%",
      scrub: 1,
      // markers: true,
    },
  },
  "line2"
);
tl4.from(
  ".line2.right",
  {
    opacity: 0,
    x: 300,
    duration: 0.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".line2.right",
      start: "top 80%",
      end: "top 50%",
      scrub: 1,
      // markers: true,
    },
  },
  "line2"
);
tl4.from(
  ".line3.left",
  {
    opacity: 0,
    x: -300,
    duration: 0.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".line3.left",
      start: "top 80%",
      end: "top 50%",
      scrub: 1,
      // markers: true,
    },
  },
  "line3"
);
tl4.from(
  ".line3.right",
  {
    opacity: 0,
    x: 300,
    duration: 0.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".line3.right",
      start: "top 80%",
      end: "top 50%",
      scrub: 1,
      // markers: true,
    },
  },
  "line3"
);
tl4.from(" .portfolio-btn-wrap .portfolio-btn", {
  opacity: 0,
  y: 30,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".portfolio-btn-wrap",
    start: "top 80%",
    end: "top 50%",
    scrub: 1,
    // markers: true,
  },
});
// AOS.init({
//   duration: 1000,
//   once: true,
// });

const tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".services",
    scroller: "body",
    start: "top 60%",
    end: "top 0%",
    // markers: true,
    scrub: 4,
  },
});

tl5.from(".section-title span, .section-title h2", {
  opacity: 0,
  y: 30,
  duration: 0.5,
  ease: "power3.out",
  stagger: 0.2,
});
tl5.from(".services .row .col-sm-12", {
  opacity: 0,
  y: 80,
  duration: 0.6,
  stagger: 0.2,
  ease: "power1.out",
});

const tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".award",
    scroller: "body",
    start: "top 60%",
    end: "top 0%",
    // markers: true,
    scrub: 2,
    // toggleActions: "play none none none",
  },
});

tl6.from(".award .awards-header h2", {
  opacity: 0,
  y: 30,
  duration: 0.5,
  ease: "power3.out",
});
tl6.from(".award-list .award-row", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.3,
  ease: "power3.out",
});

let tl7 = gsap.timeline({
  scrollTrigger: {
    trigger: ".testimonials",
    start: "top 50%",
    end: "bottom top",
    scrub: 1,
    // markers: true,
  },
});

tl7
  .from(".testimonials .section-title-wrap", {
    opacity: 0,
    y: 100,
    duration: 0.5,
    ease: "power4.out",
  })
  .from(".testimonials .testimonials-btn-wrap", {
    opacity: 0,
    y: -100,
    duration: 0.5,
    ease: "power4.out",
  })
  .from(".testimonials .swiper-slide", {
    opacity: 0,
    y: 100,
    stagger: 0.3,
    duration: 1.5,
    ease: "power4.out",
  })
  .to(".testimonials .swiper-slide", {
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: "power4.out",
  });

let tl8 = gsap.timeline({
  scrollTrigger: {
    trigger: ".footer",
    scroller: "body",
    start: "top 50%",
    end: "top 20%",
    scrub: 2,
    // markers: true,
  },
});

tl8
  .from(".footer .heading-style-h1", {
    opacity: 0,
    y: 50,
    duration: 0.5,
    ease: "power3.out",
  })
  .from(
    ".footer .footer_contact-wrapper",
    {
      opacity: 0,
      y: 50,
      duration: 0.5,
      ease: "power3.out",
    },
    "-=0.5"
  )
  .from(
    ".footer .link-mail_one",
    {
      opacity: 0,
      x: -50,
      duration: 0.5,
      ease: "power3.out",
    },
    "-=1"
  )
  .from(
    ".footer .link-mail_two",
    {
      opacity: 0,
      x: 50,
      duration: 0.5,
      ease: "power3.out",
    },
    "-=0.8"
  )
  .from(
    ".footer .footer_copyright",
    {
      opacity: 0,
      y: 50,
      duration: 0.5,
      ease: "power3.out",
    },
    "-=1.5"
  )
  .from(
    ".footer #back-to-top",
    {
      opacity: 0,
      y: 50,
      duration: 0.5,
      ease: "power3.out",
    },
    "-=1.5"
  );
/* ==============================================================================
GSAP ANIMATION  END 
   ============================================================================== */
