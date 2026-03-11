const container = document.getElementById("products")

async function loadProducts(){

const res = await fetch("http://localhost:3000/products")

const products = await res.json()

container.innerHTML=""

products.forEach(product=>{

const card=document.createElement("div")

card.className="card"

card.innerHTML=`

<img src="${product.image}">

<div class="card-body">

<h3>${product.name}</h3>

<p class="price">₹${product.price}</p>

<p class="contact">Contact: ${product.contact}</p>

</div>

`

container.appendChild(card)

})

}

loadProducts()