const selectColorElement = document.querySelector("#color-select");
const selectSizeElement = document.querySelector("#size-select");
const time = document.querySelector(".intro__countdown-time");

// Создаем и задаем параметры свайперами
const swiperPreview = new Swiper('.swiper-preview', {
  spaceBetween: 12,
  slidesPerView: 4,
});

const swiperMain = new Swiper(".swiper-main", {
  thumbs: {
    swiper: swiperPreview
  },
  autoplay: {
    delay: 1700,
    disableOnInteraction: false,
  },
  loop: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
});

// Создаем и настравиваем выпадающие списки

const choicesColor = new Choices(selectColorElement, {
  searchEnabled: false,
  itemSelectText: "",
});

const choicesSize = new Choices(selectSizeElement, {
  searchEnabled: false,
  itemSelectText: "",
});

// Создаем и настраиваем таймер обратного отсчета

const countDownDate = new Date("October 26 2023 23:57:59");

const countDown = setInterval(function () {
  const now = new Date();
  const distance = countDownDate - now;

  const hours = Math.floor(distance / 1000 / 60 / 60);
  const minutes = Math.floor(distance / 1000 / 60) % 60;
  const seconds = Math.floor(distance / 1000) % 60;

  time.textContent = `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  console.log(hours);
}, 500);
