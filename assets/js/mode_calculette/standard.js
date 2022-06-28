//-------------------------calculette standard-----------------------------------------------
const reductionFenétre = document.querySelector('.petiteTaille'); // sélection de la zone  pour réduire en petit
const reductionFenétreBis = document.querySelector('.petiteTaillebis');
const contenaireSandard = document.querySelector('.container');
const memoSandard = Array.from(document.querySelectorAll('.memo')) //selection de toute les emplacement mémoire
const operateurSandard = Array.from(document.querySelectorAll('.opperateur')) //selection de toute les emplacement des opérateur
const calculeresult = document.querySelector('.calculeresult') //recuprer pour afficher le calcule en cours
const chiffreresult = document.querySelector('.chiffreresult') //recuprer pour afficher les entré en cours
const corpsStandard = document.querySelector('#corpsStandard')
let chiffreMemo;

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
        explication: "suprime la mémoire", //aide au développement inutile pour le code
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

//gérer le -- qui devien plus
function moisMois() {
    if (affGeneral.AlffichageCTompontResulta.includes('-') && affGeneral.AlffichageCalaculette.includes('-')) {
        affGeneral.CcalculeJS.shift();
        let moismois = affGeneral.CcalculeJS.indexOf('-');
        affGeneral.CcalculeJS.splice(moismois, 1, '+')

    }
}

//gérer le calcule des opératuer + - * /

function opperateurAditionEtc(element) {
    if (affGeneral.CcalculeJS.includes('ₓ')) {
        affGeneral.CcalculeJS.splice(affGeneral.CcalculeJS.indexOf('ₓ'), 1, '*')
    }
    if (affGeneral.CcalculeJS.includes('÷')) {
        affGeneral.CcalculeJS.splice(affGeneral.CcalculeJS.indexOf('÷'), 1, '/')
    }

    let operateurCarreCalculJs = affGeneral.CcalculeJS.join('').replaceAll(',', '.');


    let resultaOpérateur = Function("return " + operateurCarreCalculJs)();
    affGeneral.AlffichageCalaculette.push(" ", affGeneral.AlffichageCTompontResulta.join(''));
    let memoiirAffichageStockage = affGeneral.AlffichageCalaculette.join('');
    affGeneral.histo.unshift("<div class='survolHisto'><p>" + memoiirAffichageStockage + "=</p> <p class='resultaSotrage'>" + resultaOpérateur + "</p></div>");
    sessionStorage.setItem("historiqueCalcule", affGeneral.histo.join(' '))
    affGeneral.AlffichageCalaculette = [];
    affGeneral.AlffichageCalaculette.push(resultaOpérateur, element.Affichage);
    affGeneral.AlffichageCTompontResulta = [];
    affGeneral.CcalculeJS = [];
    affGeneral.CcalculeJS.push(resultaOpérateur, element.Affichage);
    calculeresult.innerHTML = "<p>" + affGeneral.AlffichageCalaculette.join('') + "</p>";
    chiffreresult.innerHTML = "<p>" + resultaOpérateur + "</p>";
}

//mise a séro des variable de stocage 
function razAffGeneral() {
    affGeneral.AlffichageCalaculette = []
    affGeneral.AlffichageCTompontResulta = []
    affGeneral.CcalculeJS = []
    affGeneral.momeEgal = []
    affGeneral.histo = []
    affGeneral.memo = []
}

//gestion du chiffre sélectionné pour les chiffre mis en mémoire
function chiffreMemoSecelction(chiffre) {
    affGeneral.memo = [];
    affGeneral.memo = sessionStorage.getItem('memoireStockage').split(',');

    let regexHtml = affGeneral.memo[chiffre].match(/\d+/g);
    chiffreMemo = regexHtml[0];



}

//indique l'index de l'élément selectioné dans la mémoire
function repereIndexElementSelectionableDansLaMemoireChiffre() {


    let memodefaulElement = Array.from(document.querySelectorAll('.memodefaulElement '));
    for (let i = 0; i < memodefaulElement.length; i++) {


        memodefaulElement[i].dataset.indexNumber = '' + i + '';



    }
}


window.onload = () => {
    // On écoute les clics sur les touches
    let touchesOperateur = Array.from(document.querySelectorAll(".opperateur"));
    let touchesChiffre = Array.from(document.querySelectorAll(".chiffre"));
    let touchesMemo = Array.from(document.querySelectorAll(".memo"));
    let touchesGenerals = touchesOperateur.concat(touchesChiffre, touchesMemo);

    if (sessionStorage["historiqueCalcule"]) {
        affGeneral.histo = [];
        affGeneral.histo.push(sessionStorage.getItem('historiqueCalcule'));
    }
    if (sessionStorage["memoireStockage"]) {
        affGeneral.memo = [];
        affGeneral.memo.push(sessionStorage.getItem('memoireStockage'));
        toucheMemoChiffre();
    }
    historique();
    memoire();



    for (let touchesGeneral of touchesGenerals) {
        touchesGeneral.addEventListener("click", gererTouches);
    }
    document.addEventListener('keydown', gererTouches)


}



// sessionHisto.addEventListener("change", () => {
//     histodéfaut.innerHTML = sessionHisto
// });


// variable tempon pour l'afaffichage, les calcule , la mémoi et l'historique
let affGeneral = {
    AlffichageCalaculette: [], //affichage du heut de la calculette
    AlffichageCTompontResulta: [], //affichage du résultat  et le tompon
    CcalculeJS: [], //calcule a fecetieur en javasrcipte
    momeEgal: [], //mémorisé l'opération quand on fait plusieur fois égale
    histo: [], //mémorisation temporaire de l'historique des calcule et envoyer dans le session storaige
    memo: [], //mémorisation temporaire des chiffre mis en mémoire
}

function gererTouches(event) {
    let toucheEvent;
    var classEvent;

    //verifier si l'on as un keydow;
    if (event.type === "keydown") {
        // console.log(event.key);
        if (event.key === '0' || event.key === '1' || event.key === '2' || event.key === '3' || event.key === '4' || event.key === '5' || event.key === '6' || event.key === '7' || event.key === '8' || event.key === '9' || event.key === ',' || event.key === '.') {
            classEvent = 'chiffre';
        } else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/' || event.key === 'r' || event.key === 'Delete' || event.key === 'Backspace' || event.key === '%' || event.key === 'ù' || event.key === 'q' || event.key === '*') {
            classEvent = 'opperateur';
        } else if (event.key === 'Enter' || event.key === ' ') {
            classEvent = 'egal';
        }

        switch (event.key) {
            case '0':
                toucheEvent = 'zero';
                break;
            case '1':
                toucheEvent = 'un';
                break;
            case '2':
                toucheEvent = 'deux';
                break;
            case '3':
                toucheEvent = 'trois';
                break;
            case '4':
                toucheEvent = 'quatre';
                break;
            case '5':
                toucheEvent = 'cinq';
                break;
            case '6':
                toucheEvent = 'six';
                break;
            case '7':
                toucheEvent = 'sept';
                break;
            case '8':
                toucheEvent = 'huit';
                break;
            case '9':
                toucheEvent = 'neuf';
                break;
            case '+':
                toucheEvent = 'plus';
                break;
            case '-':
                toucheEvent = 'moin';
                break;
            case '*':
                toucheEvent = 'multiplier';
                break;
            case '/':
                toucheEvent = 'division';
                break;
            case 'Enter':
            case ' ':
                toucheEvent = 'opperateur';
                break;
            case 'Backspace':
                toucheEvent = 'suppChiffre';
                break;
            case 'Delete':
                toucheEvent = 'CE';
                break;
            case 'r':
                toucheEvent = 'undemi';
                break;
            case 'q':
                toucheEvent = 'carrer';
                break;
            case '%':
            case 'ù':
                toucheEvent = 'pourcentage';
                break;
            case ',':
            case '.':
                toucheEvent = 'visgule';
                break;

            default:

                break;
        }

    } else {
        classEvent = event.path[1].classList[0]
        toucheEvent = event.path[1].classList[1]

    }

    // console.log(classEvent);


    switch (classEvent) {
        case 'egal':


            if (affGeneral.AlffichageCalaculette.includes(' =')) {


                affGeneral.CcalculeJS = [];
                affGeneral.AlffichageCalaculette = [];
                affGeneral.CcalculeJS.push(affGeneral.AlffichageCTompontResulta.join(' '), affGeneral.momeEgal.join(' '));
                affGeneral.AlffichageCalaculette.push(affGeneral.AlffichageCTompontResulta.join(' '), ' ', affGeneral.momeEgal.join(' '), ' =');
                let operateurDoubleEgalCarreCalculJs = affGeneral.CcalculeJS.join('').replaceAll(',', '.').replaceAll('ₓ', '*').replaceAll('÷', '/');

                let resultaDoubleEgaleOpérateur = Function("return " + operateurDoubleEgalCarreCalculJs)();
                affGeneral.AlffichageCTompontResulta = [];
                affGeneral.AlffichageCTompontResulta.push(resultaDoubleEgaleOpérateur);
                calculeresult.innerHTML = "<p>" + operateurDoubleEgalCarreCalculJs.replaceAll('*', ' ₓ').replaceAll('/', ' ÷').replaceAll('+', ' +').replaceAll('-', ' -') + " =</p>";
                chiffreresult.innerHTML = "<p>" + affGeneral.AlffichageCTompontResulta + "</p>";
                affGeneral.histo.unshift("<div class='survolHisto'><p>" + operateurDoubleEgalCarreCalculJs.replaceAll('*', ' ₓ').replaceAll('/', ' ÷').replaceAll('+', ' +').replaceAll('-', ' -') + "=</p> <p class='resultaSotrage'>" + affGeneral.AlffichageCTompontResulta + "</p></div>");
                sessionStorage.setItem("historiqueCalcule", affGeneral.histo.join(' '));
                historique();

                affGeneral.CcalculeJS = [];

            } else if (affGeneral.AlffichageCalaculette.includes('ₓ') || affGeneral.AlffichageCalaculette.includes('÷') || affGeneral.AlffichageCalaculette.includes('-') || affGeneral.AlffichageCalaculette.includes('+')) {

                moisMois();
                if (affGeneral.AlffichageCTompontResulta.length != 0) {

                    affGeneral.momeEgal = [];
                    // console.log(affGeneral.AlffichageCTompontResulta);
                    if (affGeneral.AlffichageCalaculette.includes('÷') && affGeneral.AlffichageCTompontResulta.includes('0')) {

                        chiffreresult.innerHTML = '<p style="font-size: 20px;">Désolé... Nous ne pouvons pas diviser par zéro</p>';
                        razAffGeneral();

                    } else {

                        if (affGeneral.CcalculeJS.includes('ₓ')) {
                            affGeneral.CcalculeJS.splice(affGeneral.CcalculeJS.indexOf('ₓ'), 1, '*')
                        }
                        if (affGeneral.CcalculeJS.includes('÷')) {
                            affGeneral.CcalculeJS.splice(affGeneral.CcalculeJS.indexOf('÷'), 1, '/')
                        }

                        let operateurCarreCalculJs = affGeneral.CcalculeJS.join('').replaceAll(',', '.');

                        let resultaOpérateur = Function("return " + operateurCarreCalculJs)();

                        if (affGeneral.AlffichageCalaculette[affGeneral.AlffichageCalaculette.length - 1] != affGeneral.AlffichageCTompontResulta.join()) {
                            affGeneral.AlffichageCalaculette.push(" ", affGeneral.AlffichageCTompontResulta.join(''), " =");
                        } else {
                            affGeneral.AlffichageCalaculette.push(" ", " =");
                        }
                        let memoiirAffichageStockage = affGeneral.AlffichageCalaculette.join('');
                        calculeresult.innerHTML = "<p>" + memoiirAffichageStockage + "</p>";
                        chiffreresult.innerHTML = "<p>" + resultaOpérateur + "</p>";
                        affGeneral.AlffichageCTompontResulta = [];
                        affGeneral.AlffichageCTompontResulta.push(resultaOpérateur);
                        affGeneral.momeEgal = [];
                        affGeneral.momeEgal.push(affGeneral.AlffichageCalaculette.splice(-4, 3).join(''));

                        affGeneral.histo.unshift("<div class='survolHisto'><p>" + memoiirAffichageStockage + "</p>  <p class='resultaSotrage'>" + resultaOpérateur + "</p></div>");
                        sessionStorage.setItem("historiqueCalcule", affGeneral.histo.join(' '));
                        historique();

                        affGeneral.CcalculeJS = [];
                    }
                } else {

                    affGeneral.momeEgal = [];

                    let chiffreAjouter = affGeneral.AlffichageCalaculette[0];
                    affGeneral.momeEgal.push(affGeneral.AlffichageCalaculette[2], chiffreAjouter)
                    affGeneral.AlffichageCalaculette.push(chiffreAjouter, ' =');
                    affGeneral.CcalculeJS.push(chiffreAjouter);
                    let operateurBisCarreCalculJs = affGeneral.CcalculeJS.join('').replaceAll(',', '.');

                    let resultaOpérateur = Function("return " + operateurBisCarreCalculJs)();
                    calculeresult.innerHTML = "<p>" + affGeneral.AlffichageCalaculette.join(' ') + "</p>";
                    chiffreresult.innerHTML = "<p>" + resultaOpérateur + "</p>";
                    affGeneral.AlffichageCTompontResulta = [];
                    affGeneral.AlffichageCTompontResulta.push(resultaOpérateur);
                    affGeneral.histo.unshift("<div class='survolHisto'><p>" + affGeneral.AlffichageCalaculette.join(' ') + "</p>  <p class='resultaSotrage'>" + resultaOpérateur + "</p></div>");
                    sessionStorage.setItem("historiqueCalcule", affGeneral.histo.join(' '));
                    historique();
                    affGeneral.CcalculeJS = [];
                }

            }





            break;
        case 'chiffre':

            toucheStandard.forEach(element => {
                if (toucheEvent === element.name) {

                    if (affGeneral.AlffichageCalaculette.includes(' =')) {
                        affGeneral.AlffichageCalaculette = [];
                        affGeneral.AlffichageCTompontResulta = [];
                        affGeneral.momeEgal = [];
                        calculeresult.innerHTML = "<p> </p>";

                    }
                    if (element.name === "PosNega") {
                        if (affGeneral.AlffichageCTompontResulta.includes("-")) {
                            affGeneral.AlffichageCTompontResulta.shift(element.Affichage);
                            affGeneral.CcalculeJS.shift(element.fomuleJs);

                        } else {
                            affGeneral.AlffichageCTompontResulta.unshift(element.Affichage);
                        }

                    } else if (element.name === "visgule") {

                        if (affGeneral.AlffichageCTompontResulta[0] === "0" || affGeneral.AlffichageCTompontResulta.length < 1) {
                            affGeneral.AlffichageCTompontResulta.push("0");
                            affGeneral.AlffichageCTompontResulta.push(element.Affichage);

                        } else {
                            affGeneral.AlffichageCTompontResulta.push(element.Affichage);
                            affGeneral.CcalculeJS.push(element.fomuleJs);
                        }

                    } else {
                        if (affGeneral.AlffichageCTompontResulta[0] === "0" && affGeneral.AlffichageCTompontResulta[1] != ",") {
                            affGeneral.AlffichageCTompontResulta.shift();
                        }
                        affGeneral.AlffichageCTompontResulta.push(element.Affichage);
                        affGeneral.CcalculeJS.push(element.fomuleJs);
                    }
                    if (affGeneral.AlffichageCalaculette.includes('sqr(') || affGeneral.AlffichageCalaculette.includes('√(') || affGeneral.AlffichageCalaculette.includes('1/(')) { //pour le carré et la racine carré =>quand on rentre une nouvelle valeur 
                        affGeneral.AlffichageCTompontResulta = [];
                        affGeneral.AlffichageCalaculette = [];
                        affGeneral.CcalculeJS = [];
                        if (affGeneral.AlffichageCTompontResulta[0] === "0" && affGeneral.AlffichageCTompontResulta[1] != ",") {
                            affGeneral.AlffichageCTompontResulta.shift();
                        }
                        affGeneral.AlffichageCTompontResulta.push(element.Affichage);
                        affGeneral.CcalculeJS.push(element.fomuleJs);
                        historique();
                    }

                }

            });

            let affGeneralStringEnCours = affGeneral.AlffichageCTompontResulta.join('');
            chiffreresult.innerHTML = "<p>" + affGeneralStringEnCours + "</p>";
            break;
        case 'opperateur':

            if (affGeneral.momeEgal.length === 0) {

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
                            affGeneral.momeEgal = [];


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
                                if (affGeneral.AlffichageCalaculette.includes('÷')) {
                                    affGeneral.AlffichageCalaculette.pop();
                                    affGeneral.CcalculeJS.push(affGeneral.AlffichageCalaculette.join(''), '/', resulteDivPourcentage);

                                    affGeneral.AlffichageCTompontResulta = [];
                                    affGeneral.AlffichageCTompontResulta.push(resulteDivPourcentage);
                                    affGeneral.AlffichageCalaculette.push('÷');
                                    affGeneral.AlffichageCalaculette.push(resulteDivPourcentage);
                                } else if (affGeneral.AlffichageCalaculette.includes('ₓ')) {
                                    affGeneral.AlffichageCalaculette.pop();
                                    affGeneral.CcalculeJS.push(affGeneral.AlffichageCalaculette.join(''), '*', resulteDivPourcentage);
                                    affGeneral.AlffichageCTompontResulta = [];
                                    affGeneral.AlffichageCTompontResulta.push(resulteDivPourcentage);
                                    affGeneral.AlffichageCalaculette.push('ₓ');
                                    affGeneral.AlffichageCalaculette.push(resulteDivPourcentage);
                                } else {
                                    let operateurEtract = (affGeneral.AlffichageCalaculette.slice(0, -1).join('')) * resulteDivPourcentage;
                                    affGeneral.CcalculeJS.push(affGeneral.AlffichageCalaculette.join(''))
                                    affGeneral.AlffichageCTompontResulta = [];
                                    affGeneral.AlffichageCTompontResulta.push(operateurEtract);
                                    affGeneral.AlffichageCalaculette.push(operateurEtract);
                                    affGeneral.CcalculeJS.push(operateurEtract);
                                }



                                calculeresult.innerHTML = "<p>" + affGeneral.AlffichageCalaculette.join('') + "</p>";
                                chiffreresult.innerHTML = "<p>" + affGeneral.AlffichageCTompontResulta + "</p>";
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
                                chiffreresult.innerHTML = '<p style="font-size: 20px;">Désolé... Nous ne pouvons pas diviser par zéro</p>';
                                razAffGeneral();

                            }
                        } else if (element.name === "carrer") {

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

                                let carreCalculJs = affGeneral.CcalculeJS.join('');
                                let resultaCarre = Function("return " + carreCalculJs + ",2)")(); //Math.pow(x, 2)
                                affGeneral.AlffichageCTompontResulta = [];
                                affGeneral.AlffichageCTompontResulta.push(resultaCarre)

                                chiffreresult.innerHTML = "<p>" + resultaCarre.toFixed(14) + "</p>";
                            } else {
                                affGeneral.AlffichageCTompontResulta.push('0');
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
                                chiffreresult.innerHTML = "<p>" + resultaCarre.toFixed(0) + "</p>";
                            }




                        } else if (element.name === "RasinCarrer") {
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

                                let carreCalculJs = affGeneral.CcalculeJS.join('');
                                let resultaCarre = Function("return " + carreCalculJs + ",2)")(); //Math.pow(x, 2)
                                affGeneral.AlffichageCTompontResulta = [];
                                affGeneral.AlffichageCTompontResulta.push(resultaCarre)
                                chiffreresult.innerHTML = "<p>" + resultaCarre.toFixed(14) + "</p>";
                            } else {
                                affGeneral.AlffichageCTompontResulta.push('0');
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
                                chiffreresult.innerHTML = "<p>" + resultaCarre.toFixed(0) + "</p>";
                            }


                        } else if (element.name === "plus" || element.name === "moin" || element.name === "multiplier" || element.name === "division") {


                            if (affGeneral.AlffichageCalaculette.includes('÷') && affGeneral.AlffichageCTompontResulta.includes('0')) {
                                console.log(element.Affichage);
                                calculeresult.innerHTML = "<p>" + affGeneral.AlffichageCalaculette.join('') + ' ' + affGeneral.AlffichageCTompontResulta.join('') + ' ' + element.Affichage + "</p>";
                                chiffreresult.innerHTML = '<p style="font-size: 20px;">Désolé... Nous ne pouvons pas diviser par zéro</p>';
                                razAffGeneral();

                            } else {
                                moisMois();
                                // console.log(affGeneral.AlffichageCalaculette, 'affGeneral.AlffichageCalaculette');
                                // console.log(affGeneral.AlffichageCTompontResulta, 'affGeneral.AlffichageCTompontResulta');
                                // console.log(affGeneral.CcalculeJS, 'affGeneral.CcalculeJS');

                                if (affGeneral.AlffichageCTompontResulta.length === 0) {
                                    affGeneral.AlffichageCTompontResulta.push('0');
                                    affGeneral.CcalculeJS.push('0');
                                }

                                if (affGeneral.AlffichageCTompontResulta.length != 0 && affGeneral.AlffichageCalaculette.length != 0) {
                                    opperateurAditionEtc(element);
                                    historique();
                                } else if (affGeneral.AlffichageCalaculette.includes('ₓ') || affGeneral.AlffichageCalaculette.includes('÷') || affGeneral.AlffichageCalaculette.includes('+') || affGeneral.AlffichageCalaculette.includes('-')) {
                                    affGeneral.CcalculeJS.pop();
                                    affGeneral.AlffichageCalaculette.pop();
                                    opperateurAditionEtc(element);
                                } else {
                                    affGeneral.AlffichageCalaculette.push(affGeneral.AlffichageCTompontResulta.join(''), " ");
                                    affGeneral.CcalculeJS.push(element.fomuleJs);
                                    affGeneral.AlffichageCTompontResulta = [];
                                    affGeneral.AlffichageCalaculette.push(element.Affichage);
                                    calculeresult.innerHTML = "<p>" + affGeneral.AlffichageCalaculette.join('') + "</p>";
                                    affGeneral.AlffichageCTompontResulta = [];

                                }
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
                    }
                })

            } else {
                toucheStandard.forEach(element => {
                    if (toucheEvent === element.name) {

                        if (element.name === "C" || element.name === "CE") {
                            chiffreresult.innerHTML = "<p>" + 0 + "</p>";
                            calculeresult.innerHTML = "<p> </p>";

                            affGeneral.AlffichageCTompontResulta = [];
                            affGeneral.AlffichageCalaculette = [];
                            affGeneral.CcalculeJS = [];
                            affGeneral.momeEgal = [];


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
                                if (affGeneral.AlffichageCalaculette.includes('÷')) {
                                    affGeneral.AlffichageCalaculette.pop();
                                    affGeneral.CcalculeJS.push(affGeneral.AlffichageCalaculette.join(''), '/', resulteDivPourcentage);

                                    affGeneral.AlffichageCTompontResulta = [];
                                    affGeneral.AlffichageCTompontResulta.push(resulteDivPourcentage);
                                    affGeneral.AlffichageCalaculette.push('÷');
                                    affGeneral.AlffichageCalaculette.push(resulteDivPourcentage);
                                } else if (affGeneral.AlffichageCalaculette.includes('ₓ')) {
                                    affGeneral.AlffichageCalaculette.pop();
                                    affGeneral.CcalculeJS.push(affGeneral.AlffichageCalaculette.join(''), '*', resulteDivPourcentage);
                                    affGeneral.AlffichageCTompontResulta = [];
                                    affGeneral.AlffichageCTompontResulta.push(resulteDivPourcentage);
                                    affGeneral.AlffichageCalaculette.push('ₓ');
                                    affGeneral.AlffichageCalaculette.push(resulteDivPourcentage);
                                } else {
                                    let operateurEtract = affGeneral.AlffichageCTompontResulta.join('') * resulteDivPourcentage;

                                    affGeneral.AlffichageCTompontResulta = [];
                                    affGeneral.AlffichageCTompontResulta.push(operateurEtract);
                                    affGeneral.AlffichageCalaculette = [];
                                    affGeneral.AlffichageCalaculette.push(operateurEtract);
                                    affGeneral.CcalculeJS.push(operateurEtract);
                                }


                                calculeresult.innerHTML = "<p>" + affGeneral.AlffichageCalaculette.join('') + "</p>";
                                chiffreresult.innerHTML = "<p>" + affGeneral.AlffichageCTompontResulta + "</p>";
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
                                    affGeneral.AlffichageCalaculette = [];
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
                                chiffreresult.innerHTML = '<p style="font-size: 20px;">Désolé... Nous ne pouvons pas diviser par zéro</p>';
                                razAffGeneral();

                            }
                        } else if (element.name === "carrer") {

                            if (affGeneral.AlffichageCTompontResulta.length != 0) {

                                if (affGeneral.AlffichageCalaculette.includes('sqr(') || affGeneral.AlffichageCalaculette.includes('√(') || affGeneral.AlffichageCalaculette.includes('1/(')) {
                                    affGeneral.AlffichageCalaculette.unshift(element.Affichage, ' ');
                                    affGeneral.AlffichageCalaculette.push(')');
                                    calculeresult.innerHTML = "<p>" + affGeneral.AlffichageCalaculette.join('') + ")</p>";
                                } else {
                                    affGeneral.AlffichageCalaculette = [];
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
                            } else {
                                affGeneral.AlffichageCTompontResulta.push('0');
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
                                chiffreresult.innerHTML = "<p>" + resultaCarre.toFixed(0) + "</p>";
                            }




                        } else if (element.name === "RasinCarrer") {
                            if (affGeneral.AlffichageCTompontResulta.length != 0) {

                                if (affGeneral.AlffichageCalaculette.includes('sqr(') || affGeneral.AlffichageCalaculette.includes('√(') || affGeneral.AlffichageCalaculette.includes('1/(')) {
                                    affGeneral.AlffichageCalaculette.unshift(element.Affichage, ' ');
                                    affGeneral.AlffichageCalaculette.push(')');
                                    calculeresult.innerHTML = "<p>" + affGeneral.AlffichageCalaculette.join('') + ")</p>";
                                } else {
                                    affGeneral.AlffichageCalaculette = [];
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
                            } else {
                                affGeneral.AlffichageCTompontResulta.push('0');
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
                                chiffreresult.innerHTML = "<p>" + resultaCarre.toFixed(0) + "</p>";
                            }


                        } else if (element.name === "plus" || element.name === "moin" || element.name === "multiplier" || element.name === "division") {

                            affGeneral.AlffichageCalaculette = [];
                            affGeneral.AlffichageCalaculette.push(affGeneral.AlffichageCTompontResulta.join(''), " ", element.Affichage);
                            affGeneral.CcalculeJS.push(affGeneral.AlffichageCTompontResulta.join(''), element.fomuleJs);
                            affGeneral.AlffichageCTompontResulta = [];

                            calculeresult.innerHTML = "<p>" + affGeneral.AlffichageCalaculette.join('') + "</p>";
                            affGeneral.AlffichageCTompontResulta = [];
                            affGeneral.momeEgal = [];


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
                    }
                })


            }
            break;
        case 'memo':

            toucheStandard.forEach(element => {
                if (toucheEvent === element.name) {
                    // console.log(affGeneral.AlffichageCTompontResulta);
                    if (element.name === "MC") {
                        if (sessionStorage["memoireStockage"]) {

                            sessionStorage.removeItem("memoireStockage");
                            memoire();
                        }
                    } else if (element.name === "MR") {
                        if (sessionStorage["memoireStockage"]) {
                            chiffreMemoSecelction(0);
                            affGeneral.AlffichageCTompontResulta = [];

                            affGeneral.AlffichageCTompontResulta.push(chiffreMemo);
                            affGeneral.CcalculeJS.push(chiffreMemo);
                            chiffreresult.innerHTML = "<p>" + affGeneral.AlffichageCTompontResulta.join('') + "</p>";
                        }


                    } else if (element.name === "MP") {
                        if (sessionStorage["memoireStockage"]) {
                            chiffreMemoSecelction(0);
                            let mPlus = Number(chiffreMemo) + Number(affGeneral.AlffichageCTompontResulta.join(''));
                            // console.log(typeof chiffreMemo);
                            affGeneral.memo.splice(0, 1, "<div class='memodefaulElement' data-index-number=''><p>" + mPlus + "</p><div class='memodefaulElementButoon'><div class='memo MC' tabindex='10'><p>MC</p></div>   <div class= ' memo MP' tabindex='12'><p>M+</p></div><div class='memo MM' tabindex='13'><p>M-</p></div></div></div>");
                            sessionStorage.setItem('memoireStockage', affGeneral.memo);
                            memoire();
                            toucheMemoChiffre();
                            repereIndexElementSelectionableDansLaMemoireChiffre()

                        } else {
                            if (affGeneral.AlffichageCTompontResulta.length != 0) {
                                affGeneral.memo.unshift("<div class='memodefaulElement' data-index-number=''><p>" + affGeneral.AlffichageCTompontResulta.join('') + "</p><div class='memodefaulElementButoon'><div class='memo MC' tabindex='10'><p>MC</p></div>   <div class= ' memo MP' tabindex='12'><p>M+</p></div><div class='memo MM' tabindex='13'><p>M-</p></div></div></div>");
                                sessionStorage.setItem('memoireStockage', affGeneral.memo);
                                memoire();
                                toucheMemoChiffre();
                                repereIndexElementSelectionableDansLaMemoireChiffre()
                            } else {
                                affGeneral.AlffichageCTompontResulta.push('0')
                                affGeneral.memo.unshift("<div class='memodefaulElement' data-index-number=''><p>" + affGeneral.AlffichageCTompontResulta.join('') + "</p><div class='memodefaulElementButoon'><div class='memo MC' tabindex='10'><p>MC</p></div>   <div class= ' memo MP' tabindex='12'><p>M+</p></div><div class='memo MM' tabindex='13'><p>M-</p></div></div></div>");
                                sessionStorage.setItem('memoireStockage', affGeneral.memo);
                                memoire();
                                toucheMemoChiffre();
                                repereIndexElementSelectionableDansLaMemoireChiffre()
                            }
                        }

                    } else if (element.name === "MM") {
                        if (sessionStorage["memoireStockage"]) {
                            chiffreMemoSecelction(0);
                            let mMois = Number(chiffreMemo) - Number(affGeneral.AlffichageCTompontResulta.join(''));
                            affGeneral.memo.splice(0, 1, "<div class='memodefaulElement' data-index-number=''><p>" + mMois + "</p><div class='memodefaulElementButoon'><div class='memo MC' tabindex='10'><p>MC</p></div>   <div class= ' memo MP' tabindex='12'><p>M+</p></div><div class='memo MM' tabindex='13'><p>M-</p></div></div></div>");
                            sessionStorage.setItem('memoireStockage', affGeneral.memo);
                            memoire();
                            toucheMemoChiffre();
                            repereIndexElementSelectionableDansLaMemoireChiffre()

                        } else {
                            if (affGeneral.AlffichageCTompontResulta.length != 0) {
                                affGeneral.memo.unshift("<div class='memodefaulElement' data-index-number=''><p>" + affGeneral.AlffichageCTompontResulta.join('') + "</p><div class='memodefaulElementButoon'><div class='memo MC' tabindex='10'><p>MC</p></div>   <div class= ' memo MP' tabindex='12'><p>M+</p></div><div class='memo MM' tabindex='13'><p>M-</p></div></div></div>");
                                sessionStorage.setItem('memoireStockage', affGeneral.memo);
                                memoire();
                                toucheMemoChiffre();
                                repereIndexElementSelectionableDansLaMemoireChiffre()
                            } else {
                                affGeneral.AlffichageCTompontResulta.push('0')
                                affGeneral.memo.unshift("<div class='memodefaulElement' data-index-number=''><p>" + affGeneral.AlffichageCTompontResulta.join('') + "</p><div class='memodefaulElementButoon'><div class='memo MC' tabindex='10'><p>MC</p></div>   <div class= ' memo MP' tabindex='12'><p>M+</p></div><div class='memo MM' tabindex='13'><p>M-</p></div></div></div>");
                                sessionStorage.setItem('memoireStockage', affGeneral.memo);
                                memoire();
                                toucheMemoChiffre();
                                repereIndexElementSelectionableDansLaMemoireChiffre()
                            }
                        }

                    } else if (element.name === "MS") {
                        if (affGeneral.AlffichageCTompontResulta.length != 0) {
                            affGeneral.memo.unshift("<div class='memodefaulElement' data-index-number=''><p>" + affGeneral.AlffichageCTompontResulta.join('') + "</p><div class='memodefaulElementButoon'><div class='memo MC' tabindex='10'><p>MC</p></div>   <div class= ' memo MP' tabindex='12'><p>M+</p></div><div class='memo MM' tabindex='13'><p>M-</p></div></div></div>");
                            sessionStorage.setItem('memoireStockage', affGeneral.memo);
                            memoire();
                            toucheMemoChiffre();
                            repereIndexElementSelectionableDansLaMemoireChiffre();
                        } else {
                            affGeneral.AlffichageCTompontResulta.push('0')

                            affGeneral.memo.unshift("<div class='memodefaulElement' data-index-number=''><p>" + affGeneral.AlffichageCTompontResulta.join('') + "</p><div class='memodefaulElementButoon'><div class='memo MC' tabindex='10'><p>MC</p></div>   <div class= ' memo MP' tabindex='12'><p>M+</p></div><div class='memo MM' tabindex='13'><p>M-</p></div></div></div>");

                            sessionStorage.setItem('memoireStockage', affGeneral.memo);
                            memoire();
                            toucheMemoChiffre();
                            repereIndexElementSelectionableDansLaMemoireChiffre();
                        }



                    }
                }

            })

            break;

        default:
            break;
    }

}


// for (let i = 0; i < sessionStorage.length; i++) {
//     let key = sessionStorage.key(i);


// }
function toucheMemoChiffre() {
    let chiffreMemoAffiche = Array.from(document.querySelectorAll('.memodefaulElement'))
    let butomMemoAffiche = Array.from(document.querySelectorAll('.memodefaulElement .memodefaulElementButoon .memo'))

    for (let touchememoStocage of chiffreMemoAffiche) { //gestion du clique sur la case entiére du chiffre mémorisé

        touchememoStocage.addEventListener("click", (e) => {



            if (e.path[0].innerHTML.includes('</p><div class="memodefaulElementButoon"><div class="memo MC" tabindex="10"><p>MC</p></div>   <div class=" memo MP" tabindex="12"><p>M+</p></div><div class="memo MM" tabindex="13"><p>M-</p></div></div>')) {
                let chifrreMemoClick = Number(e.path[0].innerHTML.replace('</p><div class="memodefaulElementButoon"><div class="memo MC" tabindex="10"><p>MC</p></div>   <div class=" memo MP" tabindex="12"><p>M+</p></div><div class="memo MM" tabindex="13"><p>M-</p></div></div>', '').replace('<p>', ''));
                if (chifrreMemoClick != 0) {
                    affGeneral.AlffichageCTompontResulta = [];
                    affGeneral.AlffichageCTompontResulta.push(chifrreMemoClick);

                    affGeneral.CcalculeJS.push(chifrreMemoClick);
                    chiffreresult.innerHTML = "<p>" + affGeneral.AlffichageCTompontResulta.join('') + "</p>";
                    repereIndexElementSelectionableDansLaMemoireChiffre()
                } else {
                    affGeneral.AlffichageCTompontResulta = [];
                    affGeneral.AlffichageCTompontResulta.push('0');
                    console.log(affGeneral.AlffichageCTompontResulta);
                    affGeneral.CcalculeJS.push('0');
                    chiffreresult.innerHTML = "<p>" + affGeneral.AlffichageCTompontResulta.join('') + "</p>";
                    repereIndexElementSelectionableDansLaMemoireChiffre()

                }

            }











        });

    }

    for (let buttonTouchememoStocage of butomMemoAffiche) { //gestion du clique sur le mc mp mm

        buttonTouchememoStocage.addEventListener("click", (e) => {
            let buttonTouchememoStocageClicke = e.path[0].classList[1];


            if (buttonTouchememoStocageClicke === "MC") {
                let indexOfMcSelectionerMc = e.path[2].dataset.indexNumber;

                affGeneral.memo.splice(indexOfMcSelectionerMc, 1);
                sessionStorage.setItem('memoireStockage', affGeneral.memo);
                memoire();
                toucheMemoChiffre();
                repereIndexElementSelectionableDansLaMemoireChiffre();
            } else if (buttonTouchememoStocageClicke === "MP") {
                let indexOfMcSelectionerMp = e.path[2].dataset.indexNumber;
                chiffreMemoSecelction(indexOfMcSelectionerMp);
                let mPlusMp = Number(chiffreMemo) + Number(affGeneral.AlffichageCTompontResulta.join(''));
                affGeneral.memo.splice(indexOfMcSelectionerMp, 1, "<div class='memodefaulElement' data-index-number=''><p>" + mPlusMp + "</p><div class='memodefaulElementButoon'><div class='memo MC' tabindex='10'><p>MC</p></div>   <div class= ' memo MP' tabindex='12'><p>M+</p></div><div class='memo MM' tabindex='13'><p>M-</p></div></div></div>");
                sessionStorage.setItem('memoireStockage', affGeneral.memo);
                memoire();
                toucheMemoChiffre();
                repereIndexElementSelectionableDansLaMemoireChiffre()


            } else if (buttonTouchememoStocageClicke === "MM") {
                let indexOfMcSelectionerMm = e.path[2].dataset.indexNumber;
                chiffreMemoSecelction(indexOfMcSelectionerMm);
                let mPlusMm = Number(chiffreMemo) - Number(affGeneral.AlffichageCTompontResulta.join(''));

                affGeneral.memo.splice(indexOfMcSelectionerMm, 1, "<div class='memodefaulElement' data-index-number=''><p>" + mPlusMm + "</p><div class='memodefaulElementButoon'><div class='memo MC' tabindex='10'><p>MC</p></div>   <div class= ' memo MP' tabindex='12'><p>M+</p></div><div class='memo MM' tabindex='13'><p>M-</p></div></div></div>");
                sessionStorage.setItem('memoireStockage', affGeneral.memo);
                memoire();
                toucheMemoChiffre();
                repereIndexElementSelectionableDansLaMemoireChiffre()


            }

        });

    }
}






//gestion des erreur
window.addEventListener('error', (e) => {
    alert('Une erreur est survenue dans votre calcul : ' + e.message)
})