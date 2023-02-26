const container = document.querySelector('.container')
const btn = document.querySelector('#change-res')
const inputEl = document.querySelector('#input-value')
let userInput = 16;
let squareOfInput = userInput ** 2;

let display = () =>{
  for (i = 1; i <= squareOfInput; i++) {
    let div = document.createElement('div')
    div.classList.add('pixel')
    div.setAttribute('id', `div${i}`)
    container.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`
    container.appendChild(div)
  }
}

let getUserInput = () => {
  if (inputEl.value >0 && inputEl.value <= 100){
    userInput = inputEl.value;
  }
  else{
    userInput = 100;
    alert('For performance reasons max value is set to be 100!, and min is 0')
  };
  
  squareOfInput = userInput ** 2;
  inputEl.value = 0;
  container.replaceChildren();
  display()
}

display()
btn.addEventListener('click', getUserInput)