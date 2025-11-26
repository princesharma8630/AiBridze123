<?php
/**
 * Template Name: Portfolio Template
 * Template Post Type: page
 * Description: Custom template for the Portfolio page displaying case studies and projects
 * 
 * @package AIBridze_Theme
 * @since 1.0.0
 */

get_header(); ?>

<main id="main-content" class="portfolio-page" role="main">
    
    <!-- Portfolio Hero Section -->
    <?php get_template_part('template-parts/portfolio/PortfolioHero'); ?>

    <!-- Portfolio Content/Banner Section -->
    <?php get_template_part('template-parts/portfolio/PortfolioBanner'); ?>

    <!-- Additional portfolio sections can be added here -->

</main>

<?php get_footer(); ?>