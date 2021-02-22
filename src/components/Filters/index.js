const filters = document.querySelectorAll('.js-filters')

filters.forEach(f => {
  const fTabs = f.querySelectorAll('.js-filters-tab')
  const fElements = f.querySelectorAll('.js-filters-element')

  if (!fTabs && !fElements) return;

  fTabs.forEach(tab => {
    const tag = tab.getAttribute('data-filter')

    if (!tag) return;

    tab.addEventListener('click', e => {
      e.preventDefault()
      fTabs.forEach(t => {
        if (t === tab) {
          t.classList.add('active')
        } else {
          t.classList.remove('active')
        }
      })

      fElements.forEach(el => {
        const tags = el.getAttribute('data-filter').split(',')
        if (tag === 'all') {
          el.classList.remove('hide-filter')
          return;
        }
        if (tags.includes(tag)) {
          el.classList.remove('hide-filter')
        } else {
          el.classList.add('hide-filter')
        }
      })


    })
  })

  fTabs[0].click()
})
