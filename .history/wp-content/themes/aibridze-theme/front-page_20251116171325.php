<?php
/**
 * Template Name: Homepage
 * Description: Custom homepage template for AIBridze
 */

get_header(); 
?>

<!-- Hero Section Component -->
<?php get_template_part('components/hero/Hero'); ?>
<!-- Partners Section Component -->
<?php get_template_part('components/partners/Partners'); ?>
<!--Industries Section Component -->
<?php get_template_part('components/industries/Industries'); ?>

<!--Portfolio-->
<?php get_template_part('components/portfolio-banner/PortfolioBanner'); ?>

<!-- services card --> 
 <?php get_template_part('components/services-card/Services-card'); ?>
 <!-- End of services card -->
  <?php get_template_part('components/services-')

<!-- Future sections will go here -->
<!-- Examples:
<?php // get_template_part('components/services/Services'); ?>
<?php // get_template_part('components/portfolio/Portfolio'); ?>
<?php // get_template_part('components/testimonials/Testimonials'); ?>
-->

<?php 
get_footer();
?>