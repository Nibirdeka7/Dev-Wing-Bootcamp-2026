const form = document.getElementById("productForm");
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener("submit", async function(e) {
    e.preventDefault(); // Prevent default form submission

    // 1. Collect form data
    const name = document.getElementById("name").value.trim();
    const price = Number(document.getElementById("price").value);
    const category = document.getElementById("category").value;
    const image = document.getElementById("image").value.trim();
    const contact = document.getElementById("contact").value.trim();

    // 2. Client-side validation
    if (!name || isNaN(price) || price <= 0 || !category) {
        alert("Please fill in all required fields correctly.");
        return;
    }

    const newProduct = {
        name,
        price,
        category,
        image,
        contact
    };

    // 3. Update UI state (teach user feedback)
    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = "Posting...";
    submitBtn.disabled = true;

    // 4. Async operations & Error Handling
    try {
        const res = await fetch("https://dev-wing-bootcamp-2026.vercel.app/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProduct)
        });

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        alert("Product listed successfully!");
        window.location.href = "index.html";
        
    } catch (error) {
        console.error("Error adding product:", error);
        alert("Failed to add product. Please make sure the JSON server is running.");
    } finally {
        // Reset UI state regardless of success or failure
        submitBtn.textContent = originalBtnText;
        submitBtn.disabled = false;
    }
});