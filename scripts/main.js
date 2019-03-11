"use strict";

var introSlider = new Swiper('.intro-slide-container', {
  // loop: true
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  }
});
var infoSlider = new Swiper('.info-gallery-container', {
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    prevEl: '.info-gallery-button-prev',
    nextEl: '.info-gallery-button-next'
  },
  breakpoints: {
    768: {
      slidesPerView: 2
    },
    480: {
      slidesPerView: 1
    }
  }
});
var bigGallerySlider = new Swiper('.gallery-container', {
  centeredSlides: true,
  slidesPerView: 'auto',
  navigation: {
    prevEl: '.gallery-button-prev',
    nextEl: '.gallery-button-next'
  },
  breakpoints: {
    960: {
      slidesPerView: 1
    }
  }
});
var smallGallerySlider = new Swiper('.gallery-small-container', {
  spaceBetween: 5,
  slidesPerView: 7,
  navigation: {
    prevEl: '.gallery-small-button-prev',
    nextEl: '.gallery-small-button-next'
  },
  breakpoints: {
    960: {
      slidesPerView: 6
    },
    768: {
      slidesPerView: 5
    },
    680: {
      slidesPerView: 3
    }
  }
});
bigGallerySlider.controller.control = smallGallerySlider;
smallGallerySlider.controller.control = bigGallerySlider;