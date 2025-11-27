<?php
/**
 * Template Name: Industry Page
 * Description: Dynamic industry page template for Healthcare, Finance, etc.
 */

get_header();
?>

<section class="industry-hero-section">
    <!-- Video Background -->
    <?php 
    $background_video = get_field('background_video');
    if ($background_video) : ?>
        <video class="hero-video-bg" autoplay muted loop playsinline>
            <source src="<?php echo esc_url($background_video['asset/service-page-image']); ?>" type="video/mp4">
        </video>
    <?php endif; ?>
    
    <!-- Gradient Overlay -->
    <div class="hero-overlay"></div>
    
    <div class="industry-hero-container">
        <!-- Hero Heading -->
        <div class="hero-content-wrapper">
            <h1 class="industry-hero-heading">
                <?php 
                $hero_heading = get_field('hero_heading');
                echo $hero_heading ? esc_html($hero_heading) : 'Healthcare App Development for Patient-Centric Care';
                ?>
            </h1>
            
            <!-- Hero Description -->
            <p class="industry-hero-description">
                <?php 
                $hero_description = get_field('hero_description');
                echo $hero_description ? esc_html($hero_description) : 'We build high-performance HealthTech solutions that are secure, scalable, and fully compliant.';
                ?>
            </p>
            
            <!-- Feature Cards Grid -->
            <div class="industry-features-grid">
                <?php
                // Feature 1
                $feature_1_title = get_field('feature_1_title');
                $feature_1_description = get_field('feature_1_description');
                ?>
                <div class="feature-card">
                    <h3 class="feature-title">
                        <?php echo $feature_1_title ? esc_html($feature_1_title) : '100% HIPAA & HITECH COMPLIANT'; ?>
                    </h3>
                    <p class="feature-description">
                        <?php echo $feature_1_description ? esc_html($feature_1_description) : 'Guaranteed regulatory adherence with a signed Business Associate Agreement (BAA).'; ?>
                    </p>
                </div>
                
                <?php
                // Feature 2
                $feature_2_title = get_field('feature_2_title');
                $feature_2_description = get_field('feature_2_description');
                ?>
                <div class="feature-card">
                    <h3 class="feature-title">
                        <?php echo $feature_2_title ? esc_html($feature_2_title) : 'DEEP INTEGRATION EXPERTISE'; ?>
                    </h3>
                    <p class="feature-description">
                        <?php echo $feature_2_description ? esc_html($feature_2_description) : 'Seamlessly connect with any EMR/EHR, lab, or pharmacy system using HL7/FHIR standards.'; ?>
                    </p>
                </div>
                
                <?php
                // Feature 3
                $feature_3_title = get_field('feature_3_title');
                $feature_3_description = get_field('feature_3_description');
                ?>
                <div class="feature-card">
                    <h3 class="feature-title">
                        <?php echo $feature_3_title ? esc_html($feature_3_title) : 'AI-POWERED HEALTH ANALYTICS'; ?>
                    </h3>
                    <p class="feature-description">
                        <?php echo $feature_3_description ? esc_html($feature_3_description) : 'Leverage our expertise in AI/ML for predictive diagnostics, patient risk scoring, and operational automation.'; ?>
                    </p>
                </div>
                
                <?php
                // Feature 4
                $feature_4_title = get_field('feature_4_title');
                $feature_4_description = get_field('feature_4_description');
                ?>
                <div class="feature-card">
                    <h3 class="feature-title">
                        <?php echo $feature_4_title ? esc_html($feature_4_title) : 'PROVEN PARTNER'; ?>
                    </h3>
                    <p class="feature-description">
                        <?php echo $feature_4_description ? esc_html($feature_4_description) : 'Trusted by 250+ clients to build, launch, and scale their digital health platforms.'; ?>
                    </p>
                </div>
            </div>
            
            <!-- CTA Button -->
            <?php
            $cta_button_text = get_field('cta_button_text');
            $cta_button_url = get_field('cta_button_url');
            
            if (empty($cta_button_text)) $cta_button_text = 'Get a Free Quote';
            if (empty($cta_button_url)) $cta_button_url = home_url('/contact');
            ?>
            <div class="hero-cta-wrapper">
                <a href="<?php echo esc_url($cta_button_url); ?>" class="industry-cta-button">
                    <?php echo esc_html($cta_button_text); ?>
                </a>
            </div>
        </div>
    </div>
</section>

<?php
get_footer();
?>