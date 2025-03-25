//Task 2: Fetch Products with .then()

//Create a function fetchProductsThen()
function fetchProductsThen() {
    const url = "https://www.course-api.com/javascript-store-products";

//Use fetch() with .then() to get product data
    fetch(url)
    .then(respose => {
        if (!Response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })

//Log each product’s name to the console
    .then(products => {
        products.forEach(product => {
          console.log(product.fields.name);
        });
      })

//Use .catch() to log any errors
      .catch(error => {
        console.error("Error fetching products with .then():", error);
      });
}

fetchProductsThen();

//Task 3: Fetch Products with async/await

//Create another function fetchProductsAsync()
async function fetchProductsAsync() {
    const url = "https://www.course-api.com/javascript-store-products";
  
//Use async/await and try/catch to fetch product data
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const products = await response.json();
      displayProducts(products);
    } catch (error) {
      handleError(error);
    }
  }

//Call a helper function displayProducts(products) to render products to the page
function displayProducts(products) {
    const productContainer = document.getElementById("product-container");
    productContainer.innerHTML = ""; // Clear previous content
  
    products.forEach(product => {
      const { name, price, image } = product.fields;
      const productCard = document.createElement("div");
      productCard.className = "product-card";
  
      productCard.innerHTML = `
        <img src="${image[0].url}" alt="${name}" />
        <h2>${name}</h2>
        <p>$${(price / 100).toFixed(2)}</p>
      `;
  
      productContainer.appendChild(productCard);
    });
  }

//If an error occurs, passes it to handleError(error)
  function handleError(error) {
    console.error("Error fetching products with async/await:", error);
    const productContainer = document.getElementById("product-container");
    productContainer.innerHTML = "<p>Oops! Something went wrong. Please try again later.</p>";
  }

  fetchProductsAsync();

//Task 4: Display the Products

//Write a function displayProducts(products)
function displayProducts(products) {
    const productContainer = document.getElementById("product-container");
    productContainer.innerHTML = ""; //Select #product-container

//Loop through the first 5 products
    const topFive = products.slice(0, 5);

  topFive.forEach(product => {
    const { name, price, image } = product.fields;

    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

//Creates HTML elements to show each product’s name, price, and image
    const img = document.createElement("img");
    img.src = image[0].url;
    img.alt = name;

    const title = document.createElement("h2");
    title.textContent = name;

    const priceTag = document.createElement("p");
    priceTag.textContent = `$${(price / 100).toFixed(2)}`;

//Append them to the container
    productCard.appendChild(img);
    productCard.appendChild(title);
    productCard.appendChild(priceTag);

    productContainer.appendChild(productCard);
  });
}

//Task 5: Reusable Error Handler

//Create a function handleError(error)
function handleError(error) {
    console.error("An error occurred:", error.message);
  }