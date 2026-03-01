const loadAllProducts = () => {
    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => {
            displayTrending(data);
        });
}

// // display all trending products on home page
// const displayTrending = (products) => {
//     //1. Get the container and empty the container
//     const productContainer = document.getElementById("products-container");
//     productContainer.innerHTML = "";

//     products.forEach((product) => {
//         //2. Create HTML Element
//         const productCard = document.createElement("div");
//         productCard.innerHTML = `<div class="product-card">
//             <img src=${product.image}>
//             <p style="display:flex;justify-content: space-between;flex-grow:1"> <span>${product.category} </span> ${product.rating.rate} (${product.rating.count})<span></span></p>
//             <h2>${product.title}</h2>
//             <p>${product.price}</p>
//             <button>Detalis</button>&nbsp&nbsp <button>Add to Cart</button>
//         </div>`;

//         //3. add to the container
//         productContainer.appendChild(productCard);
//         console.log(product.id)
//     })

// }


// display first 3 product as trending products on home page
const displayTrending = (products) => {
    //1. Get the container and empty the container
    const productContainer = document.getElementById("products-container");
    productContainer.innerHTML = "";


    products.slice(0,3).forEach((product) => {
        //2. Create HTML Element
        const productCard = document.createElement("div");
        productCard.innerHTML = `<div class="product-card">
            <img src=${product.image}>
            <p style="display:flex;justify-content: space-between;flex-grow:1"> <span>${product.category} </span> ${product.rating.rate} (${product.rating.count})<span></span></p>
            <h2>${product.title}</h2>
            <p>${product.price}</p>
            <button>Detalis</button>&nbsp&nbsp <button>Add to Cart</button>
        </div>`;

        //3. add to the container
        productContainer.appendChild(productCard);
    
    })

}

loadAllProducts();


