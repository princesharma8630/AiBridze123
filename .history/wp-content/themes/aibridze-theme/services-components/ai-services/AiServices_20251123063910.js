/* ================================================
   AI SERVICES CAROUSEL - Navigation Functionality
   CLASS NAMES: All have "-s" suffix to avoid conflicts
   ================================================ */

/**
 * Initialize AI Services Carousel
 * Handles navigation arrows for desktop and mobile carousel
 */
function initAIServicesCarousel() {
    const prevBtn = document.querySelector('.nav-s-prev');
    const nextBtn = document.querySelector('.nav-s-next');
    const cardsContainer = document.querySelector('.ai-services-s-right');
    const cards = document.querySelectorAll('.service-s-card');
    
    if (!prevBtn || !nextBtn || !cardsContainer || cards.length === 0) return;
    
    let currentIndex = 0;
    const isMobile = () => window.innerWidth <= 768;
    
    // Initialize carousel mode on mobile
    function updateCarouselMode() {
        if (isMobile()) {
            cardsContainer.classList.add('carousel-mode');
            showCard(currentIndex);
        } else {
            cardsContainer.classList.remove('carousel-mode');
            cards.forEach(card => card.classList.remove('active'));
        }
        updateNavButtons();
    }
    
    // Show specific card
    function showCard(index) {
        if (!isMobile()) return;
        
        cards.forEach((card, i) => {
            if (i === index) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });
    }
    
    // Update navigation button states
    function updateNavButtons() {
        // Disable previous button if at start
        if (currentIndex === 0) {
            prevBtn.classList.add('disabled');
        } else {
            prevBtn.classList.remove('disabled');
        }
        
        // Disable next button if at end
        if (currentIndex === cards.length - 1) {
            nextBtn.classList.add('disabled');
        } else {
            nextBtn.classList.remove('disabled');
        }
    }
    
    // Navigate to previous card
    function goToPrevious() {
        if (currentIndex > 0) {
            currentIndex--;
            if (isMobile()) {
                showCard(currentIndex);
            }
            updateNavButtons();
        }
    }
    
    // Navigate to next card
    function goToNext() {
        if (currentIndex < cards.length - 1) {
            currentIndex++;
            if (isMobile()) {
                showCard(currentIndex);
            }
            updateNavButtons();
        }
    }
    
    // Event listeners for navigation buttons
    prevBtn.addEventListener('click', goToPrevious);
    nextBtn.addEventListener('click', goToNext);
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            goToPrevious();
        } else if (e.key === 'ArrowRight') {
            goToNext();
        }
    });
    
    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            updateCarouselMode();
        }, 250);
    });
    
    // Initialize
    updateCarouselMode();
    updateNavButtons();
}

/**
 * Add touch/swipe support for mobile
 */
function initTouchSupport() {
    const cardsContainer = document.querySelector('.ai-services-s-right');
    if (!cardsContainer) return;
    
    let touchStartX = 0;
    let touchEndX = 0;
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - next card
                document.querySelector('.nav-s-next').click();
            } else {
                // Swipe right - previous card
                document.querySelector('.nav-s-prev').click();
            }
        }
    }
    
    cardsContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    cardsContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
}

/**
 * Initialize all carousel features
 */
function init() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setup);
    } else {
        setup();
    }
    
    function setup() {
        initAIServicesCarousel();
        initTouchSupport();
    }
}

// Auto-initialize
init();

/**
 * Export functions for manual initialization
 */
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initAIServicesCarousel,
        initTouchSupport
    };
}