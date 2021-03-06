//------------------------------ code général--------------------------------------

const url = window.location.href.split('/').pop('/'); //indication de la page active
const urlSotcked = "index.html#stanndar";
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
const histo = document.querySelector('.histo  h2'); // secteionner tout les lien pour l'historique
const memoiregeneral = document.querySelector('.memoiregeneral h2'); // secteionner tout les lien pour la mémoire
const poubelleHisto = document.querySelector('.histoAffichage .poubelle '); // secteionner tout les lien pour la poubelle pour l'historique
const poubelleMemo = document.querySelector('.memoAffichage .poubelle '); // secteionner tout les lien pour la poubelle pour la mémoire
const histodefaut = document.querySelector('.histodefaut'); // secteionner tout les lien pour la poubelle
const memodefaut = document.querySelector('.memodefaut'); // secteionner tout les lien pour la poubelle
const histoAffichage = document.querySelector('.histoAffichage'); // secteionner tout les lien pour la poubelle
const memoAffichage = document.querySelector('.memoAffichage'); // secteionner tout les lien pour la poubelle
const mc = document.querySelector('.MC'); // secteionner tout les lien pour la poubelle
const mr = document.querySelector('.MR'); // secteionner tout les lien pour la poubelle
console.log(url);


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

//gestion de la fenétre avec le moin pour réduire la fênétre le -

function reduictionFenetre() {
    if (containerCalculatrice.classList.contains('containerReduit')) {
        containerCalculatrice.classList.remove('containerReduit', 'containerAgrandis');
        containerCalculatrice.style.animation = 'removrReduire 1s forwards';
        poubelleHisto.style.display = 'none'
        poubelleMemo.style.display = 'none'
    } else {
        containerCalculatrice.classList.remove('containerAgrandis');
        containerCalculatrice.classList.add('containerReduit');
        containerCalculatrice.style.removeProperty('animation');
        poubelleHisto.style.display = 'none'
        poubelleMemo.style.display = 'none'

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

iconFermerFenetre.addEventListener('click', () => {
    CacheContainer();
    affGeneral.histo = [];
    sessionStorage.removeItem("historiqueCalcule"); //suprimer l'historique
    sessionStorage.removeItem("memoireStockage"); //suprimer les chiffre en mémoire
    historique();
    memoire();
    poubelleHisto.style.opacity = "0"
    poubelleMemo.style.opacity = "0"
    setTimeout(() => {
        histodefaut.innerHTML = "<p class='defaultMessage'> Aucun historique pour l 'instant</p>";
        chiffreresult.innerHTML = "<p>" + 0 + "</p>";
        calculeresult.innerHTML = "<p> </p>";

        affGeneral.AlffichageCTompontResulta = [];
        affGeneral.AlffichageCalaculette = [];
        affGeneral.CcalculeJS = [];
        affGeneral.momeEgal = [];
    }, 1000);
});

iconFermerFenetre.addEventListener('keydown', (event) => {
    if (event.key === "Enter" || event.key === " ") {
        CacheContainer();
    }
});


//----------------menu burger---------------------------------------------------



// fonction pour afficher la navbar
function togolleBurgerMenu() {
    if (corpNav.classList.contains('active-nav')) {
        corpNav.classList.remove('active-nav');
        corpNav.setAttribute('aria-hidden', true);
        corpNav.removeAttribute('aria-modal');
        overlay.classList.remove('activeOverlay');
        for (let i = 0; i < divattribut.length; i++) { // gestion de la tabulation

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

// écoute du click sue l'icone burger pour afficher le menu
allBtn.addEventListener('click', togolleBurgerMenu);

//écoute des touche entre et espace pour affiche la navBar
allBtn.addEventListener('keydown', (event) => {

    if (event.key === "Enter" || event.key === " ") {
        togolleBurgerMenu();
    }
});

//écoute des touche entre et espace pour affiche la navBar
window.addEventListener('keydown', (event) => {

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


// écoute de l'overlay pour cache la navBar
overlay.addEventListener('click', () => {
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





//-------------------historique et mémoire-------------------------------------

if (url === 'index.html' || url === 'scientifique.html') {

    //gérer l'affichage de l'historique
    function historique() {
        if (sessionStorage["historiqueCalcule"]) {
            let historiqueMemorise = sessionStorage.getItem('historiqueCalcule');

            histodefaut.innerHTML = historiqueMemorise;

            poubelleHisto.style.opacity = "1";
            poubelleHisto.style.zIndex = '1';
            poubelleMemo.style.zIndex = '-1';
            ecouteHisto()


        } else {
            histodefaut.innerHTML = "<p class='defaultMessage'> Aucun historique pour l 'instant</p>";
            poubelleHisto.style.opacity = "0";
            poubelleHisto.style.zIndex = '-1';
            affGeneral.histo = [];

        }

    }

    //gérer l'affichage de la mémoire
    function memoire() {
        if (sessionStorage["memoireStockage"]) {
            let memoriseChiffre = sessionStorage.getItem('memoireStockage').replaceAll(',', '');

            memodefaut.innerHTML = memoriseChiffre;

            poubelleMemo.style.opacity = "1";
            poubelleMemo.style.zIndex = '1';

            mc.classList.add('active_memo');
            mr.classList.add('active_memo');


        } else {
            memodefaut.innerHTML = "<p class='defaultMessage'> La mémoire est vide</p>";
            poubelleMemo.style.opacity = "0";
            poubelleMemo.style.zIndex = '-1';
            affGeneral.memo = [];
            mc.classList.remove('active_memo');
            mr.classList.remove('active_memo');

        }

    }


    //gestion de l'affichage hitorique et mémoire

    histo.addEventListener('click', () => {
        memoiregeneral.classList.remove('active_histoMemo');
        histo.classList.add('active_histoMemo');
        memoAffichage.style.display = 'none';
        histoAffichage.style.display = 'flex';
        histodefaut.style.display = 'block';
        poubelleHisto.style.opacity = '10';
        historique();

    })
    memoiregeneral.addEventListener('click', () => {
        histo.classList.remove('active_histoMemo');
        memoiregeneral.classList.add('active_histoMemo');
        histoAffichage.style.display = 'none';
        memoAffichage.style.display = 'flex';
        memodefaut.style.display = 'block';

        memoire();
        toucheMemoChiffre()

    })

    //ecouter le clikc poubelle histo
    poubelleHisto.addEventListener('click', () => {
            sessionStorage.removeItem("historiqueCalcule");
            historique();
            affGeneral.histo = [];

        })
        //ecouter le clikc poubelle memo
    poubelleMemo.addEventListener('click', () => {
        sessionStorage.removeItem("memoireStockage");
        memoire();
        affGeneral.memo = [];

    })

    //ecoute le click sur les élément en mémoire
    function ecouteHisto() {
        let survolHisto = Array.from(document.querySelectorAll('.survolHisto')); // secteionner tout calcule en mémoire

        for (const elemnt of survolHisto) {
            elemnt.addEventListener('click', (e) => {
                affGeneral.AlffichageCTompontResulta = [];
                affGeneral.AlffichageCalaculette = [];
                affGeneral.CcalculeJS = [];
                affGeneral.AlffichageCalaculette.unshift(e.path[0].querySelector('.survolHisto :nth-child(1)').innerHTML);
                affGeneral.AlffichageCTompontResulta.unshift(e.path[0].querySelector('.survolHisto :nth-child(2)').innerHTML);
                affGeneral.CcalculeJS.unshift(e.path[0].querySelector('.survolHisto :nth-child(2)').innerHTML);
                calculeresult.innerHTML = "<p>" + affGeneral.AlffichageCalaculette.join('') + " </p>";
                chiffreresult.innerHTML = "<p>" + affGeneral.AlffichageCTompontResulta.join('') + "</p>";


            })
        }
    }
}