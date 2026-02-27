console.log("connected");


const loadAllProducts= ()=>{
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        disPlayProducts(data);
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

const disPlayProducts = (products) =>{
     //1. Get the container and empty the container
     const productContainer = document.getElementById("products-container");
     productContainer.innerHTML="";
    
     products.forEach((product) =>{
        //2. Create HTML Element
        const productCard = document.createElement("div");
        productCard.innerHTML=`<div class="product-card">
            <h2>${product.title}</h2>
            <p>${product.price}</p>
        </div>`;

        //3. add to the container
        productContainer.appendChild(productCard);
     })

}

loadAllProducts();