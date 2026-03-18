// State variables
let allProducts = [];
const container = document.getElementById("products");
const searchInput = document.getElementById("search");
const categoryFilter = document.getElementById("category-filter");
const themeToggleBtn = document.getElementById("theme-toggle");

/* --- 1. Dark Mode & Local Storage --- */
function initTheme() {
    // Check local storage for preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }
}

themeToggleBtn.addEventListener("click", () => {
    // Toggle class on body
    document.body.classList.toggle("dark-mode");
    
    // Save to local storage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

/* --- 2. Fetching and Filtering Data --- */
async function loadProducts() {
    try {
        const res = await fetch("https://dev-wing-bootcamp-2026.vercel.app/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        
        allProducts = await res.json();
        renderProducts(allProducts);
    } catch (error) {
        console.error("Error loading products:", error);
        container.innerHTML = `<div class="loading-state">Error loading products. Make sure json-server is running.</div>`;
    }
}



/* --- 3. DOM Manipulation & Semantic HTML --- */
function renderProducts(products) {
    container.innerHTML = ""; // Clear existing

    if (products.length === 0) {
        container.innerHTML = '<div class="no-results">No products found matching your criteria.</div>';
        return;
    }

    products.forEach((product, index) => {
        // Teach DOM element creation
        const card = document.createElement("article"); // Semantic tag
        card.className = "card";
        // Teach template literals and inline styles for animation delay
        card.style.animationDelay = `${index * 0.1}s`; 

        card.innerHTML = `
            <img src="${product.image}" loading="lazy" alt="${product.name}">
            <div class="card-body">
                <span class="card-category">${product.category || 'Item'}</span>
                <h3>${product.name}</h3>
                <p class="price">₹${product.price.toLocaleString('en-IN')}</p>
                <a href="tel:${product.contact}" class="contact-btn">Contact: ${product.contact}</a>
            </div>
        `;

        container.appendChild(card);
    });
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    
    // Set current year in footer
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    if (container) loadProducts();
});