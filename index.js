const correctPassword = 'manoranjan'; // Define the correct password

function showLoginCard() {
    document.getElementById('login-card').style.display = 'flex';
}

function checkPassword() {
    const passwordInput = document.getElementById('password').value;
    const loginMessage = document.getElementById('login-message');

    if (passwordInput === correctPassword) {
        document.getElementById('login-card').style.display = 'none';
        document.querySelector('.container').style.display = 'flex';
        document.querySelector('.email-icon').style.display = 'none';
    } else {
        loginMessage.textContent = 'Incorrect password. Please try again.';
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    const yesButton = document.getElementById('yes');
    const noButton = document.getElementById('no');
    const message = document.getElementById('message');
    const container = document.querySelector('.container');
    const notificationSound = document.getElementById('notification-sound');
    const clickSound = document.getElementById('click-sound');
    const hoverSound = document.getElementById('hover-sound');
    const photoBox = document.querySelector('.photo-box');
    const confettiContainer = document.getElementById('confetti-container');
    const proposalText = document.getElementById('proposal-text');
    const eyeIcon = document.getElementById('eye-icon');
    const passwordInput = document.getElementById('password');

    yesButton.addEventListener('click', () => {
        message.textContent = 'kaisa laga ye surprise❣️';
        message.style.opacity = 1;
        message.style.animation = 'zoomInOut .5s ease-in-out';

        notificationSound.play();

        setTimeout(() => {
            message.style.opacity = 0;
            message.style.animation = 'none';
        }, 4000);

        // Confetti effect
        confettiContainer.innerHTML = ''; // Clear any existing confetti
        const numberOfConfetti = 100;

        for (let i = 0; i < numberOfConfetti; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');

            // Random position
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-10px';

            // Random colors
            confetti.style.backgroundColor = getRandomColor();

            // Random size
            confetti.style.width = confetti.style.height = Math.random() * 10 + 5 + 'px';

            // Random animation duration
            confetti.style.animationDuration = Math.random() * 3 + 2 + 's';

            confettiContainer.appendChild(confetti);
        }

        // Smoothly fade out confetti after 5 seconds
        setTimeout(() => {
            const confettiElements = document.querySelectorAll('.confetti');
            confettiElements.forEach((confetti) => {
                confetti.style.transition = 'opacity 2s ease';
                confetti.style.opacity = '0';
            });

            // Remove confetti from DOM after fade-out transition
            setTimeout(() => {
                confettiContainer.innerHTML = '';
            }, 2000); // Delay to match the opacity transition duration
        }, 5000); // Start fading out after 5 seconds
    });

    function getRandomColor() {
        const colors = ['#ffcc00', '#ff5733', '#33d9b2', '#706fd3', '#ff793f', '#cd84f1'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    noButton.addEventListener('mouseover', () => {
        const containerRect = container.getBoundingClientRect();
        const noButtonRect = noButton.getBoundingClientRect();
        const photoBoxRect = photoBox.getBoundingClientRect();

        let newLeft, newTop;

        do {
            newLeft = Math.random() * (containerRect.width - noButtonRect.width);
            newTop = Math.random() * (containerRect.height - noButtonRect.height);
        } while (
            newLeft + noButtonRect.width > photoBoxRect.left - containerRect.left &&
            newTop + noButtonRect.height > photoBoxRect.top - containerRect.top
        );

        noButton.style.position = 'absolute';
        noButton.style.left = `${newLeft}px`;
        noButton.style.top = `${newTop}px`;
    });

    // Play hover sound when mouse is over the photo-box
    photoBox.addEventListener('mouseover', () => {
        hoverSound.play();
    });

    photoBox.addEventListener('mouseleave', () => {
        hoverSound.pause();
        hoverSound.currentTime = 0; // Rewind the audio to the start
    });

    // Add shine effect every 4 seconds
    function addShineEffect() {
        proposalText.classList.add('shine');
        setTimeout(() => {
            proposalText.classList.remove('shine');
        }, 2000); // Shine effect duration
    }

    setInterval(addShineEffect, 4000); // Trigger shine effect every 4 seconds

    // Toggle password visibility
    eyeIcon.addEventListener('click', () => {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            eyeIcon.src = 'image/closeeye-removebg-preview.png'; // Path to the eye-closed image
        } else {
            passwordInput.type = 'password';
            eyeIcon.src = 'image/openeye-removebg-preview.png'; // Path to the eye-open image
        }
    });
});

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    document.querySelector('.photo-box').appendChild(heart);

    // Remove heart after animation ends
    setTimeout(() => {
        document.querySelector('.photo-box').removeChild(heart);
    }, 2000); // Duration matches the CSS animation
}

// suggestion animation  
function showSuggestionBox() {
    const suggestionBox = document.getElementById('suggestionBox');
    suggestionBox.style.display = 'block';
    setTimeout(() => {
        suggestionBox.style.display = 'none';
    }, 8000); // Hide after 8 seconds
}
