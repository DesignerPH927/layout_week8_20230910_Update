const e=document.querySelector(".circleText");e.innerHTML=e.innerText.split("").map((t,n)=>`<span style="transform: rotate(${n*20}deg)">${t}</span>`).join("");
