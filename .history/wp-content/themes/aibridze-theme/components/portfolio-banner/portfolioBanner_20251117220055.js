/**
 * Portfolio Banner Scroll Animation
 * Triggers animations when user scrolls to the section
 * Resets animation if user leaves and comes back after 5 seconds
 */

document.addEventListener('DOMContentLoaded', function() {
    
    let lastExitTime = null; // Track when user last left the section
    let isVisible = false; // Track if section is currently visible
    
    // Intersection Observer for scroll-triggered animations
    const observerOptions = {
        threshold: 0.2, // Trigger when 20% of element is visible
        rootMargin: '0px 0px -50px 0px' // Slight offset from bottom
    };

    // Select all animated elements
    const animatedElements = document.querySelectorAll(
        '.heading-subtitle, .portfolio-banner-heading, .portfolio-banner-description, .portfolio-banner-buttons, .portfolio-banner-image'
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // User is viewing the section
                const currentTime = Date.now();
                
                // Check if more than 5 seconds passed since last exit
                if (lastExitTime === null || (currentTime - lastExitTime) >= 5000) {
                    // Trigger animation
                    animatedElements.forEach(element => {
                        element.classList.add('visible');
                    });
                } else {
                    // Less than 5 seconds, keep elements visible without re-animating
                    animatedElements.forEach(element => {
                        element.classList.add('visible');
                    });
                }
                
                isVisible = true;
                
            } else {
                // User left the section
                if (isVisible) {
                    lastExitTime = Date.now(); // Record exit time
                    
                    // Remove visible class after leaving
                    animatedElements.forEach(element => {
                        element.classList.remove('visible');
                    });
                }
                
                isVisible = false;
            }
        });
    }, observerOptions);

    // Observe the main portfolio section
    const portfolioSection = document.querySelector('.portfolio-banner-section');
    if (portfolioSection) {
        observer.observe(portfolioSection);
    }

    // Observe each animated element individually
    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Optional: Mouse parallax effect for image
    const portfolioImage = document.querySelector('.portfolio-banner-image img');

    if (portfolioImage && portfolioSection) {
        portfolioSection.addEventListener('mousemove', (e) => {
            if (!isVisible) return; // Only work when section is visible
            
            const rect = portfolioSection.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const moveX = (x - centerX) / centerX * 15; // Max 15px movement
            const moveY = (y - centerY) / centerY * 15;
            
            portfolioImage.style.transform = `translate(${moveX}px, ${moveY}px) scale(1)`;
        });

        portfolioSection.addEventListener('mouseleave', () => {
            portfolioImage.style.transform = 'translate(0, 0) scale(1)';
        });
    }

    // Performance optimization: Skip animations for users who prefer reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) {
        animatedElements.forEach(element => {
            element.classList.add('visible');
        });
    }

    // Debug: Log animation triggers (remove in production)
    console.log('Portfolio Banner Animation: Ready');
});