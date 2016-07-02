'use strict'

module.exports = function() {
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
  };

