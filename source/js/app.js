$(document).ready(function () {

    $('.menu__link').on('click', function(e){
    e.preventDefault();

    showPost($(this).attr('href'), true);
  });


  $(window).scroll(function() {
    checkBlogSection();
    showSkill();
  }); // -> end scroll section

  function showPost(section, isAnimate) {  
    var
      direction = section.replace(/#/, ''),
      reqSection = $('.blog__content-article').filter('[data-section="' + direction + '"]');
      reqSectionPos = reqSection.offset().top;

      if (isAnimate) {
        $('body, html').animate({scrollTop: reqSectionPos}, 500);
      } else {
        $('body, hrml').scrollTop(reqSectionPos);
      }
  };


  function checkBlogSection() {
    $('.blog__content-article').each(function(){
      var
        $this = $(this), // все статьи
        topEdge = $this.offset().top - 200, // данная статья - 200 от начала документа до неё
        bottomEdge = topEdge + $this.height(), // к точке начала статьи добавляем
        menu = $('.blog__static .menu__list'),
        sidebar = $('.blog__static .menu__wrapper'), 
        stickyStart = sidebar.offset().top,
        menuClone = sidebar.clone(),
        fixedSidebar = $('.blog__fixed .blog__left-col'),
        wScroll = $(window).scrollTop();
        // activeDataset = $(this)[0].dataset.section,
        // activeDirection = activeDataset.replace(/#/, ''),
        


      if (topEdge < wScroll && bottomEdge > wScroll) {
        var
          currentId = $this.data('section'),
          reqLink = $('.menu__link').filter('[href="#' + currentId + '"]');


        reqLink.closest('.blog__fixed .menu__item').addClass('active')
                        .siblings().removeClass('active');
           
        window.location.hash = currentId;

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
  };



  var styles = [
  {
    featureType: 'water',
    elementType: 'all',
    stylers: [
      { hue: '#4369aa' },
      { saturation: -3 },
      { lightness: -39 },
      { visibility: 'on' }
    ]
  },{
    featureType: 'landscape',
    elementType: 'all',
    stylers: [
      { hue: '#f2f2f2' },
      { saturation: -100 },
      { lightness: 54 },
      { visibility: 'on' }
    ]
  },{
    featureType: 'road',
    elementType: 'all',
    stylers: [
      { hue: '#eaeaea' },
      { saturation: -100 },
      { lightness: 77 },
      { visibility: 'on' }
    ]
  },{
    featureType: 'road.highway',
    elementType: 'all',
    stylers: [
      { hue: '#d6d6d6' },
      { saturation: -100 },
      { lightness: 55 },
      { visibility: 'on' }
    ]
  },{
    featureType: 'road.arterial',
    elementType: 'all',
    stylers: [
      { hue: '#ffffff' },
      { saturation: -100 },
      { lightness: 100 },
      { visibility: 'on' }
    ]
  },{
    featureType: 'road.local',
    elementType: 'all',
    stylers: [
      { hue: '#eaeaea' },
      { saturation: -100 },
      { lightness: -8 },
      { visibility: 'on' }
    ]
  },{
    featureType: 'poi.park',
    elementType: 'all',
    stylers: [
      { hue: '#f2f0e8' },
      { saturation: -35 },
      { lightness: 68 },
      { visibility: 'on' }
    ]
  }
];
var options = {
  mapTypeControlOptions: {
    mapTypeIds: [ 'Koshara Alexandr']
  },
  center: new google.maps.LatLng(44.95650027, 34.10031259),
  zoom: 16,
  mapTypeId: 'Koshara Alexandr'
};
var div = document.getElementById('google-map');
var map = new google.maps.Map(div, options);
var styledMapType = new google.maps.StyledMapType(styles, { name: 'Koshara Alexandr' });
map.mapTypes.set('Koshara Alexandr', styledMapType);

//добавил маркер на карту
var imageMarker = 'assets/img/awesome/map_marker.png';
var marker = new google.maps.Marker({
    position: new google.maps.LatLng(44.95691973, 34.10664126),
    icon: imageMarker
});
marker.setMap(map);


  (function() {
    var
      doc = document,
      auth = $("#auth"),
      flipper = $("#flipper"),
      flipperHelp = $("#flipperHelp"),
      returnBack = $("#returnBack");

   if(auth) {
      auth.on('click', function () {
       flippWelcome("none");
     });

      returnBack.on('click', function(e) {
        e.preventDefault();
        flippWelcome("flex");
      });
    };


    function flippWelcome(disp) {
      flipper.toggleClass("rotate");
        auth.toggleClass("visible");
        setTimeout(function () {
         flipperHelp.css("display" , disp);
       }, 200);
    }
  })();



  (function(){
    var
        mainNav = $("#mainNav"),
        mainPopup = $("#popup__nav"),
        popupClose = $("#popup__close");

    if(mainNav) {
      mainNav.on('click', function(e) {
        e.preventDefault();
        popupAbout();
      });
    }

    if(popupClose) {
      popupClose.on('click', function(e) {
        e.preventDefault();
        popupAbout();

      });
    }

    function popupAbout() {
      mainPopup.toggleClass("not-visible");
      mainNav.toggleClass("not-visible");
    };

  })();








  // появление скиллов
    function showSkill() {
    $('.skill__item').each(function(){
      var
        $this = $(this),
        winHeight = $(window).height() - 200, 
        topEdge = $this.offset().top - winHeight,
        bottomEdge = topEdge + $this.height(),
        wScroll = $(window).scrollTop();

      if (topEdge < wScroll && bottomEdge > wScroll) {
        var skillBlock = $this.find('.sector')
        skillBlock.each(function(item, val){
          val.classList.remove('null__stroke');
        })
      }
    });
  };
  // конец скиллов



});

