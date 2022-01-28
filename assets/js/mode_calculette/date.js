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
choixTypeDate.forEach(element => {

    element.addEventListener('click', () => {


        choixCalcul.classList.toggle('ActivDate');
        if (dateAjout.classList.contains('ActivChoixDate')) {
            choixCalcul.style.top = "40px";
        } else {
            choixCalcul.style.top = "80px";

        }

    })
});

//affichage de la caculette différence entre deux date
dateDiff.addEventListener('click', () => {

    if (dateAjout.classList.contains("ActivChoixDate")) {

        dateAjout.classList.remove('ActivChoixDate');

        dateDiff.classList.toggle('ActivChoixDate');
        ajoutDate.classList.remove('ActivDate');

        diffDate.classList.toggle('ActivDate');
        choixCalcul.classList.remove('ActivDate');

    }

});

//affichage de la caculette ajouter ou soustraire des dates
dateAjout.addEventListener('click', () => {

    if (dateDiff.classList.contains("ActivChoixDate")) {

        dateDiff.classList.remove('ActivChoixDate');

        dateAjout.classList.toggle('ActivChoixDate');
        diffDate.classList.remove('ActivDate');

        ajoutDate.classList.toggle('ActivDate');
        choixCalcul.classList.remove('ActivDate');
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