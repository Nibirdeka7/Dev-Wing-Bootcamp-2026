const API_URL = "https://dev-wing-bootcamp-2026.vercel.app/products";

async function fetchAndRenderProducts() {
  const productsContainer = document.getElementById("products");

  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Failed to fetch");

    const products = await response.json();
    productsContainer.innerHTML = ""; // Remove the loading text

    if (products.length === 0) {
      productsContainer.innerHTML =
        "<p>No products listed yet. Be the first!</p>";
      return;
    }

    products.forEach((item) => {
      const card = document.createElement("article");
      card.className = "card";
      card.innerHTML = `
                <img src="${item.image}" alt="${item.name}" loading="lazy">
                <div class="card-info">
                    <span class="category-tag">${item.category}</span>
                    <h3>${item.name}</h3>
                    <span class="price">₹${Number(item.price).toLocaleString()}</span>
                    <a href="https://wa.me/91${item.contact}" target="_blank" class="contact-link">
                        Chat on WhatsApp
                    </a>
                </div>
            `;
      productsContainer.appendChild(card);
    });
  } catch (error) {
    console.error(error);
    productsContainer.innerHTML = `<p style="color:red">Failed to load products. Is the server running?</p>`;
  }
}

document.addEventListener("DOMContentLoaded", fetchAndRenderProducts);
