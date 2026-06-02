const productContainer = document.getElementById("productContainer");

const searchInput = document.getElementById("searchInput");

const categoryFilters = document.querySelectorAll(".category-filter");

function displayProducts(productList) {
  productContainer.innerHTML = "";

  productList.forEach((product) => {
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

function filterProducts() {
  const searchValue = searchInput.value.toLowerCase();

  const selectedCategories = Array.from(categoryFilters)

    .filter((filter) => filter.checked)

    .map((filter) => filter.value);

  let filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchValue);

    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);

    return matchesSearch && matchesCategory;
  });

  displayProducts(filteredProducts);
}

searchInput.addEventListener("keyup", filterProducts);

categoryFilters.forEach((filter) => {
  filter.addEventListener("change", filterProducts);
});

const categoryBtns =
document.querySelectorAll(".filter-btn");

categoryBtns.forEach(btn=>{

btn.addEventListener("click",()=>{

const category =
btn.dataset.category;

if(category==="All")
{
displayProducts(products);
return;
}

const filtered =
products.filter(product=>

product.category===category

);

displayProducts(filtered);

});

});
displayProducts(products);
