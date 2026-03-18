async function getData(){
  const res = await fetch("https://dev-wing-bootcamp-2026.vercel.app/products")
  const data = await res.json()
  console.log(data)
}
getData()