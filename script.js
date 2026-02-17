console.log("connected");

const loadAllProducts = async () =>{
    const URL= "https://fakestoreapi.com/products";
    const res = await fetch(URL);
    const data =await res.json();
    diplayProducts(data);
}

const diplayProducts = (products) =>{
    const productContainer = document.getElementById("products-container");
    productContainer.innerHTML="";
    postMessage.forEach(products =>{
        const li =document.createElement()
    
    })
}