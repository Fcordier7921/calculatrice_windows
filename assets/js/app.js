//gestion de la fenetre
const containerCalculatrice = document.querySelector('.container')
const iconCalculatrice = document.querySelector('.iconCalculatrice');
const iconRedutionFenetre = document.querySelector('.moin');
const iconAgrandirFenetre = document.querySelector('.Agrendir');
const iconFermerFenetre = document.querySelector('.close');

function CacheContainer() {
    if (containerCalculatrice.classList.contains('containerCache')) {
        containerCalculatrice.classList.remove('containerCache');
    } else {
        containerCalculatrice.classList.add('containerCache');
    }
}


iconCalculatrice.addEventListener('click', () => {
    CacheContainer();
})
iconRedutionFenetre.addEventListener('click', () => {
    if (containerCalculatrice.classList.contains('containerReduit')) {
        containerCalculatrice.classList.remove('containerReduit');
        containerCalculatrice.style.animation = 'removrReduire 1s forwards';
    } else {
        containerCalculatrice.classList.add('containerReduit');

    }

})
iconAgrandirFenetre.addEventListener('click', () => {
    containerCalculatrice.classList.remove('containerReduit');
    if (containerCalculatrice.classList.contains('containerAgrandis')) {
        containerCalculatrice.classList.remove('containerAgrandis');

    } else {
        containerCalculatrice.classList.add('containerAgrandis');

    }
})
iconFermerFenetre.addEventListener('click', () => {
    CacheContainer();
})