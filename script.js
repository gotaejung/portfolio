// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// DOM Elements
const header = document.querySelector('.header');
const heroTitle = document.querySelector('.hero-title');
const heroIntro = document.querySelector('.hero-intro');
const heroImage = document.querySelector('.hero-image');
const floatingShapes = document.querySelectorAll('.shape');
/* const projectCards = document.querySelectorAll('.project-card'); */
const serviceCards = document.querySelectorAll('.service-card');
const skillItems = document.querySelectorAll('.skill-item');
const statItems = document.querySelectorAll('.stat-item');
const navLinks = document.querySelectorAll('.nav-link');
const mobileToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

// Header scroll effect
let lastScrollY = window.scrollY;
window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
    
    if (currentScrollY > lastScrollY && currentScrollY > 200) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    
    lastScrollY = currentScrollY;
});

// Mobile menu toggle
if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileToggle.classList.toggle('active');
    });
}

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: targetSection,
                    offsetY: 80
                },
                ease: "power2.inOut"
            });
        }
        
        // Close mobile menu if open
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            mobileToggle.classList.remove('active');
        }
    });
});

// Hero section animations
const heroTimeline = gsap.timeline();

heroTimeline
    .from('.hero-badges .badge', {
        duration: 0.8,
        y: 30,
        opacity: 0,
        stagger: 0.1,
        ease: "power2.out"
    })
    .from(heroTitle, {
        duration: 1.2,
        y: 50,
        opacity: 0,
        ease: "power2.out"
    }, "-=0.4")
    .from(heroIntro, {
        duration: 1,
        x: -50,
        opacity: 0,
        ease: "power2.out"
    }, "-=0.6")
    .from('.main-image', {
        duration: 1.5,
        scale: 0.8,
        opacity: 0,
        ease: "power2.out"
    }, "-=0.8")
    .from('.side-image', {
        duration: 1,
        x: 50,
        opacity: 0,
        ease: "power2.out"
    }, "-=0.5");

// Floating shapes animation
floatingShapes.forEach((shape, index) => {
    gsap.to(shape, {
        duration: 6 + (index * 2),
        rotation: 360,
        repeat: -1,
        ease: "none"
    });
    
    gsap.to(shape, {
        duration: 4 + (index * 1.5),
        y: -20,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });
});

// About section animations
gsap.from('.about-image img', {
    duration: 1.2,
    scale: 0.9,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
        trigger: '.about-image',
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
    }
});

gsap.from('.about-text', {
    duration: 1,
    x: 50,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
        trigger: '.about-text',
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
    }
});

// Timeline animations
gsap.from('.profile-item', {
    duration: 0.8,
    x: -30,
    opacity: 0,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: '.profile',
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
    }
});
gsap.from('.timeline-item', {
    duration: 0.8,
    x: -30,
    opacity: 0,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: '.timeline',
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
    }
});

gsap.from('.education-item', {
    duration: 0.8,
    x: 30,
    opacity: 0,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: '.education-list',
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
    }
});

// Sponsors marquee enhanced animation
const marqueeTrack = document.querySelector('.marquee-track');
if (marqueeTrack) {
    const marqueeImages = marqueeTrack.querySelectorAll('img');
    
    // Clone images for seamless loop
    marqueeImages.forEach(img => {
        const clone = img.cloneNode(true);
        marqueeTrack.appendChild(clone);
    });
    
    gsap.to(marqueeTrack, {
        duration: 30,
        x: '-50%',
        repeat: -1,
        ease: "none"
    });
}

// Project cards animations
/* if (projectCards.length > 0) {
    gsap.from(projectCards, {
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: '.projects-grid',
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    }); */
    
    // Hover animations for project cards
/*     projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                duration: 0.3,
                y: -10,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                ease: "power2.out"
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                duration: 0.3,
                y: 0,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                ease: "power2.out"
            });
        });
    });
} */

// Service cards animations
if (serviceCards.length > 0) {
    gsap.from(serviceCards, {
        duration: 0.8,
        y: 30,
        opacity: 0,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
            trigger: '.services-grid',
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    });
    
    // Hover animations for service cards
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                duration: 0.3,
                y: -5,
                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
                ease: "power2.out"
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                duration: 0.3,
                y: 0,
                boxShadow: "none",
                ease: "power2.out"
            });
        });
    });
}

// Stats counter animation
if (statItems.length > 0) {
    statItems.forEach(item => {
        const number = item.querySelector('h3');
        const finalNumber = parseInt(number.textContent);
        
        ScrollTrigger.create({
            trigger: item,
            start: "top 80%",
            onEnter: () => {
                gsap.from({ num: 0 }, {
                    duration: 2,
                    num: finalNumber,
                    ease: "power2.out",
                    onUpdate: function() {
                        const suffix = number.textContent.includes('+') ? ' +' : 
                                     number.textContent.includes('%') ? ' %' : '';
                        number.textContent = Math.floor(this.targets()[0].num) + suffix;
                    }
                });
            }
        });
    });
}

// Skills section animations
if (skillItems.length > 0) {
    gsap.from(skillItems, {
        duration: 0.6,
        x: -30,
        opacity: 0,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: '.skills-list',
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    });
}

// Skills image animation
gsap.from('.skills-image img', {
    duration: 1.2,
    scale: 0.9,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
        trigger: '.skills-image',
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
    }
});

// Testimonials animation
gsap.from('.testimonial-card', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
        trigger: '.testimonial-card',
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
    }
});

// Footer animation
gsap.from('.footer-content > *', {
    duration: 0.8,
    y: 30,
    opacity: 0,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: '.footer',
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
    }
});

// Parallax effect for hero section
gsap.to('.hero-image', {
    yPercent: -50,
    ease: "none",
    scrollTrigger: {
        trigger: '.hero',
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
});

// Text reveal animations for section titles
const revealTexts = document.querySelectorAll('.section-title, .section-subtitle');
revealTexts.forEach(text => {
    gsap.from(text, {
        duration: 1,
        y: 30,
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
            trigger: text,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
        }
    });
});

// Cursor effect (optional enhancement)
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
cursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    background-color: rgba(51, 51, 51, 0.5);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.1s ease;
    mix-blend-mode: difference;
`;

document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX - 10 + 'px';
    cursor.style.top = e.clientY - 10 + 'px';
});

// Scale cursor on hover over interactive elements. .project-card,  
const interactiveElements = document.querySelectorAll('a, button, .service-card');
interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2)';
    });
    
    element.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
    });
});

// Scroll progress indicator
const progressBar = document.createElement('div');
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(to right, #333, #666);
    z-index: 10000;
    transition: width 0.1s ease;
`;

document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    progressBar.style.width = scrolled + '%';
});

// Page load animation
window.addEventListener('load', () => {
    gsap.from('body', {
        duration: 0.5,
        opacity: 0,
        ease: "power2.out"
    });
});

// Refresh ScrollTrigger on window resize
window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
});

console.log('Biogra Portfolio - JavaScript loaded successfully with GSAP animations');