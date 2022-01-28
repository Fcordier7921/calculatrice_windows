//------------------------ calculette scientifique-------------------------------------------

const scientTrigoClick = document.querySelector('.generalTrigo') //scientifique--afficher les information trigo
const scientTrigoAffiche = document.querySelector('.itemsGeneralTrigo') //scientifique--afficher les information trigo
const scientFuncClick = document.querySelector('.generalfonc') //scientifique--afficher les information fonction
const scientFuncAffiche = document.querySelector('.itemsGeneralFonc') //scientifique--afficher les information fonction


if (window.location.href === 'http://127.0.0.1:5500/modeCalculetteHTML/scientifique.html') {

    //afficher le menu trigonométrie
    scientTrigoClick.addEventListener('click', () => {


        scientFuncAffiche.classList.remove('itemsGeneralFoncActive');

        scientTrigoAffiche.classList.toggle('itemsGeneralTrigoActive');

    })
    scientFuncClick.addEventListener('click', () => {

        scientTrigoAffiche.classList.remove('itemsGeneralTrigoActive');

        scientFuncAffiche.classList.toggle('itemsGeneralFoncActive');
    })
}