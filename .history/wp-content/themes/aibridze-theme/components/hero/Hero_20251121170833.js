// ============================================
// Hero Section - Smooth Moving Star Dots
// ============================================

jQuery(document).ready(function($) {
    'use strict';

    // ============================================
    // STARFIELD ANIMATION - SMOOTH MOVING DOTS
    // ============================================
    
    if (typeof jQuery === 'undefined') {
        console.error('jQuery is required for starfield animation');
        return;
    }

    (function($, window, document, undefined) {
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
      
        Starfield.prototype = {
            defaults: {
                starColor: "rgba(255,255,255,1)", 
                bgColor: "rgba(0,0,0,0)",
                mouseMove: true,
                mouseColor: "rgba(0,0,0,1)",
                mouseSpeed: .09,
                fps: 60,
                speed: 1,
                quantity: 4012,
                ratio: 20,
                divclass: "starfield-canvas"
            },

            resizer: function() {
                var oldStar = this.star;
                var initW = this.context.canvas.width;
                var initH = this.context.canvas.height;

                this.w = this.$el.width();
                this.h = this.$el.height();
                this.x = Math.round(this.w / 2);
                this.y = Math.round(this.h / 2);

                this.portrait = this.w < this.h;

                var ratX = this.w / initW;
                var ratY = this.h / initH;

                this.context.canvas.width = this.w;
                this.context.canvas.height = this.h;

                for(var i = 0; i < this.n; i++) {
                    this.star[i][0] = oldStar[i][0] * ratX;
                    this.star[i][1] = oldStar[i][1] * ratY;
                    this.star[i][3] = this.x + (this.star[i][0] / this.star[i][2]) * this.star_ratio;
                    this.star[i][4] = this.y + (this.star[i][1] / this.star[i][2]) * this.star_ratio;
                }
            },

            init: function() {
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
                this.opacity = 1;

                this.cursor_x = 0;
                this.cursor_y = 0;
                this.mouse_x = 0;
                this.mouse_y = 0;

                this.canvas_x = 0;
                this.canvas_y = 0;
                this.canvas_w = 0;
                this.canvas_h = 0;
                
                this.fps = this.settings.fps;

                this.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|IEMobile)/);
                this.orientationSupport = window.DeviceOrientationEvent !== undefined;
                this.portrait = null;

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

                var starInit = function(){
                    if(canCanvas) {
                        that.x = Math.round(that.w / 2);
                        that.y = Math.round(that.h / 2);
                        that.z = (that.w + that.h) / 2;
                        that.star_color_ratio = 1 / that.z;
                        that.cursor_x = that.x;
                        that.cursor_y = that.y;

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

            // ============================================
            // SMOOTH MOVING DOTS - COMPLETELY CLEAR BACKGROUND
            // ============================================
            anim: function(){
                this.mouse_x = this.cursor_x - this.x;
                this.mouse_y = this.cursor_y - this.y;
                
                // COMPLETE CLEAR - No trails, perfectly clean
                this.context.clearRect(0, 0, this.w, this.h);

                for(var i = 0; i < this.n; i++) {
                    this.test = true;
                    this.star_x_save = this.star[i][3];
                    this.star_y_save = this.star[i][4];
                    
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

                    // Draw smooth moving dot at current position
                    if(this.star[i][3] > 0
                    && this.star[i][3] < this.w
                    && this.star[i][4] > 0
                    && this.star[i][4] < this.h) {
                        
                        // Size based on depth (closer = bigger)
                        var starSize = (1 - this.star_color_ratio * this.star[i][2]) * 2.5;
                        
                        if (starSize < 0.5) starSize = 0.5;
                        
                        // Draw smooth circular dot
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

            start: function() {
                if (!isInited) {
                    isInited = true;
                    this.init();
                }
                
                if (!isPlaying) {
                    isPlaying = true;
                    this.loop();
                }

                window.addEventListener('resize', function(){that.resizer()}, false);
                window.addEventListener('orientationchange', function(){that.resizer()}, false);

                if (this.settings.mouseMove) {
                    this.move();
                }

                return this;
            }
        }

        Starfield.defaults = Starfield.prototype.defaults;

        $.fn.starfield = function(options){
            return this.each(function() {
                new Starfield(this, options).start();
            });
        }

        window.Starfield = Starfield;
    })(jQuery, window, document);

    // Initialize with smooth settings
    console.log('Initializing smooth starfield...');
    $('.hero-stars-canvas').starfield({
        starColor: "rgba(218, 183, 183, 0.8)",
        bgColor: "rgba(0,0,0,0)",
        mouseMove: true,
        speed: 1.5,
        quantity: 1012,
        ratio: 1000,
        fps: 60
    });

    // ============================================
    // ADDITIONAL FEATURES
    // ============================================
    
    // Explore button animation
    var exploreButton = document.querySelector('.explore-button');
    if (exploreButton) {
        exploreButton.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        exploreButton.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }

    // Stats counter animation
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

    // Smooth scroll
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

    // Performance: Pause when tab hidden
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