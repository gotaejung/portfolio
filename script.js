// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Register GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Initialize animations
    initHeroAnimations();
    initScrollAnimations();
    initTestimonialSlider();
    initSmoothScroll();
    initHeaderScroll();
    initSponsorsAnimation();
    
    console.log('Biogra Portfolio initialized successfully');
});

// Hero Section Animations
function initHeroAnimations() {
    // Animate hero content on load
    const tl = gsap.timeline();
    
    tl.from('.hero-subtitle', {
        duration: 0.8,
        y: 30,
        opacity: 0,
        stagger: 0.2,
        ease: 'power2.out'
    })
    .from('.design-text .letter', {
        duration: 1,
        y: 100,
        opacity: 0,
        stagger: 0.1,
        ease: 'back.out(1.7)'
    }, '-=0.4')
    .from('.director-text', {
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: 'power2.out'
    }, '-=0.3')
    .from('.intro-text', {
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: 'power2.out'
    }, '-=0.2')
    .from('.hero-arrow', {
        duration: 0.8,
        scale: 0,
        rotation: 180,
        ease: 'back.out(1.7)'
    }, '-=0.4')
    .from('.hero-image', {
        duration: 1.2,
        scale: 0.8,
        opacity: 0,
        ease: 'power2.out'
    }, '-=0.8');

    // Hover effect for design letters
    document.querySelectorAll('.design-text .letter').forEach((letter, index) => {
        letter.addEventListener('mouseenter', () => {
            gsap.to(letter, {
                duration: 0.3,
                scale: 1.2,
                color: '#666',
                ease: 'power2.out'
            });
        });
        
        letter.addEventListener('mouseleave', () => {
            gsap.to(letter, {
                duration: 0.3,
                scale: 1,
                color: '#333',
                ease: 'power2.out'
            });
        });
    });

    // Hero arrow rotation on hover
    const heroArrow = document.querySelector('.hero-arrow');
    if (heroArrow) {
        heroArrow.addEventListener('mouseenter', () => {
            gsap.to('.hero-arrow svg', {
                duration: 0.3,
                rotation: 45,
                ease: 'power2.out'
            });
        });
        
        heroArrow.addEventListener('mouseleave', () => {
            gsap.to('.hero-arrow svg', {
                duration: 0.3,
                rotation: 0,
                ease: 'power2.out'
            });
        });
    }
}

// Scroll-triggered animations
function initScrollAnimations() {
    // Animate sections on scroll
    gsap.utils.toArray('.section-subtitle, .section-title').forEach(element => {
        gsap.from(element, {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Animate work items
    gsap.utils.toArray('.work-item').forEach((item, index) => {
        gsap.from(item, {
            duration: 0.8,
            y: 100,
            opacity: 0,
            ease: 'power2.out',
            delay: index * 0.1,
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Animate service items
    gsap.utils.toArray('.service-item').forEach((item, index) => {
        gsap.from(item, {
            duration: 0.8,
            y: 80,
            opacity: 0,
            ease: 'power2.out',
            delay: index * 0.15,
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Animate skill items
    gsap.utils.toArray('.skill-item').forEach((item, index) => {
        gsap.from(item, {
            duration: 0.6,
            x: -50,
            opacity: 0,
            ease: 'power2.out',
            delay: index * 0.1,
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Animate stats with counter effect
    gsap.utils.toArray('.stat-item').forEach(item => {
        const numberElement = item.querySelector('h3');
        const finalNumber = numberElement.textContent;
        
        ScrollTrigger.create({
            trigger: item,
            start: 'top 80%',
            onEnter: () => {
                gsap.from(numberElement, {
                    duration: 1.5,
                    textContent: '0',
                    ease: 'power2.out',
                    snap: { textContent: 1 },
                    modifiers: {
                        textContent: value => Math.ceil(value) + (finalNumber.includes('%') ? '%' : '+')
                    }
                });
            }
        });
    });

    // Parallax effect for hero image
    gsap.to('.hero-image', {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });

    // About image animation
    gsap.from('.about-left img', {
        duration: 1.2,
        scale: 0.8,
        opacity: 0,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.about-left',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        }
    });

    // Experience and education items
    gsap.utils.toArray('.exp-item').forEach((item, index) => {
        gsap.from(item, {
            duration: 0.6,
            x: -30,
            opacity: 0,
            ease: 'power2.out',
            delay: index * 0.1,
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });
}

// Testimonial Slider Functionality
function initTestimonialSlider() {
    const testimonials = document.querySelectorAll('.testimonial-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.remove('active');
            if (i === index) {
                testimonial.classList.add('active');
                
                // Animate testimonial content
                gsap.from(testimonial.querySelector('.testimonial-content'), {
                    duration: 0.8,
                    y: 30,
                    opacity: 0,
                    ease: 'power2.out'
                });
            }
        });
    }

    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }

    function prevTestimonial() {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentIndex);
    }

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', nextTestimonial);
        prevBtn.addEventListener('click', prevTestimonial);
    }

    // Auto-play testimonials
    setInterval(nextTestimonial, 5000);

    // Initial animation for active testimonial
    if (testimonials.length > 0) {
        showTestimonial(0);
    }
}

// Smooth scroll for navigation links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                gsap.to(window, {
                    duration: 1.5,
                    scrollTo: {
                        y: target,
                        offsetY: 80
                    },
                    ease: 'power2.inOut'
                });
            }
        });
    });
}

// Header scroll effect
function initHeaderScroll() {
    let lastScrollY = window.scrollY;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
        
        // Hide/show header based on scroll direction
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            gsap.to(header, { duration: 0.3, y: -100, ease: 'power2.out' });
        } else {
            gsap.to(header, { duration: 0.3, y: 0, ease: 'power2.out' });
        }
        
        lastScrollY = currentScrollY;
    });
}

// Sponsors scrolling animation
function initSponsorsAnimation() {
    const sponsorsScroll = document.querySelector('.sponsors-scroll');
    if (sponsorsScroll) {
        // Clone sponsors for seamless scroll
        const sponsorsContent = sponsorsScroll.innerHTML;
        sponsorsScroll.innerHTML = sponsorsContent + sponsorsContent;
        
        // Pause animation on hover
        sponsorsScroll.addEventListener('mouseenter', () => {
            sponsorsScroll.style.animationPlayState = 'paused';
        });
        
        sponsorsScroll.addEventListener('mouseleave', () => {
            sponsorsScroll.style.animationPlayState = 'running';
        });
    }
}

// Add hover effects to work items
document.addEventListener('DOMContentLoaded', function() {
    const workItems = document.querySelectorAll('.work-item');
    
    workItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, {
                duration: 0.3,
                y: -10,
                scale: 1.02,
                ease: 'power2.out'
            });
            
            gsap.to(item.querySelector('.work-image img'), {
                duration: 0.3,
                scale: 1.1,
                ease: 'power2.out'
            });
        });
        
        item.addEventListener('mouseleave', () => {
            gsap.to(item, {
                duration: 0.3,
                y: 0,
                scale: 1,
                ease: 'power2.out'
            });
            
            gsap.to(item.querySelector('.work-image img'), {
                duration: 0.3,
                scale: 1,
                ease: 'power2.out'
            });
        });
    });
});

// Add floating animation to some elements
function initFloatingAnimations() {
    // Float some icons and images
    gsap.utils.toArray('.service-icon, .skill-icon').forEach(icon => {
        gsap.to(icon, {
            duration: 2 + Math.random() * 2,
            y: -10 + Math.random() * 20,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: Math.random() * 2
        });
    });
}

// Initialize floating animations after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initFloatingAnimations, 1000);
});

// Add magnetic effect to buttons
function initMagneticEffect() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-follow, .nav-btn');
    
    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            gsap.to(button, {
                duration: 0.3,
                x: x * 0.3,
                y: y * 0.3,
                ease: 'power2.out'
            });
        });
        
        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                duration: 0.5,
                x: 0,
                y: 0,
                ease: 'elastic.out(1, 0.3)'
            });
        });
    });
}

// Initialize magnetic effect
document.addEventListener('DOMContentLoaded', function() {
    initMagneticEffect();
});

// Text reveal animation for spaced text
function initTextRevealAnimations() {
    gsap.utils.toArray('.spaced-text').forEach(text => {
        gsap.from(text, {
            duration: 1,
            opacity: 0,
            letterSpacing: '1em',
            ease: 'power2.out',
            scrollTrigger: {
                trigger: text,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    });
}

// Initialize text reveal animations
document.addEventListener('DOMContentLoaded', function() {
    initTextRevealAnimations();
});

// Performance optimization: Reduce motion for users who prefer it
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    // Disable animations for users who prefer reduced motion
    gsap.globalTimeline.timeScale(0);
    document.documentElement.style.scrollBehavior = 'auto';
}