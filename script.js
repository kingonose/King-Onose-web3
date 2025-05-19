document.addEventListener("DOMContentLoaded", function() {
    // Text for the typing effect
    const welcomeText = "Hi, I'm King Onose.";

    // Typing effect function
    function typeEffect(element, text, speed) {
        let i = 0;
        const typing = setInterval(function() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typing);
            }
        }, speed);
    }

    // Selecting elements and applying typing effect
    const heading = document.querySelector(".welcome-heading");
    const paragraph = document.querySelector(".typing-paragraph");

    // Apply typing effect to heading
    typeEffect(heading, welcomeText, 100);

    // Short paragraph after the h1 with typing effect
    const shortParagraph = "I'm a Graphics and UI/UX Designer, Front-end developer passionate about creating amazing designs and websites.";
    typeEffect(paragraph, shortParagraph, 50);
});

let ham = document.querySelector('#ham');
let nav = document.querySelector('.navigation');

ham.addEventListener('click', (e) => {
    e.preventDefault();
    nav.classList.toggle('show');
})
document.querySelectorAll('.works-content img').forEach(img => {
    img.addEventListener('click', function() {
      document.getElementById('imageModal').style.display = 'flex';
        document.getElementById('modalImg').src = this.src;
    });
});
document.querySelector('.modal .close').onclick = function() {
    document.getElementById('imageModal').style.display = 'none';
};
window.onclick = function(event) {
    if (event.target === document.getElementById('imageModal')) {
        document.getElementById('imageModal').style.display = 'none';
    }
};