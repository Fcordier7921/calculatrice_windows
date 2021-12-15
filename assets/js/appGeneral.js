//------------------------------ code général--------------------------------------

const containerCalculatrice = document.querySelector('.container'); //general--gestion de la fenetre  contenaire général
const iconCalculatrice = document.querySelector('.iconCalculatrice'); //general--gestion de la fenetre icone du bureau
const iconRedutionFenetre = document.querySelector('.moin'); //general--gestion de la fenetre pour réduire la fenétre
const iconAgrandirFenetre = document.querySelector('.Agrendir'); //general--gestion de la fenetre 
const iconFermerFenetre = document.querySelector('.close'); //general--gestion de la fenetre
const allBtn = document.querySelector('.contLigne'); //general--menu burger
const corpNav = document.querySelector('.navBar'); //general--menu burger
const overlay = document.querySelector('.overlay'); //general--menu burger


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
    //-------------------------calculette standard-----------------------------------------------




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