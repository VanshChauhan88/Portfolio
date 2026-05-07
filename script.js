document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("start-btn");
    const introScreen = document.getElementById("intro-screen");

    // Only run this code if we are on the Intro page (index.html)
    if (startBtn && introScreen) {
        startBtn.addEventListener("click", () => {
            // Fade out the intro screen
            introScreen.style.opacity = "0";

            // Wait for the fade out transition to finish, then navigate to the home page
            setTimeout(() => {
                window.location.href = "home.html";
            }, 800);
        });
    }
});