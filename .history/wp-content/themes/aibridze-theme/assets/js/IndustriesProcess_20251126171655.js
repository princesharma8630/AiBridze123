/**
 * HealthTech Development Process - Scroll Animations
 * Optional: Triggers animations when section comes into view
 * Similar to https://thefinch.design/saas-design/
 */

(function() {
    'use strict';
    
    // Check if Intersection Observer is supported
    if (!('IntersectionObserver' in window)) {
        // Fallback: Add animated class immediately
        document.querySelectorAll('.industries-process-section').forEach(section => {
            section.classList.add('animated');
        });
        return;
    }
    
    // Configuration
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.2 // Trigger when 20% visible
    };
    
    // Callback function
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animated class to trigger animations
                entry.target.classList.add('animated');
                
                // Optional: Unobserve after first animation
                // observer.unobserve(entry.target);
            }
        });
    };
    
    // Create observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all process sections
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.industries-process-section').forEach(section => {
            observer.observe(section);
        });
    });
    
})();