//------------------------ calculette scientifique-------------------------------------------

const scientTrigoClick = document.querySelector('.generalTrigo') //scientifique--afficher les information trigo
const scientTrigoAffiche = document.querySelector('.itemsGeneralTrigo') //scientifique--afficher les information trigo
const scientFuncClick = document.querySelector('.generalfonc') //scientifique--afficher les information fonction
const scientFuncAffiche = document.querySelector('.itemsGeneralFonc') //scientifique--afficher les information fonction
const divattributScientifique = Array.from(document.querySelectorAll('div[tabindex], a[tabindex]')); // selectionner tout les div et a, de la page qui on l'attribus tabindex
const divAttributTrigo = Array.from(document.querySelectorAll('.itemsTrigo'))




//afficher le menu trigonométrie
function trigo() {
    scientFuncAffiche.classList.remove('itemsGeneralFoncActive');

    scientTrigoAffiche.classList.toggle('itemsGeneralTrigoActive');

}

scientTrigoClick.addEventListener('click', trigo)
scientTrigoClick.addEventListener('keydown', (event) => {
        if (event.key === "Enter" || event.key === " ") {
            trigo();
        }
    })
    // afficher le menu fonction
function trigoFunction() {
    scientTrigoAffiche.classList.remove('itemsGeneralTrigoActive');

    scientFuncAffiche.classList.toggle('itemsGeneralFoncActive');
}

scientFuncClick.addEventListener('click', trigoFunction)
scientFuncClick.addEventListener('keydown', (event) => {
    if (event.key === "Enter" || event.key === " ") {
        trigoFunction();
    }
})