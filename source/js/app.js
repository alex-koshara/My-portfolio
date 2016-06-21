(function() {
   var doc = document,
       auth = doc.querySelector("#auth"),
       flipper = doc.querySelector("#flipper"),
       flipperHelp = doc.querySelector("#flipperHelp"),
       returnBack = doc.querySelector("#returnBack");

      console.log(auth,flipper, returnBack);

       auth.addEventListener("click", function () {
         flipper.classList.add("rotate");
         setTimeout(function () {
           flipperHelp.style.display = "none";
         }, 200);
       });

       returnBack.addEventListener("click", function(e) {
        e.preventDefault();
        flipper.classList.remove("rotate");
        setTimeout(function () {
           flipperHelp.style.display = "flex";
         }, 200);
       });
})();