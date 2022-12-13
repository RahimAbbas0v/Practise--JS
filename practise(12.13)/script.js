let newcat=document.querySelector("#newcat")
let cat=document.querySelector(".cat")


cat.addEventListener("click",function(){
    newcat.style.display="block"
    newcat.classList.add("class1")
    account.style.display="none"
    card.style.display="none"
})
let accounticon=document.querySelector("#accounticon")
let account=document.querySelector(".account")
accounticon.addEventListener("mouseover",function(){
    account.style.display="block"
    account.classList.add("class2")
    newcat.style.display="none"
    card.style.display="none"
})
let cart=document.querySelector("#cart")
let card=document.querySelector(".card")
cart.addEventListener("mouseover",function(){
    card.style.display="block"
    newcat.style.display="none"
    account.style.display="none"
})
let browse=document.querySelector(".browse")
let browcat=document.querySelector(".browcat")
browse.addEventListener("click",function(){
    browcat.classList.toggle("browseclass")

})

let homeicon=document.querySelector("#homeicon")
let home =document.querySelector(".home")
homeicon.addEventListener("click",function(e){
    e.preventDefault()
    browcat.style.display="none"
    home.classList.toggle("homeclass")
    card.style.display="none"
    newcat.style.display="none"
    account.style.display="none"
})

let shopicon=document.querySelector("#shopicon")
let shop =document.querySelector(".shop")
shopicon.addEventListener("click",function(e){
    e.preventDefault()
    browcat.style.display="none"
    home.style.display="none"
    card.style.display="none"
    newcat.style.display="none"
    account.style.display="none"
    shop.classList.toggle('shopclass')
})

let second=document.querySelector("#second")
let shop2 =document.querySelector(".shop2")
second.addEventListener("click",function(e){
    e.preventDefault()
    browcat.style.display="none"
    home.style.display="none"
    card.style.display="none"
    newcat.style.display="none"
    account.style.display="none"
    shop2.classList.toggle('shop2class')
})