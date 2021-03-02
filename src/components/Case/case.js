let openCase = document.querySelectorAll('.js-openCase');

openCase.onclick = function () {
  let target = this.getAttribute('data-case');
  console.log(target);
  document.getElementById(target).classList.add("active");
};

let closeCase = document.querySelectorAll('.js-closeCase');

closeCase.onclick = function () {
  document.getElementsByClassName('.case__wrapper').classList.remove("active");
};
