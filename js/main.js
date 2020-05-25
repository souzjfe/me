
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 10,
        stretch: 0,
        depth: 1300,
        modifier: 1,
        slideShadows: true,
    },
    loop: true,

    autoplay: {
        delay: 800,
        disableOnInteraction: false,
    },
});

document.onmousedown=disableclick;
function disableclick(event)
{
  if(event.button==2)
     return false;    
}
var amostralJ = document.getElementById('janelaAmostral');
var amostralI = document.getElementById('imgAmostral');
document.addEventListener("touchstart",function () {
    swiper.autoplay.stop();
    document.addEventListener("touchend",swiper.autoplay.start);
    document.getElementsByClassName("swiper-slide-active")[0].onclick = showImg;
});
amostralJ.onclick = hideImg;

document.addEventListener("touchmove",function(){
    swiper.autoplay.start();
    hideImg();
});
function showImg() {
    amostralJ.style.display = "flex";
    var srcImgAtual = document.getElementsByClassName("swiper-slide-active")[0].getElementsByTagName("img")[0].src; //pega so a img qua ta na transicao
    swiper.autoplay.stop();
    if (srcImgAtual == 'file:///home/jeferson/Documents/Tatunage/Site/img/tatto/bull.svg' || srcImgAtual == 'https://jfe.netlify.app/img/tatto/bull.svg')
        amostralI.src = './img/amostral.png';
    else if (srcImgAtual == 'file:///home/jeferson/Documents/Tatunage/Site/img/tatto/vintage.svg' || srcImgAtual == 'https://jfe.netlify.app/img/tatto/vintage.svg')
        amostralI.src = './img/amostral2.png';
    else if (srcImgAtual == 'file:///home/jeferson/Documents/Tatunage/Site/img/tatto/rebellion.png' || srcImgAtual == 'https://jfe.netlify.app/img/tatto/rebellion.png')
        amostralI.src = './img/amostral3.png'; 
    else if (srcImgAtual == 'file:///home/jeferson/Documents/Tatunage/Site/img/tatto/fox.png' || srcImgAtual == 'https://jfe.netlify.app/img/tatto/fox.png')
        amostralI.src = './img/amostral4.png';
    else
        amostralI.src = '';
}

function hideImg() {
    amostralJ.style.display = "none";
    swiper.autoplay.start();
}




