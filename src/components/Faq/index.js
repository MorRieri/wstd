const faqs = document.querySelectorAll('.js-faq')

faqs.forEach(faq => {
  const btns = faq.querySelectorAll('.js-faq-button')
  const isAccordion = faq.getAttribute('data-faq')

  btns.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      btn.classList.toggle('rotated');
      if (isAccordion && isAccordion === 'accordion') {
        btns.forEach(b => {
          if (b === btn) {
            b.nextElementSibling.classList.toggle('hide-faq');
          } else {
            b.nextElementSibling.classList.add('hide-faq');
          }
        })
      } else {
        btn.nextElementSibling.classList.toggle('hide-faq');
      }
    })
  })
});
