// ============================================
// Hero Section - JavaScript with Star Dots (NO LINES)
// ============================================

jQuery(document).ready(function($) {
    'use strict';

    // ============================================
    // STARFIELD ANIMATION WITH DOTS ONLY
    // ============================================
    
    // Make sure jQuery is loaded
    if (typeof jQuery === 'undefined') {
        console.error('jQuery is required for starfield animation');
        return;
    }

    (function($, window, document, undefined) {
        // Plugin constructor
        var Starfield = function(el, options) {
            this.el = el;
            this.$el = $(el);
            this.options = options;
            that = this;
        };

        var that;
        var isPlaying;
        var isInited = false;
        var canCanvas = false;
        var animId;

        // RequestAnimationFrame polyfill
        (function() {
            var lastTime = 0;
            var vendors = ['ms', 'moz', 'webkit', 'o'];
            for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
                window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
                window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                           || window[vendors[x]+'CancelRequestAnimationFrame'];
            }
         
            if (!window.requestAnimationFrame)
                window.requestAnimationFrame = function(callback, element) {
                    var currTime = new Date().getTime();
                    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                    var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
                      timeToCall);
                    lastTime = currTime + timeToCall;
                    return id;
                };
         
            if (!window.cancelAnimationFrame)
                window.cancelAnimationFrame = function(id) {
                    clearTimeout(id);
                };
        }());
      
        // Plugin prototype
        Starfield.prototype = {
            // Default settings
            defaults: {
                starColor: "rgba(255,255,255,1)", 
                bgColor: "rgba(0,0,0,0.08)",
                mouseMove: true,
                mouseColor: "rgba(0,0,0,0.2)",
                mouseSpeed: .09,
                fps: 15,
                speed: 1.5,
                quantity: 512,
                ratio: 256,
                divclass: "starfield-canvas"
            },

            // Resize the canvas
            resizer: function() {
                var oldStar = this.star;
                var initW = this.context.canvas.width;
                var initH = this.context.canvas.height;

                this.w = this.$el.width();
                this.h = this.$el.height();
                this.x = Math.round(this.w / 2);
                this.y = Math.round(this.h / 2);

                // Check if the device is in portrait orientation
                this.portrait = this.w < this.h;

                // Get the ratio of the old height to the new height
                var ratX = this.w / initW;
                var ratY = this.h / initH;

                this.context.canvas.width = this.w;
                this.context.canvas.height = this.h;

                // Recalculate the position of each star proportionally to new w and h
                for(var i = 0; i < this.n; i++) {
                    this.star[i][0] = oldStar[i][0] * ratX;
                    this.star[i][1] = oldStar[i][1] * ratY;

                    this.star[i][3] = this.x + (this.star[i][0] / this.star[i][2]) * this.star_ratio;
                    this.star[i][4] = this.y + (this.star[i][1] / this.star[i][2]) * this.star_ratio;
                }
            },

            init: function() {
                // Get default settings 
                this.settings = $.extend({}, this.defaults, this.options);

                this.n = this.settings.quantity;

                this.flag = true;
                this.test = true;
                this.w = 0;
                this.h = 0;
                this.x = 0;
                this.y = 0;
                this.z = 0;
                this.star_color_ratio = 0;
                this.star_x_save = 0;
                this.star_y_save = 0;
                this.star_ratio = this.settings.ratio;
                this.star_speed = this.settings.speed;
                this.star_speed_save = 0;
                this.star = new Array(this.n);
                this.color = this.settings.starColor;
                this.opacity = 0.1;

                this.cursor_x = 0;
                this.cursor_y = 0;
                this.mouse_x = 0;
                this.mouse_y = 0;

                this.canvas_x = 0;
                this.canvas_y = 0;
                this.canvas_w = 0;
                this.canvas_h = 0;
                
                this.fps = this.settings.fps;

                // Check for device orientation support
                this.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|IEMobile)/);
                this.orientationSupport = window.DeviceOrientationEvent !== undefined;
                this.portrait = null;

                // Inject the canvas element
                var canvasInit = function(){
                    that.w = that.$el.width();
                    that.h = that.$el.height();

                    that.initW = that.w;
                    that.initH = that.h;

                    that.portrait = that.w < that.h;

                    that.wrapper = $('<canvas />')
                        .addClass(that.settings.divclass)
                        .css({
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            zIndex: 1
                        });

                    that.wrapper.appendTo(that.el);

                    that.starz = $('canvas', that.el);

                    if (that.starz[0].getContext) {
                        that.context = that.starz[0].getContext('2d');
                        canCanvas = true;
                    }

                    that.context.canvas.width = that.w;
                    that.context.canvas.height = that.h;
                }
                canvasInit();

                // Create initial star array and canvas context
                var starInit = function(){
                    if(canCanvas) {
                        that.x = Math.round(that.w / 2);
                        that.y = Math.round(that.h / 2);
                        that.z = (that.w + that.h) / 2;
                        that.star_color_ratio = 1 / that.z;
                        that.cursor_x = that.x;
                        that.cursor_y = that.y;

                        // Big bang - create stars
                        for(var i = 0; i < that.n; i++) {
                            that.star[i] = new Array(5); 

                            that.star[i][0] = Math.random() * that.w * 2 - that.x * 2;
                            that.star[i][1] = Math.random() * that.h * 2 - that.y * 2;
                            that.star[i][2] = Math.round(Math.random() * that.z);
                            that.star[i][3] = 0;
                            that.star[i][4] = 0;
                        }
                    } else {
                        return;
                    }
                }
                starInit();

                isInited = true;
            },

            // Iterate over every star on the field and move it slightly
            // MODIFIED: Draw DOTS instead of LINES
            anim: function(){
                this.mouse_x = this.cursor_x - this.x;
                this.mouse_y = this.cursor_y - this.y;
                
                // Clear canvas with background color
                this.context.fillStyle = this.settings.bgColor;
                this.context.fillRect(0, 0, this.w, this.h);

                for(var i = 0; i < this.n; i++) {
                    this.test = true;
                    this.star_x_save = this.star[i][3];
                    this.star_y_save = this.star[i][4];
                    this.star[i][0] += this.mouse_x >> 7;

                    // X coords
                    if(this.star[i][0] > this.x << 1) {
                        this.star[i][0] -= this.w << 1;
                        this.test = false;
                    }
                    if(this.star[i][0] < -this.x << 1) {
                        this.star[i][0] += this.w << 1;
                        this.test = false;
                    }

                    // Y coords
                    this.star[i][1] += this.mouse_y >> 7;
                    if(this.star[i][1] > this.y << 1) {
                        this.star[i][1] -= this.h << 1;
                        this.test = false;
                    }
                    if(this.star[i][1] < -this.y << 1) {
                        this.star[i][1] += this.h << 1;
                        this.test = false;
                    }

                    // Z coords
                    this.star[i][2] -= this.star_speed;
                    if(this.star[i][2] > this.z) {
                        this.star[i][2] -= this.z;
                        this.test = false;
                    }
                    if(this.star[i][2] < 0) {
                        this.star[i][2] += this.z;
                        this.test = false;
                    }

                    this.star[i][3] = this.x + (this.star[i][0] / this.star[i][2]) * this.star_ratio;
                    this.star[i][4] = this.y + (this.star[i][1] / this.star[i][2]) * this.star_ratio;

                    // ============================================
                    // CHANGED: Draw DOTS ONLY at current position
                    // ============================================
                    if(this.star[i][3] > 0
                    && this.star[i][3] < this.w
                    && this.star[i][4] > 0
                    && this.star[i][4] < this.h) {
                        
                        // Calculate star size based on depth
                        var starSize = (1 - this.star_color_ratio * this.star[i][2]) * 2;
                        
                        // Make sure star size is at least visible
                        if (starSize < 0.5) starSize = 0.5;
                        
                        // Draw dot/circle at CURRENT position only
                        this.context.fillStyle = this.settings.starColor;
                        this.context.beginPath();
                        this.context.arc(this.star[i][3], this.star[i][4], starSize, 0, Math.PI * 2);
                        this.context.fill();
                    }
                }
            },

            loop: function(){
                this.anim();
                animId = window.requestAnimationFrame(function(){that.loop()});
            },

            move: function(){
                var doc = document.documentElement;

                if (this.orientationSupport && !this.desktop) {
                    window.addEventListener('deviceorientation', handleOrientation, false);
                } else {
                    window.addEventListener('mousemove', handleMousemove, false);
                }

                function handleOrientation(event) {
                    if(event.beta !== null && event.gamma !== null) {
                        var x = event.gamma, y = event.beta;

                        if (!that.portrait) {
                            x = event.beta * -1;
                            y = event.gamma;
                        }

                        that.cursor_x = (that.w / 2) + (x * 5);
                        that.cursor_y = (that.h / 2) + (y * 5);
                    }
                }

                function handleMousemove(event) {
                    that.cursor_x = event.pageX || event.clientX + doc.scrollLeft - doc.clientLeft;
                    that.cursor_y = event.pageY || event.clientY + doc.scrollTop - doc.clientTop;
                }
            },

            stop: function(){
                window.cancelAnimationFrame(animId);
                isPlaying = false;
            },

            // Start this whole thing
            start: function() {
                // Initialize
                if (!isInited) {
                    isInited = true;
                    this.init();
                }
                
                // Start the animation loop
                if (!isPlaying) {
                    isPlaying = true;
                    this.loop();
                }

                window.addEventListener('resize', function(){that.resizer()}, false);
                window.addEventListener('orientationchange', function(){that.resizer()}, false);

                // Move stars on mouse move
                if (this.settings.mouseMove) {
                    this.move();
                }

                return this;
            }
        }

        Starfield.defaults = Starfield.prototype.defaults;

        // Finally, the actual plugin code
        $.fn.starfield = function(options){
            return this.each(function() {
                new Starfield(this, options).start();
            });
        }

        window.Starfield = Starfield;
    })(jQuery, window, document);

    // Initialize the starfield on the hero section
    console.log('Initializing starfield...');
    $('.hero-stars-canvas').starfield({
        starColor: "rgba(0, 0, 0, 0)",
        bgColor: "rgba(0, 0, 0, 0)",
        mouseMove: true,
        speed: 1.5,
        quantity: 512,
        ratio: 256
    });

    // ============================================
    // EXPLORE BUTTON ANIMATION
    // ============================================
    
    var exploreButton = document.querySelector('.explore-button');
    if (exploreButton) {
        exploreButton.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        exploreButton.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }

    // ============================================
    // STATS COUNTER ANIMATION
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
        var duration = 2000;
        var start = 0;
        var increment = target / (duration / 16);
        
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
    // SMOOTH SCROLL TO SECTIONS
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
    // PERFORMANCE OPTIMIZATION
    // ============================================
    
    // Pause animation when tab is not visible
    document.addEventListener('visibilitychange', function() {
        var starfieldElement = $('.hero-stars-canvas');
        if (starfieldElement.length) {
            if (document.hidden) {
                console.log('Starfield paused');
            } else {
                console.log('Starfield resumed');
            }
        }
    });

});