const IS_MOBILE = window.innerWidth <= 800
const IS_TOUCH = 'ontouchstart' in window || navigator.msMaxTouchPoints > 0

let text = [
  'Independent Publishing Fair Leipzig, March 19, 2022.',
  '<span class="layer2">It’s a book</span>, it’s a word that you choose, it’s a language in use.',
  'Opening hours 12 pm – 9 pm, symposium 1 pm – 6 pm.',
  'Please be welcome to visit our marketplace and symposium at the <span class="layer2">Academy of Fine Arts Leipzig, Wächterstraße 11, 04107 Leipzig.</span> Join the digital event right here soon! (<a target="_blank"  href="https://itsabook.de">www.itsabook.de.</a>)',
  'Submit your books until <span class="layer2">February 14</span>. Publishers to <a class="mail" href="mailto:publishers@itsabook.de">publishers@itsabook.de</a> and students to <a class="mail" href="mailto:students@itsabook.de">students@itsabook.de</a>.',
  'Kindly supported by Support-Büro der HGB Leipzig and DZA Druckerei zu Altenburg.',
  'Follow us on <a target="_blank" href="https://www.instagram.com/itsabook_leipzig/">Instagram</a> to stay updated.'
]
let textElements = [];
let container = document.querySelector('.container')
let mainText = document.querySelector('.mainText')

let colors = ['#01956e', '#fe601e', '#ff8657', '#0047f5', '#008cc8', '#ffed3b']

let cursor = document.getElementById('cursor')

window.addEventListener('mousemove', e => {
  if (e.target.tagName.toLowerCase() === 'a') {
    cursor.classList.add('pointer')
  } else {
    cursor.classList.remove('pointer')
  }
  console.log(cursor.getBoundingClientRect().height)
  cursor.style.top = e.clientY + 'px'
  cursor.style.left = e.clientX + 'px'
})

text.forEach(t => {
  let text = document.createElement('span')
  text.classList.add('text')
  let spacer = document.createElement('span')
  spacer.classList.add('spacer')

  text.innerHTML = t + ' '
  spacer.innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
  mainText.appendChild(text)
  mainText.appendChild(spacer)
  textElements.push(text);

  if (!IS_TOUCH) {
    text.addEventListener('mouseenter', e => {
      if (!text.classList.contains('hover-style-1')) {
        toggleHightlight(text)
      }
    })
    text.addEventListener('mouseleave', e => {
      toggleHightlight(text)
    })
  }
})
if (IS_TOUCH) {
  window.addEventListener('touchstart', e => {
    console.log(e)
    if (e.target.tagName.toLowerCase() === 'span') {
      toggleHightlight(e.target)
    }
  })
}

toggleHightlight(textElements[Math.floor(Math.random()*text.length)])
toggleHightlight(textElements[Math.floor(Math.random() * text.length)])




function toggleHightlight (elem) {
  let hoverStyle = 'hover-style-' + Math.floor(Math.random() * 2 + 1)

  if (!elem.classList.contains('hover')) {
    let r = Math.floor(Math.random() * colors.length)
    console.log(colors.length)
    elem.classList.add(hoverStyle)
    elem.classList.add('hover')
    elem.style.backgroundColor = colors[r]
  } else {
    removeAllHighlights(elem)
  }
}
function removeAllHighlights (elem) {
  elem.classList.remove('hover')
  elem.classList.remove('hover-style-1')
  elem.classList.remove('hover-style-2')
  elem.style.backgroundColor = 'transparent'
}

function hightlightRandomSchnipsel () {
  let schnipsel = document.querySelectorAll('span.text')
  schnipsel.forEach(elem => {
    elem.classList.remove('hover-style-1')
  })
  let r = Math.floor(Math.random() * schnipsel.length)
  console.log(schnipsel[r])
  let rc = Math.floor(Math.random() * colors.length)

  schnipsel[r].classList.add("hover-style-1'")
  elem.style.backgroundColor = colors[rc]
}
