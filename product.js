const sortOptions = document.getElementById('sort-options');
const productContainer = document.getElementById('product-container');
const cartContainer = document.getElementById('cart-container');
const cartItems = document.getElementById('cart-items');
const cartIcon = document.querySelector('.cart-icon');
const cartCount = document.querySelector('.cart-count');
const closeCartBtn = document.querySelector('.close-btn');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

// Sorting functionality
document.addEventListener("DOMContentLoaded", function () {
    let container = document.getElementById("product-container");
    let products = Array.from(container.getElementsByClassName("product"));

    products.forEach((product, index) => product.setAttribute("data-index", index));

    document.getElementById("sort-options").addEventListener("change", function () {
        let sortBy = this.value;
        let sortedProducts;

        if (sortBy === "low-to-high") {
            sortedProducts = [...products].sort((a, b) => 
                parseInt(a.getAttribute("data-price")) - parseInt(b.getAttribute("data-price"))
            );
        } else if (sortBy === "high-to-low") {
            sortedProducts = [...products].sort((a, b) => 
                parseInt(b.getAttribute("data-price")) - parseInt(a.getAttribute("data-price"))
            );
        } else {
            sortedProducts = [...products].sort((a, b) => 
                parseInt(a.getAttribute("data-index")) - parseInt(b.getAttribute("data-index"))
            );
        }

        container.innerHTML = "";
        sortedProducts.forEach(product => container.appendChild(product));

        
        container.style.display = "grid";
        container.style.gridTemplateColumns = "repeat(4, 1fr)";
        container.style.gap = "20px";
    });
});



// Cart functionality
const cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const product = e.target.closest('.product');
        const title = product.querySelector('h2').textContent;
        const price = product.querySelector('.price').textContent;

        cart.push({ title, price });
        updateCartDisplay();
    });
});

function updateCartDisplay() {
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `<span>${item.title}</span><span>${item.price}</span><button onclick="removeFromCart(${index})">Remove</button>`;
        cartItems.appendChild(div);

        total += parseFloat(item.price.replace('$', '').replace(',',''));
    });
    cartCount.textContent = cart.length;
    document.getElementById('cart-total').innerHTML = `<strong>Total:</strong> $${total.toLocaleString()}`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
}

cartIcon.addEventListener('click', () => {
    cartContainer.style.display = 'block';
});

closeCartBtn.addEventListener('click', () => {
    cartContainer.style.display = 'none';
});

// Search functionality
document.addEventListener("DOMContentLoaded", function () {
    let searchInput = document.getElementById("search-input");
    let searchButton = document.getElementById("search-button");
    let products = document.querySelectorAll(".product");

    function searchProducts() {
        let searchText = searchInput.value.trim().toLowerCase();
        let found = false; // Track if a match is found

        products.forEach(product => {
            let productName = product.getAttribute("data-name").toLowerCase();
            if (productName.includes(searchText)) {
                product.style.display = "block"; // Show matched product
                found = true;
            } else {
                product.style.display = "none"; // Hide others
            }
        });

        // If the search is empty, show all products again
        if (searchText === "") {
            products.forEach(product => product.style.display = "block");
        }

        console.log("Search Input:", searchText);
    }

    // Event listeners for button click and Enter key
    searchButton.addEventListener("click", searchProducts);
    searchInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            searchProducts();
        }
    });
});
