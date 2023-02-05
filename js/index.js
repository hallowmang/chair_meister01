$("body").prepend("<header>");
$("body").append("<footer>");

$("header").load("./inc.html header", head);
$("footer").load("./inc.html footer");

const Header = document.querySelector("header");
const Bottom = document.querySelector("header > .header-top > span");
console.log(Header);
console.log(Bottom);

let idx = localStorage.idx;

function head() {
  $(".nav-bottom>ul>li").eq(idx).addClass("on");

  $(".logo").click(function () {
    localStorage.clear();
  });

  $(".nav-bottom>ul>li").click(function () {
    let idx = $(this).index();

    localStorage.idx = idx;

    /* localStorage.setItem('idx',2);  //idx값 수정
    localStorage.getItem('idx');  // idx값 가져오기

    localStorage.removeItem('idx'); //삭제
    localStorage.clear(); //로컬스토리지 모두 삭제 */
  });
}

function headerActive() {
  window.addEventListener("scroll", () => {
    if (window.pageYOffset == 0) {
      // headBar.classList.remove('active');
      // moHeadBar.classList.remove('m_active');
      // moMenuBar.classList.remove('m_menu_active');
      Header.classList.remove("active");
      Bottom.classList.remove("on");
    } else {
      // headBar.classList.add("active");
      // moHeadBar.classList.add("m_active");
      Header.classList.add("active");
      Bottom.classList.add("on");
    }
  });
}
headerActive();
