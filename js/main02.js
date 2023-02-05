onload = function () {
  const elTitle = document.querySelector(".main-product-title");
  const elEx = document.querySelector(".main-exhibition-wrap");
  const elFooLe = document.querySelector(".footer-top-left");

  window.addEventListener("scroll", function () {
    /* console.log(window.pageYOffset); */
    if (window.pageYOffset > 2700) {
      elFooLe.style = "opacity: 1;";
    } else if (window.pageYOffset > 2000) {
      elEx.style = "opacity: 1;";
    } else if (window.pageYOffset > 400) {
      elTitle.style = "opacity: 1;";
    }
  });
};

/* 이미지 슬라이드 and 프로그래스바 */
function init() {
  var swiper = new Swiper(".visual-wrap", {
    /* 이미지 페이드 */
    spaceBetween: 30,
    effect: "fade",
    speed: 1000,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      /* type: "progressbar", */
    },
  });
}
window.addEventListener("load", init);

/* 사진 스크롤 애니메이션??? */
/* ::after{
  width:100%; height:100px;
  background-color: #555;
  position: absolute;
  left:0; top:0; 
  width:0;
  animation: 111 ;
}

@keyframes 111 {
  0%{
    left:0; width:0;
  }
  50%{width:100%}
  100%{
    left:auto;
    right:0;
    width:0;
  }
} */
