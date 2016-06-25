(function() {
   var doc = document,
       auth = doc.querySelector("#auth"),
       flipper = doc.querySelector("#flipper"),
       flipperHelp = doc.querySelector("#flipperHelp"),
       returnBack = doc.querySelector("#returnBack");


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
})();