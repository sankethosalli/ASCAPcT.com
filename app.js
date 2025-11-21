/**
 * ASCAPCT - Interactive Enhancements
 * Engineering Intelligence. Building Systems That Endure.
 * 
 * This file contains vanilla JavaScript for smooth interactions
 * and progressive enhancements. No frameworks, no dependencies.
 */

// ============================================
// Utility Functions
// ============================================

/**
 * Debounce function to limit rate of function execution
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle function to ensure function executes at most once per interval
 */
function throttle(func, limit) {
    let inThrottle;
    return function executedFunction(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ============================================
// Navigation
// ============================================

/**
 * Handle navigation scroll behavior
 */
function initNavigation() {
    const nav = document.querySelector('.nav');
    if (!nav) return;

    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateNav = () => {
        const scrollY = window.scrollY;
        
        // Add shadow when scrolled
        if (scrollY > 10) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        lastScrollY = scrollY;
        ticking = false;
    };

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateNav);
            ticking = true;
        }
    });

    // Mobile menu toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.classList.toggle('nav-open');
        });

        // Close menu when clicking a link
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.classList.remove('nav-open');
            });
        });
    }
}

// ============================================
// Smooth Scrolling
// ============================================

/**
 * Enhanced smooth scrolling for anchor links
 */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (!target) return;
            
            e.preventDefault();
            
            const navHeight = document.querySelector('.nav')?.offsetHeight || 0;
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Update URL without scrolling
            history.pushState(null, null, href);
        });
    });
}

// ============================================
// Intersection Observer for Animations
// ============================================

/**
 * Animate elements on scroll into view
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optionally unobserve after animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements with animation classes
    const animatedElements = document.querySelectorAll(
        '.domain-card, .value-card, .stat, .about-text'
    );
    
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });

    // Add visible class styles via JavaScript
    const style = document.createElement('style');
    style.textContent = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

// ============================================
// Performance Monitoring (Optional)
// ============================================

/**
 * Log performance metrics (development only)
 */
function logPerformance() {
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        window.addEventListener('load', () => {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            const connectTime = perfData.responseEnd - perfData.requestStart;
            const renderTime = perfData.domComplete - perfData.domLoading;

            console.log('⚡ Performance Metrics:');
            console.log(`  Page Load Time: ${pageLoadTime}ms`);
            console.log(`  Connect Time: ${connectTime}ms`);
            console.log(`  Render Time: ${renderTime}ms`);
        });
    }
}

// ============================================
// Contact Form Handler (Placeholder)
// ============================================

/**
 * Handle contact form submission
 * TODO: Connect to backend API
 */
function initContactForm() {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        console.log('Form submission:', data);
        
        // TODO: Send to backend
        // try {
        //     const response = await fetch('/api/contact', {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify(data)
        //     });
        //     
        //     if (response.ok) {
        //         // Show success message
        //     }
        // } catch (error) {
        //     // Show error message
        // }
    });
}

// ============================================
// Keyboard Navigation
// ============================================

/**
 * Enhanced keyboard navigation accessibility
 */
function initKeyboardNav() {
    // Tab visibility for keyboard users
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-nav');
        }
    });

    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-nav');
    });

    // Add focus styles
    const style = document.createElement('style');
    style.textContent = `
        body:not(.keyboard-nav) *:focus {
            outline: none;
        }
        body.keyboard-nav *:focus {
            outline: 2px solid var(--color-accent-primary);
            outline-offset: 2px;
        }
    `;
    document.head.appendChild(style);
}

// ============================================
// Initialization
// ============================================

/**
 * Initialize all interactive features
 */
function init() {
    // Check if DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
        return;
    }

    console.log('🚀 ASCAPCT - System Online');
    
    // Initialize features
    initNavigation();
    initSmoothScroll();
    initScrollAnimations();
    initContactForm();
    initKeyboardNav();
    logPerformance();
}

// Start the application
init();

// ============================================
// Export for potential module usage
// ============================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        init,
        debounce,
        throttle
    };
}

// TODO: Add service worker for offline support
// TODO: Add analytics integration
// TODO: Add A/B testing framework
// TODO: Add error tracking
