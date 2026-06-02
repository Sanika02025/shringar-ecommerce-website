const productContainer = document.getElementById("productContainer");
const featuredProducts = products.slice(0, 8);
function displayFeaturedProducts() {
  productContainer.innerHTML = "";
  featuredProducts.forEach((product) => {
    productContainer.innerHTML += `
<div class="product-card">
<div class="product-image">
<img src="${product.image}" alt="${product.name}">
<span class="badge">
New
</span></div>
<div class="product-info">
<h3>${product.name}</h3>
<p>${product.category}</p>
<h4>₹${product.price}</h4>
<button>
Add To Cart
</button>
</div>
</div>
`;
  });
}
displayFeaturedProducts();
