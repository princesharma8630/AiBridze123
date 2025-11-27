<?php
/**
 * AiBridze Theme Functions
 * 
 * Professional WordPress theme following industry standards
 * 
 * @package AiBridze
 * @version 1.0.0
 */

// Security: Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Theme Setup
 */
function aibridze_theme_setup() {
    // Add theme support for various WordPress features
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ));
    add_theme_support('custom-logo', array(
        'height'      => 100,
        'width'       => 400,
        'flex-height' => true,
        'flex-width'  => true,
    ));
    add_theme_support('automatic-feed-links');
    
    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'aibridze'),
        'footer'  => __('Footer Menu', 'aibridze'),
    ));
}
add_action('after_setup_theme', 'aibridze_theme_setup');

/**
 * Enqueue Styles and Scripts
 */
function aibridze_enqueue_assets() {
    // Main theme stylesheet (style.css in root)
    wp_enqueue_style(
        'aibridze-style',
        get_stylesheet_uri(),
        array(),
        '1.0.0'
    );
    
    // ===== GLOBAL STYLES =====
    wp_enqueue_style(
        'aibridze-navbar',
        get_template_directory_uri() . '/assets/css/Navbar.css',
        array(),
        '1.0.0'
    );
    
    wp_enqueue_style(
        'aibridze-footer',
        get_template_directory_uri() . '/assets/css/Footer.css',
        array(),
        '1.0.0'
    );
    
    // ===== HOME PAGE STYLES =====
    wp_enqueue_style(
        'aibridze-hero',
        get_template_directory_uri() . '/assets/css/Hero.css',
        array(),
        '1.0.0'
    );
    
    wp_enqueue_style(
        'aibridze-ai-services',
        get_template_directory_uri() . '/assets/css/AiServices.css',
        array(),
        '1.0.0'
    );
    
    wp_enqueue_style(
        'aibridze-partners',
        get_template_directory_uri() . '/assets/css/Partners.css',
        array(),
        '1.0.0'
    );
    
    wp_enqueue_style(
        'aibridze-industries',
        get_template_directory_uri() . '/assets/css/industries.css',
        array(),
        '1.0.0'
    );
    
    wp_enqueue_style(
        'aibridze-evolution',
        get_template_directory_uri() . '/assets/css/Evolution.css',
        array(),
        '1.0.0'
    );
    
    wp_enqueue_style(
        'aibridze-services-grid',
        get_template_directory_uri() . '/assets/css/ServicesGrid.css',
        array(),
        '1.0.0'
    );
    
    wp_enqueue_style(
        'aibridze-services-card',
        get_template_directory_uri() . '/assets/css/Services-card.css',
        array(),
        '1.0.0'
    );
    
    wp_enqueue_style(
        'aibridze-process',
        get_template_directory_uri() . '/assets/css/Process.css',
        array(),
        '1.0.0'
    );
    
    wp_enqueue_style(
        'aibridze-team',
        get_template_directory_uri() . '/assets/css/Team.css',
        array(),
        '1.0.0'
    );
    
    wp_enqueue_style(
        'aibridze-compliance',
        get_template_directory_uri() . '/assets/css/Compliance.css',
        array(),
        '1.0.0'
    );
    
    wp_enqueue_style(
        'aibridze-ai-accessible',
        get_template_directory_uri() . '/assets/css/AiAccessible.css',
        array(),
        '1.0.0'
    );
    
    wp_enqueue_style(
        'aibridze-articles',
        get_template_directory_uri() . '/assets/css/Articles.css',
        array(),
        '1.0.0'
    );
    
    wp_enqueue_style(
        'aibridze-faq',
        get_template_directory_uri() . '/assets/css/Faq.css',
        array(),
        '1.0.0'
    );
    
    // ===== SERVICES PAGE STYLES =====
    wp_enqueue_style(
        'aibridze-services-hero',
        get_template_directory_uri() . '/assets/css/ServicesHero.css',
        array(),
        '1.0.0'
    );
    
    wp_enqueue_style(
        'aibridze-services-partner',
        get_template_directory_uri() . '/assets/css/ServicesPartner.css',
        array(),
        '1.0.0'
    );
    
    wp_enqueue_style(
        'aibridze-key-value',
        get_template_directory_uri() . '/assets/css/KeyValue.css',
        array(),
        '1.0.0'
    );
    
    wp_enqueue_style(
        'aibridze-why-now',
        get_template_directory_uri() . '/assets/css/whyNow.css',
        array(),
        '1.0.0'
    );
    
    wp_enqueue_style(
        'aibridze-engagement-journey',
        get_template_directory_uri() . '/assets/css/EngagementJourney.css',
        array(),
        '1.0.0'
    );
    
    wp_enqueue_style(
        'aibridze-key-technologies',
        get_template_directory_uri() . '/assets/css/KeyTechnologies.css',
        array(),
        '1.0.0'
    );
    
    wp_enqueue_style(
        'aibridze-integrations',
        get_template_directory_uri() . '/assets/css/Integrations.css',
        array(),
        '1.0.0'
    );
    
    wp_enqueue_style(
        'aibridze-ai-services-s',
        get_template_directory_uri() . '/assets/css/AiServices-s.css',
        array(),
        '1.0.0'
    );
    
    wp_enqueue_style(
        'aibridze-benefits',
        get_template_directory_uri() . '/assets/css/Benefits.css',
        array(),
        '1.0.0'
    );
    
    wp_enqueue_style(
        'aibridze-verticalexpertise',
        get_template_directory_uri() . '/assets/css/Verticalexpertise.css',
        array(),
        '1.0.0'
    );
    
    wp_enqueue_style(
        'aibridze-cta-services',
        get_template_directory_uri() . '/assets/css/CtaServices.css',
        array(),
        '1.0.0'
    );
    
    wp_enqueue_style(
        'aibridze-testimonials',
        get_template_directory_uri() . '/assets/css/Testimonials.css',
        array(),
        '1.0.0'
    );
    
    // ===== PORTFOLIO PAGE STYLES =====
    wp_enqueue_style(
        'aibridze-portfolio-hero',
        get_template_directory_uri() . '/assets/css/PortfolioHero.css',
        array(),
        '1.0.0'
    );
    
    wp_enqueue_style(
        'aibridze-portfolio-banner',
        get_template_directory_uri() . '/assets/css/PortfolioBanner.css',
        array(),
        '1.0.0'
    );

    




    //==========Industries Page Styles==========
    wp_enqueue_style(
        'aibridze-industries-hero',
        get_template_directory_uri() . '/assets/css/Industries-Hero.css',
        array(),
        '1.0.0'
    );


    wp_enqueue_style(
        'aibridze-industries-partner',
        get_template_directory_uri() . '/assets/css/Industries-Partner.css',
        array(),
        '1.0.0'
    );

    wp_enqueue_style(
        'aibridze-industries-solutions',
        get_template_directory_uri() . '/assets/css/IndustriesSolutions.css',
        array(),
        '1.0.0'
    );
    wp_enqueue_style(
        'aibridze-industries-solutions',
        get_template_directory_uri() . '/assets/css/.css',
        array(),
        '1.0.0'
    );

    
    
    // ===== ADDITIONAL STYLES =====
    wp_enqueue_style(
        'aibridze-page-style',
        get_template_directory_uri() . '/assets/css/page-style.css',
        array(),
        '1.0.0'
    );
    
    // ===== JAVASCRIPT FILES =====
    wp_enqueue_script(
        'aibridze-navbar',
        get_template_directory_uri() . '/assets/js/Navbar.js',
        array(),
        '1.0.0',
        true
    );
    
    wp_enqueue_script(
        'aibridze-hero',
        get_template_directory_uri() . '/assets/js/Hero.js',
        array(),
        '1.0.0',
        true
    );
    
    wp_enqueue_script(
        'aibridze-ai-accessible',
        get_template_directory_uri() . '/assets/js/AiAccessible.js',
        array(),
        '1.0.0',
        true
    );
    
    wp_enqueue_script(
        'aibridze-services-grid',
        get_template_directory_uri() . '/assets/js/ServicesGrid.js',
        array(),
        '1.0.0',
        true
    );
    
    wp_enqueue_script(
        'aibridze-portfolio-banner',
        get_template_directory_uri() . '/assets/js/PortfolioBanner.js',
        array(),
        '1.0.0',
        true
    );
    
    wp_enqueue_script(
        'aibridze-portfolio-hero',
        get_template_directory_uri() . '/assets/js/PortfolioHero.js',
        array(),
        '1.0.0',
        true
    );
    
    wp_enqueue_script(
        'aibridze-engagement-journey',
        get_template_directory_uri() . '/assets/js/EngagementJourney.js',
        array(),
        '1.0.0',
        true
    );
    
    wp_enqueue_script(
        'aibridze-ai-services',
        get_template_directory_uri() . '/assets/js/AiServices.js',
        array(),
        '1.0.0',
        true
    );
    
    wp_enqueue_script(
        'aibridze-verticalexpertise',
        get_template_directory_uri() . '/assets/js/Verticalexpertise.js',
        array(),
        '1.0.0',
        true
    );
    
    wp_enqueue_script(
        'aibridze-testimonials',
        get_template_directory_uri() . '/assets/js/Testimonials.js',
        array(),
        '1.0.0',
        true
    );
}
add_action('wp_enqueue_scripts', 'aibridze_enqueue_assets');

/**
 * Add custom body classes
 */
function aibridze_body_classes($classes) {
    $classes[] = 'aibridze-theme';
    if (is_front_page()) {
        $classes[] = 'home-page';
    }
    return $classes;
}
add_filter('body_class', 'aibridze_body_classes');

/**
 * Custom header spacing for fixed navbar
 */
function aibridze_custom_styles() {
    ?>
    <style>
        body.aibridze-theme {
            padding-top: 80px;
        }
        @media (max-width: 768px) {
            body.aibridze-theme {
                padding-top: 70px;
            }
        }
    </style>
    <?php
}
add_action('wp_head', 'aibridze_custom_styles');