
document.addEventListener('DOMContentLoaded', () => {
    console.log('Site loaded');
});
function toggleCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    cartSidebar.classList.toggle('active');
}
const products = [
    {
        id: 1,
        name: "Oversized T-shirt",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1556909212-6c687f729110?ixlib=rb-4.0.3"
    },
    {
        id: 2,
        name: "Denim Jacket",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1514996937319-344454492b37?ixlib=rb-4.0.3"
    },
    {
        id: 3,
        name: "Cargo Pants",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1593032465174-7f9db5e8b173?ixlib=rb-4.0.3"
    }
];
window.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('product-grid');
    products.forEach(product => {
        const div = document.createElement('div');
        div.className = 'product-card';
        div.innerHTML = `
            <img src="${product.image}" alt="${product.name}" style="width: 100%; height: auto;">
            <div style="padding: 15px;">
                <h3>${product.name}</h3>
                <p style="color: var(--gold); font-weight: bold;">$${product.price}</p>
                <button class="btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        grid.appendChild(div);
    });
});
function addToCart(productId) {
    alert(`Added product ${productId} to cart.`);
}
