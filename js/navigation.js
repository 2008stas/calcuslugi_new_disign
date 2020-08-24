"use strict";

const burgerMenuRef = document.getElementById("burger-menu");
const btnOpnLoginRef = document.getElementById("login-btn");
const btnClsLoginRef = document.querySelector(".menu-login__close-btn");
const bodyRef = document.querySelector("body");
const menuLinkRef = document.querySelectorAll(".page-nav__menu-link");
const menuLoginRef = document.querySelector(".menu-login");
const btnFeedbackOpnRef = document.querySelector(".footer__feedback-btn");
const btnClsFeedbackRef = document.querySelector(".menu-feedback__close-btn");
const menuFeedbackRef = document.querySelector(".menu__feedback");
const btnReadMoreRef = document.querySelector(".read-more");
const sectionNewsContentRef = document.querySelector(".section-news__content");
const btnNewsExpendRef = document.querySelector(".section-news__expand-btn");
const iconNewsExpendRef = document.querySelector(".section-news__expand-icon");
const moreDotsRef = document.querySelector(".more-dots");
const newsSource = document.querySelector(".section-news__source");

const textContentNews = sectionNewsContentRef.textContent;
const maxLengthString = 800;

if (textContentNews.length > maxLengthString) {
    const textContentNewsShort = textContentNews.substring(0, maxLengthString);
    sectionNewsContentRef.textContent = textContentNewsShort;
}

const changeString = function (string, length, originalString) {
    return string.length > length
        ? string.substring(0, length)
        : originalString;
};

const toggleClass = (ref, cssClass) => {
    ref.classList.toggle(cssClass);
};

const addClass = (ref, cssClass) => {
    ref.classList.add(cssClass);
};

const removeClass = (ref, cssClass) => {
    ref.classList.remove(cssClass);
};

burgerMenuRef.addEventListener("click", () => {
    if (burgerMenuRef.checked) {
        addClass(bodyRef, "over-flow-hidden");
    }

    if (!burgerMenuRef.checked) {
        removeClass(bodyRef, "over-flow-hidden");
    }
});

btnOpnLoginRef.addEventListener("click", () => {
    addClass(menuLoginRef, "js-show-menu-login");
    addClass(bodyRef, "over-flow-hidden");
});

btnClsLoginRef.addEventListener("click", () => {
    burgerMenuRef.checked = false;
    removeClass(menuLoginRef, "js-show-menu-login");
    removeClass(bodyRef, "over-flow-hidden");
});

menuLinkRef[0].addEventListener("click", () => {
    burgerMenuRef.checked = false;
    removeClass(bodyRef, "over-flow-hidden");
});

menuLinkRef[1].addEventListener("click", () => {
    burgerMenuRef.checked = false;
    removeClass(bodyRef, "over-flow-hidden");
});

menuLinkRef[2].addEventListener("click", () => {
    burgerMenuRef.checked = false;
    removeClass(bodyRef, "over-flow-hidden");
});

menuLinkRef[3].addEventListener("click", () => {
    burgerMenuRef.checked = false;
    removeClass(bodyRef, "over-flow-hidden");
});

btnFeedbackOpnRef.addEventListener("click", () => {
    addClass(menuFeedbackRef, "js-show-menu-feedback");
    addClass(bodyRef, "over-flow-hidden");
});

btnClsFeedbackRef.addEventListener("click", () => {
    removeClass(menuFeedbackRef, "js-show-menu-feedback");
    removeClass(bodyRef, "over-flow-hidden");
});

btnNewsExpendRef.addEventListener("click", () => {
    sectionNewsContentRef.textContent = changeString(
        sectionNewsContentRef.textContent,
        maxLengthString,
        textContentNews
    );
    toggleClass(iconNewsExpendRef, "section-news__expand-icon--rotate");
    toggleClass(moreDotsRef, "visually-hidden");
    toggleClass(newsSource, "visually-hidden");
});
