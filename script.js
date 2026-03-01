// Background Easter Egg
const main = document.querySelector("#main");
const button = document.querySelector("#egg");


button.addEventListener("click", changeColor);

function changeColor(){
    main.classList.toggle("eggStyle")

}

// Keyboard Easter Egg
const secret = "1337";
let input = "";
const body = document.querySelector("body");
const modal = document.querySelector(".modal-egg")
const modalClose = document.querySelector(".modal-close-egg");


function modalPopup(){
    modal.classList.add("active")
}

body.addEventListener("keydown", (e) => {
    input += e.key;

    if(input === secret){
        console.log("SECRET");
        input = "";
        modalPopup();

    }

    if(!secret.startsWith(input)){
        input = "";
    }
    
});

modalClose.addEventListener("click", modalCloseFunction)

function modalCloseFunction(){
    modal.classList.remove("active")
}