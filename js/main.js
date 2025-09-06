console.log("main.js is loaded and running");

document.addEventListener('DOMContentLoaded', function () {
    // Get the current URL path and strip any directory parts, only keeping the filename (e.g., "about.html")
    const currentPath = window.location.pathname.split("/").pop();

    // Get all the nav links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    // Debugging: Log current path and all link hrefs
    console.log("Current path:", currentPath);
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath) {
            const linkPathFile = linkPath.split("/").pop(); // Get the filename of each link
            console.log("Link href: ", linkPathFile);
            
            // If the current path matches the link's href, add the 'active' class
            if (linkPathFile === currentPath) {
                link.classList.add('active');
            }
        }
    });

    // Handle consultant pages active state
    if (currentPath === 'consultants.html' || currentPath === 'consultant-detail.html') {
        const consultantLink = document.querySelector('.navbar-nav .nav-link[href="consultants.html"]');
        if (consultantLink) {
            consultantLink.classList.add('active');
        }
    }

});

// Wait for the entire page to load before hiding the loader
window.addEventListener("load", function() {
    var loader = document.getElementById("loader");
    loader.style.display = "none";  // Hide the loader
});


(function ($) {
    "use strict";

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });
    
})(jQuery);

// Scroll Animations and Interactive Elements
document.addEventListener('DOMContentLoaded', function() {
    // Scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);

    // Observe all elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });

    // Parallax scrolling effect
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax-element');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });

    // Add floating elements to hero section
    function createFloatingElements() {
        const heroSection = document.querySelector('.carousel');
        if (!heroSection) return;

        // Create floating geometric shapes
        for (let i = 0; i < 5; i++) {
            const shape = document.createElement('div');
            shape.className = 'floating-element geometric-shape';
            
            // Random shape type
            const shapes = ['shape-circle', 'shape-triangle', 'shape-square'];
            const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
            shape.classList.add(randomShape);
            
            // Random position and size
            const size = Math.random() * 30 + 20;
            const left = Math.random() * 100;
            const top = Math.random() * 100;
            const delay = Math.random() * 4;
            
            shape.style.width = size + 'px';
            shape.style.height = size + 'px';
            shape.style.left = left + '%';
            shape.style.top = top + '%';
            shape.style.animationDelay = delay + 's';
            shape.style.pointerEvents = 'none';
            shape.style.zIndex = '1';
            
            heroSection.appendChild(shape);
        }
    }

    // Initialize floating elements
    createFloatingElements();

    // Add tooltips to service cards
    const serviceCards = document.querySelectorAll('.service-item');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.cursor = 'pointer';
        });
        
        card.addEventListener('click', function(e) {
            if (e.target.tagName !== 'A') {
                const link = this.querySelector('a');
                if (link) {
                    link.click();
                }
            }
        });
    });

    // Enhanced loading animation
    window.addEventListener('load', function() {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }
    });

    // Add smooth scroll to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add loading skeleton for dynamic content
    function addLoadingSkeleton(element) {
        element.classList.add('loading-skeleton');
        element.style.height = '200px';
        element.style.borderRadius = '8px';
    }

    // Remove loading skeleton
    function removeLoadingSkeleton(element) {
        element.classList.remove('loading-skeleton');
        element.style.height = 'auto';
    }
});


