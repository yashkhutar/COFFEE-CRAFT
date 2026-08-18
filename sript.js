/**
 * ==========================================
 * COFFEE CRAFT - CORE JAVASCRIPT
 * ==========================================
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================
       1. MOBILE NAVIGATION TOGGLE
       ========================================== */
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('toggle-active');
        });

        // Close mobile menu when a nav link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                if (hamburger) hamburger.classList.remove('toggle-active');
            });
        });
    }


    /* ==========================================
       2. ACTIVE LINK HIGHLIGHT ON SCROLL
       ========================================== */
    const sections = document.querySelectorAll('section[id]');

    function scrollActive() {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            const correspondingLink = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);

            if (correspondingLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    correspondingLink.classList.add('active');
                } else {
                    correspondingLink.classList.remove('active');
                }
            }
        });
    }

    window.addEventListener('scroll', scrollActive);


    /* ==========================================
       3. CONTACT FORM TO WHATSAPP INTEGRATION
       ========================================== */
    const enquiryForm = document.getElementById('enquiryForm');

    if (enquiryForm) {
        enquiryForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Fetch input values
            const nameInput = document.getElementById('name');
            const phoneInput = document.getElementById('phone');
            const messageInput = document.getElementById('message');

            const name = nameInput ? nameInput.value.trim() : '';
            const phone = phoneInput ? phoneInput.value.trim() : '';
            const message = messageInput ? messageInput.value.trim() : '';

            // Validate inputs
            if (!name || !phone || !message) {
                alert('Please fill in all required fields.');
                return;
            }

            // Construct structured WhatsApp message
            const whatsappNumber = '917021793448';
            const encodedText = encodeURIComponent(
                `*New Message from Coffee Craft Website*\n\n` +
                `*Name:* ${name}\n` +
                `*Phone:* ${phone}\n` +
                `*Message:* ${message}`
            );

            // Open WhatsApp with pre-filled text
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
            window.open(whatsappUrl, '_blank');
        });
    }


    /* ==========================================
       4. COOKIE CONSENT BANNER MANAGEMENT
       ========================================== */
    const cookieBanner = document.getElementById('cookieBanner');
    const acceptCookiesBtn = document.getElementById('acceptCookies');

    if (cookieBanner && acceptCookiesBtn) {
        // Check if user already accepted cookies previously
        if (localStorage.getItem('coffeeCraftCookiesAccepted') === 'true') {
            cookieBanner.style.display = 'none';
        }

        // Handle accept button click
        acceptCookiesBtn.addEventListener('click', () => {
            localStorage.setItem('coffeeCraftCookiesAccepted', 'true');
            
            // Smoothly fade out banner
            cookieBanner.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            cookieBanner.style.opacity = '0';
            cookieBanner.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                cookieBanner.style.display = 'none';
            }, 400);
        });
    }


    /* ==========================================
       5. HEADER STICKY SHADOW ON SCROLL
       ========================================== */
    const header = document.querySelector('.header');

    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 30) {
                header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
            } else {
                header.style.boxShadow = 'none';
            }
        });
    }

});