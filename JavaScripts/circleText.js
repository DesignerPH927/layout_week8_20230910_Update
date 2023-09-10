
const textCircle = document.querySelector('.circleText')
textCircle.innerHTML = textCircle.innerText.split('').map((char,i) =>
`<span style="transform: rotate(${i * 20}deg)">${char}</span>`).join('')


const infoText = document.querySelector('.circleInfoText')
infoText.innerHTML = infoText.innerText.split('').map((char,i) =>
`<span style="transform: rotate(${i * 20}deg)">${char}</span>`).join('')


const chTitle = document.querySelector('.characterTitle')
chTitle.innerHTML = chTitle.innerText.split('').map((char, i) => `<span>${char}</span>`).join('')




