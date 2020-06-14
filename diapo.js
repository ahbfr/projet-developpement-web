let slidePos = 1;

afficher(slidePos);

function slide_suiv(n) 
{
        afficher(slidePos += n);
}


 function afficher(n) 
 {
  let i;
  let slides = document.getElementsByClassName("slide");
    if (n > slides.length) 
      {
             slidePos = 1
      } 

    if (n < 1) 
    {
           slidePos = slides.length
    }

  for (i = 0; i < slides.length; i++) 
   {
          slides[i].style.display = "none"; 
   }

     slides[slidePos-1].style.display = "block"; 
 }



function defiler1()
{
   if (document.getElementById('bouton1').innerHTML == "❯" )
   {

       document.getElementById('bouton1').innerHTML = "&#10094;";
       document.getElementById('err').style.display = 'block';
   }

    else
    {
       
        document.getElementById('bouton1').innerHTML = "❯";
        document.getElementById('err').style.display = 'none';
    }
}

function defiler2()
{
   if (document.getElementById('bouton2').innerHTML == "❯" )
   {

       document.getElementById('bouton2').innerHTML = "&#10094;";
       document.getElementById('deu').style.display = 'block';
   }

    else
    {
      
        document.getElementById('bouton2').innerHTML = "❯";
        document.getElementById('deu').style.display = 'none';
    }
}



function defiler3()
{
   if (document.getElementById('bouton3').innerHTML == "❯" )
   {

       document.getElementById('bouton3').innerHTML = "&#10094;";
       document.getElementById('trois').style.display = 'block';
   }

    else
    {
        document.getElementById('bouton3').innerHTML = "❯";
        document.getElementById('trois').style.display = 'none';
    }
}







