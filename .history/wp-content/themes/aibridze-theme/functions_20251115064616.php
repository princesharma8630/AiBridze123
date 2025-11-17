<?php
/**
 * Theme Functions for AIBridze Theme
 */

// Enqueue styles and scripts
function aibridze_enqueue_assets() {
    // Main theme stylesheet
    wp_enqueue_style('aibridze-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // Navbar CSS (note the lowercase to match actual file)
    wp_enqueue_style(
        'navbar-style', 
        get_template_directory_uri() . '/components/navbar/Navbar.css',
        array(),
        '1.0.0'
    );
    
    // Navbar JavaScript
    wp_enqueue_script(
        'navbar-script',
        get_template_directory_uri() . '/components/navbar/Navbar.js',
        array(),
        '1.0.0',
        true
    );
}
add_action('wp_enqueue_scripts', 'aibridze_enqueue_assets');

// Register navigation menus
function aibridze_register_menus() {
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'aibridze-theme'),
        'footer' => __('Footer Menu', 'aibridze-theme')
    ));
}
add_action('init', 'aibridze_register_menus');

// Theme setup
function aibridze_theme_setup() {
    // Add support for custom logo
    add_theme_support('custom-logo', array(
        'height'      => 100,
        'width'       => 400,
        'flex-height' => true,
        'flex-width'  => true,
    ));
    
    // Add support for title tag
    add_theme_support('title-tag');
    
    // Add support for post thumbnails
    add_theme_support('post-thumbnails');
    
    // Add support for HTML5 markup
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
}
add_action('after_setup_theme', 'aibridze_theme_setup');

// Add body class for navbar spacing
function aibridze_body_classes($classes) {
    $classes[] = 'has-navbar';
    return $classes;
}
add_filter('body_class', 'aibridze_body_classes');

// Add custom body padding for fixed navbar
function aibridze_navbar_spacing() {
    echo '<style>
        body.has-navbar {
            padding-top: 80px;
        }
        @media screen and (max-width: 768px) {
            body.has-navbar {
                padding-top: 70px;
            }
        }
    </style>';
}
add_action('wp_head', 'aibridze_navbar_spacing');
?>