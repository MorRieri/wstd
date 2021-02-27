const videos = document.querySelectorAll('.js-video')

videos.forEach(video => {
  const btns = video.querySelectorAll('.js-video-button')
  const iframe = video.querySelector('.js-video-iframe')

  if (!iframe) return;

  btns.forEach(btn => {
    const attr = btn.getAttribute('data-id')
    btn.children[0].src=`http://i3.ytimg.com/vi/${attr}/maxresdefault.jpg`

    btn.addEventListener('click', e => {
      e.preventDefault()

      btns.forEach(b => {
        if (b === btn) {
          b.classList.add('active')
          iframe.src = `https://www.youtube.com/embed/${attr}?rel=0&amp;showinfo=0&amp;autoplay=0`;
        } else {
          b.classList.remove('active')
        }
      })
    })
  })

  btns[0].click();
})
