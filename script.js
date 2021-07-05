"use strict";

// console.log("connection control");

// Selections

const btnLeft = document.querySelector(".gallery__btn--left");
const btnRight = document.querySelector(".gallery__btn--right");
const dotsCont = document.querySelector(".gallery__dots");
const images = document.querySelectorAll(".gallery__image__cont");

// Global Variables
let currSlide = 0;
let lastSlide = images.length - 1;

// console.log(images);

/* const imageWidth = images[0].getBoundingClientRect().width;

const setImgPosition = (img, index) => {
    img.style.left = imageWidth * index + "px";
}; */
// images.forEach(setImgPosition);

function createDots() {
    images.forEach((_, i) => {
        dotsCont.insertAdjacentHTML(
            "beforeend",
            `<button class="gallery__dots__dot" data-slide="${i}"><i class="fas fa-circle"></i></button>`
        );
    });
}
createDots();

function showslide(curr) {
    images.forEach((el, i) => {
        el.style.transform = `translateX(${100 * (i - curr)}%)`;
    });
    highlightDots();
}

function highlightDots() {
    const dots = dotsCont.querySelectorAll(".gallery__dots__dot");
    dots.forEach((el) => {
        el.classList.remove("gallery__dots__dot--active");
    });
    dotsCont
        .querySelector(`.gallery__dots__dot[data-slide="${currSlide}"]`)
        .classList.add("gallery__dots__dot--active");
}
currSlide = 0;
showslide(currSlide);

function swipeRight() {
    // if (currSlide === lastSlide) currSlide = 0;
    // else currSlide++;
    currSlide === lastSlide ? (currSlide = 0) : currSlide++;
    showslide(currSlide);
}

function swipeLeft() {
    currSlide === 0 ? (currSlide = lastSlide) : currSlide--;
    showslide(currSlide);
}

// Event Listeners
btnRight.addEventListener("click", swipeRight);
btnLeft.addEventListener("click", swipeLeft);
