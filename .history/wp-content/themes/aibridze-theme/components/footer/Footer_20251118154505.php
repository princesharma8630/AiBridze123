<footer class="site-footer">
    
    <!-- Video Background -->
    <div class="footer-video-bg">
        <video autoplay muted loop playsinline>
            <source src="<?php echo get_template_directory_uri(); ?>/assests/Video/footer-background.mp4" type="video/mp4">
        </video>
    </div>
    
    <!-- Blue Gradient Overlay -->
    <div class="footer-overlay"></div>
    
    <div class="footer-container">
        
        <!-- Left Column - Contact Info -->
        <div class="footer-left">
            
            <!-- Main Heading -->
            <h2 class="footer-heading">
                We are always ready<br>
                to help you!
            </h2>
            
            <!-- Description -->
            <p class="footer-description">
                Drop us a message anytime, and we'll get back to you as<br>
                soon as possible.
            </p>
            
            <!-- Contact Information Grid -->
            <div class="footer-info-grid">
                
                <!-- Call Center -->
                <div class="footer-info-block">
                    <h3 class="footer-info-title">CALL CENTER</h3>
                    <a href="tel:+917065169433" class="footer-info-text">+91 70651 69433</a>
                    <a href="tel:+918826530504" class="footer-info-text">+91 88265 30504</a>
                </div>
                
                <!-- Location -->
                <div class="footer-info-block">
                    <h3 class="footer-info-title">OUR LOCATION</h3>
                    <p class="footer-info-text">
                        KR Signature Tower,<br>
                        PLOT, Street Number 3,<br>
                        Sector 135, Noida, Uttar Pradesh 201304
                    </p>
                </div>
                
                <!-- Email -->
                <div class="footer-info-block">
                    <h3 class="footer-info-title">EMAIL</h3>
                    <a href="mailto:sales@aibridze.com" class="footer-info-text">sales@aibridze.com</a>
                </div>
                
                <!-- Social Network -->
                <div class="footer-info-block">
                    <h3 class="footer-info-title">SOCIAL NETWORK</h3>
                    <div class="footer-social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                        </a>
                    </div>
                </div>
                
            </div>
            
        </div>
        
        <!-- Right Column - Contact Form -->
        <div class="footer-right">
            <div class="footer-form-card">
                
                <h3 class="form-heading">FILL THE FORM</h3>
                
                <form action="<?php echo esc_url(admin_url('admin-post.php')); ?>" method="post" class="contact-form" id="footerContactForm">
                    <input type="hidden" name="action" value="footer_contact_form">
                    <?php wp_nonce_field('footer_contact_form_nonce', 'footer_nonce'); ?>
                    
                    <!-- Full Name -->
                    <div class="form-group">
                        <label for="fullName">Full Name</label>
                        <input type="text" id="fullName" name="full_name" required placeholder="Jay Bronco">
                    </div>
                    
                    <!-- Email -->
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" required placeholder="Jaybronco@gmail.com">
                    </div>
                    
                    <!-- Designation -->
                    <div class="form-group">
                        <label for="designation">Designation</label>
                        <input type="text" id="designation" name="designation" required placeholder="Sales Executive">
                    </div>
                    
                    <!-- Budget Range -->
                    <div class="form-group">
                        <label for="budget">Your Preferred Budget Range</label>
                        <select id="budget" name="budget_range" required>
                            <option value="">Select Budget Range</option>
                            <option value="under-10k">Under $10,000</option>
                            <option value="10k-25k">$10,000 - $25,000</option>
                            <option value="25k-50k">$25,000 - $50,000</option>
                            <option value="50k-100k">$50,000 - $100,000</option>
                            <option value="over-100k">Over $100,000</option>
                        </select>
                    </div>
                    
                    <!-- Message -->
                    <div class="form-group">
                        <label for="message">How can we help you?</label>
                        <textarea id="message" name="message" rows="4" required placeholder="Write Here..."></textarea>
                    </div>
                    
                    <!-- Captcha -->
                    <div class="form-group captcha-group">
                        <label for="captcha">3 + 4 =</label>
                        <input type="number" id="captcha" name="captcha" required placeholder="" min="0" max="99">
                    </div>
                    
                    <!-- Submit Button -->
                    <button type="submit" class="form-submit-btn">Contact Us</button>
                    
                </form>
                
            </div>
        </div>
        
    </div>
    
    <!-- Copyright Bar -->
    <div class="footer-copyright">
        <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. All rights reserved.</p>
    </div>
    
</footer>