<nav class="navbar">
    <div class="navbar-container">
        <!-- Logo -->
        <div class="navbar-logo">
            <a href="<?php echo esc_url(home_url('/')); ?>">
                <!-- Placeholder for logo - we'll add the actual logo later -->
                <span class="logo-text">AiBridze</span>
            </a>
        </div>

        <!-- Mobile Menu Toggle -->
        <button class="mobile-menu-toggle" id="mobileMenuToggle" aria-label="Toggle navigation" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
        </button>

        <!-- Navigation Menu -->
        <div class="navbar-menu">
            <ul class="nav-links">
                <li><a href="<?php echo esc_url(home_url('/portfolio')); ?>">Portfolio</a></li>
                <li><a href="<?php echo esc_url(home_url('/services')); ?>">Services</a></li>
                <li><a href="<?php echo esc_url(home_url('/industries')); ?>">Industries</a></li>
                <li><a href="<?php echo esc_url(home_url('/about-us')); ?>">About Us</a></li>
                <li><a href="<?php echo esc_url(home_url('/insights')); ?>">Insights</a></li>
            </ul>
        </div>

        <!-- Contact Button -->
        <div class="navbar-cta">
            <a href="<?php echo esc_url(home_url('/contact')); ?>" class="contact-btn">Contact Us</a>
        </div>
    </div>
</nav>