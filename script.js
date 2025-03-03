// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active'); 
    });
});

// Scroll to top when page is refreshed
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handling
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Simple form validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // In a real application, you would send this data to a server
        // For this demo, we'll just show a success message
        alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
        
        // Reset the form
        contactForm.reset();
    });
}

// Add active class to nav links based on scroll position
function highlightNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const headerHeight = document.querySelector('header').offsetHeight;
        
        if (window.pageYOffset >= sectionTop - headerHeight - 50) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Add scroll event listener for nav highlighting
window.addEventListener('scroll', highlightNavLink);

// Animate skill bars on scroll
function animateSkillBars() {
    const skillSection = document.querySelector('.skills');
    const skillBars = document.querySelectorAll('.skill-progress');
    
    if (!skillSection) return;
    
    const sectionTop = skillSection.offsetTop;
    const sectionHeight = skillSection.clientHeight;
    const windowHeight = window.innerHeight;
    
    if (window.pageYOffset > sectionTop - windowHeight + 200) {
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
                bar.style.transition = 'width 1s ease-in-out';
            }, 100);
        });
        
        // Remove the event listener after animation
        window.removeEventListener('scroll', animateSkillBars);
    }
}

// Add scroll event listener for skill bar animation
window.addEventListener('scroll', animateSkillBars);

// Download resume functionality
const downloadResumeBtn = document.getElementById('download-resume');

if (downloadResumeBtn) {
    downloadResumeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // In a real application, this would link to an actual resume file
        alert('Resume download functionality would be implemented here with a real file.');
    });
}

// Add animation to project cards
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Highlight the current nav link on page load
    highlightNavLink();
    
    // Add active class to nav links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});