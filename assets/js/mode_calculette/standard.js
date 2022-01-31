   //-------------------------calculette standard-----------------------------------------------
   const reductionFenétre = document.querySelector('.petiteTaille');
   const reductionFenétreBis = document.querySelector('.petiteTaillebis');
   const contenaireSandard = document.querySelector('.container');



   //afficher la claculatrice en petite taille
   reductionFenétre.addEventListener('click', () => {

       contenaireSandard.classList.toggle('PetitTailleActive');

   })
   reductionFenétreBis.addEventListener('click', () => {

       contenaireSandard.classList.remove('PetitTailleActive');

   })

   //    window.onload = () => {

   //    }


   //   rajouter le focuse sur le menu header quand on passe a la tabulation 






   //    document.addEventListener('keydown', (event) => {
   //        const nomTouche = event.key;

   //        console.log(nomTouche);

   //    });