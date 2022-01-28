//------------------------------ code général--------------------------------------

const containerCalculatrice = document.querySelector('.container'); //general--gestion de la fenetre  contenaire général
const iconCalculatrice = document.querySelector('.iconCalculatrice'); //general--gestion de la fenetre icone du bureau
const iconRedutionFenetre = document.querySelector('.moin'); //general--gestion de la fenetre pour réduire la fenétre
const iconAgrandirFenetre = document.querySelector('.Agrendir'); //general--gestion de la fenetre 
const iconFermerFenetre = document.querySelector('.close'); //general--gestion de la fenetre
const allBtn = document.querySelector('.contLigne'); //general--menu burger
const corpNav = document.querySelector('.navBar'); //general--menu burger
const overlay = document.querySelector('.overlay'); //general--menu burger


//---------------gestion de la fenetre--------------------



//gestion de la fenétre avec l'iconne de bureau
function CacheContainer() {
    containerCalculatrice.classList.remove('containerAgrandis');
    if (containerCalculatrice.classList.contains('containerCache')) {
        containerCalculatrice.classList.remove('containerCache');
    } else {
        containerCalculatrice.classList.add('containerCache');
    }
}


iconCalculatrice.addEventListener('dblclick', CacheContainer)
iconCalculatrice.addEventListener('keydown', (event) => {
    if (event.key === "Enter" || event.key === " ") {
        CacheContainer();
    }
})

//gestion de la fenétre avec le moin pour réduire la fênétre

function reduictionFenetre() {
    if (containerCalculatrice.classList.contains('containerReduit')) {
        containerCalculatrice.classList.remove('containerReduit', 'containerAgrandis');
        containerCalculatrice.style.animation = 'removrReduire 1s forwards';
    } else {
        containerCalculatrice.classList.remove('containerAgrandis');
        containerCalculatrice.classList.add('containerReduit');
        containerCalculatrice.style.removeProperty('animation');

    }
}



iconRedutionFenetre.addEventListener('click', reduictionFenetre);

iconRedutionFenetre.addEventListener('keydown', (event) => {
    if (event.key === "Enter" || event.key === " ") {
        reduictionFenetre();
    }
});

//gestion de la fenétre avec le niveau de fenétre pour agrandire plein page

function agrandirFenetre() {
    containerCalculatrice.classList.remove('containerReduit');
    containerCalculatrice.style.removeProperty('animation');
    if (containerCalculatrice.classList.contains('containerAgrandis')) {
        containerCalculatrice.classList.remove('containerAgrandis');

    } else {
        containerCalculatrice.classList.add('containerAgrandis');

    }
}


iconAgrandirFenetre.addEventListener('click', agrandirFenetre);

iconAgrandirFenetre.addEventListener('keydown', (event) => {
    if (event.key === "Enter" || event.key === " ") {
        agrandirFenetre();
    }
});

//gestion de la fenétre avec la fermeture de fenêtre

iconFermerFenetre.addEventListener('click', CacheContainer);

iconFermerFenetre.addEventListener('keydown', (event) => {
    if (event.key === "Enter" || event.key === " ") {
        CacheContainer();
    }
});


//menu burger
function togolleBurgerMenu() {
    corpNav.classList.toggle('active-nav');
    overlay.classList.toggle('activeOverlay');
}

allBtn.addEventListener('click', togolleBurgerMenu)

allBtn.addEventListener('keydown', (event) => {
    if (event.key === "Enter" || event.key === " ") {
        togolleBurgerMenu();
    }
});
overlay.addEventListener('click', () => {
    overlay.classList.remove('activeOverlay');
    corpNav.classList.remove('active-nav');

})