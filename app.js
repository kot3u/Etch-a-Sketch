const container = document.querySelector('.container')
const btn = document.querySelector('#change-res')
const inputEl = document.querySelector('#input-value')
const btnBlack = document.querySelector('#change-to-black')
const bntErase = document.querySelector('#change-to-erase')
let userInput = 16;
let squareOfInput = userInput ** 2;
let mode = 'rgb';

let changeColor = (e) => {
  if(mode === 'rgb'){
    randomColor = Math.floor(Math.random() * 16777215).toString(16);
    e.target.style.backgroundColor = `#${randomColor}`;
  }
  else if (mode === 'black' ){
    e.target.style.backgroundColor = '#000000';
  }
  else if (mode === 'erase') {
    e.target.style.backgroundColor = '#ffffff';
  }
}

let display = () =>{
  for (i = 1; i <= squareOfInput; i++) {
    let div = document.createElement('div');
    div.classList.add('pixel');
    div.setAttribute('id', `div${i}`);
    div.addEventListener('mouseover', changeColor)
    container.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;
    container.appendChild(div);
  };
};

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
  display();
}

display();
btn.addEventListener('click', getUserInput);
btnBlack.addEventListener('click', () => {mode = 'black'});
bntErase.addEventListener('click', () => { mode = 'erase' });