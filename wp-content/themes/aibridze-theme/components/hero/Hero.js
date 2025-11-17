// Hero Stars Animation
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('heroStars');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let stars = [];
    let animationFrameId;

    // Set canvas size
    function resizeCanvas() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }

    // Star class
    class Star {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.2;
            this.speedY = (Math.random() - 0.5) * 0.2;
            this.opacity = Math.random() * 0.5 + 0.3;
            this.twinkleSpeed = Math.random() * 0.02 + 0.01;
            this.twinkleDirection = Math.random() > 0.5 ? 1 : -1;
        }

        update() {
            // Move star
            this.x += this.speedX;
            this.y += this.speedY;

            // Wrap around screen
            if (this.x < 0) this.x = canvas.width;
            if (this.x > canvas.width) this.x = 0;
            if (this.y < 0) this.y = canvas.height;
            if (this.y > canvas.height) this.y = 0;

            // Twinkle effect
            this.opacity += this.twinkleSpeed * this.twinkleDirection;
            if (this.opacity >= 0.8 || this.opacity <= 0.2) {
                this.twinkleDirection *= -1;
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
            ctx.fill();
        }
    }

    // Initialize stars
    function initStars() {
        stars = [];
        const numberOfStars = Math.floor((canvas.width * canvas.height) / 8000);
        for (let i = 0; i < numberOfStars; i++) {
            stars.push(new Star());
        }
    }

    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        stars.forEach(star => {
            star.update();
            star.draw();
        });

        animationFrameId = requestAnimationFrame(animate);
    }

    // Initialize
    resizeCanvas();
    initStars();
    animate();

    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            resizeCanvas();
            initStars();
        }, 250);
    });

    // Cleanup on page unload
    window.addEventListener('beforeunload', function() {
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
    });
});