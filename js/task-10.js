function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector('[data-create]')
const destroyBtn = document.querySelector('[data-destroy]')
const counter = document.querySelector('input')
const boxesWrapper = document.querySelector('#boxes')

let currentSize = 30

const createBoxes = (amount, size) => {
  const boxeslist =  []
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div')
    box.style.width = `${currentSize}px`
    box.style.height = `${currentSize}px`
    currentSize += 10
    box.style.backgroundColor = `${getRandomHexColor()}`

    boxeslist.push(box)
  }

  return boxeslist
}

const onClickCreate = () => {
  const boxeslist = createBoxes(counter.value, currentSize)
  boxesWrapper.append(...boxeslist)
}

const destroyBoxes = () =>{
  boxesWrapper.innerHTML = ''
  currentSize = 30
}

createBtn.addEventListener('click', onClickCreate)
destroyBtn.addEventListener('click', destroyBoxes)