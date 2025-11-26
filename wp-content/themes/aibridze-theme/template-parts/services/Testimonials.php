<?php
/**
 * Testimonials Section - Hear from Our Clients
 * Carousel slider with client reviews
 * CLASS NAMES: All have "-services" suffix
 */
?>

<!-- TESTIMONIALS SECTION -->
<section class="testimonials-services-section">
    <div class="testimonials-services-container">
        
        <!-- HEADER -->
        <div class="testimonials-services-header">
            <p class="testimonials-services-label">(Testimonials)</p>
            <h2 class="testimonials-services-heading">Hear from Our Clients</h2>
        </div>

        <!-- CAROUSEL -->
        <div class="testimonials-services-carousel">
            
            <!-- Carousel Wrapper -->
            <div class="testimonials-services-wrapper">
                <div class="testimonials-services-track">
                    
                    <!-- Testimonial Card 1 - Generative AI & RAG -->
                    <div class="testimonial-services-card active" data-index="0">
                        <p class="testimonial-services-company">GENERATIVE AI & RAG</p>
                        
                        <div class="testimonial-services-stars">
                            <span class="testimonial-services-star">★</span>
                            <span class="testimonial-services-star">★</span>
                            <span class="testimonial-services-star">★</span>
                            <span class="testimonial-services-star">★</span>
                            <span class="testimonial-services-star">★</span>
                        </div>
                        
                        <p class="testimonial-services-text">
                            We had a massive, unstructured knowledge base that was nearly impossible for our support team to use. AiBridze implemented a custom Generative AI solution using a RAG architecture. Our new internal chatbot now provides instant, accurate answers, reducing agent-lookup time by 80% and dramatically improving our first-call resolution.
                        </p>
                        
                        <p class="testimonial-services-author">
                            -VP of Customer Support, Fortune 500 Software Company
                        </p>
                    </div>

                    <!-- Testimonial Card 2 - Manufacturing OEM -->
                    <div class="testimonial-services-card" data-index="1">
                        <p class="testimonial-services-company">MANUFACTURING OEM</p>
                        
                        <div class="testimonial-services-stars">
                            <span class="testimonial-services-star">★</span>
                            <span class="testimonial-services-star">★</span>
                            <span class="testimonial-services-star">★</span>
                            <span class="testimonial-services-star">★</span>
                            <span class="testimonial-services-star">★</span>
                        </div>
                        
                        <p class="testimonial-services-text">
                            AiBridze transformed our quality control process with computer vision AI. What used to take hours of manual inspection now happens in real-time on the production line. We've reduced defects by 45% and increased throughput by 30%, all while cutting inspection costs significantly.
                        </p>
                        
                        <p class="testimonial-services-author">
                            -Director of Operations, Global Automotive Supplier
                        </p>
                    </div>

                    <!-- Testimonial Card 3 - Financial Services Firm -->
                    <div class="testimonial-services-card" data-index="2">
                        <p class="testimonial-services-company">FINANCIAL SERVICES FIRM</p>
                        
                        <div class="testimonial-services-stars">
                            <span class="testimonial-services-star">★</span>
                            <span class="testimonial-services-star">★</span>
                            <span class="testimonial-services-star">★</span>
                            <span class="testimonial-services-star">★</span>
                            <span class="testimonial-services-star">★</span>
                        </div>
                        
                        <p class="testimonial-services-text">
                            The predictive analytics platform AiBridze built for us has been a game-changer. We can now forecast market trends with unprecedented accuracy, identify risks before they materialize, and optimize our portfolio strategies in real-time. Our ROI has exceeded expectations by 150%.
                        </p>
                        
                        <p class="testimonial-services-author">
                            -Chief Investment Officer, Mid-sized Investment Firm
                        </p>
                    </div>

                    <!-- Testimonial Card 4 - Healthcare Provider -->
                    <div class="testimonial-services-card" data-index="3">
                        <p class="testimonial-services-company">HEALTHCARE PROVIDER</p>
                        
                        <div class="testimonial-services-stars">
                            <span class="testimonial-services-star">★</span>
                            <span class="testimonial-services-star">★</span>
                            <span class="testimonial-services-star">★</span>
                            <span class="testimonial-services-star">★</span>
                            <span class="testimonial-services-star">★</span>
                        </div>
                        
                        <p class="testimonial-services-text">
                            AiBridze's AI-powered diagnostic assistance tool has revolutionized our radiology department. The system identifies potential anomalies with 98% accuracy, reducing diagnosis time by 60% and giving our radiologists more time to focus on complex cases. Patient outcomes have improved significantly.
                        </p>
                        
                        <p class="testimonial-services-author">
                            -Head of Radiology, Regional Hospital Network
                        </p>
                    </div>

                </div>
            </div>

            <!-- Navigation Arrows -->
            <div class="testimonials-services-nav">
                <button class="testimonial-services-arrow testimonial-services-prev" aria-label="Previous testimonial">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                </button>
                <button class="testimonial-services-arrow testimonial-services-next" aria-label="Next testimonial">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </button>
            </div>

            <!-- Pagination Dots -->
            <div class="testimonials-services-dots">
                <button class="testimonial-services-dot active" data-index="0" aria-label="Go to testimonial 1"></button>
                <button class="testimonial-services-dot" data-index="1" aria-label="Go to testimonial 2"></button>
                <button class="testimonial-services-dot" data-index="2" aria-label="Go to testimonial 3"></button>
                <button class="testimonial-services-dot" data-index="3" aria-label="Go to testimonial 4"></button>
            </div>

        </div>

    </div>
</section>

<!-- Include JavaScript -->
<script src="<?php echo get_template_directory_uri(); ?>/assets/js/Testimonials-services.js"></script>