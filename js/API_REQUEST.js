import {swiper} from './swiper.js'

fetch('https://picsum.photos/v2/list?page=1&limit=3')
.then((response)=>response.json())
.then((images)=>setImages(images))
.catch((error)=>console.log(error))

function setImages(imagesArr){
    imagesArr.forEach(image => {
        let swiperContainer=document.querySelector('#swiper-wraper')
        swiperContainer.innerHTML+=`<div class="swiper-slide"><img src='${image.download_url}'></div>`
    });
    swiper.update()
}