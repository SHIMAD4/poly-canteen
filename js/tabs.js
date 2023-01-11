let tabcontent = document.querySelectorAll(".product__list"),
    triggers   = document.querySelectorAll(".js-trigger"),
    allbtn   = document.querySelector(".all")

function openTab(evt, nameOfTab) {

  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  for (i = 0; i < triggers.length; i++) {
    triggers[i].className = triggers[i].className.replace(" btn-active", "");
  }

  if (nameOfTab.id === 'baking' || nameOfTab.id === 'sweets' || nameOfTab.id === 'drinks' || nameOfTab.id === 'prepared') {
    allbtn.style.display = 'none'
  }else {
    allbtn.style.display = 'block'
  }

  nameOfTab.style.display = "flex";
  evt.currentTarget.className += " btn-active";
}