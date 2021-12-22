const textRef = document.querySelector('#text')
const rangeRef = document.querySelector('#font-size-control')



rangeRef.addEventListener('input', (event) => textRef.style.fontSize = `${event.currentTarget.value}px`)

