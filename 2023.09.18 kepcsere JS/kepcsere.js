//-- globális konstansok és változok megadása
const kep = document.querySelector('#kep');
const gomb = document.querySelector('#szinesGomb');
var allapot = "feketerfeher";

//-- eseménye hozzárendelése
gomb.addEventListener("click",kepcsere );
kep.addEventListener("mouseover",szinesbe )

//-- eseménykezelő függvények
function kepcsere(){
    
    if(allapot=="feketefeher"){
     gomb.innerHTML = "fekete fehér"
     kep.src="img/gettyimages-521329128-e1683272673391.jpg"
     allapot="szines"
    } else{
        kep.src = "img/gettyimages-521329128-e1683272673391.png"
        gomb.innerHTML = "Szines"
        allapot="feketefeher"
        
    }   

    }
    function szinesbe(){
        if(allapot=="feketefeher"){
            gomb.innerHTML = "fekete fehér"
            kep.src="img/gettyimages-521329128-e1683272673391.jpg"
            allapot="szines"
           }   
    }
   