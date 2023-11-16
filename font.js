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
            slideText.innerText = "Neue Hass Grotesque";
            break;
        case 1:
            slideText.innerText = "Cooper Black";
            break;
        case 2:
            slideText.innerText = "W.I.P.";
            break;
       
        // Add more cases if you have more slides
    }
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

document.addEventListener('DOMContentLoaded', showSlide(currentSlide));
