let counterValue =  0

const incrementBtnRef = document.querySelector('[data-action="increment"]');
const decrementBtnRef = document.querySelector('[data-action="decrement"]');
const valueRef = document.querySelector('#value');

const increment = () => {
    counterValue++
    valueRef.textContent = counterValue
}

const decrement = () => {
  counterValue--
    valueRef.textContent = counterValue
}

incrementBtnRef.addEventListener('click', increment)
decrementBtnRef.addEventListener('click', decrement)