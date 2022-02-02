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




   //   rajouter le focuse sur le menu header quand on passe a la tabulation