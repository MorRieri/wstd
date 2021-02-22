const collapseButton = document.querySelectorAll('.js-collapse-button')

collapseButton.forEach(item => {
  const parentCollapseButton = item.parentNode.parentNode

  if (!parentCollapseButton) return;

  item.addEventListener('click', (e) => {
    e.preventDefault()
    parentCollapseButton.classList.toggle('hide-collapse')
  }, false)
})
