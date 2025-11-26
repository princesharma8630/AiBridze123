<?php
/**
 * Theme Functions for AIBridze Theme
 */

// Enqueue styles and scripts
function aibridze_enqueue_assets() {
    // Main theme stylesheet
    wp_enqueue_style('aibridze-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // Navbar CSS
    wp_enqueue_style(
        'navbar-style', 
        get_template_directory_uri() . '/components/navbar/Navbar.css',
        array(),
        '1.0.0'
    );
    
    
    // Hero CSS
    wp_enqueue_style(
        'hero-style',
        get_template_directory_uri() . '/components/hero/Hero.css',
        array(),
        '1.0.0',
       
    );
    // ===== : Page Styles CSS =====

     wp_enqueue_style(
        'page-styles',
        get_template_directory_uri() . '/page-styles.css',
        array(),
        '1.0.0'
    );
    // Partners CSS
    wp_enqueue_style(
        'partners-style',
        get_template_directory_uri() . '/components/partners/Partners.css',
        array(),
        '1.0.0'
    );

    // Industries CSS
    wp_enqueue_style(
        'industries-style',
        get_template_directory_uri() . '/components/industries/Industries.css',
        array(),
        '1.0.0'
    );

    // Portfolio Banner CSS
    wp_enqueue_style(
        'portfolio-banner-style',
        get_template_directory_uri() . '/components/portfolio-banner/PortfolioBanner.css',
        array(),
        '1.0.0'
    );
    
    // Services Cards CSS
    wp_enqueue_style(
        'services-cards-style',
        get_template_directory_uri() . '/components/services-card/Services-Card.css',
        array(),
        '1.0.0'
    );
    
    // Services Grid CSS
    wp_enqueue_style(
        'services-grid-style',
        get_template_directory_uri() . '/components/services-grid/ServicesGrid.css',
        array(),
        '1.0.0'
    );
    
    // AI Accessible Section CSS
    wp_enqueue_style(
        'ai-accessible-style',
        get_template_directory_uri() . '/components/ai-accessible/AiAccessible.css',
        array(),
        '1.0.0'
    );
    
    // Evolution Component CSS
    wp_enqueue_style(
        'evolution-style',
        get_template_directory_uri() . '/components/evolution/Evolution.css',
        array(),
        '1.0.0'
    );

    // AI Services Section CSS
    wp_enqueue_style(
        'ai-services-style',
        get_template_directory_uri() . '/components/ai-services/AIServices.css',
        array(),
        '1.0.0'
    );
    
    // Compliance Section CSS
    wp_enqueue_style(
        'compliance-style',
        get_template_directory_uri() . '/components/compliance/Compliance.css',
        array(),
        '1.0.0'
    );
    
    // Process Section CSS
    wp_enqueue_style(
        'process-style',
        get_template_directory_uri() . '/components/process/Process.css',
        array(),
        '1.0.0'
    );
    
    // Team Section CSS
    wp_enqueue_style(
        'team-style',
        get_template_directory_uri() . '/components/team/Team.css',
        array(),
        '1.0.0'
    );
    // Articles Section CSS
    wp_enqueue_style(
        'articles-style',
        get_template_directory_uri() . '/components/articles/Articles.css',
        array(),
        '1.0.0'
    );
    // faq section css
    wp_enqueue_style(
        'faq-style',
        get_template_directory_uri() . '/components/faq/Faq.css',
        array(),
        '1.0.0'
    );                 

    // ===== NEW: Footer CSS =====
    wp_enqueue_style(
        'footer-style',
        get_template_directory_uri() . '/components/footer/Footer.css',
        array(),
        '1.0.0'
    );

    // Services Hero CSS
    wp_enqueue_style(
    'services-hero-style',
    get_template_directory_uri() . '/services-components/hero/ServicesHero.css',
    array(),
    '1.0.0'
    );

    // Services Partner CSS
    wp_enqueue_style(
        'services-partner-style',
        get_template_directory_uri() . '/services-components/partner/ServicesPartner.css',
        array(),
        '1.0.0'
    );
    // Key Value Section CSS
    wp_enqueue_style(  
        'key-value-style',
        get_template_directory_uri() . '/services-components/key-value/KeyValue.css',
        array(),
        '1.0.0'
    );
    // why-now section css
    wp_enqueue_style(
        'why-now-style',
        get_template_directory_uri() . '/services-components/why-now/WhyNow.css',
        array(),
        '1.0.0'
    );
    // engagement Journey CSS
    wp_enqueue_style(       
        'engagement-journey-style',
        get_template_directory_uri() . '/services-components/engagementjourney/EngagementJourney.css',
        array(),
        '1.0.0'
    );

    // keytechnologies css
    wp_enqueue_style(
        'key-technologies-style',
        get_template_directory_uri() . '/services-components/key-technologies/KeyTechnologies.css',
        array(),
        '1.0.0'
    );

    // integrations css
    wp_enqueue_style(    
        'integrations-style',
        get_template_directory_uri() . '/services-components/integrations/Integrations.css',
        array(),
        '1.0.0'
    );
     // ai-services css
    wp_enqueue_style(    
        'ai-services-s-style',
        get_template_directory_uri() . '/services-components/ai-services/AiServices-s.css',
        array(),
        '1.0.0'
    );
    //benefis css
     
 wp_enqueue_style(    
        'benefits-style',
        get_template_directory_uri() . '/services-components/benefits/Benefits.css',
        array(),
        '1.0.0'
    );

    //verticalexpertise
    p_enqueue_style(    
        'verticalexpertise',
        get_template_directory_uri() . '/services-components/benefits/Benefits.css',
        array(),
        '1.0.0'
    );


    //==============================portfolio Banner JS====================//
  
     wp_enqueue_style(
        'portfolio-hero-style',
        get_template_directory_uri() . '/components/portfolio-hero/PortfolioHero.css',
        array(),
        '1.0.0'
    );
        
    //============================ JS Files ===================//
    
    // AI Accessible Section JavaScript
    wp_enqueue_script(
        'ai-accessible-script',
        get_template_directory_uri() . '/components/ai-accessible/AiAccessible.js',
        array(),
        '1.0.0',
        true
    );
    
    // Navbar JavaScript
    wp_enqueue_script(
        'navbar-script',
        get_template_directory_uri() . '/components/navbar/Navbar.js',
        array(),
        '1.0.0',
        true
    );
    
    // Hero JavaScript
    wp_enqueue_script(
        'hero-script',
        get_template_directory_uri() . '/components/hero/Hero.js',
        array('jquery'),
        '1.0.0',
        true
    );

    // Portfolio Banner JavaScript
    wp_enqueue_script(
        'portfolio-banner-script',
        get_template_directory_uri() . '/components/portfolio-banner/PortfolioBanner.js',
        array(),
        '1.0.0',
        true
    );


    //========portfolio Hero JS==================//
     wp_enqueue_script(
        'portfolio-hero-script',
        get_template_directory_uri() . '/components/portfolio-hero/PortfolioHero.js',
        array(),
        '1.0.0',
        true
    );
    //========== engagement Journey JS==================//
     wp_enqueue_script(
        'engagement-journey-script',
        get_template_directory_uri() . '/services-components/engagementjourney/EngagementJourney.js',
        array(),
        '1.0.0',
        true
    );

    //==========AiService from services page====
      wp_enqueue_script(
        'Aiservices-script',
        get_template_directory_uri(). '/service-components/ai-services/AiServices.js',
        array(),
        '1.0.0',
        true
      );

    //=============services grid sticky animation JS================//
    wp_enqueue_script(
        'services-sticky-animation-script',
        get_template_directory_uri() . '/components/services-grid/servicesGrid.js',
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
            padding-top: 74px;
        }
        @media screen and (max-width: 768px) {
            body.has-navbar {
                padding-top: 70px;
            }
        }
    </style>';
}
add_action('wp_head', 'aibridze_navbar_spacing');