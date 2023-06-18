function myHomePage() {
  window.location.href = "index.html";
}

function myAboutPage() {
  window.location.href = "about.html";
}

// $(window).scroll(function () {
//   $("navigation").toggleClass("scrolled", $(this).scrollTop() > 500);
// });
document.addEventListener("DOMContentLoaded", documentScroll, false);

function documentScroll() {
  window.addEventListener("scroll", (event) => {
    var scroll = window.scrollY;
    if (scroll > 96) {
      //debugger;
      document.getElementById("navbar").classList.add("scrolled");
    } else {
      document.getElementById("navbar").classList.remove("scrolled");
    }
  });
}

function bodyScroll() {
  var navbarToggler = document.querySelector(".navbar-toggler");
  var body = document.body;

  navbarToggler.addEventListener("click", function () {
    body.classList.toggle("overflow");
  });
}

function myP1() {
  window.location.href = "neemacademy.html";
}

function myP2() {
  window.location.href = "contentder.html";
}

function myP3() {
  window.location.href = "safeflick.html";
}

document.addEventListener("DOMContentLoaded", function () {
  documentScroll();
  bodyScroll();
});
