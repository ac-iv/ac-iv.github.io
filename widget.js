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
            slideText.innerText = "Within the standard alarm settings of the iPhone, users will find a seamless option to enable Widget Wakeup. By toggling this feature on, they unlock a world of personalized morning briefings and enhanced functionality. Additionally, Widget Wakeup can be programmed as a recurring event, synchronizing with the user's iPhone sleep schedule for effortless integration into their daily routine. The user interface for Widget Wakeup is designed to be intuitive and user-friendly. Upon enabling the feature, users will be presented with a comprehensive set of options to customize their morning briefing. The interface might resemble the following:";
            break;
        case 1:
            slideText.innerText = "For calendars, the user chooses sizing, placement, and the ability to choose which calendars to display. \nFor Weather, the user will have access to choose the sizing and location of the weather forecast. This is beneficial for commuters. \nFor Music, the user will be able to choose a playlist to initiate following the dismissal of the alarm. \nFor Podcast, the user will be able to choose a playlist to initiate following the dismissal of the alarm. \nFor Maps – Transit, the user will be given the option to choose sizing, able to pin selected lines, and observe the timing status for a line. Beneficial for commuters. \nFor Maps – ETA, the user will be given the option to choose sizing, and show Siri recommended destinations, and traffic status for chosen destinations. Information extracted from activity and calendar. \m \nFor Reminders, the user will be given the option to choose to size and which reminders list will be shown.";
            break;
        case 2:
            slideText.innerText = "Step 1:\nSet Up Widget Wakeup in iPhone Alarm Settings\n\nStep 2:\nWhen alarm goes off, your personalized morning brief will appear on the Apple TV linked to the Widget Wakeup.\n\nStep 3:\nOnce your Apple TV notices that your phone is 500 feet away, it will automatically turn off and cycle off the Apple TV.";
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
