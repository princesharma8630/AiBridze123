<?php
/**
 * Template Name: Home Page
 * Description: Custom homepage template for AiBridze
 * 
 * This is the main landing page template that displays all homepage sections
 * in the correct order following the design specifications.
 * 
 * @package AiBridze
 * @version 1.0.0
 */

get_header(); 
?>

<main id="primary" class="site-main home-page">

    <?php
    /**
     * Hero Section
     * Full-width hero banner with main headline and CTA
     */
    get_template_part('template-parts/home/hero');
    ?>

    <?php
    /**
     * Partners Section
     * Logos of trusted technology partners
     */
    get_template_part('template-parts/home/Partners');
    ?>

    <?php
    /**
     * Industries Section
     * Showcase of industries we serve
     */
    get_template_part('template-parts/home/Industries');
    ?>

    <?php
    /**
     * Portfolio Banner
     * Featured portfolio work showcase
     */
    get_template_part('template-parts/portfolio/PortfolioBanner');
    ?>

    <?php
    /**
     * Services Card Section
     * Overview of main services offered
     */
    get_template_part('template-parts/home/Services-card');
    ?>

    <?php
    /**
     * Services Grid Section
     * Detailed services grid with animations
     */
    get_template_part('template-parts/home/ServicesGrid');
    ?>

    <?php
    /**
     * AI Accessible Section
     * Accessibility features and benefits
     */
    get_template_part('template-parts/home/AiAccessible');
    ?>

    <?php
    /**
     * Evolution Section
     * Company growth and evolution timeline
     */
    get_template_part('template-parts/home/Evolution');
    ?>

    <?php
    /**
     * AI Services Section
     * Detailed AI service offerings
     */
    get_template_part('template-parts/home/AiServices');
    ?>

    <?php
    /**
     * Compliance Section
     * Security and compliance certifications
     */
    get_template_part('template-parts/home/Compliance');
    ?>

    <?php
    /**
     * Process Section
     * Our development process methodology
     */
    get_template_part('template-parts/home/Process');
    ?>

    <?php
    /**
     * Team Section
     * Meet our team members
     */
    get_template_part('template-parts/home/Team');
    ?>

    <?php
    /**
     * Articles Section
     * Latest blog posts and insights
     */
    get_template_part('template-parts/home/Articles');
    ?>

    <?php
    /**
     * FAQ Section
     * Frequently asked questions
     */
    get_template_part('template-parts/home/Faq');
    ?>

</main>

<?php
/**
 * Footer is loaded automatically by get_footer()
 * Do NOT include footer component here
 */
get_footer();
?>