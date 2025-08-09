console.log("main.js is loaded and running");

document.addEventListener('DOMContentLoaded', function () {
    // Get the current URL path and strip any directory parts, only keeping the filename (e.g., "about.html")
    const currentPath = window.location.pathname.split("/").pop();

    // Get all the nav links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    // Debugging: Log current path and all link hrefs
    console.log("Current path:", currentPath);
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split("/").pop(); // Get the filename of each link
        console.log("Link href: ", linkPath);
        
        // If the current path matches the link's href, add the 'active' class
        if (linkPath === currentPath) {
            link.classList.add('active');
        }
    });
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


