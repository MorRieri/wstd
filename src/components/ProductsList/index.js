const collapseButton = document.querySelectorAll('.js-collapse-button')

collapseButton.forEach(item => {
  const parentCollapseButton = item.parentNode.parentNode

  if (!parentCollapseButton) return;

  item.addEventListener('click', (e) => {
    e.preventDefault();
    item.classList.toggle('rotated');
    parentCollapseButton.classList.toggle('hide-collapse');

    if (item.classList.contains("rotated") == true) {
      document.getElementById("js-collapse-text").textContent = "Развернуть"
    }
    else {
      document.getElementById("js-collapse-text").textContent = "Свернуть"
    }

  }, false)
});
//
// if (collapseButton.classList.contains("rotated") === true) {
//   collapseButton.textContent = "Группа проектов"
// };
