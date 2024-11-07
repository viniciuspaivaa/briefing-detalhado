const head = document.getElementById('head');

head.innerHTML +=
"<link rel='shortcut icon' href='assets/img/favicon/favicon.ico' type='image/x-icon'>" +
"<link rel='stylesheet' href='assets/css/global.css'></link>" +
"<title>BrunaMara</title>";

const heart = document.getElementsByClassName("bi-heart")[0];
const heartFill = document.getElementsByClassName("bi-heart-fill")[0];
let isHeartFilled = false;

heart.addEventListener('mouseenter', () => {
    if (!isHeartFilled) {
        heart.style.display = 'none';
        heartFill.style.display = 'inline';
        isHeartFilled = true;
    }
});

heartFill.addEventListener('mouseleave', () => {
    if (isHeartFilled) {
        heartFill.style.display = 'none';
        heart.style.display = 'inline';
        isHeartFilled = false;
    }
});