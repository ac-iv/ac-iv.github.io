let currentSlide = 0;

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const slideText = document.getElementById('slideText');

    if (n >= slides.length) {
        currentSlide = 0;
    } else if (n < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = n;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[currentSlide].style.display = 'block';

    // Update the text based on the current slide
    switch (currentSlide) {
        case 0:
            slideText.innerText = "The service welcomes users with a straightforward splash screen, prompting for a password. This step is designed to emphasize the essence of personalization, allowing only individuals to whom I've granted the URL access the ability to send messages to me. The QR code provided is an active link to this page, and I affix this code to my personal stationery, communication cards, and other relevant items.";
            break;
        case 1:
            slideText.innerText = "The main screen is a simple layout, styled to decrease the mental presence of technology. By adapting a white and black simple screen, I am able to simulate a pen and paper experience.";
            break;
        case 2:
            slideText.innerText = "The last screen is the about screen, offering users a description on the service and why it is important to me.";
            break;
        
    }
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

document.addEventListener('DOMContentLoaded', showSlide(currentSlide));
