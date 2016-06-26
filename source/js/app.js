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
       }
       

})();
var count = 0;
  $(window).scroll(function() {
    var
      wScroll = $(window).scrollTop(),
      menu = $('.blog__static .menu__list'),
      sidebar = $('.blog__static .menu__wrapper '),
      stickyStart = sidebar.offset().top,
      menuClone = sidebar.clone(),
      postCaption = $('.post__caption'),
      menuActive = $('.menu__list .menu__item'),
      postSelect = 350,
      fixedSidebar = $('.blog__fixed .blog__left-col');
     console.log(menuActive);
      for (var i = 0; i < postCaption.length; i++) {
        if ( wScroll >= postCaption[i].offsetTop - postSelect && wScroll < postCaption[i].offsetTop ) {
          // console.log(postCaption[i]);
          if(!menuActive[i].classList.contains("active")) {
            $(menuActive).removeClass('active');
            $(menuActive[i]).addClass('active');
          }
        }



        // // console.log(postCaption[count].offsetTop, "=======", wScroll + 300);
        // if((wScroll + postSelect) > postCaption[count].offsetTop && wScroll < postCaption[count+1].offsetTop) {
        //   console.log(postCaption[count]);
        //   // console.log(postCaption[count+1].offsetTop - postCaption[count].offsetTop);
        //   if(wScroll + nextSelect > postCaption[count+1].offsetTop) {
        //     count++
        //     console.log(count, "===============");
        //   }
        // }
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

