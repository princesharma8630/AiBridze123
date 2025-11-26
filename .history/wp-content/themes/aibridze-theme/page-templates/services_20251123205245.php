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

    <!-- Key Value Section -->
    <?php get_template_part('services-components/key-value/KeyValue'); ?>
    <!-- Add other sections below -->
     <!-- Why Now Section -->
     <?php get_template_part('services-components/why-now/WhyNow'); ?>
    <!-- engagementJourney Section -->
    <?php get_template_part('services-components/engagementjourney/EngagementJourney'); ?>
    <!------key technologies section------>
    <?php get_template_part('services-components/key-technologies/KeyTechnologies'); ?>
    <!-- Integrations Section -->
    <?php get_template_part('services-components/integrations/Integrations'); ?>
    <!--AI Services Section -->
    <?php get_template_part('services-components/ai-services/AiServices'); ?>
    <!--Benefits Section -->
    <?php get_template_part('services-components/benefits/Benefits'); ?>
    <!--verticaleexperties----->
   <?php get_template_part('services-components/verticalexpertise/Verticalexpertise'); ?>
   <!--Portfolio-->
   <?php get_template_part('components/portfolio-banner/PortfolioBanner'); ?>
   <!--cta-services-->
   <?php get_template_part('services-components/cta-services/CtaServices'); ?>
     <!--cta-services-->
   <?php get_template_part('services-components/testimonials/testimonials'); ?>
   <!-- faq section-->
   <?php get_template_part('components/faq/Faq'); ?>
 
    <!--  Footer section-->
   <?php get_template_part('components/footer/Footer'); ?>



</main>

<?php get_footer(); ?>