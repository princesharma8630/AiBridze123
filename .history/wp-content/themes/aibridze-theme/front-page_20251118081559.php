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
  <?php get_template_part('components/services-grid/ServicesGrid'); ?>
  <!-- AI Accessible Section -->
<?php get_template_part('components/ai-accessible/aiAccessible'); ?>
<!-- Evolution Section Component -->
<?php get_template_part('components/evolution/Evolution'); ?>  

<!-- Ai services cards-->
 <?php get_template_part('components/ai-services/AiServices'); ?>
<!-- Complaince component-->
 <?php get_template_part('components/compliance/Compliance'); ?>

 <!-- Process Section -->
<?php get_template_part('components/process/Process'); ?>
<!-- Team Section -->
<?php get_template_part('components/team/Team'); ?>
<!-- Articles Section -->   
<?php get_template_part('components/articles/Articles'); ?>
  

<!-- Future sections will go here -->
<!-- Examples:
<?php // get_template_part('components/services/Services'); ?>
<?php // get_template_part('components/portfolio/Portfolio'); ?>
<?php // get_template_part('components/testimonials/Testimonials'); ?>
-->

<?php 
get_footer();
?>