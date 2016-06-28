$(document).ready(function () {
    (function() {
     var doc = document,
     auth = doc.querySelector("#auth"),
     flipper = doc.querySelector("#flipper"),
     flipperHelp = doc.querySelector("#flipperHelp"),
     returnBack = doc.querySelector("#returnBack");

     if(auth) {
      auth.addEventListener("click", function () {
       flipper.classList.add("rotate");
       auth.classList.toggle("visible");
       setTimeout(function () {
         flipperHelp.style.display = "none";
       }, 200);
     });

      returnBack.addEventListener("click", function(e) {
        e.preventDefault();
        flipper.classList.remove("rotate");
        auth.classList.toggle("visible");
        setTimeout(function () {
         flipperHelp.style.display = "flex";
       }, 200);
      });
    };
  })();


  (function(){
    var mainNav = document.querySelector("#mainNav");
    var  mainPopup = document.querySelector("#popup__nav"),
    popupClose = document.querySelector("#popup__close");

    if(mainNav) {
      mainNav.addEventListener("click", function(e) {
        e.preventDefault();
        mainPopup.classList.toggle("not-visible");
        mainNav.classList.add("not-visible");
      });
    }

    if(popupClose) {
      popupClose.addEventListener("click", function(e) {
        e.preventDefault();
        mainPopup.classList.toggle("not-visible");
        mainNav.classList.remove("not-visible");
      });
    }

  }());







$(window).scroll(function() {
  var
  wScroll = $(window).scrollTop(),
  menu = $('.blog__static .menu__list'),
  sidebar = $('.blog__static .menu__wrapper '),
  stickyStart = sidebar.offset().top,
  menuClone = sidebar.clone(),
  postCaption = $('.post__caption'),
  menuActive = $('.menu__list .menu__item'),
  postSelect = 100,
  fixedSidebar = $('.blog__fixed .blog__left-col');
  var len = postCaption.length;


  for (var i = 0; i < postCaption.length; i++) {
    if ( wScroll + postSelect >= postCaption[i].offsetTop  && wScroll < postCaption[i].offsetTop ) {

      if(!menuActive[i].classList.contains("active")) {
        $(menuActive).removeClass('active');
        $(menuActive[i]).addClass('active');
      }
    }

  }

  if (wScroll >= stickyStart) {

    if (!fixedSidebar.find('.menu__wrapper').length) {
      fixedSidebar.append(menuClone);
      menu.hide();
    }


  } else {
    fixedSidebar.find('.menu__wrapper').remove();
    menu.show();
  }

});
});

