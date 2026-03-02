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


// // display first 3 product as trending products on home page
const displayTrending = (products) => {
    //1. Get the container and empty the container
    const productContainer = document.getElementById("products-container");
    productContainer.innerHTML = "";
    products.slice(0, 3).forEach((product) => {
        //2. Create HTML Element
        const productCard = document.createElement("div");
        productCard.innerHTML = `<div class="card min-w-80 bg-white border-b-amber-50 shadow-lg my-5">
                 <div class="bg-gray-300 flex justify-center items-center h-48">
                     <figure class="w-40 h-44">
                         <img src="${product.image}" class="w-full h-full object-contain" />
                     </figure>
                </div>
                <div class="card-body flex flex-col justify-between">
                    <div>
                        <p class="flex text-sm"> <span>${product.category}</span> ${product.rating.rate} (${product.rating.count})</p>
                        <h2 class="card-title line-clamp-1">${product.title}</h2>
                        <p class="card-title">${product.price}</p>
                    </div>

                    <div class="card-actions flex gap-5 justify-between">
                        <button class="btn bg-amber-100"><i class="fa-regular fa-eye"></i>Details</button>
                        <button class="btn btn-info"><i class="fa-solid fa-cart-shopping"></i> Add to Cart</button>
                    </div>
                 </div>
            </div>`;

        //3. add to the container
        productContainer.appendChild(productCard);

    })
}



loadAllProducts();



