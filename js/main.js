
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

// var amostralJ = document.getElementById('janelaAmostral');
// var amostralI = document.getElementById('imgAmostral');
// document.addEventListener("touchstart", showImg);
document.addEventListener("touchstart",function () {
    document.getElementsByClassName("swiper-slide-active")[0].onclick = showImgPreview;
});
function showImgPreview() {
    swiper.autoplay.stop();
    document.getElementsByClassName("swiper-slide-active")[0].getElementsByTagName("img")[1].style.display = "flex";
    document.getElementsByClassName("swiper-slide-prev")[0].getElementsByTagName("img")[1].style.display = "none";
    document.getElementsByClassName("swiper-slide-next")[0].getElementsByTagName("img")[1].style.display = "none";
    document.getElementsByClassName("swiper-slide-duplicate")[0].getElementsByTagName("img")[1].style.display = "none";
}
document.addEventListener("touchmove",function(){
    swiper.autoplay.start();
    document.getElementsByClassName("swiper-slide-active")[0].getElementsByTagName("img")[1].style.display = "none";
    document.getElementsByClassName("swiper-slide-duplicate")[0].getElementsByTagName("img")[1].style.display = "none";
});
function showImg() {
    for (let index = 0; index < 10000; index++) {
        document.addEventListener("touchmove", hideImg);
        document.addEventListener("touchend", hideImg);
    }
    amostralJ.style.display = "flex";
    var srcImgAtual = document.getElementsByClassName("swiper-slide-active")[0].getElementsByTagName("img")[0].src; //pega so a img qua ta na transicao
    swiper.autoplay.stop();
    console.log(srcImgAtual);
    if (srcImgAtual == 'file:///home/jeferson/Documents/Tatunage/Site/img/tatto/bull.svg')
        amostralI.src = './img/amostral.png';
    else if (srcImgAtual == 'file:///home/jeferson/Documents/Tatunage/Site/img/tatto/vintage.svg')
        amostralI.src = './img/amostral2.png';
    else if (srcImgAtual == 'file:///home/jeferson/Documents/Tatunage/Site/img/tatto/rebellion.png')
        amostralI.src = './img/amostral3.png';
    else if (srcImgAtual == 'file:///home/jeferson/Documents/Tatunage/Site/img/tatto/fox.png')
        amostralI.src = './img/amostral4.png';
    else
        amostralI.src = '';
}

function hideImg() {
    amostralJ.style.display = "none";
    swiper.autoplay.start();
}




