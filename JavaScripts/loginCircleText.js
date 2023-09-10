

const textCircle = document.querySelector('.circleText')
textCircle.innerHTML = textCircle.innerText.split('').map((char,i) =>
`<span style="transform: rotate(${i * 20}deg)">${char}</span>`).join('')