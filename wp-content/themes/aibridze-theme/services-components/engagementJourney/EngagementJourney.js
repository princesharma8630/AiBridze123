/**
 * Engagement Journey - Scroll Animation
 * 
 * Features:
 * - Slide-up animation on scroll
 * - Staggered appearance
 * - Dynamic active state based on scroll position
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
        
        // ========================================
        // SLIDE-UP ANIMATION OBSERVER
        // ========================================
        
        const slideUpOptions = {
            root: null,
            rootMargin: '0px 0px -100px 0px',
            threshold: 0.2
        };
        
        const slideUpObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, slideUpOptions);
        
        // Observe all steps for slide-up animation
        journeySteps.forEach(function(step) {
            slideUpObserver.observe(step);
        });
        
        // ========================================
        // ACTIVE STATE OBSERVER (BLUE HIGHLIGHT)
        // ========================================
        
        const activeStateOptions = {
            root: null,
            rootMargin: '-40% 0px -40% 0px', // Trigger when step is in center 20% of viewport
            threshold: 0.5 // At least 50% of step must be visible
        };
        
        const activeStateObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    // Remove active class from all steps
                    journeySteps.forEach(function(step) {
                        step.classList.remove('active');
                    });
                    
                    // Add active class to current step
                    entry.target.classList.add('active');
                }
            });
        }, activeStateOptions);
        
        // Observe all steps for active state
        journeySteps.forEach(function(step) {
            activeStateObserver.observe(step);
        });
        
        // ========================================
        // INITIAL STATE ON PAGE LOAD
        // ========================================
        
        checkInitialVisibility(journeySteps);
        
        // Set first step as active on page load
        setTimeout(function() {
            if (journeySteps.length > 0) {
                journeySteps[0].classList.add('active');
            }
        }, 100);
    }
    
    // Check if elements are already visible on page load
    function checkInitialVisibility(steps) {
        steps.forEach(function(step) {
            const rect = step.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            
            if (rect.top < windowHeight && rect.bottom > 0) {
                step.classList.add('animate-in');
            }
        });
    }
    
})();