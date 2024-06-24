let mybtnnn= document.getElementById('mybtn');

window.onscroll = function(){
    scrollFunction();
}

function scrollFunction(){
    // console.log(document.body.scrollTop());
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop >20){
        mybtnnn.style.display="block";
        // mybtnnn.style.animation="shake 0.25s";
    }
    else mybtnnn.style.display  = "none";
}

function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


let slid=document.querySelector(".slider");
let slidervalue = 240;
let left_slid = document.querySelector("#left-slider");
let right_slid = document.querySelector("#right-slider");


left_slid.addEventListener("click",() =>{
    slid.scrollLeft +=  -slidervalue;
  })
right_slid.addEventListener("click",() =>{
    slid.scrollLeft += slidervalue;
  })