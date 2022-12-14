let newcat=document.querySelector("#newcat")
let cat=document.querySelector(".cat")


cat.addEventListener("click",function(){
    newcat.style.display="block"
    newcat.classList.toggle("catclass")
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
    home.classList.toggle("homeclass")
    card.style.display="none"
    newcat.style.display="none"
    account.style.display="none"
})

let shopicon=document.querySelector("#shopicon")
let shop =document.querySelector(".shop")
shopicon.addEventListener("click",function(e){
    e.preventDefault()
    card.style.display="none"
    newcat.style.display="none"
    account.style.display="none"
    shop.classList.toggle('shopclass')
})

let second=document.querySelector("#second")
let shop2 =document.querySelector(".shop2")
second.addEventListener("click",function(e){
    e.preventDefault()
    card.style.display="none"
    newcat.style.display="none"
    account.style.display="none"
    shop2.classList.toggle('shop2class')
})
let third=document.querySelector("#third")
let shop3 =document.querySelector(".shop3")
third.addEventListener("click",function(e){
    e.preventDefault()
    card.style.display="none"
    newcat.style.display="none"
    account.style.display="none"
    shop3.classList.toggle('shop3class')
})
let vendoricon=document.querySelector("#vendoricon")
let vendors =document.querySelector(".vendors")
vendoricon.addEventListener("click",function(e){
    e.preventDefault()
    card.style.display="none"
    newcat.style.display="none"
    account.style.display="none"
    vendors.classList.toggle('vendorclass')
})
let megamenuicon=document.querySelector("#megamenu")
let megamenu =document.querySelector(".megamenu")
megamenuicon.addEventListener("click",function(e){
    e.preventDefault()
    card.style.display="none"
    newcat.style.display="none"
    account.style.display="none"
    megamenu.classList.toggle('megamenuclass')
})
let blogicon=document.querySelector("#blog")
let blog =document.querySelector(".blog")
blogicon.addEventListener("click",function(e){
    e.preventDefault()
    card.style.display="none"
    newcat.style.display="none"
    account.style.display="none"
    blog.classList.toggle('blogclass')
})
let pageicon=document.querySelector("#pages")
let page =document.querySelector(".pages")
pageicon.addEventListener("click",function(e){
    e.preventDefault()
    card.style.display="none"
    newcat.style.display="none"
    account.style.display="none"
    page.classList.toggle('pagesclass')
})
let burgermenu=document.querySelector(".burgermenu")
let navbar=document.querySelector(".navbar")
let mobil=document.querySelector(".mobil")
burgermenu.addEventListener("click",function(){
    navbar.style.display="none"
    mobil.style.display="flex"
})

let homemob=document.querySelector("#homemob")
let homem =document.querySelector(".homem")
homemob.addEventListener("click",function(e){
    e.preventDefault()
    homem.classList.toggle('homemobclass')
})

let xbtn =document.querySelector("#xbtn")
xbtn.addEventListener("click",function(e){
    e.preventDefault()
    mobil.style.display="none"
    navbar.style.display="flex"
})