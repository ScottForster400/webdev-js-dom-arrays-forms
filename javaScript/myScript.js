
//IIFE
let imageAr = ["images/view1.jpg","images/view2.jpg","images/view3.jpg",
    "images/view4.jpg","images/view5.jpg","images/view6.jpg"];
let counter = 0;

(function(){
    console.info(document.getElementById("myHeading").innerHTML= "Your Name");
    document.getElementById('myTestEvent').addEventListener("click",bruh);
    let colourButtons = document.querySelectorAll(".colPicker")
    for(let i=0; i< colourButtons.length;i++){
        colourButtons[i].addEventListener("click",chgColour)
    }
    setInterval(chgImage,2000);
    console.dir(window.location);
  
})();
function myFunction(){
    console.info("hi");
}
function bruh(ev){
    console.dir(ev);
}
function redBackground(ev){
    document.querySelector("body").setAttribute("class","redBack");
}
function greenBackground(ev){
    document.querySelector("body").setAttribute("class","greenBack");
}
function blueBackground(ev){
    document.querySelector("body").setAttribute("class","blueBack");
}
function resetBackground(ev){
    document.querySelector("body").setAttribute("class",".body");
}

function chgImage(){
    document.getElementById('myImages').setAttribute('src', imageAr[counter]);
    counter =counter+1
    if(counter>imageAr.length-1){
        counter=0
    }
}
function chgColour(ev){
    console.dir(ev.target.classList)
    console.info("lemon")
    let colourPicked = ev.target.classList[0] + "Back"
    document.querySelector("body").setAttribute("class",colourPicked);
}