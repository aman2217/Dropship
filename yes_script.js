let cart = JSON.parse(localStorage.getItem("cart")) || [];
let products = [];

async function fetchProducts() {
  const res = await fetch('/api/products');
  products = await res.json();
  renderProducts();
  updateCart();
}

function renderProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}"/>
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

// ... reuse previous cart logic ...

async function checkout() {
  await fetch('/api/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cart),
  });
  alert("Thank you for your purchase!");
  cart = [];
  updateCart();
  closeCart();
}

fetchProducts();
