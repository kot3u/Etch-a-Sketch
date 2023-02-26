const container = document.querySelector('.container')

for(i = 1; i <= 256; i++) {
  let div = document.createElement('div')
  div.classList.add('pixel')
  div.setAttribute('id', `div${i}`)
  container.appendChild(div)
}

