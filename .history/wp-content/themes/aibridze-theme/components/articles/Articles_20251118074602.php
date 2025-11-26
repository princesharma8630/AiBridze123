<?php
/**
 * Articles/Blog Section
 * Displays featured articles with large card and list view
 */
?>

<section class="articles-section">
    <div class="articles-container">
        
        <!-- Section Label & Heading -->
        <div class="articles-header">
            <span class="articles-label">(Articles)</span>
            <h2 class="articles-heading">Exploring the world of artificial intelligence with AiBridze blogging</h2>
            <a href="<?php echo home_url('/blog'); ?>" class="btn-explore">
                Explore More Articles
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </a>
        </div>

        <!-- Articles Grid -->
        <div class="articles-grid">
            
            <!-- Large Featured Article (Left) -->
            <article class="article-card article-featured">
                <div class="article-image">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/articles/featured-article.png" alt="Mobile App Development with AI" />
                </div>
                <div class="article-content">
                    <div class="article-meta">
                        <span class="article-date">Aug 25, 2025</span>
                        <span class="article-divider">•</span>
                        <span class="article-author">Sitaram Sharma</span>
                    </div>
                    <div class="article-tags">
                        <span class="article-tag">Artificial Intelligence</span>
                        <span class="article-tag">Mobile App</span>
                    </div>
                    <h3 class="article-title">Mobile App Development with the Power of AI</h3>
                    <p class="article-description">Introduction Building a mobile app used to require large teams, long timelines, and deep pockets. For startups and solo founders alike, the upfront investment was intimidating and...</p>
                </div>
            </article>

            <!-- Small Articles List (Right) -->
            <div class="articles-list">
                
                <!-- Article 1 -->
                <article class="article-card article-small">
                    <div class="article-image">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/articles/a1.png" alt="AI Article" />
                    </div>
                    <div class="article-content">
                        <div class="article-meta">
                            <span class="article-date">Aug 25, 2025</span>
                            <span class="article-divider">•</span>
                            <span class="article-author">Sitaram Sharma</span>
                        </div>
                        <div class="article-tags">
                            <span class="article-tag">Artificial Intelligence</span>
                            <span class="article-tag">Mobile App</span>
                        </div>
                        <h3 class="article-title">Mobile App Development with the Power of AI</h3>
                        <p class="article-description">Introduction Building a mobile app used to require large teams, long timelines, and deep pockets. For startups and solo founders alike, the upfront investment was intimidating and...</p>
                    </div>
                </article>

                <!-- Article 2 -->
                <article class="article-card article-small">
                    <div class="article-image">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/articles/a2.png" alt="AI Article" />
                    </div>
                    <div class="article-content">
                        <div class="article-meta">
                            <span class="article-date">Aug 25, 2025</span>
                            <span class="article-divider">•</span>
                            <span class="article-author">Sitaram Sharma</span>
                        </div>
                        <div class="article-tags">
                            <span class="article-tag">Artificial Intelligence</span>
                            <span class="article-tag">Mobile App</span>
                        </div>
                        <h3 class="article-title">Mobile App Development with the Power of AI</h3>
                        <p class="article-description">Introduction Building a mobile app used to require large teams, long timelines, and deep pockets. For startups and solo founders alike, the upfront investment was intimidating and...</p>
                    </div>
                </article>

                <!-- Article 3 -->
                <article class="article-card article-small">
                    <div class="article-image">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/articles/article-3.png" alt="AI Article" />
                    </div>
                    <div class="article-content">
                        <div class="article-meta">
                            <span class="article-date">Aug 25, 2025</span>
                            <span class="article-divider">•</span>
                            <span class="article-author">Sitaram Sharma</span>
                        </div>
                        <div class="article-tags">
                            <span class="article-tag">Artificial Intelligence</span>
                            <span class="article-tag">Mobile App</span>
                        </div>
                        <h3 class="article-title">Mobile App Development with the Power of AI</h3>
                        <p class="article-description">Introduction Building a mobile app used to require large teams, long timelines, and deep pockets. For startups and solo founders alike, the upfront investment was intimidating and...</p>
                    </div>
                </article>

            </div>

        </div>

    </div>
</section>