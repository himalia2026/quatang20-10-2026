const stage = document.getElementById("stage");
const gift = document.getElementById("gift");
const scare = document.getElementById("scare");
const video = document.getElementById("video");
const hearts = document.getElementById("hearts");

/* ---------- Thả tim & hoa bay lên nền trời ---------- */
const ICONS = ["💖", "💗", "🌸", "💐", "🎀", "❤️", "🌷", "💞"];

function spawnHearts() {
    hearts.innerHTML = "";
    for (let i = 0; i < 14; i++) {
        const span = document.createElement("span");
        span.textContent = ICONS[Math.floor(Math.random() * ICONS.length)];
        span.style.left = Math.random() * 100 + "vw";
        span.style.fontSize = 14 + Math.random() * 22 + "px";
        span.style.setProperty("--dur", 7 + Math.random() * 8 + "s");
        span.style.setProperty("--delay", -Math.random() * 12 + "s");
        hearts.appendChild(span);
    }
}

spawnHearts();

/* ---------- Click hộp quà → mở nắp → video bật ra ---------- */
let opened = false;

function openGift() {
    if (opened) return;
    opened = true;

    gift.classList.add("opening"); // lắc hộp + bật nắp
    gift.disabled = true;

    // Chờ nắp vừa bật tung (~0.7s) là video nhảy ra ngay
    setTimeout(() => {
        stage.classList.add("leaving");
        scare.style.display = "block";
        requestAnimationFrame(() => scare.classList.add("show"));

        const playing = video.play();
        if (playing) {
            playing.catch(() => {
                // Một số trình duyệt chặn autoplay có tiếng → thử lại ở chế độ tắt tiếng
                video.muted = true;
                video.play().catch(() => { });
            });
        }
    }, 700);

    setTimeout(() => {
        stage.style.display = "none";
    }, 1200);
}

gift.addEventListener("click", openGift);
