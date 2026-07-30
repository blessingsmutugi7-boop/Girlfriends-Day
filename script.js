

// Buttons

const clickMeButton = document.getElementById("clickMeButton");
const heartButton = document.getElementById("heartButton");
const surpriseButton = document.getElementById("surpriseButton");
const continueButton = document.getElementById("continueButton");
const continueToFinalButton = document.getElementById("continueToFinalButton");

const backgroundMusic = document.getElementById("backgroundMusic");

function startMusic() {
    if (backgroundMusic && backgroundMusic.paused) {
        backgroundMusic.volume = 0.35;
        backgroundMusic.play().catch(() => {});
    }
}


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


hintMessage.classList.remove("hidden");
message1.classList.remove("hidden");

const currentIndex = loveIndex;

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

            }
        );

    }
);

    loveIndex++;

    if (loveIndex >= loveMessages.length) {

        heartButton.classList.remove("hidden");
        heartButton.classList.add("show");

    }

    message1.classList.remove("hidden");
    message1.classList.add("show");


    console.log(event.clientX);
    console.log(event.clientY);

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


// Music funcion


const bgMusic = document.getElementById("bgMusic");

function startMusic() {
    if (bgMusic && bgMusic.paused) {
        bgMusic.volume = 0.35;
        bgMusic.play().catch(() => {});
    }
}





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


// Letter page, Memories page, and Final page

const letterMessage = document.getElementById("letterMessage");

if (letterMessage) {
     startMusic();
     
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
        page.classList.add("page-turn");

        setTimeout(function () {
            window.location.href = "memories.html";
        }, 950);

    });

}



const slides = document.querySelectorAll(".story-slide");
const finalButton = document.getElementById("continueToFinalButton");

if (slides.length > 0 && finalButton) {

    let currentSlide = 0;

    slides[currentSlide].classList.add("active");

    const slideInterval = setInterval(function () {

        const nextSlide = currentSlide + 1;

        // If this is the last slide, stop and show the button
        if (nextSlide >= slides.length) {

            clearInterval(slideInterval);

            setTimeout(function () {
                finalButton.classList.remove("hidden");
                finalButton.classList.add("fade-button");
            }, 2000);

            return;
        }

        slides[currentSlide].classList.remove("active");
        slides[nextSlide].classList.add("active");

        currentSlide = nextSlide;

    }, 7000);

    // Go to the final chapter when the button is clicked
    finalButton.addEventListener("click", function () {
        window.location.href = "final.html";
    });

}


const finalMessage = document.getElementById("finalMessage");

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

    typeWriter(finalMessage, endingText, 45);

}