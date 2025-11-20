<?php
/**
 * Template Name: Portfolio Template
 * Template Post Type: page
 * Description: Template for Portfolio page
 */

get_header(); ?>

<main id="main-content" class="portfolio-page">
    
    <!-- Portfolio Hero Section -->
    <?php get_template_part('components/portfolio-hero/PortfolioHero'); ?>

    <!-- Portfolio Content Section -->
    <?php get_template_part('components/portfolio-banner/PortfolioBanner'); ?>
    

    <!-- Add more portfolio sections here as needed -->

</main>

<?php get_footer(); ?>