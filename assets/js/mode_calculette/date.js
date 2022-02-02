//------------------------ calculette date-------------------------------------------


const choixTypeDate = document.querySelectorAll('.choix');
const choixCalcul = document.querySelector('.choixDate');
const dateDiff = document.querySelector('.choixDateDiff');
const dateAjout = document.querySelector('.choixDateAjout');
const diffDate = document.querySelector('.diffDat');
const ajoutDate = document.querySelector('.ajoutDate');
const choixCheckedOne = document.querySelector('#ajouter')
const choixCheckedTow = document.querySelector('#soustraire')



//afficher la modale de choix de calcule des dates

function activeDate() {
    choixCalcul.classList.toggle('ActivDate');
    if (dateDiff.classList.contains('ActivDate')) {
        dateDiff.setAttribute("tabindex", "7")
        dateAjout.setAttribute("tabindex", "8")
    } else {
        dateDiff.setAttribute("tabindex", "10")
        dateAjout.setAttribute("tabindex", "11")
    }
    if (dateAjout.classList.contains('ActivChoixDate')) {
        choixCalcul.style.top = "40px";


    } else {
        choixCalcul.style.top = "80px";

    }
}
choixTypeDate.forEach(element => {

    element.addEventListener('click', () => {
        activeDate()
    })
    element.addEventListener('keydown', (event) => { //écoute des touche entre et espace pour affiche la navBar

        if (event.key === "Enter" || event.key === " ") {
            activeDate()
        }
    });
});

//affichage de la caculette différence entre deux date
function datediffAffiche() {
    if (dateAjout.classList.contains("ActivChoixDate")) {

        dateAjout.classList.remove('ActivChoixDate');

        dateDiff.classList.toggle('ActivChoixDate');
        ajoutDate.classList.remove('ActivDate');

        diffDate.classList.toggle('ActivDate');
        choixCalcul.classList.remove('ActivDate');

    }
}
dateDiff.addEventListener('click', () => {
    datediffAffiche()
});
dateDiff.addEventListener('keydown', (event) => { //écoute des touche entre et espace pour affiche la navBar

    if (event.key === "Enter" || event.key === " ") {
        datediffAffiche()
    }
});

//affichage de la caculette ajouter ou soustraire des dates
function dateAjouterAffichage() {
    if (dateDiff.classList.contains("ActivChoixDate")) {

        dateDiff.classList.remove('ActivChoixDate');

        dateAjout.classList.toggle('ActivChoixDate');
        diffDate.classList.remove('ActivDate');

        ajoutDate.classList.toggle('ActivDate');
        choixCalcul.classList.remove('ActivDate');
    }
}

dateAjout.addEventListener('click', () => {
    dateAjouterAffichage()
});
dateAjout.addEventListener('keydown', (event) => { //écoute des touche entre et espace pour affiche la navBar

    if (event.key === "Enter" || event.key === " ") {
        dateAjouterAffichage()
    }
});

//traitemant de la différence entre date




//traitement d'ajouter suprimer des date


choixCheckedOne.addEventListener('click', () => {
    choixCheckedTow.checked = false
})
choixCheckedTow.addEventListener('click', () => {
    choixCheckedOne.checked = false
})