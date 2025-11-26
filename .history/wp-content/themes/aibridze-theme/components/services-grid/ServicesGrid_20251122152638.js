/**
 * Services Grid Sticky Scroll Animation
 * Animates description text word-by-word based on service items scroll position
 */

(function() {
    'use strict';

    // Configuration
    const config = {
        activeClass: 'active',
        visibleClass: 'visible',
        passedClass: 'passed',
        highlightedClass: 'highlighted',
        animateInClass: 'animate-in'
    };

    // DOM Elements
    const servicesGrid = document.getElementById('servicesGrid');
    const description = document.getElementById('servicesDescription');
    const heading = document.querySelector('.services-main-heading');
    const button = document.querySelector('.btn-explore-grid');
    const serviceItems = document.querySelectorAll('.service-item');
    const words = description ? description.querySelectorAll('.word') : [];

    // Check if elements exist
    if (!servicesGrid || !description || words.length === 0 || serviceItems.length === 0) {
        console.warn('Services sticky animation: Required elements not found');
        return;
    }

    // State
    let isInitialized = false;
    let isMobile = window.innerWidth <= 900;
    let ticking = false;

    /**
     * Initialize animations on page load
     */
    function initAnimations() {
        if (isInitialized) return;
        
        // Animate heading and button on load
        setTimeout(() => {
            if (heading) heading.classList.add(config.animateInClass);
        }, 200);
        
        setTimeout(() => {
            if (button) button.classList.add(config.animateInClass);
        }, 600);

        isInitialized = true;
    }

    /**
     * Update word highlights based on scroll progress
     */
    function updateWordHighlights(progress) {
        const totalWords = words.length;
        const wordsToHighlight = Math.floor(progress * totalWords);

        words.forEach((word, index) => {
            word.classList.remove(config.activeClass, config.highlightedClass, config.passedClass);
            
            if (index < wordsToHighlight - 1) {
                // Words that have been passed
                word.classList.add(config.passedClass);
            } else if (index === wordsToHighlight - 1 || index === wordsToHighlight) {
                // Current active words (highlight 1-2 words at a time)
                word.classList.add(config.activeClass);
                word.classList.add(config.highlightedClass);
            }
        });
    }

    /**
     * Calculate scroll progress through services section
     */
    function calculateScrollProgress() {
        const rect = servicesGrid.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Start progress when section enters viewport
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        
        // Calculate progress (0 to 1)
        const scrollStart = windowHeight * 0.; // Start when section is 30% in view
        const scrollEnd = windowHeight * 0.03; // End when section is 70% through
        
        let progress = 0;
        
        if (sectionTop < scrollStart) {
            const scrolled = scrollStart - sectionTop;
            const scrollDistance = sectionHeight - (windowHeight - scrollEnd);
            progress = Math.min(scrolled / scrollDistance, 1);
        }
        
        return Math.max(0, Math.min(1, progress));
    }

    /**
     * Update service items visibility and active state
     */
    function updateServiceItems() {
        const windowHeight = window.innerHeight;
        const centerPoint = windowHeight / 2;

        serviceItems.forEach((item, index) => {
            const rect = item.getBoundingClientRect();
            const itemCenter = rect.top + rect.height / 2;
            
            // Make item visible when in viewport
            if (rect.top < windowHeight && rect.bottom > 0) {
                item.classList.add(config.visibleClass);
            }
            
            // Highlight item when near center of viewport
            const distanceFromCenter = Math.abs(itemCenter - centerPoint);
            const threshold = windowHeight * 0.3;
            
            if (distanceFromCenter < threshold && rect.top < centerPoint) {
                item.classList.add(config.activeClass);
            } else {
                item.classList.remove(config.activeClass);
            }
        });
    }

    /**
     * Main scroll handler
     */
    function handleScroll() {
        if (isMobile) return; // Disable on mobile
        
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const progress = calculateScrollProgress();
                updateWordHighlights(progress);
                updateServiceItems();
                ticking = false;
            });
            ticking = true;
        }
    }

    /**
     * Handle window resize
     */
    function handleResize() {
        isMobile = window.innerWidth <= 900;
        
        if (isMobile) {
            // Reset classes on mobile
            words.forEach(word => {
                word.classList.remove(config.activeClass, config.highlightedClass, config.passedClass);
                word.style.opacity = '1';
                word.style.color = 'rgba(255, 255, 255, 0.7)';
            });
            serviceItems.forEach(item => {
                item.classList.add(config.visibleClass);
                item.classList.remove(config.activeClass);
            });
        } else {
            // Re-enable animations on desktop
            handleScroll();
        }
    }

    /**
     * Intersection Observer for initial visibility
     */
    function setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !isInitialized) {
                    initAnimations();
                }
            });
        }, observerOptions);

        observer.observe(servicesGrid);
    }

    /**
     * Initialize the module
     */
    function init() {
        // Setup intersection observer for initial animation
        setupIntersectionObserver();

        // Add scroll listener
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        // Add resize listener with debounce
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(handleResize, 250);
        });

        // Initial check
        handleResize();
        handleScroll();
    }

    // Start when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();