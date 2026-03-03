const loadAllProducts = () => {
    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            //allCategories(data);
            disPlayProducts(data);
            disPlayCatagories(data);
        });
}

// products.filter(product=>product.category==="women's clothing").forEach((product) =>
const disPlayProducts = (products) => {
    //1. Get the container and empty the container
    const productContainer = document.getElementById("products-container");
    productContainer.innerHTML = "";
    
    products.forEach((product) => {
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
                        <button class="btn btn-info bg-amber-100"><i class="fa-regular fa-eye"></i>Details</button>
                        <button class="btn btn-info"><i class="fa-solid fa-cart-shopping"></i> Add to Cart</button>
                    </div>
                 </div>
            </div>`;
        // DETAILS BUTTON EVENT
        productCard.querySelector(".btn-info").onclick = () => {
            openProductModal(product);
        };

        //3. add to the container
        productContainer.appendChild(productCard);
    })


}


// display category


const disPlayCatagories = (products) => {
    console.log("IN Display Button function")
    const categoriesContainer = document.getElementById("categories-container");
    categoriesContainer.innerHTML = "";
    const allButton = document.createElement("button");
    allButton.innerText = 'All';
    categoriesContainer.appendChild(allButton);
    allButton.classList.add("btn","btn-primary","m-2");
    allButton.onclick=()=>{disPlayProducts(products)}
    const categoris=[...new Set(products.map(product=>product.category))];
    categoris.forEach((category) => {
        const categoryButton = document.createElement("button");
        categoryButton.classList.add("btn","btn-primary","m-2")
        categoryButton.innerText =category;

        categoryButton.onclick=()=>{const filterProducts=products.filter(product=>product.category===category)
            disPlayProducts(filterProducts);
        }
        categoriesContainer.appendChild(categoryButton);
    });
}

const openProductModal = (product) => {
    document.getElementById("modal-title").innerText = product.title;
    // document.getElementById("modal-image").src = product.image;
    document.getElementById("modal-description").innerText = product.description;
    document.getElementById("modal-price").innerText = product.price;
    document.getElementById("modal-rating").innerText = product.rating.rate;

    document.getElementById("product_modal").showModal();
};

loadAllProducts();
// disPlayCatagories();