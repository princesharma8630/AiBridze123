<?php
/**
 * Benefits & Business Outcomes Section
 * WordPress/PHP Template
 * 
 * Container: 1920px × 634px (Hug)
 * 4 Cards Horizontal Layout
 */
?>

<!-- BENEFITS & BUSINESS OUTCOMES SECTION -->
<section class="benefits-section">
    <div class="benefits-container">
        
        <!-- HEADER ROW - Title + Navigation -->
        <div class="benefits-header">
            <div>
                <h2 class="benefits-title">Benefits & Business Outcomes</h2>
                <p class="benefits-subtitle">What you'll gain working with AiBridze</p>
            </div>
            
            <!-- Navigation Arrows -->
            <div class="benefits-nav">
                <button class="benefits-arrow benefits-prev" aria-label="Previous">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                </button>
                <button class="benefits-arrow benefits-next" aria-label="Next">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </button>
            </div>
        </div>

        <!-- CARDS ROW - 4 Cards Horizontal -->
        <div class="benefits-cards">
            
            <!-- Card 1 - Revenue Growth -->
            <div class="benefit-card">
                <div class="benefit-icon">
                    <!-- 📍 UPDATE PATH: assets/images/benefits/revenue-icon.png -->
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/benefits/b1.png" alt="Revenue Growth Icon">
                </div>
                <h3 class="benefit-card-title">
                    Revenue Growth & New<br>
                    Business Models
                </h3>
                <p class="benefit-card-description">
                    Unlock new monetisation vectors, performance-oriented pricing, faster go-to-market.
                </p>
            </div>

            <!-- Card 2 - Cost Structure -->
            <div class="benefit-card">
                <div class="benefit-icon">
                    <!-- 📍 UPDATE PATH: assets/images/benefits/cost-icon.png -->
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/benefits/b2.png" alt="Cost Structure Icon">
                </div>
                <h3 class="benefit-card-title">
                    Cost-Structure<br>
                    Improvement & Efficiency
                </h3>
                <p class="benefit-card-description">
                    Streamline operations, reduce waste or requirements, drive reduction.
                </p>
            </div>

            <!-- Card 3 - Risk Reduction -->
            <div class="benefit-card">
                <div class="benefit-icon">
                    <!-- 📍 UPDATE PATH: assets/images/benefits/risk-icon.png -->
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/benefits/b3.png" alt="Risk Reduction Icon">
                </div>
                <h3 class="benefit-card-title">
                    Risk Reduction & Business<br>
                    Resilience
                </h3>
                <p class="benefit-card-description">
                    Enhance forecasting, anomaly detection, scenario analysis.
                </p>
            </div>

            <!-- Card 4 - Decision Quality -->
            <div class="benefit-card">
                <div class="benefit-icon">
                    <!-- 📍 UPDATE PATH: assets/images/benefits/decision-icon.png -->
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/benefits/.png" alt="Decision Quality Icon">
                </div>
                <h3 class="benefit-card-title">
                    Enhanced Decision Quality<br>
                    & Speed
                </h3>
                <p class="benefit-card-description">
                    Real-time insights, predictive analytics, data-driven leadership.
                </p>
            </div>

        </div>

    </div>
</section>