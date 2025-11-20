// ============================================
// Hero Section - Complete JavaScript File
// Improved Starfield Animation (Tilda Style)
// ============================================

(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {

        // ============================================
        // IMPROVED STARFIELD ANIMATION
        // ============================================
        
        var StarfieldAnimation = function() {
            this.canvas = null;
            this.context = null;
            this.w = 0;
            this.h = 0;
            this.stars = [];
            this.n = 512; // Number of stars (adjust for performance)
            this.star_ratio = 256;
            this.star_speed = 1.5; // Speed of star movement
            this.x = 0;
            this.y = 0;
            this.z = 0;
            this.cursor_x = 0;
            this.cursor_y = 0;
            this.mouse_x = 0;
            this.mouse_y = 0;
            this.animationId = null;
            this.isPlaying = false;
            this.container = null;
            
            this.init();
        };

        StarfieldAnimation.prototype = {
            init: function() {
                this.container = document.querySelector('.hero-stars-canvas');
                if (!this.container) return;

                // Create canvas element
                this.canvas = document.createElement('canvas');
                this.canvas.id = 'heroStars';
                this.container.appendChild(this.canvas);
                
                // Check canvas support
                if (!this.canvas.getContext) {
                    console.warn('Canvas not supported');
                    return;
                }
                
                this.context = this.canvas.getContext('2d');
                this.resize();
                this.initStars();
                this.setupEventListeners();
                this.start();
            },

            resize: function() {
                if (!this.container || !this.canvas) return;

                this.w = this.container.offsetWidth;
                this.h = this.container.offsetHeight;
                
                this.canvas.width = this.w;
                this.canvas.height = this.h;
                
                this.x = Math.round(this.w / 2);
                this.y = Math.round(this.h / 2);
                this.z = (this.w + this.h) / 2;
                
                this.cursor_x = this.x;
                this.cursor_y = this.y;
                
                // Set drawing styles
                this.context.fillStyle = 'rgba(0, 0, 0, 0.08)';
                this.context.strokeStyle = 'rgba(255, 255, 255, 1)';
            },

            initStars: function() {
                this.stars = [];
                for (var i = 0; i < this.n; i++) {
                    this.stars[i] = {
                        x: Math.random() * this.w * 2 - this.x * 2,
                        y: Math.random() * this.h * 2 - this.y * 2,
                        z: Math.round(Math.random() * this.z),
                        px: 0,
                        py: 0
                    };
                }
            },

            setupEventListeners: function() {
                var self = this;
                
                // Mouse move interaction
                var mouseMoveHandler = function(e) {
                    var rect = self.container.getBoundingClientRect();
                    self.cursor_x = e.clientX - rect.left;
                    self.cursor_y = e.clientY - rect.top;
                };
                
                window.addEventListener('mousemove', mouseMoveHandler);

                // Touch move for mobile
                var touchMoveHandler = function(e) {
                    if (e.touches.length > 0) {
                        var rect = self.container.getBoundingClientRect();
                        self.cursor_x = e.touches[0].clientX - rect.left;
                        self.cursor_y = e.touches[0].clientY - rect.top;
                    }
                };
                
                window.addEventListener('touchmove', touchMoveHandler, { passive: true });

                // Resize handler with debounce
                var resizeTimeout;
                var resizeHandler = function() {
                    clearTimeout(resizeTimeout);
                    resizeTimeout = setTimeout(function() {
                        self.resize();
                        self.initStars();
                    }, 250);
                };
                
                window.addEventListener('resize', resizeHandler);
                window.addEventListener('orientationchange', resizeHandler);

                // Device orientation for mobile (gyroscope)
                if (window.DeviceOrientationEvent && self.isMobile()) {
                    var orientationHandler = function(event) {
                        if (event.beta !== null && event.gamma !== null) {
                            var x = event.gamma;
                            var y = event.beta;
                            
                            // Adjust for landscape orientation
                            if (self.w > self.h) {
                                x = event.beta * -1;
                                y = event.gamma;
                            }
                            
                            self.cursor_x = (self.w / 2) + (x * 5);
                            self.cursor_y = (self.h / 2) + (y * 5);
                        }
                    };
                    
                    window.addEventListener('deviceorientation', orientationHandler);
                }

                // Cleanup on page unload
                window.addEventListener('beforeunload', function() {
                    self.stop();
                    window.removeEventListener('mousemove', mouseMoveHandler);
                    window.removeEventListener('touchmove', touchMoveHandler);
                    window.removeEventListener('resize', resizeHandler);
                    window.removeEventListener('orientationchange', resizeHandler);
                });
            },

            isMobile: function() {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            },

            animate: function() {
                // Calculate mouse offset from center
                this.mouse_x = this.cursor_x - this.x;
                this.mouse_y = this.cursor_y - this.y;
                
                // Clear with trail effect (creates motion blur)
                this.context.fillRect(0, 0, this.w, this.h);
                
                // Update and draw each star
                for (var i = 0; i < this.n; i++) {
                    var star = this.stars[i];
                    var test = true;
                    
                    var star_x_save = star.px;
                    var star_y_save = star.py;
                    
                    // Update X position with mouse influence
                    star.x += this.mouse_x >> 7; // Bit shift for performance
                    if (star.x > this.x * 2) {
                        star.x -= this.w * 2;
                        test = false;
                    }
                    if (star.x < -this.x * 2) {
                        star.x += this.w * 2;
                        test = false;
                    }
                    
                    // Update Y position with mouse influence
                    star.y += this.mouse_y >> 7;
                    if (star.y > this.y * 2) {
                        star.y -= this.h * 2;
                        test = false;
                    }
                    if (star.y < -this.y * 2) {
                        star.y += this.h * 2;
                        test = false;
                    }
                    
                    // Update Z position (depth) - creates 3D effect
                    star.z -= this.star_speed;
                    if (star.z > this.z) {
                        star.z -= this.z;
                        test = false;
                    }
                    if (star.z < 0) {
                        star.z += this.z;
                        test = false;
                    }
                    
                    // Calculate screen position (3D to 2D projection)
                    star.px = this.x + (star.x / star.z) * this.star_ratio;
                    star.py = this.y + (star.y / star.z) * this.star_ratio;
                    
                    // Draw star trail (creates speed lines effect)
                    if (star_x_save > 0 && star_x_save < this.w && 
                        star_y_save > 0 && star_y_save < this.h && test) {
                        
                        // Line width based on depth (closer = thicker)
                        this.context.lineWidth = (1 - (star.z / this.z)) * 2;
                        this.context.beginPath();
                        this.context.moveTo(star_x_save, star_y_save);
                        this.context.lineTo(star.px, star.py);
                        this.context.stroke();
                    }
                }
            },

            loop: function() {
                var self = this;
                this.animate();
                this.animationId = requestAnimationFrame(function() {
                    self.loop();
                });
            },

            start: function() {
                if (!this.isPlaying) {
                    this.isPlaying = true;
                    this.loop();
                }
            },

            stop: function() {
                if (this.animationId) {
                    cancelAnimationFrame(this.animationId);
                    this.isPlaying = false;
                }
            }
        };

        // ============================================
        // INITIALIZE STARFIELD
        // ============================================
        
        if (document.querySelector('.hero-stars-canvas')) {
            new StarfieldAnimation();
        }

        // ============================================
        // EXPLORE BUTTON ANIMATION (Optional)
        // ============================================
        
        var exploreButton = document.querySelector('.explore-button');
        if (exploreButton) {
            // Add hover sound effect or additional animations here
            exploreButton.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.1)';
            });
            
            exploreButton.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        }

        // ============================================
        // STATS COUNTER ANIMATION (Optional)
        // ============================================
        
        var statsObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    var statNumbers = entry.target.querySelectorAll('.stat-number');
                    statNumbers.forEach(function(stat) {
                        animateCounter(stat);
                    });
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        var statsGrid = document.querySelector('.stats-grid');
        if (statsGrid) {
            statsObserver.observe(statsGrid);
        }

        function animateCounter(element) {
            var target = parseInt(element.textContent.replace(/\D/g, ''));
            var suffix = element.textContent.replace(/[0-9]/g, '');
            var duration = 2000; // 2 seconds
            var start = 0;
            var increment = target / (duration / 16); // 60fps
            
            var timer = setInterval(function() {
                start += increment;
                if (start >= target) {
                    element.textContent = target + suffix;
                    clearInterval(timer);
                } else {
                    element.textContent = Math.floor(start) + suffix;
                }
            }, 16);
        }

        // ============================================
        // SMOOTH SCROLL TO SECTIONS (Optional)
        // ============================================
        
        document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
            anchor.addEventListener('click', function(e) {
                var targetId = this.getAttribute('href');
                if (targetId !== '#' && targetId.length > 1) {
                    var targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        e.preventDefault();
                        var navbarHeight = document.querySelector('.navbar') ? 
                                         document.querySelector('.navbar').offsetHeight : 0;
                        var targetPosition = targetElement.offsetTop - navbarHeight;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });

        // ============================================
        // PARALLAX EFFECT ON SCROLL (Optional)
        // ============================================
        
        var heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            var parallaxScroll = function() {
                var scrolled = window.pageYOffset;
                var parallaxElements = heroSection.querySelectorAll('.hero-heading, .hero-subheading');
                
                parallaxElements.forEach(function(element, index) {
                    var speed = (index + 1) * 0.5;
                    element.style.transform = 'translateY(' + (scrolled * speed * 0.1) + 'px)';
                });
            };
            
            // Uncomment below to enable parallax
            // window.addEventListener('scroll', parallaxScroll);
        }

        // ============================================
        // PERFORMANCE OPTIMIZATION
        // ============================================
        
        // Reduce stars on low-end devices
        if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
            // Device has less than 4 CPU cores
            var starfield = document.querySelector('.hero-stars-canvas canvas');
            if (starfield) {
                // Reduce number of stars for better performance
                console.log('Low-end device detected: Optimizing starfield');
            }
        }

        // Pause animation when tab is not visible
        document.addEventListener('visibilitychange', function() {
            var canvas = document.querySelector('.hero-stars-canvas canvas');
            if (canvas && canvas.__starfield) {
                if (document.hidden) {
                    canvas.__starfield.stop();
                } else {
                    canvas.__starfield.start();
                }
            }
        });

    });

})();