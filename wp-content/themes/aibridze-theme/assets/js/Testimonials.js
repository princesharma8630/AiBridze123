/* ================================================
   TESTIMONIALS CAROUSEL - Interactive Functionality
   Smooth animations inspired by Flexlab.studio
   ================================================ */

/**
 * Initialize Testimonials Carousel
 * Handles sliding, navigation, auto-play
 */
function initTestimonialsCarousel() {
    const track = document.querySelector('.testimonials-services-track');
    const cards = document.querySelectorAll('.testimonial-services-card');
    const prevBtn = document.querySelector('.testimonial-services-prev');
    const nextBtn = document.querySelector('.testimonial-services-next');
    const dots = document.querySelectorAll('.testimonial-services-dot');
    
    if (!track || cards.length === 0) return;
    
    let currentIndex = 0;
    let isAnimating = false;
    let autoPlayInterval;
    
    // ================================================
    // CORE NAVIGATION FUNCTIONS
    // ================================================
    
    /**
     * Navigate to specific slide
     */
    function goToSlide(index) {
        if (isAnimating || index === currentIndex) return;
        if (index < 0 || index >= cards.length) return;
        
        isAnimating = true;
        
        // Update index
        const prevIndex = currentIndex;
        currentIndex = index;
        
        // Animate track
        const offset = -100 * currentIndex;
        track.style.transform = `translateX(${offset}%)`;
        
        // Update active states
        updateActiveStates();
        
        // Add animation classes
        cards[prevIndex].classList.remove('active');
        cards[currentIndex].classList.add('active');
        
        // Re-enable after animation
        setTimeout(() => {
            isAnimating = false;
        }, 600);
    }
    
    /**
     * Go to next slide
     */
    function goToNext() {
        const nextIndex = (currentIndex + 1) % cards.length;
        goToSlide(nextIndex);
    }
    
    /**
     * Go to previous slide
     */
    function goToPrev() {
        const prevIndex = (currentIndex - 1 + cards.length) % cards.length;
        goToSlide(prevIndex);
    }
    
    /**
     * Update active states for dots and buttons
     */
    function updateActiveStates() {
        // Update dots
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
        
        // Update navigation buttons (disable if at start/end)
        // For infinite loop, we don't disable buttons
        prevBtn.classList.remove('disabled');
        nextBtn.classList.remove('disabled');
    }
    
    // ================================================
    // EVENT LISTENERS
    // ================================================
    
    // Previous button
    prevBtn.addEventListener('click', () => {
        goToPrev();
        stopAutoPlay();
    });
    
    // Next button
    nextBtn.addEventListener('click', () => {
        goToNext();
        stopAutoPlay();
    });
    
    // Dots navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
            stopAutoPlay();
        });
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            goToPrev();
            stopAutoPlay();
        } else if (e.key === 'ArrowRight') {
            goToNext();
            stopAutoPlay();
        }
    });
    
    // ================================================
    // TOUCH/SWIPE SUPPORT
    // ================================================
    
    let touchStartX = 0;
    let touchEndX = 0;
    
    track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    track.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - next slide
                goToNext();
            } else {
                // Swipe right - previous slide
                goToPrev();
            }
            stopAutoPlay();
        }
    }
    
    // ================================================
    // AUTO-PLAY FUNCTIONALITY
    // ================================================
    
    function startAutoPlay() {
        stopAutoPlay(); // Clear any existing interval
        autoPlayInterval = setInterval(() => {
            goToNext();
        }, 5000); // Change slide every 5 seconds
    }
    
    function stopAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
        }
    }
    
    // Pause auto-play on hover
    const section = document.querySelector('.testimonials-services-section');
    if (section) {
        section.addEventListener('mouseenter', stopAutoPlay);
        section.addEventListener('mouseleave', startAutoPlay);
    }
    
    // Start auto-play on load
    startAutoPlay();
    
    // ================================================
    // INITIALIZE
    // ================================================
    
    // Set initial active state
    updateActiveStates();
    cards[0].classList.add('active');
}

/**
 * Scroll-based animations (Flexlab-style)
 */
function initScrollAnimations() {
    const section = document.querySelector('.testimonials-services-section');
    if (!section) return;
    
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add visible class when section comes into view
                    entry.target.classList.add('visible');
                    
                    // Trigger stagger animations for elements inside
                    const header = entry.target.querySelector('.testimonials-services-header');
                    const carousel = entry.target.querySelector('.testimonials-services-carousel');
                    
                    if (header) {
                        header.style.animation = 'fadeInDown 0.8s ease-out forwards';
                    }
                    
                    if (carousel) {
                        carousel.style.animation = 'fadeInUp 0.8s ease-out 0.2s both';
                    }
                    
                    // Unobserve after animation
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.2, // Trigger when 20% of section is visible
            rootMargin: '0px 0px -100px 0px' // Start animation slightly before it comes into view
        }
    );
    
    observer.observe(section);
}

/**
 * Parallax effect for background (optional)
 */
function initParallaxEffect() {
    const section = document.querySelector('.testimonials-services-section');
    if (!section) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.3; // Parallax speed
        
        // Apply parallax to background
        section.style.backgroundPositionY = `${rate}px`;
    }, { passive: true });
}

/**
 * Add entrance animations to cards
 */
function initCardAnimations() {
    const cards = document.querySelectorAll('.testimonial-services-card');
    
    cards.forEach((card, index) => {
        // Add initial animation delay
        card.style.animationDelay = `${index * 0.1}s`;
    });
}

/**
 * Pause animations when tab is not visible
 */
function initVisibilityControl() {
    document.addEventListener('visibilitychange', () => {
        const section = document.querySelector('.testimonials-services-section');
        if (!section) return;
        
        if (document.hidden) {
            section.style.animationPlayState = 'paused';
        } else {
            section.style.animationPlayState = 'running';
        }
    });
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
        initTestimonialsCarousel();
        initScrollAnimations();
        initCardAnimations();
        initVisibilityControl();
        // initParallaxEffect(); // Uncomment to enable parallax
    }
}

// Auto-initialize
init();

/**
 * Export functions for manual initialization
 */
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initTestimonialsCarousel,
        initScrollAnimations,
        initParallaxEffect,
        initCardAnimations,
        initVisibilityControl
    };
}