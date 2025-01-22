async function fetchProducts() {
    const apiUrl = 'http://localhost:3000/products'; // آدرس API محلی شما
    const apiKey = '4NH9cchNO9mdtB93TSwmhR8oWdxxvEzODGI9jalqBMy4Zpv1KztyQRvayNysGhcK'; // کلید API

    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}` // ارسال API Key در هدر
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const products = await response.json();
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
