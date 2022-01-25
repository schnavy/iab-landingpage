let text = [
  'Independent Publishing Fair Leipzig, March 19, 2022.',
  '<span class="layer2">It’s a book</span>, it’s a word that you choose, it’s a language in use.',
  'Opening hours 12 pm – 9 pm, symposium 1 pm – 6 pm.',
  'Please be welcome to visit our marketplace and symposium at the <span class="layer2">Academy of Fine Arts Leipzig, Wächterstraße 11, 04107 Leipzig.</span> Join the digital event at <a href="https://itsabook.de">www.itsabook.de.</a>',
  'Submit your books until February 14, publishers to <a href="mailto:publishers@itsabook.de">publishers@itsabook.de</a> and students to <a href="mailto:students@itsabook.de">students@itsabook.de</a>.',
  'Kindly supported by Support-Büro der HGB Leipzig and DZA Druckerei zu Altenburg.'
]
let container = document.querySelector('.container')
let mainText = document.querySelector('.mainText')

let colors = ['#01956e', '#fe601e', '#ff8657', '#0047f5', '#008cc8', '#ffed3b']

let cursor = document.getElementById('cursor')

window.addEventListener('mousemove', e => {
  if(e.target.tagName.toLowerCase() === 'a'){
    cursor.classList.add("pointer")  
  }else{
    cursor.classList.remove("pointer")  

  }
  console.log(
    cursor.getBoundingClientRect().height
  );
  cursor.style.top = (e.clientY) + 'px'
  cursor.style.left = (e.clientX) + 'px'
})


window.addEventListener('touchstart', e => {
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
  spacer.innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;'
  mainText.appendChild(text)
  mainText.appendChild(spacer)
  text.addEventListener('mouseenter', e => {
    if (!text.classList.contains('hover-style-1')) {
      toggleHightlight(text)
    }
  })
  text.addEventListener('mouseleave', e => {
    toggleHightlight(text)
  })
})



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
