//------------------------------ code général--------------------------------------

const url = window.location.href; //indication de la page active
const urlSotcked = "http://127.0.0.1:5500/index.html#stanndar";
const containerCalculatrice = document.querySelector('.container'); //general--gestion de la fenetre  contenaire général
const iconCalculatrice = document.querySelector('.iconCalculatrice'); //general--gestion de la fenetre icone du bureau
const iconRedutionFenetre = document.querySelector('.moin'); //general--gestion de la fenetre pour réduire la fenétre
const iconAgrandirFenetre = document.querySelector('.Agrendir'); //general--gestion de la fenetre 
const iconFermerFenetre = document.querySelector('.close'); //general--gestion de la fenetre
const allBtn = document.querySelector('.contLigne'); //general--menu burger
const corpNav = document.querySelector('.navBar'); //general--menu burger
const overlay = document.querySelector('.overlay'); //general--menu burger
const divattribut = Array.from(document.querySelectorAll('div[tabindex], a[tabindex]')); // selectionner tout les div et a, de la page qui on l'attribus tabindex
const focusHeader = Array.from(corpNav.querySelectorAll('li a')); // secteionner tout les lien du la navbar pour le utiliser dans le cadre d'un focus
const histo = document.querySelector('.histo'); // secteionner tout les lien pour l'historique
const memoiregeneral = document.querySelector('.memoiregeneral'); // secteionner tout les lien pour la mémoire
const poubelle = document.querySelector('.poubelle'); // secteionner tout les lien pour la poubelle


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


//----------------menu burger----------




function togolleBurgerMenu() { // fonction pour afficher la navbar
    if (corpNav.classList.contains('active-nav')) {
        corpNav.classList.remove('active-nav');
        corpNav.setAttribute('aria-hidden', true);
        corpNav.removeAttribute('aria-modal');
        overlay.classList.remove('activeOverlay');
        for (let i = 0; i < divattribut.length; i++) {

            if (url === urlSotcked) {
                if (i === 5) {
                    divattribut[i].setAttribute("tabindex", "6")
                } else {
                    divattribut[i].setAttribute("tabindex", i + 1)

                }
            } else {
                if (i === 4) {
                    divattribut[i].setAttribute("tabindex", "5")
                } else {
                    divattribut[i].setAttribute("tabindex", i)

                }
                console.log('tutu');
            }



        }
    } else {
        corpNav.classList.toggle('active-nav');
        corpNav.removeAttribute('aria-hidden');
        corpNav.setAttribute('aria-modal', true);
        overlay.classList.toggle('activeOverlay');
        for (let i = 0; i < divattribut.length; i++) {
            if (url === urlSotcked) {
                if (i !== 5) {

                    divattribut[i].setAttribute("tabindex", "-1")
                }
            } else {
                if (i !== 4) {
                    divattribut[i].setAttribute("tabindex", "-1")
                }
            }

        }

    }



}

allBtn.addEventListener('click', togolleBurgerMenu) // écoute du click sue l'icone burger pour afficher le menu

allBtn.addEventListener('keydown', (event) => { //écoute des touche entre et espace pour affiche la navBar

    if (event.key === "Enter" || event.key === " ") {
        togolleBurgerMenu();
    }
});
window.addEventListener('keydown', (event) => { //écoute des touche entre et espace pour affiche la navBar

    if (event.key === "Escape") {
        if (corpNav.classList.contains('active-nav')) {
            corpNav.classList.remove('active-nav');
            corpNav.setAttribute('aria-hidden', true);
            corpNav.removeAttribute('aria-modal');
            overlay.classList.remove('activeOverlay');
            for (let i = 0; i < divattribut.length; i++) {
                if (url === urlSotcked) {
                    if (i === 5) {
                        divattribut[i].setAttribute("tabindex", "6")
                    } else {
                        divattribut[i].setAttribute("tabindex", i + 1)

                    }

                } else {
                    if (i === 4) {
                        divattribut[i].setAttribute("tabindex", "5")
                    } else {
                        divattribut[i].setAttribute("tabindex", i)

                    }

                }


            }
        }
    }
});


overlay.addEventListener('click', () => { // écoute de l'overlay pour cache la navBar
    overlay.classList.remove('activeOverlay');
    corpNav.classList.remove('active-nav');

})

//traitement du focus des a pour syliser les élémen quand les a son focus
for (const elemnt of focusHeader) {
    elemnt.addEventListener('focus', (e) => {

        let focusEvent = e.path[1];
        focusEvent.style.background = "#dadada";

        document.addEventListener('keydown', (event) => {

            if (event.key === "Tab") {
                focusEvent.style.background = "";

            }
        })
    })
}


//gestion de l'affichage hitoriique et mémoire

// histo.addEventListener('click', ()=>{

// })