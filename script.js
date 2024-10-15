const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Toggle the menu on hamburger click
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle the active class
});

// Close the menu when a nav link is clicked
navLinks.addEventListener('click', () => {
    navLinks.classList.remove('active'); // Remove the active class
});

// Close the menu when clicking outside of it
document.addEventListener('click', (event) => {
    if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
        navLinks.classList.remove('active'); // Remove the active class
    }
});

// Smooth scrolling for navigation links
const navLinksItems = document.querySelectorAll('.nav-links a');

navLinksItems.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default anchor behavior
        const targetId = this.getAttribute('href'); // Get the target section ID
        const targetSection = document.querySelector(targetId); // Select the target section
        
        // Scroll smoothly to the target section
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});




// Book now button / form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    const form = event.target;
    const formData = new FormData(form);
    
    // Collect data
    const name = formData.get('name');
    const phone = formData.get('phone');
    const email = formData.get('email'); 
    const pickup = formData.get('pickup');
    const dropOff = formData.get('dropoff');
    const passengers = formData.get('passengers');
    const pickupTime = formData.get('pickup-time'); // Get the pickup time

    // Get the contact method
    const contactMethod = formData.get('contact-method');

    // Construct the message body
    const messageBody = `Booking Request:\n\n` +
                        `Name: ${name}\n` +
                        `Phone: ${phone}\n` +
                        `Email: ${email}\n` +
                        `Pickup Location: ${pickup}\n` +
                        `Drop-off Location: ${dropOff}\n` +
                        `Pickup Time: ${pickupTime}\n` + // Include pickup time
                        `Number of Passengers: ${passengers}`;

    if (contactMethod === 'email') {
        const subject = encodeURIComponent('Taxi Booking Request');
        const recipientEmail = 'mnszsite.aw@gmail.com'; 
        const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${encodeURIComponent(messageBody)}`;
        window.location.href = mailtoLink;
    } else if (contactMethod === 'whatsapp') {
        const whatsappNumber = '67578707911'; 
        const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(messageBody)}`;
        window.open(whatsappLink, '_blank');
    } else {
        alert('Please select a valid contact method.');
    }
}



// testimonials

let currentSlide = 0;

function changeSlide() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const totalSlides = slides.length;
    
    // Hide the current slide
    slides[currentSlide].classList.remove('active');

    // Move to the next slide
    currentSlide = (currentSlide + 1) % totalSlides;

    // Show the next slide
    slides[currentSlide].classList.add('active');

    // Update the transform property of the container
    const testimonialContainer = document.querySelector('.testimonial-container');
    testimonialContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Auto-slide every 5 seconds
setInterval(changeSlide, 5000);



// about section

// about

let currentAboutSlide = 0;

function changeAboutSlide() {
    const slides = document.querySelectorAll('.about-slide');
    const totalSlides = slides.length;

    // Hide the current slide
    slides[currentAboutSlide].classList.remove('active');

    // Move to the next slide
    currentAboutSlide = (currentAboutSlide + 1) % totalSlides;

    // Show the next slide
    slides[currentAboutSlide].classList.add('active');

    // Update the transform property of the container
    const aboutContainer = document.querySelector('.about-container');
    aboutContainer.style.transform = `translateX(-${currentAboutSlide * 100}%)`;
}

// Auto-slide every 5 seconds
setInterval(changeAboutSlide, 5000);







