<?php
/**
 * Get current page slug for active menu highlighting
 */
$current_page = '';
if (is_front_page()) {
    $current_page = 'home';
} elseif (is_page()) {
    $current_page = get_post_field('post_name', get_post());
}
?>

<nav class="navbar">
    <div class="navbar-container">
        <!-- Logo -->
        <div class="navbar-logo">
            <a href="<?php echo esc_url(home_url('/')); ?>">
                <?php if (has_custom_logo()) : ?>
                    <?php the_custom_logo(); ?>
                <?php else : ?>
                    <img src="<?php echo get_template_directory_uri(); ?>/assests/images/logo.png" alt="<?php bloginfo('name'); ?>" class="site-logo" />
                <?php endif; ?>
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
                <li class="<?php echo ($current_page === 'portfolio') ? 'current-menu-item' : ''; ?>">
                    <a href="<?php echo esc_url(home_url('/portfolio')); ?>">
                        <span class="menu-text">Portfolio</span>
                        <span class="menu-plus">+</span>
                    </a>
                </li>
                <li class="<?php echo ($current_page === 'services') ? 'current-menu-item' : ''; ?>">
                    <a href="<?php echo esc_url(home_url('/services')); ?>">
                        <span class="menu-text">Services</span>
                        <span class="menu-plus">+</span>
                    </a>
                </li>
                <li class="<?php echo ($current_page === 'industries') ? 'current-menu-item' : ''; ?>">
                    <a href="<?php echo esc_url(home_url('/industries')); ?>">
                        <span class="menu-text">Industries</span>
                        <span class="menu-plus">+</span>
                    </a>
                </li>
                <li class="<?php echo ($current_page === 'about-us') ? 'current-menu-item' : ''; ?>">
                    <a href="<?php echo esc_url(home_url('/about-us')); ?>">
                        <span class="menu-text">About Us</span>
                        <span class="menu-plus">+</span>
                    </a>
                </li>
                <li class="<?php echo ($current_page === 'insights') ? 'current-menu-item' : ''; ?>">
                    <a href="<?php echo esc_url(home_url('/insights')); ?>">
                        <span class="menu-text">Insights</span>
                        <span class="menu-plus">+</span>
                    </a>
                </li>
            </ul>
        </div>

        <!-- Contact Button -->
        <div class="navbar-cta">
            <a href="<?php echo esc_url(home_url('/contact')); ?>" class="contact-btn">Contact Us</a>
        </div>
    </div>
</nav>