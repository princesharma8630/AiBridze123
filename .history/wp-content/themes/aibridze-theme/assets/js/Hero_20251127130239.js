// ============================================
// Hero Section - Smooth Moving Star Dots (Vanilla JS)
// ============================================

(function() {
    'use strict';

    // ============================================
    // STARFIELD CLASS - SMOOTH MOVING DOTS
    // ============================================
    
    class Starfield {
        constructor(element, options = {}) {
            this.element = element;
            this.settings = {
                starColor: "rgba(255, 255, 255, 0.39)",
                bgColor: "rgba(0,0,0,0)",
                mouseMove: true,
                mouseSpeed: 0.09,
                fps: 60,
                speed: 1.5,
                quantity: 512,
                ratio: 256,
                divclass: "starfield-canvas",
                ...options
            };

            this.n = this.settings.quantity;
            this.flag = true;
            this.test = true;
            this.w = 0;
            this.h = 0;
            this.x = 0;
            this.y = 0;
            this.z = 0;
            this.star_color_ratio = 0;
            this.star_ratio = this.settings.ratio;
            this.star_speed = this.settings.speed;
            this.star = new Array(this.n);
            
            this.cursor_x = 0;
            this.cursor_y = 0;
            this.mouse_x = 0;
            this.mouse_y = 0;

            this.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|IEMobile)/);
            this.orientationSupport = window.DeviceOrientationEvent !== undefined;
            this.portrait = null;
            
            this.isPlaying = false;
            this.animId = null;
            this.canvas = null;
            this.context = null;

            this.init();
        }

        init() {
            // Get element dimensions
            this.w = this.element.offsetWidth;
            this.h = this.element.offsetHeight;
            this.portrait = this.w < this.h;

            // Create canvas
            this.canvas = document.createElement('canvas');
            this.canvas.className = this.settings.divclass;
            this.canvas.style.position = 'absolute';
            this.canvas.style.top = '0';
            this.canvas.style.left = '0';
            this.canvas.style.width = '100%';
            this.canvas.style.height = '100%';
            this.canvas.style.zIndex = '1';

            this.element.appendChild(this.canvas);

            // Check canvas support
            if (!this.canvas.getContext) {
                console.error('Canvas not supported');
                return;
            }

            this.context = this.canvas.getContext('2d');
            this.canvas.width = this.w;
            this.canvas.height = this.h;

            // Initialize stars
            this.x = Math.round(this.w / 2);
            this.y = Math.round(this.h / 2);
            this.z = (this.w + this.h) / 2;
            this.star_color_ratio = 1 / this.z;
            this.cursor_x = this.x;
            this.cursor_y = this.y;

            for(let i = 0; i < this.n; i++) {
                this.star[i] = new Array(5);
                this.star[i][0] = Math.random() * this.w * 2 - this.x * 2;
                this.star[i][1] = Math.random() * this.h * 2 - this.y * 2;
                this.star[i][2] = Math.round(Math.random() * this.z);
                this.star[i][3] = 0;
                this.star[i][4] = 0;
            }

            console.log('Starfield initialized successfully');
        }

        resizer() {
            const oldStar = this.star.map(s => [...s]);
            const initW = this.canvas.width;
            const initH = this.canvas.height;

            this.w = this.element.offsetWidth;
            this.h = this.element.offsetHeight;
            this.x = Math.round(this.w / 2);
            this.y = Math.round(this.h / 2);
            this.portrait = this.w < this.h;

            const ratX = this.w / initW;
            const ratY = this.h / initH;

            this.canvas.width = this.w;
            this.canvas.height = this.h;

            for(let i = 0; i < this.n; i++) {
                this.star[i][0] = oldStar[i][0] * ratX;
                this.star[i][1] = oldStar[i][1] * ratY;
                this.star[i][3] = this.x + (this.star[i][0] / this.star[i][2]) * this.star_ratio;
                this.star[i][4] = this.y + (this.star[i][1] / this.star[i][2]) * this.star_ratio;
            }
        }

        anim() {
            this.mouse_x = this.cursor_x - this.x;
            this.mouse_y = this.cursor_y - this.y;
            
            // Complete clear - no trails
            this.context.clearRect(0, 0, this.w, this.h);

            for(let i = 0; i < this.n; i++) {
                this.test = true;
                
                // Smooth X movement
                this.star[i][0] += this.mouse_x >> 14;

                if(this.star[i][0] > this.x << 1) {
                    this.star[i][0] -= this.w << 1;
                    this.test = false;
                }
                if(this.star[i][0] < -this.x << 1) {
                    this.star[i][0] += this.w << 1;
                    this.test = false;
                }

                // Smooth Y movement
                this.star[i][1] += this.mouse_y >> 7;
                if(this.star[i][1] > this.y << 1) {
                    this.star[i][1] -= this.h << 1;
                    this.test = false;
                }
                if(this.star[i][1] < -this.y << 1) {
                    this.star[i][1] += this.h << 1;
                    this.test = false;
                }

                // Z direction speed (depth movement)
                this.star[i][2] -= this.star_speed;
                if(this.star[i][2] > this.z) {
                    this.star[i][2] -= this.z;
                    this.test = false;
                }
                if(this.star[i][2] < 0) {
                    this.star[i][2] += this.z;
                    this.test = false;
                }

                // Calculate current position
                this.star[i][3] = this.x + (this.star[i][0] / this.star[i][2]) * this.star_ratio;
                this.star[i][4] = this.y + (this.star[i][1] / this.star[i][2]) * this.star_ratio;

                // Draw smooth moving dot
                if(this.star[i][3] > 0
                && this.star[i][3] < this.w
                && this.star[i][4] > 0
                && this.star[i][4] < this.h) {
                    
                    // Size based on depth
                    let starSize = (1 - this.star_color_ratio * this.star[i][2]) * 2.5;
                    if (starSize < 0.5) starSize = 0.5;
                    
                    // Draw smooth circular dot
                    this.context.fillStyle = this.settings.starColor;
                    this.context.beginPath();
                    this.context.arc(this.star[i][3], this.star[i][4], starSize, 0, Math.PI * 2);
                    this.context.fill();
                }
            }
        }

        loop() {
            this.anim();
            this.animId = requestAnimationFrame(() => this.loop());
        }

        handleMouseMove(event) {
            this.cursor_x = event.pageX || event.clientX + document.documentElement.scrollLeft;
            this.cursor_y = event.pageY || event.clientY + document.documentElement.scrollTop;
        }

        handleOrientation(event) {
            if(event.beta !== null && event.gamma !== null) {
                let x = event.gamma;
                let y = event.beta;

                if (!this.portrait) {
                    x = event.beta * -1;
                    y = event.gamma;
                }

                this.cursor_x = (this.w / 2) + (x * 5);
                this.cursor_y = (this.h / 2) + (y * 5);
            }
        }

        setupEventListeners() {
            // Resize handler
            this.resizeHandler = () => this.resizer();
            window.addEventListener('resize', this.resizeHandler);
            window.addEventListener('orientationchange', this.resizeHandler);

            // Mouse/orientation handler
            if (this.settings.mouseMove) {
                if (this.orientationSupport && !this.desktop) {
                    this.orientationHandler = (e) => this.handleOrientation(e);
                    window.addEventListener('deviceorientation', this.orientationHandler);
                } else {
                    this.mouseMoveHandler = (e) => this.handleMouseMove(e);
                    window.addEventListener('mousemove', this.mouseMoveHandler);
                }
            }
        }

        start() {
            if (!this.isPlaying) {
                this.isPlaying = true;
                this.loop();
                this.setupEventListeners();
                console.log('Starfield animation started');
            }
            return this;
        }

        stop() {
            if (this.animId) {
                cancelAnimationFrame(this.animId);
                this.isPlaying = false;
            }
            
            // Remove event listeners
            window.removeEventListener('resize', this.resizeHandler);
            window.removeEventListener('orientationchange', this.resizeHandler);
            if (this.mouseMoveHandler) {
                window.removeEventListener('mousemove', this.mouseMoveHandler);
            }
            if (this.orientationHandler) {
                window.removeEventListener('deviceorientation', this.orientationHandler);
            }
            
            console.log('Starfield stopped');
        }
    }

    // ============================================
    // INITIALIZE ON DOM READY
    // ============================================
    
    function initStarfield() {
        const heroStarsCanvas = document.querySelector('.hero-stars-canvas');
        
        if (!heroStarsCanvas) {
            console.error('Element with class "hero-stars-canvas" not found');
            return;
        }

        console.log('Initializing smooth starfield...');
        
        const starfield = new Starfield(heroStarsCanvas, {
            starColor: "rgba(255, 255, 255, 0.39)",
            bgColor: "rgba(0,0,0,0)",
            mouseMove: true,
            speed: 1.5,
            quantity: 512,
            ratio: 264,
            fps: 60
        });

        starfield.start();

        // Pause when tab is hidden (performance optimization)
        document.addEventListener('visibilitychange', function() {
            if (document.hidden) {
                starfield.stop();
            } else {
                starfield.start();
            }
        });
    }

    // ============================================
    // ADDITIONAL FEATURES
    // ============================================
    
    function initAdditionalFeatures() {
        // Explore button animation
        const exploreButton = document.querySelector('.explore-button');
        if (exploreButton) {
            exploreButton.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.1)';
            });
            
            exploreButton.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        }

        // Stats counter animation
        function animateCounter(element) {
            const text = element.textContent;
            const target = parseInt(text.replace(/\D/g, ''));
            const suffix = text.replace(/[0-9]/g, '');
            const duration = 2000;
            let start = 0;
            const increment = target / (duration / 16);
            
            const timer = setInterval(function() {
                start += increment;
                if (start >= target) {
                    element.textContent = target + suffix;
                    clearInterval(timer);
                } else {
                    element.textContent = Math.floor(start) + suffix;
                }
            }, 16);
        }

        const statsObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const statNumbers = entry.target.querySelectorAll('.stat-number');
                    statNumbers.forEach(function(stat) {
                        animateCounter(stat);
                    });
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        const statsGrid = document.querySelector('.stats-grid');
        if (statsGrid) {
            statsObserver.observe(statsGrid);
        }

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId !== '#' && targetId.length > 1) {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        e.preventDefault();
                        const navbar = document.querySelector('.navbar');
                        const navbarHeight = navbar ? navbar.offsetHeight : 0;
                        const targetPosition = targetElement.offsetTop - navbarHeight;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }

    // ============================================
    // DOM READY - INITIALIZE EVERYTHING
    // ============================================
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            initStarfield();
            initAdditionalFeatures();
        });
    } else {
        initStarfield();
        initAdditionalFeatures();
    }

})();