let mybtnnn= document.getElementById('mybtn');

window.onscroll = function(){
    scrollFunction();
}

function scrollFunction(){
    // console.log(document.body.scrollTop());
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop >20){
        mybtnnn.style.opacity="1";
        mybtnnn.style.transition="0.6s";
    }
    else mybtnnn.style.opacity="0";
}

function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


let slid=document.querySelector(".slider");
let value=document.querySelector(".trend-items");
let slidervalue = value.clientWidth +10;
let left_slid = document.querySelector("#left-slider");
let right_slid = document.querySelector("#right-slider");


left_slid.addEventListener("click",() =>{
    slid.scrollLeft +=  -slidervalue;
  })
right_slid.addEventListener("click",() =>{
    slid.scrollLeft += slidervalue;
  })

const ytplayeroverlay = document.querySelector(".youtube-player-overlay");
const ytlinks = document.querySelectorAll(".trend-poster");
const ytplayerpopup = document.getElementById("omgiframe");
ytlinks.forEach(
  (link)=>{
    link.addEventListener("click",()=>{
      ytplayeroverlay.classList.add("active");
      let videolink = `https://www.youtube.com/embed/${link.dataset.linker}&autoplay=1&controls=0`;
      ytplayerpopup.src = videolink;
      console.log(ytplayerpopup);
    });
  }
);

ytplayeroverlay.addEventListener("click",()=>{
  ytplayeroverlay.classList.remove("active");
  ytplayerpopup.src = "";
});


