<?php
/**
 * Template Name: Industries Template
 * Template Post Type: page
 * Description: Custom template for the Industries page showcasing industry-specific AI solutions
 * 
 * @package AIBridze_Theme
 * @since 1.0.0
 */

get_header(); ?>

<main id="main-content" class="industries-page" role="main">
    
    <!-- Industries Hero Section -->
    <?php get_template_part('template-parts/industries/IndustriesHero'); ?>

    <!-- Industry partner -->
    <?php get_template_part('template-parts/industries/IndustriesPartner'); ?>

    
    <!-- Industry partner -->
    <?php get_template_part('template-parts/industries/IndustriesSolutions'); ?>

 
    <!-- Industry partner -->
    <?php get_template_part('template-parts/industries/Industries-compliance'); ?>

    <?php get_template_part('template-parts/industries/IndustriesHipaa'); ?>
   <
    <!-- Additional sections can be added here -->

</main>

<?php get_footer(); ?>