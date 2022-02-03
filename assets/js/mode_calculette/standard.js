   //-------------------------calculette standard-----------------------------------------------
   const reductionFenétre = document.querySelector('.petiteTaille'); // sélection de la zone  pour réduire en petit
   const reductionFenétreBis = document.querySelector('.petiteTaillebis');
   const contenaireSandard = document.querySelector('.container');
   const memoSandard = Array.from(document.querySelectorAll('.memo')) //selection de toute les emplacement mémoire
   const operateurSandard = Array.from(document.querySelectorAll('.opperateur')) //selection de toute les emplacement des opérateur


   //afficher la claculatrice en petite taille
   reductionFenétre.addEventListener('click', () => {

       contenaireSandard.classList.toggle('PetitTailleActive');

   })
   reductionFenétreBis.addEventListener('click', () => {

       contenaireSandard.classList.remove('PetitTailleActive');

   })

   //--------- logique de la calculatrice-------------------
   //tobleau d'objet qui répertorie les touche de la calculette
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
   ]

   console.log(Math.sqrt(16));



















   //gestion des erreur
   window.addEventListener('error', (e) => {
       alert('Une erreur est survenue dans votre calcul : ' + e.message)
   })