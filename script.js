// script.js

// Smooth scroll navigation
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Highlight active nav link based on scroll position
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 200;
      if (scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
  
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  });
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 100, // Number of particles
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#ffffff" // Color of particles
      },
      shape: {
        type: "circle", // Shape of particles
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        }
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: true,
          mode: "push"
        }
      }
    },
    retina_detect: true
  });
//Q2
  // Utility to classify HTML element type
function classifyElement(element) {
  const tag = element.tagName.toLowerCase();
  const type = element.type ? element.type.toLowerCase() : "";

  if (tag === "img") return "image";
  if (tag === "p" || tag === "span" || tag === "h1" || tag === "h2" || tag === "h3" || tag === "h4" || tag === "h5" || tag === "h6") return "text";
  if (tag === "a" && element.href.endsWith(".pdf")) return "CV (PDF)";
  if (tag === "a") return "hyperlink";
  if (tag === "select") return "dropdown";
  if (tag === "input") {
      if (type === "text") return "text input";
      if (type === "button") return "button";
  }
  if (tag === "button") return "button";
  if (tag === "section") return "section";
  if (tag === "div") return "container";
  
  return other (${tag});
}

// Log the view when page loads
window.addEventListener("load", () => {
  const timestamp = new Date().toLocaleString();
  console.log(${timestamp} , view , page);
});

// Log clicks on all elements
document.addEventListener("click", function (e) {
  const target = e.target;
  const timestamp = new Date().toLocaleString();
  const elementType = classifyElement(target);

  console.log(${timestamp} , click , ${elementType});
});
  
