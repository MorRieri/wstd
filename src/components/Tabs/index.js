const tabs = document.querySelectorAll('.js-tabs')

tabs.forEach(item => {
  const tabs = item.querySelectorAll('.js-tabs-tab')
  const panels = item.querySelectorAll('.js-tabs-panel')

  if (!tabs && !panels) return;
  tabs.forEach((t, index) => {
    t.addEventListener('click', e => {
      e.preventDefault()

      if  (!panels[index]) return;

      tabs.forEach(tab => {
        if (t === tab) {
          tab.classList.add('active')
        } else {
          tab.classList.remove('active')
        }
      })

      panels.forEach((p, idx) => {
        if (index === idx) {
          p.classList.remove('hide-tabs-panel')
        } else {
          p.classList.add('hide-tabs-panel')
        }
      })
    })
  })

  tabs[0].click()
})
