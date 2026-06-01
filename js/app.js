const productContainer = document.getElementById("productContainer");

function displayProducts() {
  products.forEach((product) => {
    productContainer.innerHTML += `

<div class="product-card">

    <div class="product-image">

        <img src="${product.image}" alt="${product.name}">

        <span class="badge">
            New
        </span>

        <span class="wishlist">
            ♡
        </span>

    </div>

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

displayProducts();
