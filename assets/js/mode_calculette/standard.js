//-------------------------calculette standard-----------------------------------------------
const reductionFenétre = document.querySelector('.petiteTaille'); // sélection de la zone  pour réduire en petit
const reductionFenétreBis = document.querySelector('.petiteTaillebis');
const contenaireSandard = document.querySelector('.container');
const memoSandard = Array.from(document.querySelectorAll('.memo')) //selection de toute les emplacement mémoire
const operateurSandard = Array.from(document.querySelectorAll('.opperateur')) //selection de toute les emplacement des opérateur
const calculeresult = document.querySelector('.calculeresult') //recuprer pour afficher le calcule en cours
const chiffreresult = document.querySelector('.chiffreresult') //recuprer pour afficher les entré en cours




//afficher la claculatrice en petite taille
reductionFenétre.addEventListener('click', () => {

    contenaireSandard.classList.toggle('PetitTailleActive');

})
reductionFenétreBis.addEventListener('click', () => {

    contenaireSandard.classList.remove('PetitTailleActive');

})


//--------- logique de la calculatrice-------------------
//tableau d'objet qui répertorie les touche de la calculette
const toucheStandard = [{
        name: "MC",
        explication: "suprime la mémoire",
        fomuleJs: "",
        Affichage: "",
        Type: "memo"
    },
    {
        name: "MR",
        explication: "rejoute dans le calcule le chiffre en mémoire",
        fomuleJs: "",
        Affichage: "",
        Type: "memo"
    },
    {
        name: "MP",
        explication: "aditione le chiffre affiché a celui en mémoire",
        fomuleJs: "",
        Affichage: "",
        Type: "memo"
    },
    {
        name: "MM",
        explication: "soustrait le chiffre affiché a celui en mémoire",
        fomuleJs: "",
        Affichage: "",
        Type: "memo"
    },
    {
        name: "MS",
        explication: "ajoute le chiffre a la mémoire",
        fomuleJs: "",
        Affichage: "",
        Type: "memo"
    },
    {
        name: "pourcentage",
        explication: "pourcentage",
        fomuleJs: "/100",
        Affichage: "",
        Type: "opperateur"
    },
    {
        name: "CE",
        explication: "suprime l'élément affiché",
        fomuleJs: "",
        Affichage: "",
        Type: "opperateur"
    },
    {
        name: "C",
        explication: "suprime toute l'opération en cours",
        fomuleJs: "",
        Affichage: "",
        Type: "opperateur"
    },
    {
        name: "suppChiffre",
        explication: "suprime le dernier chiffre affiché et quand il y a plus de chiffre on affiche 0",
        fomuleJs: "",
        Affichage: "",
        Type: "opperateur"
    },
    {
        name: "undemi",
        explication: "1 divisé par le chiffre affiché",
        fomuleJs: "1/",
        Affichage: "1/(",
        Type: "opperateur"
    },
    {
        name: "carrer",
        explication: "chiffre au carré",
        fomuleJs: "Math.pow(", //Math.pow(x, 2)
        Affichage: "sqr(",
        Type: "opperateur"
    },
    {
        name: "RasinCarrer",
        explication: "inverce du carré",
        fomuleJs: "Math.sqrt(",
        Affichage: "√(",
        Type: "opperateur"
    },
    {
        name: "division",
        explication: "division",
        fomuleJs: "/",
        Affichage: "÷",
        Type: "opperateur"
    },
    {
        name: "sept",
        explication: "sept",
        fomuleJs: "7",
        Affichage: "7",
        Type: "chiffre"
    },
    {
        name: "huit",
        explication: "huit",
        fomuleJs: "8",
        Affichage: "8",
        Type: "chiffre"
    },
    {
        name: "neuf",
        explication: "neuf",
        fomuleJs: "9",
        Affichage: "9",
        Type: "chiffre"
    },
    {
        name: "multiplier",
        explication: "multiplier",
        fomuleJs: "*",
        Affichage: "ₓ",
        Type: "opperateur"
    },
    {
        name: "quatre",
        explication: "quatre",
        fomuleJs: "4",
        Affichage: "4",
        Type: "chiffre"
    },
    {
        name: "cinq",
        explication: "cinq",
        fomuleJs: "5",
        Affichage: "5",
        Type: "chiffre"
    },
    {
        name: "six",
        explication: "six",
        fomuleJs: "6",
        Affichage: "6",
        Type: "chiffre"
    },
    {
        name: "moin",
        explication: "moin",
        fomuleJs: "-",
        Affichage: "-",
        Type: "opperateur"
    },
    {
        name: "un",
        explication: "un",
        fomuleJs: "1",
        Affichage: "1",
        Type: "chiffre"
    },
    {
        name: "deux",
        explication: "deux",
        fomuleJs: "2",
        Affichage: "2",
        Type: "chiffre"
    },
    {
        name: "trois",
        explication: "trois",
        fomuleJs: "3",
        Affichage: "3",
        Type: "chiffre"
    },
    {
        name: "plus",
        explication: "plus",
        fomuleJs: "+",
        Affichage: "+",
        Type: "opperateur"
    },
    {
        name: "PosNega",
        explication: "PosNega ",
        fomuleJs: "-",
        Affichage: "-",
        Type: "chiffre"
    },
    {
        name: "zero",
        explication: "zero ",
        fomuleJs: "0",
        Affichage: "0",
        Type: "chiffre"
    },
    {
        name: "visgule",
        explication: "visgule ",
        fomuleJs: ",",
        Affichage: ",",
        Type: "chiffre"
    },
    {
        name: "egal",
        explication: "egal ",
        fomuleJs: "=",
        Affichage: "=",
        Type: "opperateur"
    },

]

window.onload = () => {
    // On écoute les clics sur les touches
    let touchesOperateur = Array.from(document.querySelectorAll(".opperateur"));
    let touchesChiffre = Array.from(document.querySelectorAll(".chiffre"));
    let touchesMemo = Array.from(document.querySelectorAll(".memo"));
    let touchesGenerals = touchesOperateur.concat(touchesChiffre, touchesMemo);



    for (let touchesGeneral of touchesGenerals) {
        touchesGeneral.addEventListener("click", gererTouches);
    }



}

let affGeneral = {
    AlffichageCalaculette: [],
    AlffichageCTompontResulta: [],
    CcalculeJS: []
}

function gererTouches(event) {
    let toucheEvent = '';

    switch (event.path[1].classList[0]) {
        case 'egal':
            toucheEvent = event.path[1].classList[1];
            let operateurCarreCalculJs = affGeneral.CcalculeJS.join('');
            let resultaOpérateur = Function("return " + operateurCarreCalculJs)();
            affGeneral.AlffichageCalaculette.push(" ", affGeneral.AlffichageCTompontResulta.join(''), " =");
            let memoiirAffichageStockage = affGeneral.AlffichageCalaculette.join('');
            // sessionStorage.setItem(memoiirAffichageStockage, resultaOpérateur);
            calculeresult.innerHTML = "<p>" + memoiirAffichageStockage + "</p>";
            chiffreresult.innerHTML = "<p>" + resultaOpérateur + "</p>";
            affGeneral.AlffichageCTompontResulta = [];
            affGeneral.AlffichageCalaculette = [];
            affGeneral.CcalculeJS = [];
            break;
        case 'chiffre':
            toucheEvent = event.path[1].classList[1];
            toucheStandard.forEach(element => {
                if (toucheEvent === element.name) {
                    if (element.name === "PosNega") {
                        if (affGeneral.AlffichageCTompontResulta.includes("-")) {
                            affGeneral.AlffichageCTompontResulta.shift(element.Affichage)
                            affGeneral.CcalculeJS.shift(element.fomuleJs)

                        } else {
                            affGeneral.AlffichageCTompontResulta.unshift(element.Affichage)
                            affGeneral.CcalculeJS.unshift(element.fomuleJs)
                        }

                    } else if (element.name === "visgule") {

                        if (affGeneral.AlffichageCTompontResulta[0] === "0" || affGeneral.AlffichageCTompontResulta.length < 1) {
                            affGeneral.AlffichageCTompontResulta.push("0")
                            affGeneral.AlffichageCTompontResulta.push(element.Affichage)

                        } else {
                            affGeneral.AlffichageCTompontResulta.push(element.Affichage)
                            affGeneral.CcalculeJS.push(element.fomuleJs)
                        }

                    } else {
                        if (affGeneral.AlffichageCTompontResulta[0] === "0" && affGeneral.AlffichageCTompontResulta[1] != ",") {
                            affGeneral.AlffichageCTompontResulta.shift();
                        }
                        affGeneral.AlffichageCTompontResulta.push(element.Affichage)
                        affGeneral.CcalculeJS.push(element.fomuleJs)
                    }
                    if (affGeneral.AlffichageCalaculette.includes('sqr(') || affGeneral.AlffichageCalaculette.includes('√(') || affGeneral.AlffichageCalaculette.includes('1/(')) { //pour le carré et la racine carré =>quand on rentre une nouvelle valeur 
                        affGeneral.AlffichageCTompontResulta = [];
                        affGeneral.AlffichageCalaculette = [];
                        affGeneral.CcalculeJS = [];
                        if (affGeneral.AlffichageCTompontResulta[0] === "0" && affGeneral.AlffichageCTompontResulta[1] != ",") {
                            affGeneral.AlffichageCTompontResulta.shift();
                        }
                        affGeneral.AlffichageCTompontResulta.push(element.Affichage)
                        affGeneral.CcalculeJS.push(element.fomuleJs)
                    }
                }

            });

            let affGeneralStringEnCours = affGeneral.AlffichageCTompontResulta.join('');
            chiffreresult.innerHTML = "<p>" + affGeneralStringEnCours + "</p>";
            break;
        case 'opperateur':
            if (affGeneral.AlffichageCalaculette != []) {
                toucheEvent = event.path[1].classList[1];
                toucheStandard.forEach(element => {
                    if (toucheEvent === element.name) {
                        if (element.name === "CE") {
                            chiffreresult.innerHTML = "<p>" + 0 + "</p>";
                            if (affGeneral.AlffichageCalaculette === []) {
                                affGeneral.AlffichageCTompontResulta = [];
                                affGeneral.CcalculeJS = [];
                            } else {
                                affGeneral.AlffichageCTompontResulta = [];
                                affGeneral.CcalculeJS = [];
                                affGeneral.AlffichageCalaculette.forEach(element => {
                                    affGeneral.CcalculeJS.push(element);
                                })

                            }
                        } else if (element.name === "C") {
                            chiffreresult.innerHTML = "<p>" + 0 + "</p>";
                            calculeresult.innerHTML = "<p> </p>";

                            affGeneral.AlffichageCTompontResulta = [];
                            affGeneral.AlffichageCalaculette = [];
                            affGeneral.CcalculeJS = [];


                        } else if (element.name === "suppChiffre") {
                            affGeneral.AlffichageCTompontResulta.splice(-1, 1);
                            affGeneral.CcalculeJS.splice(-1, 1);
                            let affGeneralStringEnCoursSup = affGeneral.AlffichageCTompontResulta.join('');
                            let affGeneralStringEnCoursSupTow = affGeneral.AlffichageCalaculette.join('');
                            if (affGeneralStringEnCoursSup <= 0) {
                                chiffreresult.innerHTML = "<p>" + 0 + "</p>";

                            } else {
                                chiffreresult.innerHTML = "<p>" + affGeneralStringEnCoursSup + "</p>";
                                calculeresult.innerHTML = "<p>" + affGeneralStringEnCoursSupTow + "</p>";

                            }


                        } else if (element.name === "pourcentage") {

                            if (affGeneral.AlffichageCalaculette.length != 0) {
                                let resultJoinPourcentage = affGeneral.AlffichageCTompontResulta.join('');
                                let resulteDivPourcentage = resultJoinPourcentage / 100;
                                affGeneral.CcalculeJS = [];
                                let operateurEtract = (affGeneral.AlffichageCalaculette.slice(0, -1).join('')) * resulteDivPourcentage;
                                affGeneral.CcalculeJS.push(affGeneral.AlffichageCalaculette.join(''))
                                affGeneral.AlffichageCTompontResulta = [];
                                affGeneral.AlffichageCTompontResulta.push(operateurEtract);
                                affGeneral.AlffichageCalaculette.push(operateurEtract);
                                affGeneral.CcalculeJS.push(operateurEtract);


                                chiffreresult.innerHTML = "<p>" + affGeneral.AlffichageCTompontResulta + "</p>";
                                calculeresult.innerHTML = "<p>" + affGeneral.AlffichageCalaculette.join('') + "</p>";
                            } else {
                                affGeneral.AlffichageCalaculette.push("0");
                                affGeneral.AlffichageCTompontResulta = [];
                                affGeneral.AlffichageCTompontResulta.push("0");
                                affGeneral.CcalculeJS = [];

                                chiffreresult.innerHTML = "<p>" + affGeneral.AlffichageCTompontResulta + "</p>";
                                calculeresult.innerHTML = "<p>" + affGeneral.AlffichageCalaculette + "</p>";
                            }


                        } else if (element.name === "undemi") {
                            if (affGeneral.AlffichageCTompontResulta.length != 0) {
                                if (affGeneral.AlffichageCalaculette.includes('sqr(') || affGeneral.AlffichageCalaculette.includes('√(') || affGeneral.AlffichageCalaculette.includes('1/(')) {
                                    affGeneral.AlffichageCalaculette.unshift(element.Affichage, ' ');
                                    affGeneral.AlffichageCalaculette.push(')');
                                    calculeresult.innerHTML = "<p>" + affGeneral.AlffichageCalaculette.join('') + ")</p>";
                                } else {
                                    affGeneral.AlffichageCalaculette.push(element.Affichage, affGeneral.AlffichageCTompontResulta.join(''));
                                    calculeresult.innerHTML = "<p>" + affGeneral.AlffichageCalaculette.join('') + ")</p>";
                                }
                                affGeneral.CcalculeJS = [];
                                affGeneral.CcalculeJS.push(element.fomuleJs, affGeneral.AlffichageCTompontResulta.join(''));
                                let undemiCalculJs = affGeneral.CcalculeJS.join('');
                                let resultaUndemi = Function("return " + undemiCalculJs)(); //Math.pow(x, 2)
                                affGeneral.AlffichageCTompontResulta = [];
                                affGeneral.AlffichageCTompontResulta.push(resultaUndemi)
                                chiffreresult.innerHTML = "<p>" + resultaUndemi.toFixed(16) + "</p>";

                            } else {
                                calculeresult.innerHTML = "<p>" + element.Affichage + "0)</p>";
                                chiffreresult.innerHTML = '<p style="font-size: 25px;">Désolé... Nous ne pouvons pas diviser par zéro</p>';
                            }
                        } else if (element.name === "carrer") {
                            if (affGeneral.AlffichageCalaculette.length = 0) {
                                affGeneral.AlffichageCTompontResulta.push('0');
                            }
                            if (affGeneral.AlffichageCalaculette.includes('sqr(') || affGeneral.AlffichageCalaculette.includes('√(') || affGeneral.AlffichageCalaculette.includes('1/(')) {
                                affGeneral.AlffichageCalaculette.unshift(element.Affichage, ' ');
                                affGeneral.AlffichageCalaculette.push(')');
                                calculeresult.innerHTML = "<p>" + affGeneral.AlffichageCalaculette.join('') + ")</p>";
                            } else {
                                affGeneral.AlffichageCalaculette.push(element.Affichage, affGeneral.AlffichageCTompontResulta.join(''));
                                calculeresult.innerHTML = "<p>" + affGeneral.AlffichageCalaculette.join('') + ")</p>";
                            }


                            affGeneral.CcalculeJS = [];
                            affGeneral.CcalculeJS.push(element.fomuleJs, affGeneral.AlffichageCTompontResulta.join(''));

                            let carreCalculJs = affGeneral.CcalculeJS.join('');
                            let resultaCarre = Function("return " + carreCalculJs + ",2)")(); //Math.pow(x, 2)
                            affGeneral.AlffichageCTompontResulta = [];
                            affGeneral.AlffichageCTompontResulta.push(resultaCarre)
                            chiffreresult.innerHTML = "<p>" + resultaCarre.toFixed(14) + "</p>";



                        } else if (element.name === "RasinCarrer") {
                            if (affGeneral.AlffichageCalaculette.length = 0) {
                                affGeneral.AlffichageCTompontResulta.push('0');
                            }
                            if (affGeneral.AlffichageCalaculette.includes('sqr(') || affGeneral.AlffichageCalaculette.includes('√(') || affGeneral.AlffichageCalaculette.includes('1/(')) { //getion de l'afficjage de la fomule quand on fait un rasinnecrarré suivie d'un carré
                                affGeneral.AlffichageCalaculette.unshift(element.Affichage);
                                affGeneral.AlffichageCalaculette.push(')');
                                calculeresult.innerHTML = "<p>" + affGeneral.AlffichageCalaculette.join('') + ")</p>";
                            } else {
                                affGeneral.AlffichageCalaculette.push(element.Affichage, affGeneral.AlffichageCTompontResulta.join(''));
                                calculeresult.innerHTML = "<p>" + affGeneral.AlffichageCalaculette.join('') + ")</p>";
                            }

                            affGeneral.CcalculeJS = [];
                            affGeneral.CcalculeJS.push(element.fomuleJs, affGeneral.AlffichageCTompontResulta.join(''));
                            let rassineCarreCalculJs = affGeneral.CcalculeJS.join('');
                            let resultaRassineCarre = Function("return " + rassineCarreCalculJs + ")")(); //Math.pow(x, 2)

                            affGeneral.AlffichageCTompontResulta = [];
                            affGeneral.AlffichageCTompontResulta.push(resultaRassineCarre)
                            chiffreresult.innerHTML = "<p>" + resultaRassineCarre.toFixed(14) + "</p>";


                        } else if (element.name === "plus" || element.name === "moin" || element.name === "multiplier" || element.name === "division") {
                            if (affGeneral.AlffichageCalaculette.length != 0) {
                                let operateurCarreCalculJs = affGeneral.CcalculeJS.join('');
                                let resultaOpérateur = Function("return " + operateurCarreCalculJs)();
                                affGeneral.AlffichageCalaculette.push(" ", affGeneral.AlffichageCTompontResulta.join(''), " =");
                                let memoiirAffichageStockage = affGeneral.AlffichageCalaculette.join('');
                                sessionStorage.setItem(memoiirAffichageStockage, resultaOpérateur)
                                affGeneral.AlffichageCalaculette = [];
                                affGeneral.AlffichageCalaculette.push(resultaOpérateur, element.Affichage);
                                affGeneral.AlffichageCTompontResulta = [];
                                affGeneral.CcalculeJS = [];
                                affGeneral.CcalculeJS.push(resultaOpérateur, element.Affichage);
                                calculeresult.innerHTML = "<p>" + affGeneral.AlffichageCalaculette.join('') + "</p>";
                                chiffreresult.innerHTML = "<p>" + resultaOpérateur + "</p>";


                            } else {
                                affGeneral.AlffichageCalaculette.push(affGeneral.AlffichageCTompontResulta.join(''), " ");
                                affGeneral.CcalculeJS.push(element.fomuleJs);
                                affGeneral.AlffichageCTompontResulta = [];
                                affGeneral.AlffichageCalaculette.push(element.Affichage);
                                calculeresult.innerHTML = "<p>" + affGeneral.AlffichageCalaculette.join('') + "</p>";
                                affGeneral.AlffichageCTompontResulta = [];
                            }
                        } else {
                            for (let i = 0; i < affGeneral.AlffichageCTompontResulta.length; i++) {
                                affGeneral.AlffichageCalaculette.push(affGeneral.AlffichageCTompontResulta[i])

                            }
                            affGeneral.AlffichageCTompontResulta = [];
                            affGeneral.AlffichageCalaculette.push(element.Affichage);
                            affGeneral.CcalculeJS.push(element.fomuleJs);
                            let affGeneralStringEnCoursOperation = affGeneral.AlffichageCalaculette.join('');
                            calculeresult.innerHTML = "<p>" + affGeneralStringEnCoursOperation + "</p>";

                        }
                        // console.log(affGeneral.AlffichageCalaculette);
                        // console.log(affGeneral.AlffichageCTompontResulta);
                        // console.log(affGeneral.CcalculeJS);
                    }
                })

            } else {
                // faire l'adition pour le rendu
            }
            break;
        case 'memo':
            toucheEvent = event.path[1].classList[1];

            break;

        default:
            break;
    }

}


// for (let i = 0; i < sessionStorage.length; i++) {
//     let key = sessionStorage.key(i);
//     console.log(key, sessionStorage.getItem(key));

// }

console.log(histoAffich);






//gestion des erreur
window.addEventListener('error', (e) => {
    alert('Une erreur est survenue dans votre calcul : ' + e.message)
})