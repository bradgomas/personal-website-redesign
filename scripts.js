// --- Feature 1: Time-Based Welcome Message ---
function setWelcomeMessage() {
    const welcomeElement = document.getElementById("welcome-message");
    if (!welcomeElement) return;

    const hours = new Date().getHours();
    let greeting = "Hello!";

    if (hours < 12) {
        greeting = "Good Morning!";
    } else if (hours < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    welcomeElement.textContent = greeting + " Welcome to my personal website.";
}

// --- Feature 2: Digital Clock & Date Display ---
function updateClock() {
    const clockElement = document.getElementById("digital-clock");
    const dateElement = document.getElementById("current-date");
    const now = new Date();
    
    if (clockElement) {
        clockElement.textContent = now.toLocaleTimeString();
    }
    
    if (dateElement) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateElement.textContent = now.toLocaleDateString(undefined, options);
    }
}

// --- Feature 3: Show / Hide Content Toggle ---
function setupShowHide() {
    const button = document.getElementById("toggle-btn");
    const content = document.getElementById("extra-content");

    if (button && content) {
        button.addEventListener("click", function() {
            if (content.classList.contains("hidden")) {
                content.classList.remove("hidden");
                button.textContent = "Read Less";
            } else {
                content.classList.add("hidden");
                button.textContent = "Read More";
            }
        });
    }
}

// --- Feature 4: Paragraph Background Color ---
function changeParagraphColor(color) {
    const paragraph = document.getElementById("color-paragraph");
    if (paragraph) {
        paragraph.style.backgroundColor = color;
        paragraph.style.padding = "10px";
        paragraph.style.borderRadius = "4px";
    }
}

// --- Feature 5: Character Counter for Text Area ---
function setupCharacterCounter() {
    const textBox = document.getElementById("message-box");
    const charCount = document.getElementById("char-count");
    const maxLength = 150;

    if (textBox && charCount) {
        textBox.addEventListener("input", function() {
            const currentLength = textBox.value.length;
            const remaining = maxLength - currentLength;
            charCount.textContent = remaining;
        });
    }
}

// Run all initialization functions when the page loads
window.addEventListener("DOMContentLoaded", () => {
    setWelcomeMessage();
    setupShowHide();
    setupCharacterCounter();
    
    // Start the live clock
    updateClock();
    setInterval(updateClock, 1000);
});
