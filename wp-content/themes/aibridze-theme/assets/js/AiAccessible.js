/**
 * AI Accessible Section - Ticker Animation
 * Ensures smooth infinite scrolling
 */

document.addEventListener('DOMContentLoaded', function() {
    const tickerContent = document.getElementById('tickerContent');
    
    if (tickerContent) {
        // Clone the ticker text multiple times for seamless loop
        const tickerText = tickerContent.innerHTML;
        tickerContent.innerHTML = tickerText + tickerText;
        
        // Optional: Adjust animation speed based on content width
        const adjustTickerSpeed = () => {
            const contentWidth = tickerContent.scrollWidth / 2;
            const duration = contentWidth / 50; // Adjust divisor for speed
            tickerContent.style.animationDuration = duration + 's';
        };
        
        adjustTickerSpeed();
        
        // Readjust on window resize
        window.addEventListener('resize', adjustTickerSpeed);
    }
});