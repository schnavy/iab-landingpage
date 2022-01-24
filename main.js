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
            let r = Math.floor(Math.random() * colors.length);
            console.log(r);
            console.log(colors.length);
            text.classList.add('hover-style-1');
            text.style.backgroundColor = colors[r];
        }
  })
  text.addEventListener('mouseleave', e => {
    if (text.classList.contains('hover-style-1')) {
      text.classList.remove('hover-style-1')
      text.style.backgroundColor = 'transparent'
    }
  })
})

let schnipsel = document.querySelectorAll('span .text')
