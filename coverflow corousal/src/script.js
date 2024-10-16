var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop:true,
  slidesPerView: 1,
  slidesPerGroup:1,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 140,
    modifier: 3.5,
  },
  autoplay:{
    delay:3000,
    disableOnInteraction:true,
  }, 
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    800:{
      depth:200,
      modifier: .5,
      slidesPerView: 2,
      slidesPerGroup:1,
    }
  },

});