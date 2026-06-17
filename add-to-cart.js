document.addEventListener("DOMContentLoaded", () => {
    const cartCountElement = document.getElementById('cart-count');
    const buttons = document.querySelectorAll('button');

    // Load cart items from localStorage
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    updateCartCount();

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const item = e.target.parentElement.querySelector('h4').textContent.split(': ')[1];
            const price = e.target.parentElement.querySelector('p').textContent.split(': ')[1];

            const cartItem = {
                name: item,
                price: price
            };

            // Add the item to the cart array and update localStorage
            cartItems.push(cartItem);
            localStorage.setItem('cart', JSON.stringify(cartItems));

            // Update the cart count
            updateCartCount();
        });
    });

    function updateCartCount() {
        cartCountElement.textContent = cartItems.length;
    }
});
