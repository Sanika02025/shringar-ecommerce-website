const subCategoryButtons = document.getElementById("subCategoryButtons");

const subCategoryTitle = document.getElementById("subCategoryTitle");
function showSubCategories(category) {
  subCategoryButtons.innerHTML = "";

  const categoryProducts = products.filter(
    (product) => product.category === category,
  );

  const types = [...new Set(categoryProducts.map((product) => product.type))];

  types.forEach((type) => {
    subCategoryButtons.innerHTML += `

<button class="sub-btn"
data-type="${type}">
${type}
</button>

`;
  });

  const subBtns = document.querySelectorAll(".sub-btn");

  subBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const selectedType = btn.dataset.type;

      const filtered = products.filter(
        (product) => product.type === selectedType,
      );

      displayProducts(filtered);
    });
  });
}
const productContainer = document.getElementById("productContainer");

const searchInput = document.getElementById("searchInput");

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

<p>${product.occasion}</p>

<h4>₹${product.price}</h4>

<button>
View Product
</button>

</div>

</div>

`;
  });
}

// SHOW ALL PRODUCTS ON PAGE LOAD
displayProducts(products);

function showSubCategories(category) {
  subCategoryButtons.innerHTML = "";

  let types = [];

  if (category === "Saree") {
    types = [
      "Paithani",
      "Nauvari",
      "Kanjivaram",
      "Bandhani",
      "Kasavu",
      "Mekhela",
    ];
  }

  if (category === "Jewellery") {
    types = ["Temple", "Kundan", "Diamond"];
  }

  if (category === "Lehenga") {
    types = ["Mirror", "Bridal", "Reception"];
  }

  if (category === "Kurti") {
    types = ["Designer", "Party", "Anarkali"];
  }

  if (category === "Blouse") {
    types = ["Wedding", "Bridal", "Reception"];
  }

  if (category === "Couple") {
    types = ["Haldi", "Mehendi", "Sangeet", "Reception", "Bridal"];
  }

  types.forEach((type) => {
    subCategoryButtons.innerHTML += `

<button
class="sub-btn"
data-type="${type}">
${type}
</button>

`;
  });

  const subBtns = document.querySelectorAll(".sub-btn");

  subBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const selectedType = btn.dataset.type;

      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(selectedType.toLowerCase()),
      );

      displayProducts(filtered);
    });
  });
}
// SEARCH
searchInput.addEventListener("keyup", () => {
  const searchValue = searchInput.value.toLowerCase();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchValue),
  );

  displayProducts(filteredProducts);
});

// CATEGORY BUTTONS

const categoryBtns = document.querySelectorAll(".filter-btn");

categoryBtns.forEach(btn=>{

btn.addEventListener("click",()=>{

const category =
btn.dataset.category;

if(category==="All")
{
subCategoryButtons.innerHTML = "";
displayProducts(products);
return;
}

showSubCategories(category);

const filtered =
products.filter(product=>

product.category===category

);

displayProducts(filtered);

});

});

// OCCASION BUTTONS

const occasionBtns = document.querySelectorAll(".occasion-btn");

occasionBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const occasion = btn.dataset.occasion;

    if (occasion === "All") {
      displayProducts(products);
      return;
    }

    const filtered = products.filter(
      (product) => product.occasion === occasion,
    );

    displayProducts(filtered);
  });
});
