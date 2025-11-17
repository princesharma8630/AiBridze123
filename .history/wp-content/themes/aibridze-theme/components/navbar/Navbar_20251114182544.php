<nav class="navbar">
    <div class="navbar-container">
        <!-- Logo -->
        <div class="navbar-brand">
            <?php
            if (has_custom_logo()) {
                the_custom_logo();
            } else {
                ?>
                <a href="<?php echo esc_url(home_url('/')); ?>">
                    <h1><?php bloginfo('name'); ?></h1>
                </a>
                <?php
            }
            ?>
        </div>

        <!-- Mobile Menu Toggle -->
        <button class="navbar-toggle" id="navbar-toggle" aria-label="Toggle navigation">
            <span class="navbar-toggle-icon"></span>
            <span class="navbar-toggle-icon"></span>
            <span class="navbar-toggle-icon"></span>
        </button>

        <!-- Navigation Menu -->
        <div class="navbar-menu" id="navbar-menu">
            <?php
            wp_nav_menu(array(
                'theme_location' => 'primary',
                'menu_class'     => 'navbar-nav',
                'container'      => false,
                'fallback_cb'    => false,
            ));
            ?>
        </div>
    </div>
</nav>