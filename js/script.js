/**
 * GNB 클릭시 해당 섹션으로 이동
 */
const gnbLink = document.querySelectorAll(".gnb__link");
const clickToSection = function (gnbLink) {
  gnbLink.forEach((item) => {
    item.addEventListener("click", (e) => {
      // a 태그의 기본 동작(링크 연결) 방지
      e.preventDefault();
      // GNB의 href값(id)을 #을 뺀 string으로 반환
      const gnbLinkString = String(item.hash).substring(1);
      //해당 string에 해당하는 id를 가진 section의 top 값을 불러옴
      const sectionTop = document.getElementById(gnbLinkString).offsetTop - 44;
      // 해당 위치로 스크롤 이동
      window.scroll({ top: sectionTop, behavior: "smooth" });
    });
  });
};
// GNB에 섹션 이동
clickToSection(gnbLink);

/**
 * GNB 스크롤 내릴시 스타일 변경
 */
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 70) {
    document.querySelector(".header").classList.add("scrolled");
  } else {
    document.querySelector(".header").classList.remove("scrolled");
  }
});

/**
 * 슬라이드
 */
// 행성 정보 슬라이드
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
    disabledClass: "slide__disabled",
  },
});

// 뉴스 슬라이드
const newsSwiper = new Swiper(".news-slide", {
  direction: "horizontal", // 방향
  loop: false, // 반복 여부
  slidesPerView: "auto", // 슬라이드 width값
  clickable: true, //클릭
  allowTouchMove: true, //터치 움직임
  watchOverflow: true, //마우스 클릭으로 슬라이드 이동
  // 네비게이션
  navigation: {
    nextEl: ".news-slide__next",
    prevEl: ".news-slide__prev",
    disabledClass: "slide__disabled",
  },
});

/**
 * 아코디언 메뉴
 */
const accordionItems = document.querySelectorAll(".accordion__item");
accordionItems.forEach((accordionItem) => {
  // 클릭시 active
  accordionItem.addEventListener("click", () => {
    accordionItem.classList.toggle("active");
  });

  // 엔터시 active
  accordionItem.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
      accordionItem.classList.toggle("active");
    }
  });
});

/**
 * 스크롤 애니메이션 - 스크롤시 보임/숨김
 */
const scrollAanimate = document.querySelectorAll(".animate");
const scrollAanimateObserver = new IntersectionObserver((e) => {
  // 감시중 화면에 등장하면 적용
  e.forEach((item) => {
    if (item.isIntersecting) {
      // 감시중인 아이템이 등장시 실행
      item.target.style.opacity = 1;
    } else {
      // 감시중인 아이템이 퇴장시 실행
      item.target.style.opacity = 0;
    }
  });
});

scrollAanimate.forEach((item, index) => {
  //html 요소가 화면에 등장하는지 감시
  scrollAanimateObserver.observe(scrollAanimate[index]);
});

/**
 * 스크롤 애니메이션 - 스크롤시 강조 텍스트 하이라이트
 */
const markList = document.querySelectorAll("mark");
const markObserver = new IntersectionObserver((e) => {
  // 감시중 화면에 등장하면 적용
  e.forEach((item, index) => {
    if (item.isIntersecting) {
      // 감시중인 아이템이 등장시 실행
      item.target.classList.add("active");
    } else {
      // 감시중인 아이템이 퇴장시 실행
      item.target.classList.remove("active");
    }
  });
});

markList.forEach((item, index) => {
  //html 요소가 화면에 등장하는지 감시
  markObserver.observe(markList[index]);
});
