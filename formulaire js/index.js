let send = document.querySelector(".button-1")
let right = document.querySelector(".contents_right")
let left = document.querySelector(".contents_left")
let titre = document.querySelector(".titles")
let input = document.querySelector(".input-none")
let create = document.querySelector("titles-1")

send.addEventListener("click", toggleMenu)
function toggleMenu(){
    right.classList.toggle('translate--left')
    left.classList.toggle('translate--right')
    titre.classList.toggle('block')
    input.classList.toggle('none')
    create.classList.toggle('none')
   
}