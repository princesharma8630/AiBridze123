/* ================================================
   AI SERVICES CAROUSEL - Navigation Functionality
   ONLY CLASS NAMES CHANGED - Everything else identical
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
 * Auto-advance carousel (optional)
 * Uncomment to enable auto-play
 */
function initAutoAdvance() {
    const cards = document.querySelectorAll('.service-s-card');
    const nextBtn = document.querySelector('.nav-s-next');
    let currentIndex = 0;
    let autoPlayInterval;
    
    function autoAdvance() {
        if (window.innerWidth <= 768) {
            if (currentIndex < cards.length - 1) {
                nextBtn.click();
            } else {
                currentIndex = 0;
                // Reset to first card
                const prevBtn = document.querySelector('.nav-s-prev');
                while (currentIndex < cards.length - 1) {
                    prevBtn.click();
                }
            }
        }
    }
    
    function startAutoPlay() {
        stopAutoPlay();
        autoPlayInterval = setInterval(autoAdvance, 5000); // Change every 5 seconds
    }
    
    function stopAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
        }
    }
    
    // Start auto-play (uncomment to enable)
    // startAutoPlay();
    
    // Pause on hover
    const section = document.querySelector('.ai-services-s-section');
    if (section) {
        section.addEventListener('mouseenter', stopAutoPlay);
        section.addEventListener('mouseleave', startAutoPlay);
    }
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
 * Add dots/indicators (optional)
 */
function addCarouselDots() {
    const cards = document.querySelectorAll('.service-s-card');
    const navContainer = document.querySelector('.ai-services-s-nav');
    
    if (!navContainer || cards.length === 0) return;
    
    // Create dots container
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'carousel-dots';
    dotsContainer.style.cssText = `
        display: none;
        gap: 8px;
        margin-top: 20px;
    `;
    
    // Create dots
    cards.forEach((card, index) => {
        const dot = document.createElement('button');
        dot.className = 'carousel-dot';
        dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
        dot.style.cssText = `
            width: 8px;
            height: 8px;
            border-radius: 50%;
            border: none;
            background: rgba(255, 255, 255, 0.3);
            cursor: pointer;
            transition: all 0.3s ease;
            padding: 0;
        `;
        
        dot.addEventListener('click', () => {
            // Update current index and show card
            const prevBtn = document.querySelector('.nav-s-prev');
            const nextBtn = document.querySelector('.nav-s-next');
            // Logic to navigate to specific card
        });
        
        dotsContainer.appendChild(dot);
    });
    
    navContainer.parentNode.appendChild(dotsContainer);
    
    // Show dots on mobile
    if (window.innerWidth <= 768) {
        dotsContainer.style.display = 'flex';
    }
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
        // initAutoAdvance(); // Uncomment to enable auto-play
        // addCarouselDots(); // Uncomment to add dot indicators
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
        initTouchSupport,
        initAutoAdvance,
        addCarouselDots
    };
}