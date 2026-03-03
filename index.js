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
    const productContainer = document.getElementById("products-container");
    productContainer.innerHTML = "";

    products.slice(0, 3).forEach((product) => {
        const productCard = document.createElement("div");

        productCard.innerHTML = `
          <div class="card min-w-80 bg-white shadow-lg my-5">
            <div class="bg-gray-300 flex justify-center items-center h-48">
              <figure class="w-40 h-44">
                <img src="${product.image}" class="w-full h-full object-contain" />
              </figure>
            </div>

            <div class="card-body flex flex-col justify-between">
              <div>
                <p class="text-sm">${product.category} ⭐ ${product.rating.rate}</p>
                <h2 class="card-title line-clamp-1">${product.title}</h2>
                <p class="font-semibold">$${product.price}</p>
              </div>

              <div class="card-actions flex justify-between">
                <button class="btn btn-info btn-sm">Details</button>
                <button class="btn btn-info btn-sm">Add to Cart</button>
              </div>
            </div>
          </div>
        `;

        // DETAILS BUTTON EVENT
        productCard.querySelector(".btn-info").onclick = () => {
            openProductModal(product);
        };

        productContainer.appendChild(productCard);
    });
};

const openProductModal = (product) => {
    document.getElementById("modal-title").innerText = product.title;
    // document.getElementById("modal-image").src = product.image;
    document.getElementById("modal-description").innerText = product.description;
    document.getElementById("modal-price").innerText = product.price;
    document.getElementById("modal-rating").innerText = product.rating.rate;

    document.getElementById("product_modal").showModal();
};

loadAllProducts();




