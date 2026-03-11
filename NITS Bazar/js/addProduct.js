const form = document.getElementById("productForm")

form.addEventListener("submit",async function(e){

e.preventDefault()

const product={

name:document.getElementById("name").value,

price:document.getElementById("price").value,

image:document.getElementById("image").value,

contact:document.getElementById("contact").value

}

await fetch("http://localhost:3000/products",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(product)

})

alert("Product added!")

window.location.href="index.html"

})