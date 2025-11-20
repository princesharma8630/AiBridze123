// Portfolio Hero - 3D Starfield Animation (Based on Tilda starfield)
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('portfolioHeroStarsCanvas');
    if (!container) return;

    const canvas = document.createElement('canvas');
    container.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    // Configuration
    const config = {
        starColor: "rgba(255,255,255,1)",
        bgColor: "rgba(0,0,0,0.08)",
        quantity: 512,
        ratio: 256,
        speed: 1
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

        ctx.fillStyle = config.bgColor;
        ctx.strokeStyle = config.starColor;
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
                0,                               // x_save
                0                                // y_save
            ];
        }
    }

    // Track mouse movement
    function handleMouseMove(event) {
        const rect = canvas.getBoundingClientRect();
        cursor_x = event.clientX - rect.left;
        cursor_y = event.clientY - rect.top;
    }

    // Animation loop
    function animate() {
        mouse_x = cursor_x - x;
        mouse_y = cursor_y - y;

        // Clear with fade effect
        ctx.fillRect(0, 0, w, h);

        // Update and draw each star
        for(let i = 0; i < n; i++) {
            let test = true;
            let star_x_save = stars[i][3];
            let star_y_save = stars[i][4];

            // Update X position based on mouse
            stars[i][0] += mouse_x >> 7;
            if(stars[i][0] > x << 1) {
                stars[i][0] -= w << 1;
                test = false;
            }
            if(stars[i][0] < -x << 1) {
                stars[i][0] += w << 1;
                test = false;
            }

            // Update Y position based on mouse
            stars[i][1] += mouse_y >> 7;
            if(stars[i][1] > y << 1) {
                stars[i][1] -= h << 1;
                test = false;
            }
            if(stars[i][1] < -y << 1) {
                stars[i][1] += h << 1;
                test = false;
            }

            // Update Z position (depth)
            stars[i][2] -= star_speed;
            if(stars[i][2] > z) {
                stars[i][2] -= z;
                test = false;
            }
            if(stars[i][2] < 0) {
                stars[i][2] += z;
                test = false;
            }

            // Calculate screen position (3D projection)
            stars[i][3] = x + (stars[i][0] / stars[i][2]) * star_ratio;
            stars[i][4] = y + (stars[i][1] / stars[i][2]) * star_ratio;

            // Draw star trail
            if(star_x_save > 0 && star_x_save < w && 
               star_y_save > 0 && star_y_save < h && test) {
                ctx.lineWidth = (1 - star_color_ratio * stars[i][2]) * 2;
                ctx.beginPath();
                ctx.moveTo(star_x_save, star_y_save);
                ctx.lineTo(stars[i][3], stars[i][4]);
                ctx.stroke();
                ctx.closePath();
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

    // Start the starfield
    start();
});