const IS_MOBILE = window.innerWidth <= 800
const IS_TOUCH = 'ontouchstart' in window || navigator.msMaxTouchPoints > 0

let container = document.querySelector('.container')
let mainText = document.querySelector('.mainText')
let textElements = document.querySelectorAll(".text")

let colors = ['#01956e', '#fe601e', '#ff8657', '#0047f5', '#008cc8', '#ffed3b']

let cursor = document.getElementById('cursor')

let covidInfo = document.querySelector(".covid-info")

toggleHightlight(covidInfo)


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


if (!IS_TOUCH) {
  textElements.forEach(text => {
    text.addEventListener('mouseenter', e => {
      if (!text.classList.contains('hover-style-1')) {
        toggleHightlight(text)
      }else{
        hightlightRandomSchnipsel()
      }

    })
    text.addEventListener('mouseleave', e => {
      toggleHightlight(text)
    })
  })
}
if (IS_MOBILE) {
  window.addEventListener('touchend', e => {
    console.log(e)
    if (e.target.tagName.toLowerCase() === 'span') {
      toggleHightlight(e.target)
    }
  })

  let counter = textElements.length - 1
  setInterval(e => {
    console.log("hiih");
    if (counter % 2 == 0) {
      hightlightRandomSchnipsel()
    }
    removeAllHighlights(textElements[counter])
    if (counter >= textElements.length - 1) {
      counter = 0
    } else {
      counter++
    }
    removeAllHighlights(textElements[counter])
    toggleHightlight(textElements[counter])
  }, 1600)
} else {
  toggleHightlight(textElements[Math.floor(Math.random() * text.length)])
  toggleHightlight(textElements[Math.floor(Math.random() * text.length)])
}

function toggleHightlight (elem) {
  let hoverStyle = 'hover-style-' + Math.floor(Math.random() * 2 + 1)

  if (!elem.classList.contains('hover')) {
    let r = Math.floor(Math.random() * colors.length)
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

  let rc = Math.floor(Math.random() * colors.length)
  let rs = Math.floor(Math.random() * 2) + 1

  schnipsel[r].classList.add('hover-style-' + rs)
  schnipsel[r].style.backgroundColor = colors[rc]
}
