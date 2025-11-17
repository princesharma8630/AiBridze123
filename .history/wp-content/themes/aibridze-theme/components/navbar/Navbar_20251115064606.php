<nav class="navbar">
    <div class="navbar-container">
        <!-- Logo -->
        <div class="navbar-logo">
            <?php
            if (has_custom_logo()) {
                the_custom_logo();
            } else {
                ?>
                <a href="<?php echo esc_url(home_url('/')); ?>">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo.png" alt="<?php bloginfo('name'); ?>" />
                </a>
                <?php
            }
            ?>
        </div>

        <!-- Mobile Menu Toggle -->
        <button class="mobile-menu-toggle" id="mobileMenuToggle" aria-label="Toggle navigation" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
        </button>

        <!-- Navigation Menu -->
        <div class="navbar-menu">
            <?php
            wp_nav_menu(array(
                'theme_location' => 'primary',
                'menu_class'     => 'nav-links',
                'container'      => false,
                'fallback_cb'    => false,
            ));
            ?>
        </div>

        <!-- Contact Button -->
        <div class="navbar-cta">
            <a href="<?php echo esc_url(home_url('/contact')); ?>" class="contact-btn">Contact Us</a>
        </div>
    </div>
</nav>