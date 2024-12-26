let form = document.getElementById("form");
let btn1 = document.getElementById("btn1");
let prenom = document.getElementById("prenom");
let nom = document.getElementById("nom");
let email = document.getElementById("email");
let area = document.getElementById("area");
let popup = document.getElementById("popup");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    if ( prenom.value === "" || nom.value === "" || email.value === "" || area.value === "" ) {
        alert("Veuillez remplir tous les champs !!!")
    } else{
        popup.classList.remove("hidden");
        prenom.value = "";
        nom.value = "";
        email.value = "";
        area.value = "";
    }
})

btn1.addEventListener("click", ()=>{
    popup.classList.add("hidden");
})