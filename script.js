document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    console.log('Burger Element:', burger); // Should log the burger element
    console.log('Nav Element:', nav); // Should log the nav element

    burger.addEventListener('click', () => {
        console.log('Burger clicked!'); // Should log when the burger is clicked
        nav.classList.toggle('active');
        burger.classList.toggle('toggle');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            console.log('Nav link clicked!'); // Should log when a nav link is clicked
            nav.classList.remove('active');
            burger.classList.remove('toggle');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger');
    const titleToHide = document.querySelector('.title-to-hide');

    burgerMenu.addEventListener('click', () => {
        const menuIsOpen = burgerMenu.classList.toggle('open'); // Toggle class 'open' on burger menu

        // Hide the title if menu is open, show it otherwise
        if (menuIsOpen) {
            titleToHide.style.display = 'none';
        } else {
            titleToHide.style.display = 'block';
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { 
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    });
});

function scrollToServices() {
    const servicesSection = document.getElementById('services');
    servicesSection.scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('accessibilityIcon').addEventListener('click', function() {
    document.body.classList.toggle('large-font');
});

document.addEventListener('DOMContentLoaded', () => {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach((item) => {
        const title = item.querySelector('.accordion-title');
        
        title.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all items
            accordionItems.forEach((el) => {
                el.classList.remove('active');
                el.querySelector('.accordion-content').style.maxHeight = null;
            });
            
            // If the clicked item was not active, activate it
            if (!isActive) {
                item.classList.add('active');
                const content = item.querySelector('.accordion-content');
                content.style.maxHeight = content.scrollHeight + 'px'; // Ensure this is correctly calculating height
            }
        });
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        item.querySelector("h3").addEventListener("click", () => {
            // Close all FAQ items except the one that was clicked
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains("active")) {
                    otherItem.classList.remove("active");
                    const otherAnswer = otherItem.querySelector("p");
                    otherAnswer.style.maxHeight = null; // Collapse the previous item
                }
            });

            // Toggle the clicked FAQ item
            item.classList.toggle("active");

            const answer = item.querySelector("p");
            if (item.classList.contains("active")) {
                answer.style.maxHeight = answer.scrollHeight + "px"; // Expand the clicked item
            } else {
                answer.style.maxHeight = null; // Collapse the clicked item
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const stickyHeader = document.querySelector('.sticky-header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) { // Adjust threshold for when the header should appear
            stickyHeader.classList.add('active');
        } else {
            stickyHeader.classList.remove('active');
        }
    });
});


window.addEventListener('scroll', function() {
    const stickyHeader = document.querySelector('.sticky-header');
    const mainHeader = document.querySelector('.main-header');
    const triggerHeight = mainHeader.offsetHeight;

    if (window.scrollY > triggerHeight) {
        if (!stickyHeader.classList.contains('active')) {
            stickyHeader.classList.add('active'); // Add active class for smooth transition
        }
    } else {
        if (stickyHeader.classList.contains('active')) {
            stickyHeader.classList.remove('active'); // Remove active class to hide
        }
    }
});

// Ensure sticky header is hidden on page load
document.addEventListener('DOMContentLoaded', function() {
    const stickyHeader = document.querySelector('.sticky-header');
    stickyHeader.style.display = 'none';  // Ensure it's hidden on page load
});


window.addEventListener('scroll', function() {
    const stickyHeader = document.querySelector('.sticky-header');
    const triggerHeight = document.querySelector('.header').offsetHeight;

    if (window.scrollY > triggerHeight) {
        stickyHeader.style.display = 'flex';  // Show the sticky header
    } else {
        stickyHeader.style.display = 'none';  // Hide the sticky header
    }
});


// Initial check when the page loads
document.addEventListener('DOMContentLoaded', function() {
    const stickyHeader = document.querySelector('.sticky-header');
    const mainHeader = document.querySelector('.main-header');
    const triggerHeight = mainHeader.offsetHeight;

    if (window.scrollY <= triggerHeight) {
        stickyHeader.style.display = 'none';  // Hide the sticky header initially
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const stickyHeader = document.querySelector('.sticky-header');
    stickyHeader.style.display = 'none';  // Ensure it's hidden on page load
});

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navbar = document.querySelector('.navbar');
    const stickyHeader = document.querySelector('.sticky-header');

    
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768) {
            stickyHeader.querySelector('.nav-links').style.display = 'none';
        } else {
            stickyHeader.querySelector('.nav-links').style.display = 'flex';
        }
    });

    burger.addEventListener('click', () => {
        navbar.classList.toggle('active');
        stickyHeader.classList.toggle('active');
    });
});
