let num_regle = 1;

afficher(num_regle);

function regle_suiv(n) 
{
        afficher(num_regle += n);
}

function afficher(n) 
{
  let i;
  let regle = document.getElementsByClassName("regles");
    if (n > regle.length) 
      {
        num_regle = 1
      } 

    if (n < 1) 
    {
        num_regle = regle.length
    }

  for (i = 0; i < regle.length; i++) 
   {
        regle[i].style.display = "none"; 
   }

    regle[num_regle-1].style.display = "block"; 
}



