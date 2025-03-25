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