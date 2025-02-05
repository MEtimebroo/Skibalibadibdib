const play = document.getElementById("log");
const sign = document.getElementById("no-log");
const span = document.getElementById("span");
const user = document.getElementById("user");
const pass = document.getElementById("pass");
const span1 = document.getElementById("span-1");
let userValue = user.value;
let passValue = pass.value;

play.addEventListener('click', function() {
    location.href = "play-screen.html";
    console.log(userValue, passValue);
})

sign.addEventListener('click', function() {
    span.innerText = "Sign Up";
    sign.style.display = "none";
    span1.innerText = "Sign Up";
})

pass.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        location.href = "play-screen.html";
    }
})

function checkBackgroundImage() {
    const testImage = new Image();
    const backgroundImageUrl = getComputedStyle(document.body).backgroundImage;

    const urlMatch = backgroundImageUrl.match(/url\(["']?(.*?)["']?\)/);
    if (!urlMatch) {
        console.warn("No background image found in CSS.");
        applyFallbackStyles();
        return;
    }

    testImage.src = urlMatch[1];

    testImage.onload = function () {
        console.log("Background image loaded successfully.");
    };

    testImage.onerror = function () {
        console.warn("Background image failed to load.");
        applyFallbackStyles();
    };
}

function applyFallbackStyles() {
    document.body.style.backgroundColor = "bisque";
    document.body.style.color = "darkslategray";
}

window.addEventListener("load", checkBackgroundImage);
