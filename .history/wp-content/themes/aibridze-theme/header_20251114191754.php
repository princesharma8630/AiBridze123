<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<!-- Include Navbar Component -->
<?php get_template_part('components/navbar/navbar'); ?>

<!-- Main Content Wrapper -->
<main id="main-content" class="site-main">