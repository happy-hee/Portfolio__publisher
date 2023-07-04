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
  if (document.documentElement.scrollTop > 40) {
    document.querySelector(".header").classList.add("scrolled");
  } else {
    document.querySelector(".header").classList.remove("scrolled");
  }
});

/**
 * 슬라이드
 */
// 공지 슬라이드
const noticeSwiper = new Swiper(".notice-slide", {
  direction: "vertical", // 방향
  loop: true, // 반복 여부
  slidesPerView: "auto", // 슬라이드 width값
  autoHeight: true, // 슬라이드 height값
  autoplay: {
    // 자동 재생
    delay: 1500,
    pauseOnMouseEnter: true, // 마우스 호버시 정지
  },
});

// 이벤트 슬라이드
const eventSwiper = new Swiper(".event-slide", {
  direction: "vertical", // 방향
  loop: true, // 반복 여부
  slidesPerView: "auto", // 슬라이드 width값
  autoHeight: true, // 슬라이드 height값
  autoplay: {
    // 자동 재생
    delay: 1500,
    pauseOnMouseEnter: true, // 마우스 호버시 정지
  },
});

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

/**
 * 모달 띄우기
 */
const modal = document.querySelectorAll(".modal");
const modalClose = document.querySelectorAll(".modal__close");
const modalOverlay = document.querySelectorAll(".modal__overlay");

modal.forEach((item, index) => {
  // x 버튼으로 모달 닫기
  modalClose.forEach((item, index) => {
    modalClose[index].addEventListener("click", () => {
      modal[index].style.display = "none";
      document.body.style.overflow = "auto";
    });
  });

  // 모달창 바깥 영역 클릭시 모달 닫기
  modalOverlay.forEach((item, index) => {
    modalOverlay[index].addEventListener("click", (e) => {
      const eventTarget = e.target;
      if (eventTarget.classList.contains("modal__overlay")) {
        modal[index].style.display = "none";
        document.body.style.overflow = "auto";
      }
    });
  });

  // 모달창 esc키로 닫기
  window.addEventListener("keyup", (e) => {
    if (modal[index].style.display === "flex" && e.key === "Escape") {
      modal[index].style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
});

// 해왕성 모달
const modalNeptuneOpen = document.querySelector("#modalNeptuneOpen");
const modalNeptune = document.querySelector("#modalNeptune");
modalNeptuneOpen.addEventListener("click", () => {
  modalNeptune.style.display = "flex";
  document.body.style.overflow = "hidden";
});

// 천왕성 모달
const modalUranusOpen = document.querySelector("#modalUranusOpen");
const modalUranus = document.querySelector("#modalUranus");
modalUranusOpen.addEventListener("click", () => {
  modalUranus.style.display = "flex";
  document.body.style.overflow = "hidden";
});

// 토성 모달
const modalSaturnOpen = document.querySelector("#modalSaturnOpen");
const modalSaturn = document.querySelector("#modalSaturn");
modalSaturnOpen.addEventListener("click", () => {
  modalSaturn.style.display = "flex";
  document.body.style.overflow = "hidden";
});

// 명왕성 모달
const modalPlutoOpen = document.querySelector("#modalPlutoOpen");
const modalPluto = document.querySelector("#modalPluto");
modalPlutoOpen.addEventListener("click", () => {
  modalPluto.style.display = "flex";
  document.body.style.overflow = "hidden";
});

// 화성 모달
const modalMarsOpen = document.querySelector("#modalMarsOpen");
const modalMars = document.querySelector("#modalMars");
modalMarsOpen.addEventListener("click", () => {
  modalMars.style.display = "flex";
  document.body.style.overflow = "hidden";
});

// 금성 모달
const modalVenusOpen = document.querySelector("#modalVenusOpen");
const modalVenus = document.querySelector("#modalVenus");
modalVenusOpen.addEventListener("click", () => {
  modalVenus.style.display = "flex";
  document.body.style.overflow = "hidden";
});

/**
 * 이미지 갤러리 (fancybox)
 */
//행성
Fancybox.bind('[data-fancybox="planet"]', {
  hideScrollbar: false,
});
//우주
Fancybox.bind('[data-fancybox="universe"]', {
  hideScrollbar: false,
});
//기타
Fancybox.bind('[data-fancybox="etc"]', {
  hideScrollbar: false,
});

/**
 * 갤러리 탭메뉴
 */
const tab = document.querySelector(".tab");
const tabItem = document.querySelectorAll(".tab__item");
const tabContent = document.querySelectorAll(".gallery__item");

tab.addEventListener("click", (e) => {
  // 탭메뉴 활성화
  const tabDataset = e.target.dataset.tab;
  tabItem.forEach((item) => {
    item.classList.remove("active");
  });
  e.target.classList.add("active");

  // 탭별 이미지 활성화 애니메이션
  tabContent.forEach((item) => {
    item.style.opacity = "0";
    if (tabDataset === "all" || item.dataset.gallery === tabDataset) {
      item.style.transform = "scale(0)";
      item.style.opacity = "0";
      window.setTimeout(function () {
        item.style.transform = "scale(1)";
        item.style.position = "relative";
        item.style.top = "0";
        item.style.opacity = "1";
      }, 350);
    } else {
      item.style.transform = "scale(0)";
      //4초 후(애니메이션 효과 시간)에 display none 처리
      window.setTimeout(function () {
        item.style.position = "absolute";
        item.style.top = "-100%";
        item.style.opacity = "0";
      }, 350);
    }
  });
});
