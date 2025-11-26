<?php
/**
 * Strategic Vertical Expertise Section
 * Interactive two-column layout with clickable industries
 */
?>

<!-- STRATEGIC VERTICAL EXPERTISE SECTION -->
<section class="vertical-expertise-section-evs">
    <div class="vertical-expertise-container-evs">
        
        <!-- HEADER -->
        <div class="vertical-expertise-header-evs">
            <p class="vertical-expertise-label-evs">(Industries we Serve)</p>
            <h2 class="vertical-expertise-heading-evs">Our Strategic Vertical Expertise</h2>
            <p class="vertical-expertise-subheading-evs">We specialise across key verticals:</p>
        </div>

        <!-- TWO-COLUMN CONTENT -->
        <div class="vertical-expertise-content-evs">
            
            <!-- LEFT COLUMN - Industry List -->
            <div class="vertical-expertise-left-evs">
                
                <!-- Industry Item 1 - Active by default -->
                <div class="industry-item-evs active-evs" data-target="travel">
                    <span class="industry-number-evs">01</span>
                    <h3 class="industry-name-evs">Travel & Hospitality / Transportation</h3>
                </div>

                <!-- Industry Item 2 -->
                <div class="industry-item-evs" data-target="manufacturing">
                    <span class="industry-number-evs">02</span>
                    <h3 class="industry-name-evs">Manufacturing & Supply Chain</h3>
                </div>

                <!-- Industry Item 3 -->
                <div class="industry-item-evs" data-target="financial">
                    <span class="industry-number-evs">03</span>
                    <h3 class="industry-name-evs">Financial Services & Banking</h3>
                </div>

                <!-- Industry Item 4 -->
                <div class="industry-item-evs" data-target="healthcare">
                    <span class="industry-number-evs">04</span>
                    <h3 class="industry-name-evs">Healthcare & Life Sciences</h3>
                </div>

            </div>

            <!-- RIGHT COLUMN - Description Panel -->
            <div class="vertical-expertise-right-evs">
                
                <!-- Description 1 - Travel & Hospitality (Active by default) -->
                <div class="description-content-evs active-evs" id="desc-travel">
                    <p class="description-text-evs">
                        AI-enabled platforms for airlines, cruise lines, and travel agencies to 
                        optimise yield, personalise service, and drive agility.
                    </p>
                </div>

                <!-- Description 2 - Manufacturing & Supply Chain -->
                <div class="description-content-evs" id="desc-manufacturing">
                    <p class="description-text-evs">
                        Unlock next-generation streams, generalized service integration, 
                        pricing on the fly for go-to-market.
                    </p>
                </div>

                <!-- Description 3 - Financial Services & Banking -->
                <div class="description-content-evs" id="desc-financial">
                    <p class="description-text-evs">
                        Predictive automation, workflow augmentation, real-time insights, 
                        proactive action, data-driven leadership.
                    </p>
                </div>

                <!-- Description 4 - Healthcare & Life Sciences -->
                <div class="description-content-evs" id="desc-healthcare">
                    <p class="description-text-evs">
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
    const industryItems = document.querySelectorAll('.industry-item-evs');
    
    industryItems.forEach(item => {
        item.addEventListener('click', function() {
            // Get target description ID
            const target = this.getAttribute('data-target');
            
            // Remove active class from all items
            industryItems.forEach(i => i.classList.remove('active-evs'));
            
            // Add active class to clicked item
            this.classList.add('active-evs');
            
            // Hide all descriptions
            document.querySelectorAll('.description-content-evs').forEach(desc => {
                desc.classList.remove('active-evs');
            });
            
            // Show target description
            const targetDesc = document.getElementById('desc-' + target);
            if (targetDesc) {
                targetDesc.classList.add('active-evs');
            }
        });
    });
});
</script>