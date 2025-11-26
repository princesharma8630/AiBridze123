/* ================================================
   VERTICAL EXPERTISE - Interactive Functionality
   ================================================ */

/**
 * Initialize Vertical Expertise Section
 * Handles clicking on industry items to show descriptions
 */
function initVerticalExpertise() {
    const industryItems = document.querySelectorAll('.industry-item-evs');
    const descriptions = document.querySelectorAll('.description-content-evs');
    
    if (industryItems.length === 0) return;
    
    // Add click event to each industry item
    industryItems.forEach(item => {
        item.addEventListener('click', function() {
            // Get target description ID
            const target = this.getAttribute('data-target');
            
            // Remove active class from all items
            industryItems.forEach(i => {
                i.classList.remove('active-evs');
            });
            
            // Add active class to clicked item
            this.classList.add('active-evs');
            
            // Hide all descriptions
            descriptions.forEach(desc => {
                desc.classList.remove('active-evs');
            });
            
            // Show target description with animation
            const targetDesc = document.getElementById('desc-' + target);
            if (targetDesc) {
                targetDesc.classList.add('active-evs');
            }
        });
        
        // Add keyboard accessibility
        item.setAttribute('tabindex', '0');
        item.setAttribute('role', 'button');
        
        item.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
}

/**
 * Auto-rotate descriptions (optional)
 * Uncomment to enable auto-play
 */
function initAutoRotate() {
    const industryItems = document.querySelectorAll('.industry-item-evs');
    let currentIndex = 0;
    let autoRotateInterval;
    
    function rotateToNext() {
        currentIndex = (currentIndex + 1) % industryItems.length;
        industryItems[currentIndex].click();
    }
    
    function startAutoRotate() {
        stopAutoRotate();
        autoRotateInterval = setInterval(rotateToNext, 5000); // Change every 5 seconds
    }
    
    function stopAutoRotate() {
        if (autoRotateInterval) {
            clearInterval(autoRotateInterval);
        }
    }
    
    // Start auto-rotate (uncomment to enable)
    // startAutoRotate();
    
    // Pause on hover
    const section = document.querySelector('.vertical-expertise-section-evs');
    if (section) {
        section.addEventListener('mouseenter', stopAutoRotate);
        section.addEventListener('mouseleave', startAutoRotate);
    }
    
    // Stop on manual click
    industryItems.forEach(item => {
        item.addEventListener('click', stopAutoRotate);
    });
}

/**
 * Add transition effects
 */
function addTransitionEffects() {
    const descriptions = document.querySelectorAll('.description-content-evs');
    
    descriptions.forEach(desc => {
        // Add custom animation duration
        desc.style.setProperty('--animation-duration', '0.5s');
    });
}

/**
 * Mobile swipe support (optional)
 */
function initSwipeSupport() {
    const rightPanel = document.querySelector('.vertical-expertise-right-evs');
    if (!rightPanel) return;
    
    let touchStartX = 0;
    let touchEndX = 0;
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            const industryItems = document.querySelectorAll('.industry-item-evs');
            const activeItem = document.querySelector('.industry-item-evs.active-evs');
            const activeIndex = Array.from(industryItems).indexOf(activeItem);
            
            if (diff > 0) {
                // Swipe left - next item
                const nextIndex = (activeIndex + 1) % industryItems.length;
                industryItems[nextIndex].click();
            } else {
                // Swipe right - previous item
                const prevIndex = (activeIndex - 1 + industryItems.length) % industryItems.length;
                industryItems[prevIndex].click();
            }
        }
    }
    
    rightPanel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    rightPanel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
}

/**
 * Initialize all features
 */
function init() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setup);
    } else {
        setup();
    }
    
    function setup() {
        initVerticalExpertise();
        addTransitionEffects();
        // initAutoRotate();     // Uncomment to enable auto-rotation
        // initSwipeSupport();   // Uncomment to enable mobile swipe
    }
}

// Auto-initialize
init();

/**
 * Export functions for manual initialization
 */
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initVerticalExpertise,
        initAutoRotate,
        initSwipeSupport,
        addTransitionEffects
    };
}