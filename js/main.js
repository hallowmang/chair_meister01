/* 스크롤 */
// const elTitle = document.querySelector(".main-product-title");

const line01 = document.querySelector('.main-product-container')

const line02 = document.querySelector('.main-quick-container')
// line03 = document.querySelector('.main-exhibition-container');








window.addEventListener("scroll", function () {
  // elTitle.classList.add("on");
  console.log(window.pageYOffset,'111')
  // console.log(elMain.scrollHeight,'2222')

  
  if(window.pageYOffset > 1000){
    line02.style = "transform: translateY(-50px); transition: 1s ease-in;"
  }
  else if(window.pageYOffset > 200){
    line01.style = "transform: translateY(-50px); transition: 1s ease-in;"
  }
  // else if(window.pageYOffset > 1700){
  //   line03.style = "border: 5px solid red;"
  // }



});

// elTitle.forEach(function (title, key) {});

