const containerCalculatrice = document.querySelector('.container'); //general--gestion de la fenetre  contenaire général
const iconCalculatrice = document.querySelector('.iconCalculatrice'); //general--gestion de la fenetre icone du bureau
const iconRedutionFenetre = document.querySelector('.moin'); //general--gestion de la fenetre pour réduire la fenétre
const iconAgrandirFenetre = document.querySelector('.Agrendir'); //general--gestion de la fenetre 
const iconFermerFenetre = document.querySelector('.close'); //general--gestion de la fenetre
const allBtn = document.querySelector('.contLigne'); //general--menu burger
const corpNav = document.querySelector('.navBar'); //general--menu burger
const overlay = document.querySelector('.overlay'); //general--menu burger
const scientTrigoClick = document.querySelector('.generalTrigo') //scientifique--afficher les information trigo
const scientTrigoAffiche = document.querySelector('.itemsGeneralTrigo') //scientifique--afficher les information trigo
const scientFuncClick = document.querySelector('.generalfonc') //scientifique--afficher les information fonction
const scientFuncAffiche = document.querySelector('.itemsGeneralFonc') //scientifique--afficher les information fonction


//------------------------------ code général--------------------------------------

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

//afficher le menu trigonométrie
scientTrigoClick.addEventListener('click', () => {


    scientFuncAffiche.classList.remove('itemsGeneralFoncActive');

    scientTrigoAffiche.classList.toggle('itemsGeneralTrigoActive');

})
scientFuncClick.addEventListener('click', () => {

    scientTrigoAffiche.classList.remove('itemsGeneralTrigoActive');

    scientFuncAffiche.classList.toggle('itemsGeneralFoncActive');
})




//------------------------ calculette date-------------------------------------------


const datepicker = document.querySelectorAll('.datepicker')