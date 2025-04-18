const score = document.getElementById("score");
const plus1 = document.getElementById("plus-1");
const tenPer = document.getElementById("10-per");
const tenPerDeets = document.getElementById("10-per-deets");
const thirtyPer = document.getElementById("30-per");
const thirtyPerDeets = document.getElementById("30-per-deets");
const eightyPer = document.getElementById("80-per");
const eightyPerDeets = document.getElementById("80-per-deets");
const twoPer = document.getElementById("200-per");
const twoPerDeets = document.getElementById("200-per-deets");
const fivePer = document.getElementById("500-per");
const fivePerDeets = document.getElementById("500-per-deets");
const thouPer = document.getElementById("1000-per");
const thouPerDeets = document.getElementById("1000-per-deets");
//const twelPer = document.getElementById("1200-per");
const reset = document.getElementById("reset");
let scoreNum = 0;
score.innerText = scoreNum;

let tenInt = [];
let thirtyInt = [];
let eightyInt = [];
let twoInt = [];
let fiveInt = [];
let thouInt = [];
let twelInt = [];

if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
    location.href = "https://metimebroo.github.io/Skibalibadibdib/";
}

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

function confirmReset() {
    const al = window.confirm("Are you sure?");
    if (al) {
        scoreNum = 0;
        score.innerText = scoreNum;
        updateButtons();

        tenInt.forEach(interval => clearInterval(interval));
        thirtyInt.forEach(interval => clearInterval(interval));
        eightyInt.forEach(interval => clearInterval(interval));
        twoInt.forEach(interval => clearInterval(interval));
        fiveInt.forEach(interval => clearInterval(interval));
        thouInt.forEach(interval => clearInterval(interval));
        twelInt.forEach(interval => clearInterval(interval));

        tenInt = [];
        thirtyInt = [];
        eightyInt = [];
        twoInt = [];
        fiveInt = [];
        thouInt = [];
        twelInt = [];
    } else {
        alert("Not resetting.");
    }
}

function updateScoreDisplay(score) {
    document.getElementById("score").innerText = score;
    document.getElementById("score").style.color = score >= 1000 ? "gold" : "darkslategray";
}

function updateButtons() {
    if (scoreNum >= 10) {
        tenPer.style.display = "block";
        tenPerDeets.style.display = "block";
    } else {
        tenPer.style.display = "none";
        tenPerDeets.style.display = "none";
    }

    if (scoreNum >= 30) {
        thirtyPer.style.display = "block";
        thirtyPerDeets.style.display = "block";
    } else {
        thirtyPer.style.display = "none";
        thirtyPerDeets.style.display = "none";
    }

    if (scoreNum >= 80) {
        eightyPer.style.display = "block";
        eightyPerDeets.style.display = "block";
    } else {
        eightyPer.style.display = "none";
        eightyPerDeets.style.display = "none";
    }

    if (scoreNum >= 200) {
        twoPer.style.display = "block";
        twoPerDeets.style.display = "block";
    } else {
        twoPer.style.display = "none";
        twoPerDeets.style.display = "none";
    }

    if (scoreNum >= 500) {
        fivePer.style.display = "block";
        fivePerDeets.style.display = "block";
    } else {
        fivePer.style.display = "none";
        fivePerDeets.style.display = "none";
    }

    if (scoreNum >= 1000) {
        thouPer.style.display = "block";
        thouPerDeets.style.display = "block";
    } else {
        thouPer.style.display = "none";
        thouPerDeets.style.display = "none";
    }

    /*if (scoreNum >= 1200) {
        twelPer.style.display = "block";
    } else {
        twelPer.style.display = "none";
    }*/
}

updateButtons();

plus1.addEventListener("click", function() {
    scoreNum++;
    score.innerText = scoreNum;
    updateButtons();
})

tenPer.addEventListener("click", function() {
    scoreNum -= 10;
    score.innerText = scoreNum;
    updateButtons();
    const newTenInt = setInterval(function() {
        scoreNum++;
        score.innerText = scoreNum;
        updateButtons();
    }, 1000);

    tenInt.push(newTenInt);
})

thirtyPer.addEventListener("click", function() {
    scoreNum -= 30;
    score.innerText = scoreNum;
    updateButtons();
    const newThirtyInt = setInterval(function() {
        scoreNum += 5;
        score.innerText = scoreNum;
        updateButtons();
    }, 1000);

    thirtyInt.push(newThirtyInt);
})

eightyPer.addEventListener("click", function() {
    scoreNum -= 80;
    score.innerText = scoreNum;
    updateButtons();
    const newEightyInt = setInterval(function() {
        scoreNum += 10;
        score.innerText = scoreNum;
        updateButtons();
    }, 1000);

    eightyInt.push(newEightyInt);
})

twoPer.addEventListener("click", function() {
    scoreNum -= 200;
    score.innerText = scoreNum;
    updateButtons();
    const newTwoInt = setInterval(function() {
        scoreNum += 30;
        score.innerText = scoreNum;
        updateButtons();
    }, 1000);

    twoInt.push(newTwoInt);
})

fivePer.addEventListener("click", function() {
    scoreNum -= 500;
    score.innerText = scoreNum;
    updateButtons();
    const newFiveInt = setInterval(function() {
        scoreNum += 60;
        score.innerText = scoreNum;
        updateButtons();
    }, 1000);

    fiveInt.push(newFiveInt);
})

thouPer.addEventListener("click", function() {
    scoreNum -= 1000;
    score.innerText = scoreNum;
    updateButtons();
    const newThouInt = setInterval(function() {
        scoreNum += 120;
        score.innerText = scoreNum;
        updateButtons();
    }, 1000);

    thouInt.push(newThouInt);
})

/*twelPer.addEventListener("click", function() {
    scoreNum -= 1200;
    score.innerText = scoreNum;
    updateButtons();
    const newTwelInt = setInterval(function() {
        scoreNum += 150;
        score.innerText = scoreNum;
        updateButtons();
    }, 1000);

    twelInt.push(newTwelInt);
})*/

reset.addEventListener("click", function() {
    confirmReset();
})
