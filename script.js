 var timer = setInterval(function () {
    var e = document.getElementById("loading");
    e.innerHTML.length > 3
      ? (e.innerHTML = "")
      : (e.innerHTML = e.innerHTML + ".");
  }, 2000);
  function docReady(e) {
    "complete" === document.readyState ||
    "interactive" === document.readyState
      ? setTimeout(e, 1)
      : document.addEventListener("DOMContentLoaded", e);
  }
  docReady(function () {
    clearInterval(timer),
      (document.getElementById("waiting").style.display = "none");
  });
//ส่วนที่ 1 
window.addEventListener("load", function() {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; // class "loader hidden"
});


function closeMe(){
   setTimeout(window.close, 0);
    liff.closeWindow();
}
                        

