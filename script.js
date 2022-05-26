const x = document.querySelector("#x")
const y = document.querySelector("#y")
const answer = document.querySelector("#answer")
const add = document.querySelector("#add")
const minus = document.querySelector("#minus")
const mul = document.querySelector("#mul")
const divide = document.querySelector("#divide")
const clear = document.querySelector("#clear")
add.addEventListener("click", function(){
    answer.innerHTML = Number(x.value) + Number(y.value)
})

minus.addEventListener("click", function(){
    answer.innerHTML = Number(x.value) - Number(y.value)
})

mul.addEventListener("click", function(){
    answer.innerHTML = Number(x.value) * Number(y.value)
})

divide.addEventListener("click", function(){
    answer.innerHTML = Number(x.value) / Number(y.value)
})

clear.addEventListener("click", function(){
    x.value = ""
    y.value = ""
    answer.innerHTML = ""
})