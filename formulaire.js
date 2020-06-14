var INIT_CHRONO = 5;
var available = true;
var seconds = INIT_CHRONO;

function chrono() {
    var addLine = document.getElementById('add');
    addLine.style.color = 'lightgray';
    available = seconds === 0
    if (available) {
        buttonActivation()
        document.getElementById('add').innerHTML = "Ajouter";
    } else {
        document.getElementById('add').innerHTML = "Ajouter (" + seconds + ")";
        seconds -= 1
        timeout = setTimeout(chrono, 1000);
    }
}

function buttonActivation() {
    clearTimeout(timeout);
    var addLine = document.getElementById('add');
    addLine.style.color = 'black';
    seconds = INIT_CHRONO;

}


function ajouterligne() {
    if (available == true) {
        if (document.querySelector("#prenom").validity.valid && document.querySelector("#name").validity.valid && document.querySelector("#sexe").validity.valid && document.querySelector("#masse").validity.valid && document.querySelector("#taille").validity.valid && document.getElementById("service").validity.valid && document.getElementById("smash").validity.valid && document.getElementById("amorti").validity.valid && document.getElementById("coupdroit").validity.valid && document.getElementById("revers").validity.valid && document.getElementById("endurance").validity.valid) {
            var tbody = document.querySelector("tbody");
            var ligne = document.createElement("tr");
            ligne.setAttribute("class", "ligne");

            var nom = document.createElement("td");
            nom.innerHTML = document.querySelector("#name").value;
            ligne.appendChild(nom);

            var prenom = document.createElement("td");
            prenom.innerHTML = document.querySelector("#prenom").value;
            ligne.appendChild(prenom);

            var sexe = document.createElement("td");
            sexe.innerHTML = document.querySelector("#sexe").value;
            ligne.appendChild(sexe);

            var masse = document.createElement("td");
            masse.innerHTML = document.querySelector("#masse").value;
            ligne.appendChild(masse);

            var taille = document.createElement("td");
            taille.innerHTML = document.querySelector("#taille").value;
            ligne.appendChild(taille);

            var service = document.createElement("td");
            var attser = document.querySelector("input[name=service]:checked").value;
            service.innerHTML = attser;
            service.setAttribute("id", attser);
            ligne.appendChild(service);

            var smash = document.createElement("td");
            var attsmh = document.querySelector("input[name='smash']:checked").value;
            smash.innerHTML = attsmh;
            smash.setAttribute("id", attsmh);
            ligne.appendChild(smash);

            var amorti = document.createElement("td");
            var attamo = document.querySelector("input[name='amorti']:checked").value;
            amorti.innerHTML = attamo;
            amorti.setAttribute("id", attamo);
            ligne.appendChild(amorti);

            var coupdroit = document.createElement("td");
            var attcd = document.querySelector("input[name='coupdroit']:checked").value;
            coupdroit.innerHTML = attcd;
            coupdroit.setAttribute("id", attcd);
            ligne.appendChild(coupdroit);

            var revers = document.createElement("td");
            var attrev = document.querySelector("input[name='revers']:checked").value;
            revers.innerHTML = attrev;
            revers.setAttribute("id", attrev);
            ligne.appendChild(revers);

            var endurance = document.createElement("td");
            var attend = document.querySelector("input[name='endurance']:checked").value;
            endurance.innerHTML = attend;
            endurance.setAttribute("id", attend);
            ligne.appendChild(endurance);

            tbody.appendChild(ligne);
            available = false;
            var addLine = document.getElementById('add');
            addLine.style.color = 'lightgray';
            chrono()
        }
        else {
            alert("Vous n'avez pas rempli tous les champs de manière correcte");
        }
    }
    else {
        alert("Veuillez attendre la fin du décompte");
    }
}
function supprimerligne() {
    var table = document.querySelector("table");
    var tailleTable = table.querySelectorAll("tr").length;
    for (i = 1; i < tailleTable; i++) {
        table.querySelectorAll("tr")[1].parentElement.removeChild(table.querySelectorAll("tr")[1]);
    }

}