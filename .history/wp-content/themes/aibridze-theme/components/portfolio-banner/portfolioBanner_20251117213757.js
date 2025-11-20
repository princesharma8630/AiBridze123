/**
 * Portfolio Banner Scroll Animation
 * Triggers animations when user scrolls to the section
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // Intersection Observer for scroll-triggered animations
    const observerOptions = {
        threshold: 0.2, // Trigger when 20% of element is visible
        rootMargin: '0px 0px -50px 0px' // Slight offset from bottom
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add 'visible' class when element comes into view
                entry.target.classList.add('visible');
                
                // Optional: Stop observing after animation (one-time animation)
                // observer.unobserve(entry.target);
            } else {
                // Remove 'visible' class when element leaves viewport
                // Comment this out if you want animation to happen only once
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    // Select all animated elements
    const animatedElements = document.querySelectorAll(
        '.heading-subtitle, .portfolio-banner-heading, .portfolio-banner-description, .portfolio-banner-buttons, .portfolio-banner-image'
    );

    // Observe each element
    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Optional: Mouse parallax effect for image
    const portfolioImage = document.querySelector('.portfolio-banner-image img');
    const portfolioSection = document.querySelector('.portfolio-banner-section');

    if (portfolioImage && portfolioSection) {
        portfolioSection.addEventListener('mousemove', (e) => {
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

    // Optional: Add smooth hover effect for buttons
    const exploreBtn = document.querySelector('.btn-explore-portfolio');
    if (exploreBtn) {
        exploreBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
        
        exploreBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    }

    // Performance optimization: Reduce animation on mobile
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) {
        animatedElements.forEach(element => {
            element.classList.add('visible');
        });
    }

});

// Optional: Debounce function for better performance
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}