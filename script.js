// =====================================
// 1. REALISTIC FALLING ROSE PETALS
// =====================================

const petalsContainer = document.querySelector(".petals-container");

function createPetal() {

    if (!petalsContainer) return;

    const petal = document.createElement("img");

    petal.src = "images/rose-petal.png";
    petal.classList.add("petal");

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.width = Math.random() * 20 + 25 + "px";

    petal.style.animationDuration = Math.random() * 5 + 6 + "s";

    petal.style.setProperty(
        "--drift",
        (Math.random() * 200 - 100) + "px"
    );

    petal.style.setProperty(
        "--rotation",
        Math.random() * 720 + "deg"
    );

    petalsContainer.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 12000);
}

if (petalsContainer) {
    setInterval(createPetal, 500);
}


// =====================================
// 2. OPEN WEDDING ALBUM
// =====================================

function openAlbum() {



    
    const album = document.getElementById("albumIntro");

    const music = document.getElementById("anniversaryMusic");

    if (music) {
        music.currentTime = 0;
        music.play().catch(error => {
            console.log("Music playback:", error);
        });
    }

    if (album) {
        album.classList.add("album-opening");

        setTimeout(() => {
            album.style.display = "none";
        }, 1500);
    }
}


// =====================================
// 3. OPEN YOUR SURPRISE
// =====================================

function showMessage() {

    const surprise = document.getElementById("surprise");

    if (!surprise) return;

    surprise.innerHTML = `
        <div class="surprise-hearts">
            <span>💖</span>
            <span>💕</span>
            <span>✨</span>
        </div>

        <h2>Forever & Always ❤️</h2>

        <p>Two Hearts, One Beautiful Love Story.</p>
    `;
}


// =====================================
// 4. WEDDING VIDEO AUTO PLAY
// =====================================

const weddingVideo = document.querySelector(".wedding-video video");

if (weddingVideo) {

    const videoObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                weddingVideo.muted = true;

                weddingVideo.play().catch(() => {});

            } else {

                weddingVideo.pause();

            }

        });

    }, { threshold: 0.5 });

    videoObserver.observe(weddingVideo);
}


// =====================================
// 5. SIX GREETING ENVELOPES
// =====================================

const messageEnvelopes = document.querySelectorAll(".message-envelope");

let envelopesStarted = false;

async function openGreetingEnvelopes() {

    for (const envelope of messageEnvelopes) {

        envelope.classList.add("open");

        await new Promise(resolve => {
            setTimeout(resolve, 2500);
        });

    }

    console.log("All six greeting messages opened!");
}

const greetingSection = document.querySelector(".envelope-section");

if (greetingSection && messageEnvelopes.length > 0) {

    const greetingObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting && !envelopesStarted) {

                envelopesStarted = true;

                openGreetingEnvelopes();

                greetingObserver.disconnect();

            }

        });

    }, { threshold: 0.3 });

    greetingObserver.observe(greetingSection);
}


