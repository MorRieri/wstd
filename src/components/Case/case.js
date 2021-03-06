$('.js-openCase').click(function (e) {
  e.stopPropagation();
  $("#case").fadeToggle('fast');
  $('html').toggleClass('noscroll');
});

$('.js-closeCase').click(function () {
  closeCase();
});

function closeCase() {
  $("#case").fadeOut('fast');
  $('html').removeClass('noscroll');
  $('body').removeClass('noscroll');
};

$('.js-openNav').click(function(e) {
  e.stopPropagation();
  $(".case__nav-list").toggleClass('active');
});

$('.case__nav-link').click(function (e) {
  e.stopPropagation();
  $(".case__nav-list").toggleClass('active');
});

$('body').click(function () {
  $(".case__nav-list").removeClass('active');
});

//Navigation
let mainNavLinks = document.querySelectorAll(".article__aside-link");
let mainSections = document.querySelectorAll(".article__section");
let lastId;
let cur = [];

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;
  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

mainNavLinks.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    let target = document.querySelector(event.target.hash);
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});
