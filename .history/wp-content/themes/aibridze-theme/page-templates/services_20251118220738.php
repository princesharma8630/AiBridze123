<?php
/**
 * Template Name: Services Template
 * Template Post Type: page
 * Description: Template for Services page
 */

get_header(); ?>

<main id="main-content" class="services-page">
    
    <!-- Services Hero Section -->
    <?php get_template_part('services-components/hero/ServicesHero'); ?>
    
    
    <!-- Services Partners Section -->
    <?php get_template_part('services-components/partner/ServicesPartner'); ?>

    <!--
    <!-- Add other sections below -->

</main>

<?php get_footer(); ?>