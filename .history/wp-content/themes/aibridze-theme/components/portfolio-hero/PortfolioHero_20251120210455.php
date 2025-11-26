/* Import Fonts */
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

/* Timun Font Fallback */
@font-face {
    font-family: 'Timun';
    src: local('Arial'), local('Helvetica');
    font-weight: 400;
    font-style: normal;
}

/* ========================================
   PORTFOLIO HERO SECTION
   ======================================== */

.portfolio-hero-section {
    position: relative;
    background: #000000;
    min-height: 100vh;
    padding: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -74px;
    padding-top: 100px;
    padding-bottom: 100px;
}

/* Stars Canvas Background */
.portfolio-hero-stars-canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.portfolio-hero-stars-canvas canvas {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 100% !important;
}

/* Portfolio Hero Container */
.portfolio-hero-container {
    position: relative;
    z-index: 2;
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
    padding: 0 254px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
}

/* ========================================
   MAIN CONTENT AREA
   ======================================== */

.portfolio-hero-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    width: 100%;
    max-width: 1411px;
}

/* Main Heading */
.portfolio-hero-heading {
    font-family: 'Timun', 'Plus Jakarta Sans', sans-serif;
    font-weight: 400;
    font-size: 64px;
    line-height: 120%;
    text-align: center;
    color: #FFFFFF;
    margin: 0;
    width: 100%;
    letter-spacing: 0.02em;
}

/* Subheading */
.portfolio-hero-subheading {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: rgba(255, 255, 255, 0.85);
    text-align: center;
    max-width: 900px;
    margin: 0;
}

/* Get Started Button */
.portfolio-get-started-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 16px 48px;
    background: #90EEFB;
    border-radius: 50px;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 700;
    font-size: 16px;
    color: #000000;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 4px 20px rgba(144, 238, 251, 0.3);
    margin-top: 8px;
}

.portfolio-get-started-btn:hover {
    background: #7DD9EA;
    transform: translateY(-2px);
    box-shadow: 0 6px 30px rgba(144, 238, 251, 0.5);
}

.portfolio-get-started-btn:active {
    transform: translateY(0);
    box-shadow: 0 4px 20px rgba(144, 238, 251, 0.3);
}

/* ========================================
   BOTTOM RIGHT ELEMENTS (CLUTCH & CONTACT)
   ======================================== */

.portfolio-hero-bottom-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    gap: 16px;
    width: 100%;
    max-width: 1411px;
    margin-top: 60px;
}

/* Clutch Badge - EXACT MATCH */
.portfolio-clutch-badge {
    background: #FFFFFF;
    border-radius: 12px;
    padding: 16px 20px;
    max-width: 240px;
    max-height: 82px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.portfolio-clutch-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 16px;
}

.portfolio-clutch-left {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.portfolio-clutch-header {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 600;
    font-size: 9px;
    color: #666;
    letter-spacing: 0.5px;
    text-transform: uppercase;
}

.portfolio-clutch-logo {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 700;
    font-size: 32px;
    color: #000000;
    line-height: 1;
}

.portfolio-clutch-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 8px;
}

.portfolio-clutch-stars {
    color: #FF3D00;
    font-size: 18px;
    letter-spacing: 2px;
    line-height: 1;
}

.portfolio-clutch-reviews {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 600;
    font-size: 10px;
    color: #666;
    letter-spacing: 0.5px;
}

/* Contact Icons - EXACT MATCH */
.portfolio-contact-icons {
    width: 100%;
    max-width: 240px;
    height: auto;
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    justify-content: flex-start;
}

.portfolio-contact-icon {
    width: 54px;
    height: 54px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    text-decoration: none;
    transition: all 0.3s ease;
}

.portfolio-contact-icon:hover {
    background: #90EEFB;
    color: #000000;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(144, 238, 251, 0.4);
}

.portfolio-contact-icon svg {
    width: 22px;
    height: 22px;
}

.calendar-icon {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 600;
    font-size: 14px;
}

/* ========================================
   RESPONSIVE DESIGN
   ======================================== */

/* Large Desktop */
@media screen and (max-width: 1600px) {
    .portfolio-hero-container {
        padding: 0 150px;
    }
}

@media screen and (max-width: 1400px) {
    .portfolio-hero-container {
        padding: 0 100px;
    }
}

/* Tablet */
@media screen and (max-width: 1200px) {
    .portfolio-hero-section {
        padding-top: 200px;
        padding-bottom: 80px;
    }

    .portfolio-hero-container {
        padding: 0 80px;
        gap: 50px;
    }

    .portfolio-hero-heading {
        font-size: 52px;
    }

    .portfolio-hero-subheading {
        font-size: 17px;
    }

    .portfolio-get-started-btn {
        padding: 14px 40px;
        font-size: 15px;
    }

    .portfolio-hero-bottom-right {
        margin-top: 40px;
        flex-wrap: wrap;
    }

    .portfolio-clutch-badge {
        width: 220px;
        height: 130px;
        max-width: 220px;
    }

    .portfolio-clutch-logo {
        font-size: 28px;
    }

    .portfolio-contact-icons {
        max-width: 220px;
    }

    .portfolio-contact-icon {
        width: 50px;
        height: 50px;
    }
}

/* Mobile Landscape / Small Tablet */
@media screen and (max-width: 900px) {
    .portfolio-hero-section {
        padding-top: 150px;
        padding-bottom: 60px;
    }

    .portfolio-hero-container {
        padding: 0 40px;
        gap: 40px;
    }

    .portfolio-hero-heading {
        font-size: 40px;
        letter-spacing: 0.01em;
    }

    .portfolio-hero-subheading {
        font-size: 16px;
    }

    .portfolio-get-started-btn {
        padding: 12px 36px;
        font-size: 14px;
    }
}

/* Mobile Portrait */
@media screen and (max-width: 768px) {
    .portfolio-hero-section {
        padding-top: 140px;
        padding-bottom: 60px;
        min-height: auto;
    }

    .portfolio-hero-container {
        padding: 0 24px;
        gap: 35px;
    }

    .portfolio-hero-content {
        gap: 24px;
    }

    .portfolio-hero-heading {
        font-size: 32px;
        letter-spacing: 0;
    }

    .portfolio-hero-subheading {
        font-size: 15px;
        line-height: 160%;
    }

    .portfolio-get-started-btn {
        padding: 12px 32px;
        font-size: 14px;
    }

    .portfolio-hero-bottom-right {
        position: relative;
        bottom: auto;
        right: auto;
        left: auto;
        flex-direction: column;
        align-items: center;
        margin-top: 50px;
        z-index: 10;
    }

    .portfolio-clutch-badge {
        width: 100%;
        max-width: 280px;
        height: auto;
        padding: 16px;
    }

    .portfolio-contact-icons {
        justify-content: center;
        width: 100%;
        max-width: 280px;
    }
}

/* Small Mobile */
@media screen and (max-width: 480px) {
    .portfolio-hero-section {
        padding-top: 120px;
    }

    .portfolio-hero-container {
        padding: 0 16px;
        gap: 30px;
    }

    .portfolio-hero-content {
        gap: 20px;
    }

    .portfolio-hero-heading {
        font-size: 26px;
    }

    .portfolio-hero-subheading {
        font-size: 14px;
        line-height: 160%;
    }

    .portfolio-get-started-btn {
        padding: 10px 28px;
        font-size: 13px;
    }

    .portfolio-contact-icon {
        width: 46px;
        height: 46px;
    }

    .portfolio-contact-icon svg {
        width: 18px;
        height: 18px;
    }

    .calendar-icon {
        font-size: 12px;
    }
}