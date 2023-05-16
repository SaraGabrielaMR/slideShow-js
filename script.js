var slide = document.querySelector('.slideshow');
var images = [
    'imagens/baixados (1).jpg',
    'imagens/baixados (2).jpg',
    'imagens/baixados (3).jpg',
    'imagens/baixados.jpg',
    'imagens/imagem1.jpg',
    'imagens/images (1).jpg',
    'imagens/images.jpg',
];
var time = 2000;
var count = 0;

function moveSlideShow(){
    slide.src = images[count];

    if(count < images.length - 1){
        count++;
    }else{
        count = 0;
    }
    setTimeout("moveSlideShow()", time);
}
window.onload = moveSlideShow;
