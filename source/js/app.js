$(document).ready(function () {
  var errorClose = $('.error__close');

  (function validateForm() {
    var 
        form = $('.feedback__form'),
        pushForm = $(form).find('.button__inner-ok'),
        cancelForm = $(form).find('.button__inner-cancel');

        $(pushForm).on('click', function(e) {
          e.preventDefault();

          for (var i=0; i < form[0].length; i++) {
            var item = form[0][i];
            if($(item).attr('name')) {
              if(!item.value) {
                $(item).after(emptyInput($(item).attr('name'))); // добавляем всплывающее окно с пояснением
                 errorClose = $('.error__close');
              }
            }
          }

        })

  })();
 
  console.log(errorClose);


  function emptyInput(name) {
    if(name === "name") {
      return "<span class='error__message'>Напишите, пожалуйста, Ваше имя <a class='error__close' href='#'></a></span>";  
    }

    if(name === "mail") {
      return "<span class='error__message'>Напишите, пожалуйста, Вашу почту <a class='error__close' href='#'></a></span>";  
    }

    if(name === "message") {
      return "<span class='error__message'>Напишите цель Вашего обращения <a class='error__close' href='#'></a> </span>";  
    }
    
  }



  function parallax() {
    var 
        layer = $('.no-bg__container'),
        stap = 5;

    layer.map(function(key, value) {
      var 
          bottomPosition = ((window.innerHeight / 2) * (key + stap / 100)),
          widthPosition = w * (stap / 100);
          heightPosition = h * (stap / 100);

      $(value).css({
        'bottom': '-' + bottomPosition + 'px',
        'transform': 'translate3d(' + widthPosition + 'px, ' + heightPosition + 'px, 0)'
      });
    });


  }

  $(window).on('mousemove', function(e) {
    var
        mouse_dx = (e.pageX),
        mouse_dy = (e.pageY);
        w = (window.innerWidth / 2) - mouse_dx,
        h = (window.innerHeight / 2) - mouse_dy;

    parallax();
  });

  $(function () {
    var imgs = [];

    $.each($('*'), function() {
      var $this = $(this),
          img = $this.is('img'),
          background = $this.css('background-image'),
          video = $this.is('video source');

      if (background != 'none') {
        var path = background.replace('url("', '').replace('")', '');
        imgs.push(path);
      }

      if (img || video) { // || video
        var path = $this.attr('src');

        if (path) {
          imgs.push(path);
        }
      }

    }); // end each

    var percents = 1;

    for (var i = 0; i < imgs.length; i++) {
      if (imgs[i].indexOf('.mp4') + 1) {
          var image = $('<source>', {
            attr: {
              src: imgs[i]
            }
        });
      } else {
          var image = $('<img>', {
            attr: {
              src: imgs[i]
            }
          });
        }

        $(image).on('load', function() {
          setPercents(imgs.length, percents);
          percents++;
        });
    }


    function setPercents(total, current) {
      var percent = Math.ceil(current / total * 100);

      if (percent >= 3) {
        $('.preload__none').css('display', 'block');
        $('.loader').css('display', 'none');
      }

      $('.loader-bar').css({
        'stroke-width' : Math.ceil(percent / 10 + 5) + 'px'
      }).text(percent + '%');
    } // end setPercents

  }); // end preload



  var flipper = require('./common/flipp.js');
  flipper();



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

          console.log(currentId)

        reqLink.closest('.blog__fixed .menu__item').addClass('active')
                        .siblings().removeClass('active');
           
        // window.location.hash = currentId;

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

var googleMap = document.getElementById('google-map');

if(googleMap) {
  var options = {
    mapTypeControlOptions: {
      mapTypeIds: [ 'Koshara Alexandr']
    },
    center: new google.maps.LatLng(44.95650027, 34.10031259),
    zoom: 16,
    mapTypeId: 'Koshara Alexandr',
    scrollwheel: false
  };
  
  var map = new google.maps.Map(googleMap, options);
  var styledMapType = new google.maps.StyledMapType(styles, { name: 'Koshara Alexandr' });
  map.mapTypes.set('Koshara Alexandr', styledMapType);

  // добавил маркер на карту
  var imageMarker = 'assets/img/awesome/map_marker.png';
  var marker = new google.maps.Marker({
      position: new google.maps.LatLng(44.95691973, 34.10664126),
      icon: imageMarker
  });
  marker.setMap(map);
}

  



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







 $('.control__down').on('click', function(e) {
    e.preventDefault();
 });

  $('.control__up').on('click', function(e) {
    e.preventDefault();
 });







  // slider start
  (function sliderIt() {
    var
    slider = $('.js-slider'), //ok
  // Инфа
    image = slider.find('.slider__preview-img'),  //ok
    name = slider.find('.about__name-h2'),  //ok
    description = slider.find('.slider__skills-text'), //ok
    link = slider.find('.slider__link-show'), //ok
  // Кнопки
    prevButton = slider.find('.js-slider__prev'), //ok
    prevButtonImageCurrent = prevButton.find('.js-slider__control-image_current'), //ok
    prevButtonImageNext = prevButton.find('.js-slider__control-image_next'),  //ok
    nextButton = slider.find('.js-slider__next'), //ok
    nextButtonImageCurrent = nextButton.find('.js-slider__control-image_current'), //ok
    nextButtonImageNext = nextButton.find('.js-slider__control-image_next'), //ok
  // Слайды
    items = slider.find('.slider__item'),
    current = 0,
    currentSlideItem,
    prevSlideItem,
    nextSlideItem;

  function validate(num) {
    var result;

    if (num < 0)
      result = items.length - 1;
    else if (num > items.length - 1)
      result = 0;
    else
      result = num;

    return result;
  }

  function calcSlides() {
    var
      prev = validate(current - 1),
      next = validate(current + 1);

    currentSlideItem = items.eq(current);
    prevSlideItem = items.eq(prev);
    nextSlideItem = items.eq(next);
  }

  function init() {
    calcSlides();

    changeSlide();
  }

  function changeBackground(elem, background) {
    elem.css('background-image', 'url("' + background + '")');

    return elem;
  }

  function changeSlideControl(next, current, background, direction) {
    if (direction) {
      next.css('top', '100%')
    }

    changeBackground(next, background).animate({
      top: '0%'
    }, function () {
      $(this).css('top', direction ? '100%' : '-100%');
    });

    current.animate({
      top: direction ? '-100%' : '100%'
    }, function () {
      changeBackground($(this), background).css('top', '0');
    });
  }

  function textChange(elem, text, animationName) {
    var
      letters = text.split(''),
      str = '<span style="display: inline-block;">',
      animationDelay = 0;

    letters.forEach(function (letter, id) {
      animationDelay++;

      if (letter === ' ') {
        str += '&nbsp;</span><span style="display: inline-block;">';
      } else {
        str += '<span id="letter-' + id + '" class="' + animationName
          + '" style="display: inline-block; animation-delay:'
          + animationDelay / 20
          + 's">'
          + letter
          + '</span>';
      }

    });
    str += '</span>';
    elem.html(str);
  }

  function changeSlide() {
    // Смена главного изображения
    image.fadeOut(300, function () {
      changeBackground($(this), currentSlideItem.data('img')).fadeIn();
    });

    // Смена текста
    textChange(name, currentSlideItem.data('name'), 'bounceIn');
    textChange(description, currentSlideItem.data('description'), 'bounceIn');
    link.attr('href', currentSlideItem.data('link'));

    // Смена слайдов в контролах
    changeSlideControl(prevButtonImageNext, prevButtonImageCurrent, prevSlideItem.data('img'));
    changeSlideControl(nextButtonImageNext, nextButtonImageCurrent, nextSlideItem.data('img'), true);
  }

  function nextSlide() {
    current = validate(++current);
    calcSlides();
    slider.trigger('changeSlide');
  }

  function prevSlide() {
    current = validate(--current);
    calcSlides();
    slider.trigger('changeSlide');
  }

  $(window).on('load', init());
  slider.on('changeSlide', changeSlide);
  nextButton.click(nextSlide);
  prevButton.click(prevSlide);
  })();

});


