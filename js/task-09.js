function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnRef  = document.querySelector('.change-color')
const body = document.querySelector('body')
const color = document.querySelector('.color')

const onClickChangeColor = () => {
  const bgcolor = getRandomHexColor()
  body.style.backgroundColor = bgcolor
  color.textContent = bgcolor
}

btnRef.addEventListener('click', onClickChangeColor)