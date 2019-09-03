let colors = [
  'rgb(255, 0, 0)',
  'rgb(255, 255, 0)',
  'rgb(0, 255, 0)',
  'rgb(0, 255, 255)',
  'rgb(0, 0, 255)',
  'rgb(255, 0, 255)'
]

let squares = document.querySelectorAll('.square')
let pickedColor = pickColor()
let colorDisplay = document.getElementById('colorDisplay')
let messageDisplay = document.getElementById('message')

colorDisplay.textContent = pickedColor

for (let i = 0; i < squares.length; i++) {
  squares[i].style.background = colors[i]

  squares[i].addEventListener('click', function() {
    let clickedColor = this.style.background

    if (clickedColor === pickedColor) {
      messageDisplay.textContent = 'Correct!'
      changeColors(clickedColor)
    } else {
      this.style.background = '#232323'
      messageDisplay.textContent = 'Try Again'
    }
  })
}

function changeColors(color) {
  for (let i = 0; i < colors.length; i++) {
    squares[i].style.background = color
  }
  document.querySelector('h1').style.background = color
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length)
  return colors[random]
}
