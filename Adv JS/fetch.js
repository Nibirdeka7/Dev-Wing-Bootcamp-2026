fetch("https://dev-wing-bootcamp-2026.vercel.app/products")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err))