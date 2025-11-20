// components/navbar/navbar.js
(function() {
    'use strict';

    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', function() {
        
        const navbar = document.querySelector('.navbar');
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        const navbarMenu = document.querySelector('.navbar-menu');
        let lastScroll = 0;
        
        // ============================================
        // Scroll Effects
        // ============================================
        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;
            
            // Add 'scrolled' class when user scrolls down
            if (currentScroll > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            // Optional: Hide navbar on scroll down, show on scroll up
            // Uncomment the code below if you want this behavior
            // /*
            // if (currentScroll > lastScroll && currentScroll > 200) {
            //     // Scrolling down
            //     navbar.style.transform = 'translateY(-100%)';
            // } else {
            //     // Scrolling up
            //     navbar.style.transform = 'translateY(0)';
            // }
            // */
            
            lastScroll = currentScroll;
        });
        
        // ============================================
        // Mobile Menu Toggle
        // ============================================
        if (mobileMenuToggle && navbarMenu) {
            mobileMenuToggle.addEventListener('click', function(e) {
                e.stopPropagation();
                this.classList.toggle('active');
                navbarMenu.classList.toggle('active');
                
                // Toggle aria-expanded for accessibility
                const isExpanded = this.getAttribute('aria-expanded') === 'true';
                this.setAttribute('aria-expanded', !isExpanded);
                
                // Prevent body scroll when menu is open
                if (navbarMenu.classList.contains('active')) {
                    document.body.style.overflow = 'hidden';
                } else {
                    document.body.style.overflow = '';
                }
            });
        }
        
        // ============================================
        // Close mobile menu when clicking menu items
        // ============================================
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    mobileMenuToggle.classList.remove('active');
                    navbarMenu.classList.remove('active');
                    mobileMenuToggle.setAttribute('aria-expanded', 'false');
                    document.body.style.overflow = '';
                }
            });
        });
        
        // ============================================
        // Close mobile menu when clicking outside
        // ============================================
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.navbar')) {
                if (mobileMenuToggle && navbarMenu) {
                    mobileMenuToggle.classList.remove('active');
                    navbarMenu.classList.remove('active');
                    mobileMenuToggle.setAttribute('aria-expanded', 'false');
                    document.body.style.overflow = '';
                }
            }
        });
        
        // ============================================
        // Close mobile menu when window is resized to desktop
        // ============================================
        let resizeTimer;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                if (window.innerWidth > 768) {
                    if (mobileMenuToggle && navbarMenu) {
                        mobileMenuToggle.classList.remove('active');
                        navbarMenu.classList.remove('active');
                        mobileMenuToggle.setAttribute('aria-expanded', 'false');
                        document.body.style.overflow = '';
                    }
                }
            }, 250);
        });
        
        // ============================================
        // Smooth scroll for anchor links (optional)
        // ============================================
        document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId !== '#' && targetId.length > 1) {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        e.preventDefault();
                        const navbarHeight = navbar.offsetHeight;
                        const targetPosition = targetElement.offsetTop - navbarHeight;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
        
        // ============================================
        // Add active class to current page link
        // ============================================
        const currentPath = window.location.pathname;
        navLinks.forEach(function(link) {
            const linkPath = new URL(link.href).pathname;
            if (linkPath === currentPath) {
                link.parentElement.classList.add('current-menu-item');
            }
        });
        
    });
    
})();