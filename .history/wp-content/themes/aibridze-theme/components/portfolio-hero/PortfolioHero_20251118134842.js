// Portfolio Hero Stars Animation
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.createElement('canvas');
    const container = document.getElementById('portfolioHeroStarsCanvas');
    
    if (!container) return;
    
    container.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    // Set canvas size
    function setCanvasSize() {
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
    }
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Star configuration
    const stars = [];
    const numStars = 150;

    // Create stars
    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1.5 + 0.5,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            opacity: Math.random() * 0.5 + 0.3
        });
    }

    // Animation function
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        stars.forEach(star => {
            // Move star
            star.x += star.vx;
            star.y += star.vy;

            // Wrap around edges
            if (star.x < 0) star.x = canvas.width;
            if (star.x > canvas.width) star.x = 0;
            if (star.y < 0) star.y = canvas.height;
            if (star.y > canvas.height) star.y = 0;

            // Draw star
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
            ctx.fill();
        });

        requestAnimationFrame(animate);
    }

    animate();
});