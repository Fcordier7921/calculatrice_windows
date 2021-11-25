//gestion de la fenetre
const containerCalculatrice = document.querySelector('.container')
const iconCalculatrice = document.querySelector('.iconCalculatrice');
const iconRedutionFenetre = document.querySelector('.moin');
const iconAgrandirFenetre = document.querySelector('.Agrendir');
const iconFermerFenetre = document.querySelector('.close');

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
const allBtn = document.querySelector('.contLigne');
const corpNav = document.querySelector('.navBar');

allBtn.addEventListener('click', () => {

    corpNav.classList.toggle('active-nav');
})