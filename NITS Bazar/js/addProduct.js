const form = document.getElementById("productForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const submitBtn = document.getElementById("submitBtn");
  const originalBtnText = submitBtn.innerText;

  // UI Feedback
  submitBtn.innerText = "Posting Listing...";
  submitBtn.disabled = true;

  // Collect Data
  const productData = {
    name: document.getElementById("name").value,
    price: document.getElementById("price").value,
    category: document.getElementById("category").value,
    image: document.getElementById("image").value,
    contact: document.getElementById("contact").value,
  };

  try {
    const response = await fetch(
      "https://dev-wing-bootcamp-2026.vercel.app/products",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      },
    );

    if (response.ok) {
      alert("Listing posted successfully!");
      window.location.href = "index.html"; // Redirect to Home
    } else {
      throw new Error("Server error");
    }
  } catch (error) {
    alert("Oops! Something went wrong. Please try again.");
    submitBtn.innerText = originalBtnText;
    submitBtn.disabled = false;
  }
});
