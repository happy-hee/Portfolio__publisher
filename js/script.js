/**
 * 모바일 GNB 열기/닫기
 */
const headerGnb = document.querySelector(".header__gnb");
const gnbOpenBtn = document.querySelector(".gnb__open-btn");
const gnbCloseBtn = document.querySelector(".gnb__close-btn");

//사이드메뉴 열기
gnbOpenBtn.addEventListener("click", () => {
  headerGnb.classList.add("gnb--open");
  gnbOpenBtn.style.display = "none";
  gnbCloseBtn.style.display = "block";
});

//사이드메뉴 닫기
gnbCloseBtn.addEventListener("click", () => {
  headerGnb.classList.remove("gnb--open");
  gnbOpenBtn.style.display = "block";
  gnbCloseBtn.style.display = "none";
});

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
      headerGnb.classList.remove("gnb--open");
      gnbOpenBtn.style.display = "block";
      gnbCloseBtn.style.display = "none";
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
 * (Swiper)
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
  // 웹접근성
  a11y: {
    prevSlideMessage: "이전 슬라이드",
    nextSlideMessage: "다음 슬라이드",
  },
});

// 행성 정보 아이템 엔터시 active 되도록
const planetSlideItems = document.querySelectorAll(
  ".planet-slide .slide__item"
);
planetSlideItems.forEach((item) => {
  // 웹접근성 - 엔터시 클릭
  item.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
      item.click();
    }
  });
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

  // 웹접근성 - 엔터시 active
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
      item.target.style.transform = "translateY(0)";
    } else {
      // 감시중인 아이템이 퇴장시 실행
      item.target.style.opacity = 0;
      item.target.style.transform = "translateY(-30px)";
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

tabItem.forEach((item) => {
  // 웹접근성 - 엔터시 클릭
  item.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
      item.click();
    }
  });
});

tab.addEventListener("click", (e) => {
  // 탭메뉴 활성화
  const tabDataset = e.target.dataset.tab;
  tabItem.forEach((item) => {
    item.classList.remove("active");
  });
  e.target.classList.add("active");

  // 탭별 이미지 활성화 애니메이션
  tabContent.forEach((item, index) => {
    //활성화 이미지
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

      // 탭키로 접근 가능
      tabContent[index].childNodes.forEach((item) => {
        item.tabIndex = 0;
      });
    } else {
      //비활성화 이미지
      item.style.transform = "scale(0)";
      //4초 후(애니메이션 효과 시간)에 display none 처리
      window.setTimeout(function () {
        item.style.position = "absolute";
        item.style.top = "-100%";
        item.style.opacity = "0";
      }, 350);

      // 탭키로 접근 불가능
      tabContent[index].childNodes.forEach((item) => {
        item.tabIndex = -1;
      });
    }
  });
});

/**
 * 출발일/오는일 캘린더
 * https://mymth.github.io/vanillajs-datepicker/#/?id=using-from-browser
 */
const departureDateInput = document.querySelector(
  'input[id="departureDateInput"]'
);
const returnDateInput = document.querySelector('input[id="returnDateInput"]');

// 캘린더 옵션
const datePickerOption = {
  language: "ko", //언어
  autohide: true, //날짜 선택 후 캘린더 숨김 여부
  format: "yyyy-mm-dd", //날짜 포맷
  todayHighlight: true, //오늘 날짜 하이라이트
  minDate: "today", // 선택 가능한 최소 날짜
  maxDate: "2050/12/31", //선택 가능한 최대 날짜
};

const departureDatePicker = new Datepicker(
  departureDateInput,
  datePickerOption
);
const returnDatePicker = new Datepicker(returnDateInput, datePickerOption);

/**
 * 문의하기 내용 전송
 */
const submitContact = () => {
  /**
   * 날짜 유효성 체크
   */
  const departureDateValue = departureDatePicker.dates; //출발일
  const returnDateValue = returnDatePicker.dates; //오는일

  if (departureDateValue.length === 0 || !returnDateValue.length === 0) {
    // 출발일 또는 오는일이 비어있는 경우
    alert("출발일 또는 오는날을 선택해주세요.");
    return false;
  } else if (departureDateValue > returnDateValue) {
    // 오는일이 출발일 이후일 경우
    alert("오는날이 출발일 이후여야 합니다.");
    return false;
  }

  /**
   * 이름/이메일/내용 유효성 체크
   */
  const userName = document.querySelector("#name");
  const userEmail = document.querySelector("#email");
  const contactContent = document.querySelector("#content");

  //유효성 체크 에러 메세지
  const errorEmptyName = document.querySelector(".error__empty--name");
  const errorEmptyEmail = document.querySelector(".error__empty--email");
  const errorInvalidEmail = document.querySelector(".error__invalid--email");
  const errorEmptyContent = document.querySelector(".error__empty--content");

  // 이름/이메일의 경우 입력된 공백들 제거
  const userNameValStr = String(userName.value).replace(/\s+/g, "");
  const userEmailValStr = String(userEmail.value).replace(/\s+/g, "");

  // 이름 유효성 체크
  if (!userNameValStr) {
    errorEmptyName.style.display = "block";
    userName.focus();
    // 텍스트 입력시 에러문구 제거
    userName.addEventListener("keyup", (e) => {
      if (userName.value === "") {
        errorEmptyName.style.display = "block";
      } else {
        errorEmptyName.style.display = "none";
      }
    });
    return false;
  }

  // 이메일 유효성 체크
  if (!userEmailValStr || !userEmailValStr.includes("@")) {
    if (userEmail.value === "") {
      errorEmptyEmail.style.display = "block";
    } else {
      errorInvalidEmail.style.display = "block";
    }
    userEmail.focus();

    // 텍스트 입력 or '@' 포함여부에 따라 에러문구 제거
    userEmail.addEventListener("keyup", (e) => {
      // 값이 비어있는 경우
      if (userEmail.value === "") {
        errorEmptyEmail.style.display = "block";
        errorInvalidEmail.style.display = "none";
        // 이메일에 '@'가 들어가있지 않은 경우
      } else if (!userEmail.value.includes("@")) {
        errorEmptyEmail.style.display = "none";
        errorInvalidEmail.style.display = "block";
        // 그 외
      } else {
        errorEmptyEmail.style.display = "none";
        errorInvalidEmail.style.display = "none";
      }
    });
    return false;
  }

  // 내용 유효성 체크
  if (!contactContent.value) {
    errorEmptyContent.style.display = "block";
    contactContent.focus();
    // 텍스트 입력시 에러문구 제거
    contactContent.addEventListener("keyup", (e) => {
      if (contactContent.value === "") {
        errorEmptyContent.style.display = "block";
      } else {
        errorEmptyContent.style.display = "none";
      }
    });
    return false;
  }

  // 유효성 체크 통과시 전송성공 얼럿
  alert("전송되었습니다.");
};
