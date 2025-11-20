/**
 * Engagement Journey - Scroll Animation
 * 
 * Features:
 * - Slide-up animation on scroll
 * - Staggered appearance
 * - Intersection Observer API for performance
 */

(function() {
    'use strict';
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initEngagementAnimation);
    } else {
        initEngagementAnimation();
    }
    
    function initEngagementAnimation() {
        // Get all journey steps
        const journeySteps = document.querySelectorAll('.journey-step');
        
        if (journeySteps.length === 0) {
            return; // Exit if no steps found
        }
        
        // Intersection Observer options
        const observerOptions = {
            root: null, // viewport
            rootMargin: '0px 0px -100px 0px', // Trigger 100px before bottom of viewport
            threshold: 0.2 // Trigger when 20% of element is visible
        };
        
        // Create observer
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    // Add animate-in class when element enters viewport
                    entry.target.classList.add('animate-in');
                    
                    // Optional: Stop observing after animation (one-time animation)
                    // observer.unobserve(entry.target);
                } else {
                    // Optional: Remove class when element leaves viewport (repeat animation)
                    // entry.target.classList.remove('animate-in');
                }
            });
        }, observerOptions);
        
        // Observe all journey steps
        journeySteps.forEach(function(step) {
            observer.observe(step);
        });
        
        // Optional: Animate immediately if step is already in viewport on page load
        checkInitialVisibility(journeySteps);
    }
    
    // Check if elements are already visible on page load
    function checkInitialVisibility(steps) {
        steps.forEach(function(step) {
            const rect = step.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            
            // If element is already in viewport
            if (rect.top < windowHeight && rect.bottom > 0) {
                step.classList.add('animate-in');
            }
        });
    }
    
})();