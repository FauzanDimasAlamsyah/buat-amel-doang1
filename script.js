function goToNextPage() {
    window.location.href = "next.html";
}

function moveButton() {
    const button = document.querySelector('.no-button');
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

// Falling Hearts Animation
document.addEventListener('DOMContentLoaded', () => {
    const heartsContainer = document.querySelector('.hearts');

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 500);
});