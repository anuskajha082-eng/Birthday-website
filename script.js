function showSurprise() {
    const popup = document.getElementById("popup");

    popup.style.display = "flex";

    createHearts();
}

function closeSurprise() {
    const popup = document.getElementById("popup");

    popup.style.display = "none";
}

function playMusic() {
    const music = document.getElementById("birthdayMusic");

    music.play();
}
const text = "Happy Birthday 🎂💖";
let index = 0;

function typeBirthday() {
    if (index < text.length) {
        document.getElementById("birthdayText").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeBirthday, 120);
    }
}

window.onload = typeBirthday;

function createHearts() {

    const heartsContainer = document.getElementById("hearts");

    for (let i = 0; i < 25; i++) {

        const heart = document.createElement("div");

        heart.classList.add("heart");

        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.animationDuration =
            (3 + Math.random() * 4) + "s";

        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 7000);
    }
}
function showSurprise() {
    document.getElementById("popup").style.display = "flex";
}

function closeSurprise() {
    document.getElementById("popup").style.display = "none";
}
function createHearts() {
    const celebration = document.getElementById("celebration");

    for (let i = 0; i < 30; i++) {
        const heart = document.createElement("div");

        heart.className = "heart";
        heart.innerHTML = "💖";

        heart.style.left = Math.random() * 100 + "%";
        heart.style.animationDelay = Math.random() * 2 + "s";

        celebration.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}
function createConfetti() {
    for (let i = 0; i < 60; i++) {
        const confetti = document.createElement("div");

        confetti.innerHTML = "🎉";
        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-30px";
        confetti.style.fontSize = "20px";
        confetti.style.zIndex = "9999";
        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);

        const fall = confetti.animate(
            [
                { transform: "translateY(0) rotate(0deg)", opacity: 1 },
                { transform: "translateY(110vh) rotate(720deg)", opacity: 0 }
            ],
            {
                duration: 3000 + Math.random() * 2000,
                easing: "linear"
            }
        );

        fall.onfinish = () => confetti.remove();
    }
}
function createHearts() {
    for (let i = 0; i < 40; i++) {
        const heart = document.createElement("div");

        heart.innerHTML = "💖";
        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "-30px";
        heart.style.fontSize = (18 + Math.random() * 20) + "px";
        heart.style.zIndex = "9999";
        heart.style.pointerEvents = "none";

        document.body.appendChild(heart);

        const fall = heart.animate(
            [
                { transform: "translateY(0) rotate(0deg)", opacity: 1 },
                { transform: "translateY(110vh) rotate(360deg)", opacity: 0 }
            ],
            {
                duration: 3500 + Math.random() * 2000,
                easing: "linear"
            }
        );

        fall.onfinish = () => heart.remove();
    }
}