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
   let toucheStandard = [{
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
           Affichage: "1/(x)",
           Type: "opperateur"
       },
       {
           name: "carrer",
           explication: "chiffre au carré",
           fomuleJs: "Math.pow(x, 2)",
           Affichage: "sqr(x)",
           Type: "opperateur"
       },
       {
           name: "RasinCarrer",
           explication: "inverce du carré",
           fomuleJs: "Math.sqrt(x)",
           Affichage: "√(x)",
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
   var affGeneral = {
       AlffichageCalaculette: [],
       AlffichageCTompontResulta: [],
       CcalculeJS: []
   }

   function gererTouches(event) {
       let toucheEvent = '';

       switch (event.path[1].classList[0]) {
           case 'egal':
               toucheEvent = event.path[1].classList[1];
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

                       } else {

                           affGeneral.AlffichageCTompontResulta.push(element.Affichage)
                           affGeneral.CcalculeJS.push(element.fomuleJs)
                       }

                   }
               });

               let affGeneralStringEnCours = affGeneral.AlffichageCTompontResulta.join('');
               chiffreresult.innerHTML = "<p>" + affGeneralStringEnCours + "</p>";
               break;
           case 'opperateur':
               toucheEvent = event.path[1].classList[1];
               toucheStandard.forEach(element => {
                   if (toucheEvent === element.name) {
                       if (element.name === "CE") {
                           affGeneral.AlffichageCTompontResulta = [];
                           let affGeneralStringEnCours = affGeneral.AlffichageCTompontResulta.join('');
                           chiffreresult.innerHTML = "<p>" + affGeneralStringEnCours + "</p>";

                       }
                       if (element.name === "C") {
                           affGeneral.AlffichageCTompontResulta = [];
                           affGeneral.AlffichageCalaculette = [];
                           affGeneral.CcalculeJS = [];
                           chiffreresult.innerHTML = "<p>" + 0 + "</p>";


                       }
                       if (element.name === "suppChiffre") {
                           affGeneral.AlffichageCTompontResulta.splice(-1, 1);
                           affGeneral.AlffichageCalaculette.splice(-1, 1);
                           affGeneral.CcalculeJS.splice(-1, 1);
                           let affGeneralStringEnCoursSup = affGeneral.AlffichageCTompontResulta.join('');
                           if (affGeneralStringEnCoursSup <= 0) {
                               chiffreresult.innerHTML = "<p>" + 0 + "</p>";
                               calculeresult.innerHTML = "<p> </p>";
                           } else {
                               chiffreresult.innerHTML = "<p>" + affGeneralStringEnCoursSup + "</p>";
                               calculeresult.innerHTML = "<p> </p>";

                           }

                       }

                       for (let i = 0; i < affGeneral.AlffichageCTompontResulta.length; i++) {
                           affGeneral.AlffichageCalaculette.push(affGeneral.AlffichageCTompontResulta[i])

                       }
                       affGeneral.AlffichageCTompontResulta = [];
                       affGeneral.AlffichageCalaculette.push(element.Affichage);
                       affGeneral.CcalculeJS.push(element.fomuleJs);
                       let affGeneralStringEnCoursOperation = affGeneral.AlffichageCalaculette.join('');
                       calculeresult.innerHTML = "<p>" + affGeneralStringEnCoursOperation + "</p>";





                   }
               })
               break;
           case 'memo':
               toucheEvent = event.path[1].classList[1];

               break;

           default:
               break;
       }
   }
   //    console.log(Math.sqrt(16));

   console.log(affGeneral.AlffichageCalaculette);
   console.log(affGeneral.AlffichageCTompontResulta);
   console.log(affGeneral.CcalculeJS);

















   //gestion des erreur
   window.addEventListener('error', (e) => {
       alert('Une erreur est survenue dans votre calcul : ' + e.message)
   })