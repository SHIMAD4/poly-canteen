const btns = document.querySelectorAll('.add');
const block = document.querySelector('.basket__wrapper');
const product = document.querySelector('.description');
const clearBtn = document.querySelector('.basket__reset');

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
      block.insertAdjacentHTML('beforeend', cartTemp)
    }

  })
  clearBtn.addEventListener('click', (event) => {
    if (event.target.closest('.basket__wrapper')) {
      const itemInBusketAll = block.querySelectorAll('.temp')
      for(let i = 0; i < itemInBusketAll.length; i++) {
        itemInBusketAll[i].remove()
      }
    }
  })
})