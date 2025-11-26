<?php
/**
 * Strategic Vertical Expertise Section
 * Interactive two-column layout with clickable industries
 */
?>

<!-- STRATEGIC VERTICAL EXPERTISE SECTION -->
<section class="vertical-expertise-section">
    <div class="vertical-expertise-container">
        
        <!-- HEADER -->
        <div class="vertical-expertise-header">
            <p class="vertical-expertise-label">(Industries we Serve)</p>
            <h2 class="vertical-expertise-heading">Our Strategic Vertical Expertise</h2>
            <p class="vertical-expertise-subheading">We specialise across key verticals:</p>
        </div>

        <!-- TWO-COLUMN CONTENT -->
        <div class="vertical-expertise-content">
            
            <!-- LEFT COLUMN - Industry List -->
            <div class="vertical-expertise-left">
                
                <!-- Industry Item 1 - Active by default -->
                <div class="industry-item active" data-target="travel">
                    <span class="industry-number">01</span>
                    <h3 class="industry-name">Travel & Hospitality / Transportation</h3>
                </div>

                <!-- Industry Item 2 -->
                <div class="industry-item" data-target="manufacturing">
                    <span class="industry-number">02</span>
                    <h3 class="industry-name">Manufacturing & Supply Chain</h3>
                </div>

                <!-- Industry Item 3 -->
                <div class="industry-item" data-target="financial">
                    <span class="industry-number">03</span>
                    <h3 class="industry-name">Financial Services & Banking</h3>
                </div>

                <!-- Industry Item 4 -->
                <div class="industry-item" data-target="healthcare">
                    <span class="industry-number">04</span>
                    <h3 class="industry-name">Healthcare & Life Sciences</h3>
                </div>

            </div>

            <!-- RIGHT COLUMN - Description Panel -->
            <div class="vertical-expertise-right">
                
                <!-- Description 1 - Travel & Hospitality (Active by default) -->
                <div class="description-content active" id="desc-travel">
                    <p class="description-text">
                        AI-enabled platforms for airlines, cruise lines, and travel agencies to 
                        optimise yield, personalise service, and drive agility.
                    </p>
                </div>

                <!-- Description 2 - Manufacturing & Supply Chain -->
                <div class="description-content" id="desc-manufacturing">
                    <p class="description-text">
                        Unlock next-generation streams, generalized service integration, 
                        pricing on the fly for go-to-market.
                    </p>
                </div>

                <!-- Description 3 - Financial Services & Banking -->
                <div class="description-content" id="desc-financial">
                    <p class="description-text">
                        Predictive automation, workflow augmentation, real-time insights, 
                        proactive action, data-driven leadership.
                    </p>
                </div>

                <!-- Description 4 - Healthcare & Life Sciences -->
                <div class="description-content" id="desc-healthcare">
                    <p class="description-text">
                        AI-powered therapeutic, anomaly detection, suppressed route analysis, 
                        real-time insights, proactive action, data-driven leadership.
                    </p>
                </div>

            </div>

        </div>

    </div>
</section>

<!-- JavaScript for Interactivity -->
<script>
document.addEventListener('DOMContentLoaded', function() {
    const industryItems = document.querySelectorAll('.industry-item');
    
    industryItems.forEach(item => {
        item.addEventListener('click', function() {
            // Get target description ID
            const target = this.getAttribute('data-target');
            
            // Remove active class from all items
            industryItems.forEach(i => i.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Hide all descriptions
            document.querySelectorAll('.description-content').forEach(desc => {
                desc.classList.remove('active');
            });
            
            // Show target description
            const targetDesc = document.getElementById('desc-' + target);
            if (targetDesc) {
                targetDesc.classList.add('active');
            }
        });
    });
});
</script>