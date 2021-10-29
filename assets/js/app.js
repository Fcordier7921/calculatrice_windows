//gestion de la fenetre
const containerCalculatrice = document.querySelector('.container')
const iconCalculatrice = document.querySelector('.iconCalculatrice');
const iconRedutionFenetre = document.querySelector('.moin');
const iconAgrandirFenetre = document.querySelector('.Agrendir');
const iconFermerFenetre = document.querySelector('.close');




iconCalculatrice.addEventListener('click', () => {
    if (containerCalculatrice.classList.contains('containerCache')) {
        containerCalculatrice.classList.remove('containerCache');
    } else {
        containerCalculatrice.classList.add('containerCache');
    }
})
iconRedutionFenetre.addEventListener('click', () => {
    if (containerCalculatrice.classList.contains('containerReduit')) {
        containerCalculatrice.classList.remove('containerReduit');
    } else {
        containerCalculatrice.classList.add('containerReduit');
    }

})
iconAgrandirFenetre.addEventListener('click', () => {

})
iconFermerFenetre.addEventListener('click', () => {

})