<?php
/**
 * Header Template
 * 
 * Displays the document head and site header/navigation.
 * Called by get_header() in all template files.
 * 
 * @package AiBridze
 * @version 1.0.0
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site">
    <a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e('Skip to content', 'aibridze'); ?></a>

    <header id="masthead" class="site-header">
        <?php
        /**
         * Load Navigation Component
         * Located in: template-parts/global/Navbar.php
         */
        get_template_part('template-parts/global/Navbar');
        ?>
    </header>

    <div id="content" class="site-content">