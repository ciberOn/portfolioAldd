const btn = document.getElementById("btn")
const array = ["-10kb","+10kb","5kiberone", "-5kiberone"]

btn.addEventListener("click", ()=>{
    let rndNum = Math.floor(Math.random()*array.length)
    btn.innerText =  array[rndNum]
})