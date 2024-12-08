// const lenis = new Lenis({
//   duration: 1.5,
//   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//   direction: "vertical",
//   gestureDirection: "vertical",
//   smooth: true,
//   mouseMultiplier: 1,
//   smoothTouch: false,
//   touchMultiplier: 2,
//   infinite: false,
// });

//get scroll value
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
 ABOUT SECTION START 
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
// ---------
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

// ------------------------------------------------

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

tl2.from(".header-navbar-logo a", {
  opacity: 0,
  y: -50,
  duration: 1,
  ease: "power2.out",
});

tl2.from(".header-menu-item", {
  scale: 0.8,
  opacity: 0,
  stagger: 0.2,
  duration: 0.6,
  ease: "back.out(1.7)",
});
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
  duration: 1,
  ease: "power3.out",
});

tl3.from(".about-content h3", {
  opacity: 0,
  y: 30,
  rotationX: 10,
  scale: 0.9,
  duration: 1,
  ease: "power3.out",
});

tl3.from(".about-content p", {
  opacity: 0,
  y: 30,
  rotationX: 10,
  scale: 0.9,
  duration: 1,
  ease: "power3.out",
});
tl3.from(".about-btn-wrap", {
  opacity: 0,
  y: 30,
  rotationX: 10,
  scale: 0.9,
  duration: 1,
  ease: "power3.out",
});
tl3.from(".about-info-wrap .about-info", {
  opacity: 0,
  y: 30,
  rotationX: 10,
  scale: 0.9,
  duration: 1,
  ease: "power3.out",
  stagger: 0.3,
});

//
// const tl4 = gsap.timeline({
//   defaults: {
//     ease: "power3.out",
//     duration: 1.5,
//   },
//   scrollTrigger: {
//     trigger: ".portfolio",
//     scroller: "body",
//     start: "top 50%",
//     end: "top 0%",
//     markers: true,
//     scrub: 2,
//     toggleActions: "play none none none",
//   },
// });

// tl4.from(".line", {
//   width: "0%",
// });

// tl4.from(".section-title span", {
//   opacity: 0,
//   y: 20,
// });

// tl4.from("h2", {
//   opacity: 0,
//   y: 20,
// });

// tl4.from(".portfolio .portfolio-item", {
//   opacity: 0,
//   y: 100,
//   stagger: 0.5,
//   duration: 5,
// });

// tl4.from(".portfolio .portfolio-btn-wrap a", {
//   opacity: 0,
//   y: 30,
//   rotationX: 10,
//   scale: 0.9,
// });
