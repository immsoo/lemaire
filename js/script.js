document.addEventListener(`DOMContentLoaded`, function () {
  // AOS
  // 마우스 휠 헤더 이벤트
  // .header_area 가 휠이 내려갈때는 안보이다가 올라갈 때 보이게끔 설정
  // scrollEvent 이라는 클래스 추가 제거로 저절
  window.addEventListener(`wheel`, (event) => {
    const headerArea = document.querySelector(`.header_area`);

    if (event.deltaY > 0) {
      // wheel down

      headerArea.classList.remove(`scrollEvent`);
    } else {
      // wheel up
      headerArea.classList.add(`scrollEvent`);
    }
  });
  // body 배경색 조정
  // 스크롤 이벤트 offsetTop 값 활용
  const sec2 = document.querySelector(`.sec_2`);
  const sec3 = document.querySelector(`.sec_3`);

  window.addEventListener(`scroll`, function () {
    const sec2OffsetTop = sec2.offsetTop;
    const sec3OffsetTop = sec3.offsetTop;

    const scrollTopData = window.scrollY;

    console.log(scrollTopData);

    const bodyBg = document.querySelector(`body`);

    // 스크롤 상단값이 sec2의 상단위치보다 크고 스크롤 상단값이  sec3의 상단 위치값보다 작다면 body에 클래스 추가
    if (scrollTopData > sec2OffsetTop && scrollTopData < sec3OffsetTop) {
      bodyBg.classList.add(`bg`);
    } else {
      bodyBg.classList.remove(`bg`);
    }
  });

  // swiper(sec_3)
  // sub_menu(tap)
  // 마우스 올리면 카테고리에 맞는 탭 활성화

  // 상단이동 버튼
  // 작은 그리드에서 햄버거 버튼 누르면 메인 메뉴 출력
});
