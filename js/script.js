document.addEventListener("DOMContentLoaded", function () {
    // Hamburger Menu Logic
    const hamburgerButton = document.getElementById('hamburger-button');
    const navLinks = document.getElementById('nav-links');
    const navMenuLinks = document.querySelectorAll('.nav-links a');

    function closeMenu() {
        hamburgerButton.classList.remove('is-active');
        navLinks.classList.remove('is-active');
        hamburgerButton.setAttribute('aria-expanded', 'false');
    }

    if (hamburgerButton && navLinks) {
        hamburgerButton.addEventListener('click', function () {
            this.classList.toggle('is-active');
            navLinks.classList.toggle('is-active');
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
        });

        navMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('is-active')) {
                    closeMenu();
                }
            });
        });
    }

    // Use IntersectionObserver for better performance and cleaner code
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                // This allows the animation to replay if the user scrolls up and then back down
                entry.target.classList.remove('show');
            }
        });
    }, {
        threshold: 0.1 // Animation triggers when 10% of the element is visible
    });

    // Select all elements that should have a scroll-triggered animation
    const animatedElements = document.querySelectorAll(
        '.main-content,.project-card, .main-image, .service-card, .about-exp, .about-image, .pricing-card, .conquest-card, .section-title'
    );

    // Observe each animated element
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Video Overlay Logic
    const videoOverlay = document.getElementById('video-overlay');
    const overlayVideoPlayer = document.getElementById('overlay-video-player');
    const closeVideoOverlayBtn = document.querySelector('.close-video-overlay');
    const projectBtns = document.querySelectorAll('.project-btn');

    projectBtns.forEach(btn => {
        btn.addEventListener('click', function(event) {
            event.preventDefault();
            const videoSrc = this.dataset.videoSrc; // Get video source from data attribute

            if (videoSrc) {
                overlayVideoPlayer.src = videoSrc; // Set src directly on video tag
                overlayVideoPlayer.load(); // Load the new video source
                videoOverlay.classList.add('active');
                overlayVideoPlayer.play();
            }
        });
    });

    if (closeVideoOverlayBtn) {
        closeVideoOverlayBtn.addEventListener('click', function() {
            videoOverlay.classList.remove('active');
            overlayVideoPlayer.pause();
            overlayVideoPlayer.currentTime = 0; // Reset video to start
        });
    }

    if (videoOverlay) {
        videoOverlay.addEventListener('click', function(event) {
            if (event.target === videoOverlay) { // Close if clicked outside video content
                videoOverlay.classList.remove('active');
                overlayVideoPlayer.pause();
                overlayVideoPlayer.currentTime = 0;
            }
        });
    }
});
