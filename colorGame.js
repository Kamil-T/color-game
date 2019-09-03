let colors = generateRandomColors(6)

let squares = document.querySelectorAll('.square')
let pickedColor = pickColor()
let colorDisplay = document.getElementById('colorDisplay')
let messageDisplay = document.getElementById('message')
let h1 = document.querySelector('h1')
let resetButton = document.querySelector('#reset')
let easyBtn = document.querySelector('#easyBtn')
let hardBtn = document.querySelector('#hardBtn')

easyBtn.addEventListener('click', function() {
  easyBtn.classList.add('selected')
  hardBtn.classList.remove('selected')
  numSquares = 3
  colors = generateRandomColors(numSquares)
  pickedColor = pickColor()
  colorDisplay.textContent = pickedColor
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i]
    } else {
      squares[i].style.display = 'none'
    }
  }
})

hardBtn.addEventListener('click', function() {
  hardBtn.classList.add('selected')
  easyBtn.classList.remove('selected')
  numSquares = 6
  colors = generateRandomColors(numSquares)
  pickedColor = pickColor()
  colorDisplay.textContent = pickedColor
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i]
    squares[i].style.display = 'block'
  }
})

resetButton.addEventListener('click', function() {
  colors = generateRandomColors(numSquares)
  pickedColor = pickColor()
  colorDisplay.textContent = pickedColor

  for (let i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i]
  }

  h1.style.background = '#232323'
})

colorDisplay.textContent = pickedColor

for (let i = 0; i < squares.length; i++) {
  squares[i].style.background = colors[i]

  squares[i].addEventListener('click', function() {
    let clickedColor = this.style.background

    if (clickedColor === pickedColor) {
      messageDisplay.textContent = 'Correct!'
      resetButton.textContent = 'Play Again?'
      changeColors(clickedColor)
      h1.style.background = pickedColor
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
