
/* 
===========================================
1. CONSTANTES DEL DOM
=========================================== */
const openMenuBtn = document.querySelector('.open-menu');
const closeMenuBtn = document.querySelector('.close-menu');
const aside = document.querySelector('.nav-principal');
const body = document.body;

/* 
===========================================
2. APERTURA DEL MENÚ
=========================================== */
openMenuBtn.addEventListener('click', () => {
    aside.classList.add('nav-principal-visible');
    body.classList.add('menu-open');
});

/* 
===========================================
3. CIERRE DEL MENÚ
=========================================== */
closeMenuBtn.addEventListener('click', () => {
    aside.classList.remove('nav-principal-visible');
    body.classList.remove('menu-open');
});

