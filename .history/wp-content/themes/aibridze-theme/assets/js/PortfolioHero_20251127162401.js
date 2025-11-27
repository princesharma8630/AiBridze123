// Portfolio Hero - 3D Starfield Animation (Smooth Moving Dots Only)
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('portfolioHeroStarsCanvas');
    if (!container) return;

    const canvas = document.createElement('canvas');
    container.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    // Configuration
    const config = {
        starColor: "rgba(255,255,255,0.8)",
        bgColor: "rgba(0,0,0,0)",  // Completely transparent
        quantity: 512,
        ratio: 256,
        speed: 5
    };

    // Variables
    let w, h, x, y, z;
    let star_color_ratio, star_ratio, star_speed;
    let cursor_x, cursor_y, mouse_x, mouse_y;
    let stars = [];
    let n = config.quantity;
    let animId;

    // Set canvas size
    function resize() {
        w = container.offsetWidth;
        h = container.offsetHeight;
        canvas.width = w;
        canvas.height = h;

        x = Math.round(w / 2);
        y = Math.round(h / 2);
        z = (w + h) / 2;
        star_color_ratio = 1 / z;
        star_ratio = config.ratio;
        star_speed = config.speed;

        cursor_x = x;
        cursor_y = y;
    }

    // Initialize stars
    function init() {
        resize();

        // Create stars (Big Bang)
        for(let i = 0; i < n; i++) {
            stars[i] = [
                Math.random() * w * 2 - x * 2,  // x
                Math.random() * h * 2 - y * 2,  // y
                Math.round(Math.random() * z),  // z
                0,                               // x_save (not used for dots)
                0                                // y_save (not used for dots)
            ];
        }
    }

    // Track mouse movement
    function handleMouseMove(event) {
        const rect = canvas.getBoundingClientRect();
        cursor_x = event.clientX - rect.left;
        cursor_y = event.clientY - rect.top;
    }

    // ============================================
    // ANIMATION LOOP - SMOOTH MOVING DOTS ONLY
    // ============================================
    function animate() {
        mouse_x = cursor_x - x;
        mouse_y = cursor_y - y;

        // COMPLETE CLEAR - No trails, perfectly clean background
        ctx.clearRect(0, 0, w, h);

        // Update and draw each star
        for(let i = 0; i < n; i++) {
            let test = true;

            // Smooth X movement based on mouse
            stars[i][0] += mouse_x >> 7;
            if(stars[i][0] > x << 1) {
                stars[i][0] -= w << 1;
                test = false;
            }
            if(stars[i][0] < -x << 1) {
                stars[i][0] += w << 1;
                test = false;
            }

            // Smooth Y movement based on mouse
            stars[i][1] += mouse_y >> 7;
            if(stars[i][1] > y << 1) {
                stars[i][1] -= h << 1;
                test = false;
            }
            if(stars[i][1] < -y << 1) {
                stars[i][1] += h << 1;
                test = false;
            }

            // Z direction speed (depth movement) - UNCHANGED
            stars[i][2] -= star_speed;
            if(stars[i][2] > z) {
                stars[i][2] -= z;
                test = false;
            }
            if(stars[i][2] < 0) {
                stars[i][2] += z;
                test = false;
            }

            // Calculate current screen position (3D projection)
            stars[i][3] = x + (stars[i][0] / stars[i][2]) * star_ratio;
            stars[i][4] = y + (stars[i][1] / stars[i][2]) * star_ratio;

            // ============================================
            // DRAW SMOOTH CIRCULAR DOT (NO LINES)
            // ============================================
            if(stars[i][3] > 0 && stars[i][3] < w && 
               stars[i][4] > 0 && stars[i][4] < h) {
                
                // Size based on depth (closer stars are bigger)
                let starSize = (1 - star_color_ratio * stars[i][2]) * 2.5;
                
                // Minimum visible size
                if (starSize < 0.5) starSize = 0.5;
                
                // Draw smooth circular dot at current position only
                ctx.fillStyle = config.starColor;
                ctx.beginPath();
                ctx.arc(stars[i][3], stars[i][4], starSize, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        animId = requestAnimationFrame(animate);
    }

    // Start animation
    function start() {
        init();
        canvas.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', resize);
        animate();
    }

    // Stop animation
    function stop() {
        cancelAnimationFrame(animId);
        canvas.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', resize);
    }

    // Pause when tab is not visible (performance optimization)
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            cancelAnimationFrame(animId);
            console.log('Starfield paused');
        } else {
            animate();
            console.log('Starfield resumed');
        }
    });

    // Start the starfield
    start();

    // Make stop function available globally if needed
    window.stopStarfield = stop;
});