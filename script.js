

// Buttons

const clickMeButton = document.getElementById("clickMeButton");
const heartButton = document.getElementById("heartButton");
const surpriseButton = document.getElementById("surpriseButton");
const continueButton = document.getElementById("continueButton");
const continueToFinalButton = document.getElementById("continueToFinalButton");



// Music (works on all pages)
const pageMusic =
    document.getElementById("backgroundMusic") ||
    document.getElementById("memoriesMusic");

function startMusic() {
    if (!pageMusic) return;

    pageMusic.volume = 0.35;

    const playPromise = pageMusic.play();
    if (playPromise !== undefined) {
        playPromise.catch(() => {});
    }
}

window.addEventListener("load", startMusic);

function unlockMusic() {
    startMusic();

    document.removeEventListener("click", unlockMusic);
    document.removeEventListener("touchstart", unlockMusic);
    document.removeEventListener("scroll", unlockMusic);
}

document.addEventListener("click", unlockMusic);
document.addEventListener("touchstart", unlockMusic);
document.addEventListener("scroll", unlockMusic, { once: true });

// Messages

const hintMessage = document.getElementById("hintMessage");
const message1 = document.getElementById("message1");
const message2 = document.getElementById("message2");
const message3 = document.getElementById("message3");


// Arrays 
const hintMessages = [
    "🤭 I have a few things I want to tell you...",
    "🥺 Don't stop now...",
    "💜 There's something else...",
    "✨ Just one more...",
    "❤️ Okay... now open my heart."
];

const loveMessages = [
    "💜 Hey beautiful... I made a little something just for you. 🤭❤️ Click me again, baby.",
    "🌸 You make every day brighter.",
    "❤️ You know I love that smile of yours.",
    "✨ You know I like being naughty🫣 coz your hot and s..y🤭🫣.",
    "🥺 Make sure your smiling, you beautiful girl!🥺🤭"
];

const heartEmojis = [
    "❤️",
    "💜",
    "💖",
    "💕",
    "💗",
    "💝"
];


const surpriseMessages = [
    "Happy Girlfriend's Day, my love! 🥰💜",
    "I made something unique for you, Love you sweetie. 🥺💜",
    "Did this make you smile, then promise me hug on our meet up. 🥺❤️",
    "Si ata wewe unajua you are keki, mali safi 🤭, nakupendaa. 🥺",
    "I hope this little website made you smile. 🤭💖"
];

let loveIndex = 0;

// Functions

function showLoveMessage(event) {
    clickMeButton.disabled = true;

    // If all messages have been shown once,
    // restart from the beginning without hiding the heart button
    if (loveIndex >= loveMessages.length) {
        loveIndex = 0;
    }

    hintMessage.classList.remove("hidden");
    message1.classList.remove("hidden");

    const currentIndex = loveIndex;

    // Clear previous text before typing again
    hintMessage.textContent = "";
    message1.textContent = "";

    typeWriter(
        hintMessage,
        hintMessages[currentIndex],
        40,
        function () {

            typeWriter(
                message1,
                loveMessages[currentIndex],
                50,
                function () {

                    clickMeButton.disabled = false;

                    // Unlock the heart button only after the first full cycle
                    if (currentIndex === loveMessages.length - 1) {
                        heartButton.classList.remove("hidden");
                        heartButton.classList.add("show");
                    }

                }
            );

        }
    );

    loveIndex++;

    message1.classList.add("show");

    const numberOfHearts = 10;

    for (let i = 0; i < numberOfHearts; i++) {
        setTimeout(function () {
            createHeart(event.clientX, event.clientY);
        }, i * 200);
    }
}


// Second function

function showHeartMessage() {

    window.location.href = "letter.html";

}


// Third function

function showSurpriseMessage(event) {

   

        message3.classList.remove("hidden");
        message3.classList.add("show");
        message3.classList.add("fade-in");

            const randomIndex = Math.floor(Math.random() * surpriseMessages.length);



    typeWriter(
            message3,
        surpriseMessages[randomIndex],
    60
);
        

        // Hearts everywhere!
        for (let i = 0; i < 40; i++) {

            setTimeout(function () {

                createHeart(
                    Math.random() * window.innerWidth,
                    Math.random() * window.innerHeight
                );

            }, i * 80);

        }

    }



// Try to start music when the page loads
window.addEventListener("load", startMusic);

// If autoplay is blocked, start music on the first tap/click
document.addEventListener("click", startMusic, { once: true });
document.addEventListener("touchstart", startMusic, { once: true });



// Event listener

if (clickMeButton) {
    clickMeButton.addEventListener("click", function (event) {
        startMusic();
        showLoveMessage(event);
    });
}

if (heartButton) {
    heartButton.addEventListener("click", function () {
        showHeartMessage();
    });
}

if (surpriseButton) {
    surpriseButton.addEventListener("click", function (event) {
        showSurpriseMessage(event);
    });
}



// Heart emoji functions( mostly for surprise function button)

function createHeart(x, y) {

    const heart = document.createElement("div");


    const randomHeart =
        heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

    heart.textContent = randomHeart;

    heart.classList.add("heart");

    const randomSize = Math.random() * 25 + 20;
    heart.style.fontSize = randomSize + "px";

    const randomDuration = Math.random() * 2 + 2;
    heart.style.animation = `floatUp ${randomDuration}s linear forwards`;

    heart.style.left = x + "px";
    heart.style.top = y + "px";

    document.body.appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, 3000);
}


function typeWriter(element, text, speed, callback) {

    element.textContent = "";

    let index = 0;

    function type() {

        if (index < text.length) {

            element.textContent += text.charAt(index);

            index++;

            setTimeout(type, speed);

        } else {

            if (callback) {
                callback();
            }

        }
    }

    type();
}

function backgroundHearts() {

    createHeart(
        Math.random() * window.innerWidth,
        window.innerHeight
    );

}

setInterval(backgroundHearts, 2000);


const letterMessage = document.getElementById("letterMessage");

if (letterMessage) {

    // Try to start music immediately
    startMusic();

    // If autoplay is blocked after a refresh, start on the first interaction
    document.addEventListener("click", startMusic, { once: true });
    document.addEventListener("touchstart", startMusic, { once: true });

    const letter = `Mambo mamaa, how do you do? ❤️

Sina maneno mingi. Infact, sai naandika, kazi tu ni kublush peke yangu nikii imagine venye unasmile sai. 🤭

This is just for you, baby. 😊 So I urge you to relax and enjoy every minute of this website. Hii ni yako.

Sita kaa hapa nikijiongea sana, but you know how much I love that smile of yours. So give it to me. It has always been the most perfect gift for this guy. A smile so beautiful it can make a grown man like me blush and fall in love all over again.

Sasa usiwache kusmile, sindio babygal? 🤭

Wacha nikukosee adabu kidogo… 🤣🤣

Do you know how hot you are? Kazi yako huku ni kuniturn on. Aki wewe. 🤣 Unajua venye napenda hizo curves zako zenye hufanya mzee huko chini asimame. 🫣

Babygal, you’ve got the perfect smile, the perfect body, and you are simply beautiful.

As you’re reading this tailor-made letter written just for you, I want you to know that you are incredibly special to me. You know how to handle me. Nikiskia kunanurwa, you’re always there. You’re such a sweetheart, and truly the most beautiful lady.

Thank you for being you. Thank you for making me smile, and for always forgiving me when I start acting stupidly.

And please… make me even happier. 🤭🫣

For you Betty........❤️💜

My love.....😘💜

Yours lovingly,`;

    typeWriter(
        letterMessage,
        letter,
        40,
        function () {
            continueButton.classList.remove("hidden");
            continueButton.classList.add("show");
        }
    );

}


if (continueButton) {

    continueButton.addEventListener("click", function () {

        const page = document.querySelector(".letter-page");

        continueButton.disabled = true;

        if (page) {
            page.classList.add("page-turn");
        }

        setTimeout(function () {
            window.location.href = "memories.html";
        }, 950);

    });

}



const slides = document.querySelectorAll(".story-slide");
const finalButton = document.getElementById("continueToFinalButton");
const replayButton = document.getElementById("replaySlideshowButton");

if (slides.length > 0 && finalButton && replayButton) {

    let slideInterval;
    let currentSlide = 0;

    function startSlideshow() {

        clearInterval(slideInterval);

        currentSlide = 0;

        slides.forEach(slide => slide.classList.remove("active"));
        slides[currentSlide].classList.add("active");

        slideInterval = setInterval(function () {

            const nextSlide = currentSlide + 1;

            if (nextSlide >= slides.length) {
                clearInterval(slideInterval);

                finalButton.classList.remove("hidden");
                finalButton.classList.add("fade-button");

                replayButton.classList.remove("hidden");
                replayButton.classList.add("fade-button");

                return;
            }

            slides[currentSlide].classList.remove("active");
            slides[nextSlide].classList.add("active");

            currentSlide = nextSlide;

        }, 7000);
    }

    // Start automatically after 25 seconds
    setTimeout(startSlideshow, 25000);

    // Replay button
    replayButton.addEventListener("click", startSlideshow);

    // Final chapter button
    finalButton.addEventListener("click", function () {
        window.location.href = "final.html";
    });

}


const finalMessage = document.getElementById("finalMessage");
const signatureBlock = document.getElementById("signatureBlock");
const finalEnding = document.getElementById("finalEnding");

if (finalMessage) {

    const endingText = `If there’s one thing I hope you remember from this little website,
it’s this:

You are loved.
You are appreciated.
And you are incredibly beautiful.

Thank you for being you.
Thank you for making me smile.
Thank you for making my world brighter.

I hope this little website reminded you of how special you are to me.

Keep smiling, my beautiful girl.`;

    typeWriter(finalMessage, endingText, 45, function () {

        if (signatureBlock) {
            signatureBlock.classList.remove("hidden");
            signatureBlock.classList.add("show");
        }

        setTimeout(function () {
            if (finalEnding) {
                finalEnding.classList.remove("hidden");
                finalEnding.classList.add("show");
            }
        }, 800);

    });

}
