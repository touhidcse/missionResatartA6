const loadAllProducts = () => {
    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            disPlayProducts(data);
            disPlayCatagories(data);
        });
}
// category
// : 
// "men's clothing"
// description
// : 
// "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id
// : 
// 1
// image
// : 
// "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
// price
// : 
// 109.95
// rating
// : 
// {rate: 3.9, count: 120}
// title
// : 
// "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"



const disPlayProducts = (products) => {
    //1. Get the container and empty the container
    const productContainer = document.getElementById("products-container");
    productContainer.innerHTML = "";

    products.forEach((product) => {
        //2. Create HTML Element
        const productCard = document.createElement("div");
        productCard.innerHTML = `<div class="card w-64 bg-base-100 shadow-lg">
                 <div class="bg-gray-300 flex justify-center items-center h-48">
                     <figure class="w-40 h-40">
                         <img src="${product.image}" class="w-full h-full object-contain" />
                     </figure>
                </div>
                <div class="card-body flex flex-col justify-between">
                    <div>
                        <p class="flex text-sm"> <span>${product.category}</span> ${product.rating.rate} (${product.rating.count})</p>
                        <h2 class="card-title line-clamp-1">${product.title}</h2>
                        <p>${product.price}</p>
                    </div>

                    <div class="card-actions flex">
                        <button class="btn bg-white"><i class="fa-regular fa-eye"></i>Details</button>
                        <button class="btn btn-info"><i class="fa-solid fa-cart-shopping"></i> Add to Cart</button>
                    </div>
                 </div>
            </div>`;

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
    allButton.innerHTML = 'All';
    categoriesContainer.appendChild(allButton);
    products.forEach((product) => {
        const categoryButton = document.createElement("button");
        categoryButton.innerHTML = product.category;
        categoriesContainer.appendChild(categoryButton);
    });
}