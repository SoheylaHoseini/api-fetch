
async function fetchProducts() {
   
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        const products = data.products;
        const productList = document.getElementById('product-list');
        productList.innerHTML = '';

        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'product';
            productElement.innerHTML = `
                <img src="${product.thumbnail}" alt="${product.title}">
                <div class="product-info">
                    <span>${product.title}</span>
                    <span>${product.price} $</span>
                </div>
            `;
            productList.appendChild(productElement);
        });
    } catch (error) {
        console.error('Error fetching products:', error);
        document.getElementById('product-list').textContent = 'خطا در بارگذاری محصولات';
    }
}

fetchProducts();