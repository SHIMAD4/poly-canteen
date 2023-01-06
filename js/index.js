const link = 'https://goo.gl/maps/guW9bTeUjtJ5967BA',
      span = document.querySelector('.js__link')

span.addEventListener('click', () => {
  window.open(link)
})