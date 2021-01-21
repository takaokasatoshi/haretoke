

// ----------------------------sildeshow--------------------------
  var slide1 = new Swiper('.slide1', {
   loop: true,
   effect: 'fade',
   slidesPerView: 1,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
    },
  });
  var slide2= new Swiper('.slide2', {
   loop: true,
   effect: 'fade',
   slidesPerView: 1,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
    },
  });


  // ------------------------------------ハンバーガー---------------------------
  document.addEventListener('DOMContentLoaded',function(){
document.getElementById("menuButton").addEventListener("click",function() {
  this.classList.toggle("active");
  document.getElementById("nav").classList.toggle("active");
});
});


// --------------------------------------スクロールしたらボタン表示----------------
$(function () {
  var topBtn = $("#menuButton");
  topBtn.hide();
  //スクロールが380pxに達したらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 380) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });
  $(window)
});
$(function () {
  var topBtnpc = $("#menuButton-pc");
  topBtnpc.hide();
  //スクロールが380pxに達したらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 380) {
      topBtnpc.fadeIn();
    } else {
      topBtnpc.fadeOut();
    }
  });
  $(window)
});


const targetElement = document.querySelectorAll(".animationTarget");

document.addEventListener("scroll", function () {
  for (let i = 0; i < targetElement.length; i++) {
    const getElementDistance =
      targetElement[i].getBoundingClientRect().top +
      targetElement[i].clientHeight * 0.6;
    if (window.innerHeight > getElementDistance) {
      targetElement[i].classList.add("show");
    }
  }
});

// -------------------------------スクロールトップ----------------------------------------

$(function () {
  var topBtn = $("#page-top");
  topBtn.hide();
  //スクロールが100に達したらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });
  //スクロールしてトップ
  topBtn.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      0
    );
    return false;
  });
});

// --------------------------------------loading---------------------------

//  window.onload = function () {
//         const spinner = document.getElementById("loading");
//         spinner.classList.add("loaded");
//       };