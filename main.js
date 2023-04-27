function createProductCard(src, productName, price, ratingStars, ratingScore) {
    return `
      <div class="product-card">
        <div class="product-image-wrapper">
          <img src="${src}" alt="Product Image">
          <div class="overlay">
            <button class="quick-view">Quick View</button>
          </div>
        </div>
        <h3>${productName}</h3>
        <p class="price">Price: $${price}</p>
        <div class="rating">
          <span>${ratingStars}</span>
          <span>${ratingScore}/5</span>
        </div>
      </div>`;
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const products = [
      {
        src: "https://cdn.discordapp.com/attachments/1098005406711812136/1098995097313497118/image_4.png",
        productName: "Product Name",
        price: "00.00",
        ratingStars: "★★★★☆",
        ratingScore: "4.5",
      },
      
      {
        src: "https://cdn.discordapp.com/attachments/1098005406711812136/1098995097313497118/image_4.png",
        productName: "Product Name",
        price: "00.00",
        ratingStars: "★★★★☆",
        ratingScore: "4.5",
      },

      {
        src: "https://cdn.discordapp.com/attachments/1098005406711812136/1098995097313497118/image_4.png",
        productName: "Product Name",
        price: "00.00",
        ratingStars: "★★★★☆",
        ratingScore: "4.5",
      },

      {
        src: "https://cdn.discordapp.com/attachments/1098005406711812136/1098995097313497118/image_4.png",
        productName: "Product Name",
        price: "00.00",
        ratingStars: "★★★★☆",
        ratingScore: "4.5",
      },

      {
        src: "https://cdn.discordapp.com/attachments/1098005406711812136/1098995097313497118/image_4.png",
        productName: "Product Name",
        price: "00.00",
        ratingStars: "★★★★☆",
        ratingScore: "4.5",
      },
      
    ];
  
    const productsGrid = document.querySelector(".products-grid");
    productsGrid.innerHTML = products.map(product => createProductCard(product.src, product.productName, product.price, product.ratingStars, product.ratingScore)).join("");
  });
  