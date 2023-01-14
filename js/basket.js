const body = document.querySelector('body');
const basket = document.querySelector('.background');
const block = document.querySelector('.basket__wrapper');
const techBox = document.querySelector('.tech_box')

const btns = document.querySelectorAll('.add');
const product = document.querySelector('.description');
const clearBtn = document.querySelector('.basket__reset');
const nextBtn = document.querySelector('.basket__next')
const backBtn = document.querySelector('.basket__back')

const form = document.querySelector('.basket__form')


window.addEventListener('click', (event) => {
  if (event.target.classList.contains('header__basket') || event.target.classList.contains('js_header_busket_icon') || event.target.classList.contains('js_header_busket_svg')  || event.target.classList.contains('js_header_busket_path')) {
    if (basket.classList.contains('visually-hidden')) {
      body.style.overflow = 'hidden'
      basket.classList.remove('visually-hidden')
      calcPrice()
    } else {
      basket.classList.add('visually-hidden')
    }
  }

  if (event.target.classList.contains('background')) {
    basket.classList.add('visually-hidden')
    body.style.overflow = 'auto'
  }

  if (event.target.dataset.action === 'plus') {
    const tempCount = event.target.closest('.temp__count')
    const counter = tempCount.querySelector('[data-counter]')
    counter.innerText = ++counter.innerText
    calcPrice()
  } else if (event.target.dataset.action === 'minus') {
    const tempCount = event.target.closest('.temp__count')
    const counter = tempCount.querySelector('[data-counter]')
    if (parseInt(counter.innerText) > 1) {
      counter.innerText = --counter.innerText
      calcPrice()
    }
  }

  function calcPrice() {
    const cartItems = document.querySelectorAll('.temp__discription');
    const lastPrice = document.querySelectorAll('.basket__title--finish')
    let totalPrice = 0
    cartItems.forEach(el => {
      const priceEl = el.querySelector('.temp__price')
      const amountEl = el.querySelector('.temp__counter')
      const currentPrice = parseInt(priceEl.innerText) * parseInt(amountEl.innerText)
      totalPrice += currentPrice
    })
    lastPrice[0].innerText = `Итого: ${totalPrice} руб.`
    lastPrice[1].innerText = `Итого: ${totalPrice} руб.`
    clearBtn.addEventListener('click', (event) => {
      if (event.target.closest('.basket__wrapper')) {
        lastPrice[0].innerText = `Итого: 0 руб.`
        const itemInBusketAll = block.querySelectorAll('.temp')
        for(let i = 0; i < itemInBusketAll.length; i++) {
          itemInBusketAll[i].remove()
        }
      }
    })
  }

  nextBtn.addEventListener('click', () => {
    block.classList.add('visually-hidden')
    form.classList.remove('visually-hidden')
    calcPrice()
  })
  
  backBtn.addEventListener('click', () => {
    block.classList.remove('visually-hidden')
    form.classList.add('visually-hidden')
    calcPrice()
  })
})

btns.forEach(el => {
  el.addEventListener('click', () => {
    const card = el.parentElement
    const productInfo = {
      id     : card.id,
      imgSrc : card.querySelector('.card__photo').getAttribute('src'),
      title  : card.querySelector('.card__title').innerText,
      price  : card.querySelector('.description').querySelector('.price').innerText,
      weight : card.querySelector('.description').querySelector('.weight').innerText,
      count  : card.querySelector('[data-counter]').innerText,
    }
    const itemInBusket = block.querySelector(`[id='${productInfo.id}']`)
    
    if (itemInBusket) {
      const counterElem = itemInBusket.querySelector('[data-counter]')
      counterElem.innerText = parseInt(counterElem.innerText) + parseInt(productInfo.count)
    } else {
      const cartTemp = `
      <div class="temp" id="${productInfo.id}">
        <img class="temp__image" src="${productInfo.imgSrc}" alt="${productInfo.alt}">
        <div class="temp__discription">
          <div>
              <div class="temp__title">${productInfo.title}</div>
              <div class="temp__pw">
              <div class="temp__price">${productInfo.price}</div>
              <div class="temp__weight">${productInfo.weight}</div>
            </div>
          </div>
          <div class="temp__count">
            <button class="btn temp__plus" data-action="plus">+</button>
            <p class="temp__counter" data-counter="">1</p>
            <button class="btn temp__minus" data-action="minus">-</button>
          </div>
        </div>
      </div>`;
      techBox.insertAdjacentHTML('beforeend', cartTemp)
    }
  })
})