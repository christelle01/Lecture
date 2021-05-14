
let alire = document.getElementById("alire");
let lu = document.getElementById("lu");


document.getElementById("ajouter").addEventListener("click",function(){

let titre = document.getElementById('titre').value;
let lien = document.getElementById('lien').value;
if(lien=="" || titre==""){
    alert("Les deux doivent etre rempli");
}
else{
    document.getElementById("titre1").style.visibility="visible";
    document.getElementById("pretexte").style.visibility="hidden";
    alire.insertAdjacentHTML("afterbegin",`<li>${titre}<i id=${titre} class="fas fa-check" onClick=marquerLu(this.id)></i><i id=${titre} onClick=supprimmer(this.id) class="fas fa-trash-alt"></i><a href=${lien} target="blank"><i class="fas fa-shopping-cart"></i></a></li>`); 
    document.getElementById('lien').value=""
    document.getElementById('titre').value=""
}


})

function supprimmer(id){

    document.getElementById(id).parentElement.outerHTML="";
}

function marquerLu(id){
    document.getElementById("titre2").style.visibility="visible";

    supprimmer(id);
    lu.insertAdjacentHTML("afterbegin",`<li>${id}<i id=${id} onClick=supprimmer(this.id) class="fas fa-trash-alt"></i></li>`); 

    
}