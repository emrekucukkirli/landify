document.querySelector(".toggle").onclick = function responsive() {
  var navbar = document.querySelector("nav");
  if (navbar.className === "container") {
    navbar.className += " responsive";
  } else {
    navbar.className = "container";
  }
  // $(".menu-section").slideToggle(700);
}
