//Manipulação DOM
const head = document.getElementById('head');
const body = document.getElementById('body');
const indexBody = document.getElementsByClassName('index-body')[0];

//Head Global
head.innerHTML +=
"<link rel='shortcut icon' href='/assets/img/favicon/favicon.ico' type='image/x-icon'>" +
"<link rel='stylesheet' href='/assets/css/global.css'>" +
"<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css'>" +
"<title>BrunaMara</title>";

//Header Global
const header = document.createElement('header');
header.innerHTML += 
"<a href='/index.html'><img id='logo' src='/assets/img/logotipo-recortada.png' alt='logo'></a>" +
"<div id='navbar'>" +
    "<div id='menu-flutuante'>" +
        "<a id='roupas-navbar' class='navbar-links' href=''>ROUPAS</a>" +
        "<div id='roupas-box'>" +
        "<a class='roupas-link' href='/index.html#category1-title'>FEMININO</a>" +
        "<a class='roupas-link' href='/index.html#category2-title'>MASCULINO</a>" +
        "<a class='roupas-link' href='/index.html#category3-title'>FEMININO PLUS SIZE</a>" +
        "<a class='roupas-link' href='/index.html#category4-title'>MASCULINO PLUS SIZE</a>" +
        "</div>" +
    "</div>" +
    "<a class='navbar-links' href=''>CONTATO</a>" +
    "<div id='icons'>" +
        "<a href='/assets/html/login.html'><i class='bi bi-person'></i></a>" +
        "<i class='bi bi-heart'></i>" +
        "<i class='bi bi-heart-fill'></i>" +
        "<i class='bi bi-cart3'></i>" +
    "</div>" +
"</div>";
body.prepend(header);

// Troca de Ícone Bootstrap de Favoritas no Cabeçalho
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

//Footer Global
const footer = document.createElement('footer');

footer.innerHTML +=
"<div id='social-media'>" +
    "<p>SIGA-NOS NAS REDES</p>" +
    "<i class='bi bi-instagram'></i>" +
    "<i class='bi bi-twitter-x'></i>" +
"</div>" +
"<div id='footer-content'>" +
    "<div id='rights'>" +
        "<p>TODOS DIREITOS RESERVADOS</p>" +
        "<p id='copyright'>Copyright 2024</p>" +
    "</div>" +
"</div>";
body.appendChild(footer);

//Index Extra Footer
const infos = document.createElement('div');
infos.setAttribute('id', 'infos');

infos.innerHTML +=
"<div>" +
    "<p class='infos-title'>TERMOS</p>" +
    "<p class='infos-p'>Políticas de Uso</p>" +
    "<p class='infos-p'>Entregas e Devoluções</p>" +
"</div>" +
"<div>" +
    "<p class='infos-title'>SEGURANÇA DOS DADOS</p>" +
    "<p class='infos-p'>Como protegemos os dados?</p>" +
"</div>";

indexBody.appendChild(infos);













