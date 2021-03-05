var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("client_");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "grid";
    dots[slideIndex - 1].className += " active";
}
// automatic-slide-client
// automatic-slide-client
var slide = 0;
var dot = 0;
carousel();
function carousel() {
    var i;
    var y;
    var x = document.getElementsByClassName("client_");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slide++;
    if (slide > x.length) { slide = 1 }
    x[slide - 1].style.display = "grid";

    for (y = 0; y < dots.length; y++) {
        dots[y].className = dots[y].className.replace("active", "");
    }
    dot++;
     if (dot > dots.length) { dot = 1 }
    dots[dot - 1].className += " active";
    setTimeout(carousel, 4000); 
}
// 
//
var slide_ = 5;
slideScreen(slide_);
function plusSlides(m) {
    slideScreen(slide_ += m);
}
function slideScreen(m){
    var i;
    var x = document.getElementsByClassName("item-slide");
    if (m < x.length && m > slide_) {
        slide_ = 5;
    };
    if (slide_ > x.length) {
        slide_ = 5;
    };
    for(i = 0; i < slide_ ; i++) {
        x[i].style.display = "block";
    }; 
    console.log(slide_); 
}










