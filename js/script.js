/**
 * slide
 */
// 슬라이드 적용
const planetSwiper = new Swiper(".planet-slide", {
  direction: "horizontal", // 방향
  loop: false, // 반복 여부
  slidesPerView: "auto", // 슬라이드 width값
  clickable: true, //클릭
  allowTouchMove: true, //터치 움직임
  watchOverflow: true, //마우스 클릭으로 슬라이드 이동
  // 네비게이션
  navigation: {
    nextEl: ".planet-slide__next",
    prevEl: ".planet-slide__prev",
    disabledClass: "planet-slide__disabled",
  },
});
