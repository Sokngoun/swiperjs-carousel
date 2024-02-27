let btn_open = document.querySelector(".open-modal");
let btn_close = document.querySelector(".btn-close");
let modal_container = document.querySelector(".modal-container");

btn_open.addEventListener("click", () => {
  modal_container.classList.add("active");
});

btn_close.addEventListener("click", () => {
  modal_container.classList.remove("active");
});

modal_container.addEventListener("click", () => {
  if (e.target.closet("modal-container")) {
    modal_container.classList.add("active");
  } else {
    e.target.classList.remove("active");
  }
});

var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerview: 5,
  freeMode: true,
  watchSlidesProgress: true,
});

var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
