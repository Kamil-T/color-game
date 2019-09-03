let colors = generateRandomColors(6)

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
      document.querySelector('h1').style.background = pickedColor
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
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length)
  return colors[random]
}

function generateRandomColors(num) {
  let arr = []

  for (let i = 0; i < num; i++) {
    arr.push(randomColor())
  }

  return arr
}

function randomColor() {
  let r = Math.floor(Math.random() * 256)
  let g = Math.floor(Math.random() * 256)
  let b = Math.floor(Math.random() * 256)
  return `rgb(${r}, ${g}, ${b})`
}
