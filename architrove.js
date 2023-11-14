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
            slideText.innerText = "The service welcomes users with a straightforward splash screen, showing a list of blogs, a link for those who have recieved letters, and hyperlinks to other parts of the website.";
            break;
        case 1:
            slideText.innerText = "The contact page is actually modeled after this website, and features the same straightforward information.";
            break;
        case 2:
            slideText.innerText = "This is an example of a blog post, my first one completed for a family friends home.";
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
