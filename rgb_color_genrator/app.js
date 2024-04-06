let btn = document.querySelector("#btn")
let v1 = document.querySelector("#v1")
let output = document.querySelector(".output")

btn.addEventListener("click",()=>{

     let x  = Math.floor((Math.random() * 255) + 1);
     let y  = Math.floor((Math.random() * 255) + 1);
     let z  = Math.floor((Math.random() * 255) + 1);
     v1.innerHTML= ` rgb( ${x},${y},${z}) `;
     output.style.backgroundColor=` rgb( ${x},${y},${z}) `

})