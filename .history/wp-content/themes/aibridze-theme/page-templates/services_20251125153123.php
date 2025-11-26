<?php
/**
 * Template Name: Services Page
 * Template Post Type: page
 * Description: Custom template for Services page showcasing all service offerings
 * 
 * This template displays comprehensive information about AiBridze services,
 * including hero section, partner integrations, benefits, and call-to-actions.
 * 
 * @package AiBridze
 * @version 1.0.0
 */

get_header(); 
?>

<main id="primary" class="site-main services-page">

    <?php
    /**
     * Services Hero Section
     * Main banner with services headline and introduction
     */
    get_template_part('template-parts/services/ServicesHero');
    ?>

    <?php
    /**
     * Services Partners Section
     * Technology partners and integrations
     */
    get_template_part('template-parts/services/ServicesPartner');
    ?>

    <?php
    /**
     * Key Value Section
     * Core value propositions and differentiators
     */
    get_template_part('template-parts/services/KeyValue');
    ?>

    <?php
    /**
     * Why Now Section
     * Urgency and market timing information
     */
    get_template_part('template-parts/services/WhyNow');
    ?>

    <?php
    /**
     * Engagement Journey Section
     * Step-by-step engagement process
     */
    get_template_part('template-parts/services/EngagementJourney');
    ?>

    <?php
    /**
     * Key Technologies Section
     * Technologies and frameworks we use
     */
    get_template_part('template-parts/services/KeyTechnologies');
    ?>

    <?php
    /**
     * Integrations Section
     * Third-party integrations and APIs
     */
    get_template_part('template-parts/services/Integrations');
    ?>

    <?php
    /**
     * AI Services Section
     * Detailed AI service offerings
     */
    get_template_part('template-parts/services/AiServices');
    ?>

    <?php
    /**
     * Benefits Section
     * Key benefits of working with us
     */
    get_template_part('template-parts/services/Benefits');
    ?>

    <?php
    /**
     * Vertical Expertise Section
     * Industry-specific expertise showcase
     */
    get_template_part('template-parts/services/Verticalexpertise');
    ?>

    <?php
    /**
     * Portfolio Banner
     * Featured case studies and work examples
     */
    get_template_part('template-parts/portfolio/PortfolioBanner');
    ?>

    <?php
    /**
     * CTA Services Section
     * Call-to-action for service inquiries
     */
    get_template_part('template-parts/services/CtaServices');
    ?>

    <?php
    /**
     * Testimonials Section
     * Client testimonials and reviews
     */
    get_template_part('template-parts/services/Testimonials');
    ?>

    <?php
    /**
     * FAQ Section
     * Frequently asked questions about services
     */
    get_template_part('template-parts/home/Faq');
    ?>

</main>

<?php
/**
 * Footer is loaded automatically by get_footer()
 * Footer component should NOT be included here
 */
get_footer();
?>