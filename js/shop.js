const productContainer =
document.getElementById("productContainer");
function displayProducts()
{
productContainer.innerHTML = "";
products.forEach(product => {
productContainer.innerHTML += `

<div class="product-card">
    <div class="product-image">
        <img src="${product.image}" alt="${product.name}">
        <span class="badge">
            ${product.category}
        </span>
    </div>
    <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.heritage}</p>
        <h4>₹${product.price}</h4>
        <button>
            View Product
        </button>
    </div>
</div>
`;
});
}
displayProducts();