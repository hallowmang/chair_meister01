$("body").prepend("<header>");
$("body").append("<footer>");

$("header").load("./inc.html header", head);
$("footer").load("./inc.html footer", bottom);

let Header;
let Bottom;
let NavUl;
let Bg;
let Logo;
let Icon;
let IconMenu;

let idx = localStorage.idx;

function bottom() {
  Logo = document.querySelector("h1>a>img");
  Bottom = document.querySelector("header > .header-bottom > nav");
  NavUl = document.querySelector("ul > li")
  Icon = document.querySelector(".header-util-box > .language >i");
  IconMenu = document.querySelector(".header-util-box > .menu >i");
  Bg = document.querySelector(".bg");
  console.log(NavUl)
}

function head() {
  Header = document.querySelector("header");
  
  

  

  NavUl.addEventListener("mouseover", (event) => {
    Bg.style.color = 'red'
  });

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
      Header.classList.remove("active");
      Bottom.classList.remove("on");
      Logo.src = "./Img/logo/logo.png";
      Icon.classList.remove("icon-color");
      IconMenu.classList.remove("icon-color");
    } else {
      Header.classList.add("active");
      Bottom.classList.add("on");
      Logo.src = "./Img/logo/logo_c.png";
      Icon.classList.add("icon-color");
      IconMenu.classList.add("icon-color");
    }
  });
}

function background() {
  Bottom = document.querySelector("header > .header-bottom > nav");
  Bottom.addEventListener("mouseover", () => {
    console.log("sdifnwe");
  });
}

headerActive();
