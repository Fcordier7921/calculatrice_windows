const containerCalculatrice = document.querySelector('.container'); //gestion de la fenetre
const iconCalculatrice = document.querySelector('.iconCalculatrice'); //gestion de la fenetre
const iconRedutionFenetre = document.querySelector('.moin'); //gestion de la fenetre
const iconAgrandirFenetre = document.querySelector('.Agrendir'); //gestion de la fenetre
const iconFermerFenetre = document.querySelector('.close'); //gestion de la fenetre
const allBtn = document.querySelector('.contLigne'); //menu burger
const corpNav = document.querySelector('.navBar'); //menu burger
const overlay = document.querySelector('.overlay'); //menu burger



//gestion de la fenetre
function CacheContainer() {
    containerCalculatrice.classList.remove('containerAgrandis');
    if (containerCalculatrice.classList.contains('containerCache')) {
        containerCalculatrice.classList.remove('containerCache');
    } else {
        containerCalculatrice.classList.add('containerCache');
    }
}


iconCalculatrice.addEventListener('dblclick', () => {
    CacheContainer();
})
iconRedutionFenetre.addEventListener('click', () => {
    if (containerCalculatrice.classList.contains('containerReduit')) {
        containerCalculatrice.classList.remove('containerReduit', 'containerAgrandis');
        containerCalculatrice.style.animation = 'removrReduire 1s forwards';
    } else {
        containerCalculatrice.classList.remove('containerAgrandis');
        containerCalculatrice.classList.add('containerReduit');
        containerCalculatrice.style.removeProperty('animation');

    }

})
iconAgrandirFenetre.addEventListener('click', () => {
    containerCalculatrice.classList.remove('containerReduit');
    containerCalculatrice.style.removeProperty('animation');
    if (containerCalculatrice.classList.contains('containerAgrandis')) {
        containerCalculatrice.classList.remove('containerAgrandis');

    } else {
        containerCalculatrice.classList.add('containerAgrandis');

    }
})
iconFermerFenetre.addEventListener('click', () => {
    CacheContainer();
})


//menu burger

allBtn.addEventListener('click', () => {

    corpNav.classList.toggle('active-nav');
    overlay.classList.toggle('activeOverlay');

})
overlay.addEventListener('click', () => {
    overlay.classList.remove('activeOverlay');
    corpNav.classList.remove('active-nav');

})