<?php
/**
 * Template Name: test Template
 * Template Post Type: page
 * Description: Template for Portfolio page
 */

get_header(); ?>

<?php
/**
 * Template Name: Home Page
 * Description: Custom home page template for AiBridze
 *
 * @package AiBridze
 */

get_header();
?>

<main id="primary" class="site-main">

    <!-- Hero Section -->
    <section class="hero-section">
        <div class="container">
            <h1>Welcome to AiBridze</h1>
            <p>Your AI Solutions Partner</p>
            <a href="#services" class="btn-primary">Get Started</a>
        </div>
    </section>

    <!-- About Section -->
    <section class="about-section">
        <div class="container">
            <h2>About Us</h2>
            <p>Content here</p>
        </div>
    </section>

    <!-- Services Section -->
    <section class="services-section">
        <div class="container">
            <h2>Our Services</h2>
            <p>Services content</p>
        </div>
    </section>

    <!-- Industries Section -->
    <section class="industries-section">
        <div class="container">
            <h2>Industries We Serve</h2>
            <p>Industries content</p>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
        <div class="container">
            <h2>Ready to Transform Your Business?</h2>
            <a href="/contact" class="btn-primary">Contact Us</a>
        </div>
    </section>

</main>

<?php
get_footer();

<?php get_footer(); ?>