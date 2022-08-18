import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'
    
    export const swiper = new Swiper('.swiper', {
        //parameters
        direction: 'horizontal',
        loop: true,

        //pagination
        pagination: {
            el: '.swiper-pagination',
        },

        //arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });