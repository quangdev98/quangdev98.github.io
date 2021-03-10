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
let slider = document.querySelectorAll(".slider-screen .box-slideshow .item-slide");
let start = 0;
let end = 0;
let number = 0;

function removeSlide() {
    slider.forEach((value, index) => {
        value.classList.remove('active');
    })
}
function displaySlide() {
    removeSlide();
    for (let i = start; i < end; i++) {
        slider[i].classList.add('active');
    }
}
function next() {
    start += 1;
    end += 1;
    // console.log(number);
    if (end > slider.length) {
        start = 0;
        end = number;
    }
    displaySlide();
};

function prev() {
    if (start == 0) {
        displaySlide();
    } else {
        start -= 1;
        if (start == 0) {
            start = 0;
            end = number;
        } else {
            end -= 1;
        }
        displaySlide();
    }
}
function listFunction() {
    displaySlide();
    number = end;
    next();
    prev();
}
responsive();
window.addEventListener('resize', responsive);

function responsive() {
    let scroll = document.documentElement.clientWidth;
    // console.log(scroll);
    if (scroll < 580) {
        end = 1;
    } else if (scroll >= 580 & scroll < 768) {
        end = 3;
    } else {
        if (scroll >= 768 & scroll < 1200) {
            end = 4;
        } else {
            end = 5;
        }
    }
    listFunction()
};
document.querySelector('.control-slide .next').onclick = function() {
    next();
}
document.querySelector('.control-slide .prev').onclick = function() {
    prev();
};
// 

// menu
var parentMenu = document.getElementById('wrapper-menu');

document.querySelector('#open-menu').onclick = function() {
    parentMenu.classList.add('active');
}
document.getElementById('close-menu').onclick = function() {
    parentMenu.classList.remove('active');
}


// 
let dropDown = document.querySelectorAll('nav#wrapper-menu ul.list-menu > li.item-menu > span');
let dropDownChild = document.querySelectorAll('nav#wrapper-menu ul.list-menu > li.item-menu .menu-child > li.item-menu > span');
let dropDownThird = document.querySelectorAll('nav#wrapper-menu ul.list-menu > li.item-menu .menu-child > li.item-menu > .menu-child-item > li > span');

const showTreeMenu = (listMenu, classNameSubmenu) => {
    listMenu.forEach((val, index) => {
        val.onclick = () => {
            let subMenu = val.parentElement.querySelector(`.${classNameSubmenu}`);
            if (subMenu.style.display == 'block') {
                val.style.transform = 'rotate(0)';
                subMenu.style.display = 'none';
            } else {
                val.style.transform = 'rotate(180deg)';
                subMenu.style.display = 'block';
            }
        }
    });
}

showTreeMenu(dropDown, 'menu-child');
showTreeMenu(dropDownChild, 'menu-child-item');
showTreeMenu(dropDownThird, 'menu-child-item');

// 

// scroll
var offset = 300;
var back_to_top = document.getElementById('header');
window.addEventListener('scroll', function() {
    if (pageYOffset > offset) {
        back_to_top.classList.add('fixed-menu');
    } else {
        back_to_top.classList.remove('fixed-menu');
    };
    parentMenu.classList.remove('active');
});