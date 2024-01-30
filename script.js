const hamburger = document.querySelector(".hamburger");
const hidebar = document.querySelector(".hidebar");

hamburger.addEventListener("click", function (){
    hidebar.classList.toggle("show")
})