<section class="services-cards">
    <div class="services-cards-container">
        
        <!-- Card 1 - AI Chatbot (Dark Red) -->
        <div class="service-card card-chatbot">
            <div class="card-content">
                <h3 class="card-heading">Transform customer support with intelligent AI chatbots for seamless and effortless service</h3>
                
                <!-- Social Icons -->
                <div class="social-icons">
                    <div class="social-icon">
                        <img src="<?php echo get_template_directory_uri(); ?>/assests/images/services/messenger-icon.png" alt="Messenger" />
                    </div>
                    <div class="social-icon">
                        <img src="<?php echo get_template_directory_uri(); ?>/assests/images/services/skype-icon.png" alt="Skype" />
                    </div>
                    <div class="social-icon">
                        <img src="<?php echo get_template_directory_uri(); ?>/assests/images/services/telegram-icon.png" alt="Telegram" />
                    </div>
                    <div class="social-icon">
                        <img src="<?php echo get_template_directory_uri(); ?>/assests/images/services/discord-icon.png" alt="Discord" />
                    </div>
                </div>
                
                <!-- CTA Button -->
                <a href="<?php echo esc_url(home_url('/contact')); ?>" class="card-btn btn-light">
                    Get in Touch
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </div>
            
            <!-- Robot Image -->
            <div class="card-image">
                <img src="<?php echo get_template_directory_uri(); ?>/assests/images/services/robot-chatbot.png" alt="AI Chatbot Robot" />
            </div>
        </div>

        <!-- Card 2 - AI Dashboard (White/Light) -->
        <div class="service-card card-dashboard">
            <div class="card-content">
                <h3 class="card-heading">All-in-One AI Solutions Dashboard for Smarter Business Insights & Innovation</h3>
                
                <p class="card-description">Explore our comprehensive AI solutions dashboard designed to provide actionable business insights and drive innovation across every facet of your organization.</p>
                
                <!-- CTA Button -->
                <a href="<?php echo esc_url(home_url('/services')); ?>" class="card-btn btn-dark">
                    CTA Text
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </div>
            
            <!-- 3D Shapes Image -->
            <div class="card-image" class="card-image-3">
                <img src="<?php echo get_template_directory_uri(); ?>/assests/images/services/abstract-shapes.png" alt="AI Dashboard Visualization" />
            </div>
        </div>

        <!-- Card 3 - OpenAI Integration (Purple/Green) -->
        <div class="service-card card-openai">
            <div class="card-content">
                <h3 class="card-heading-openai">Unlock your full potential with effortless <em>OpenAI</em> integration solutions</h3>

                <div class="card-image card-image-full">
                <img src="<?php echo get_template_directory_uri(); ?>/assests/images/services/chatgpt-interface.png" alt="ChatGPT Interface" />
            </div>
            </div>
            
            <!-- ChatGPT Interface Image -->
            
        </div>

    </div>
</section>