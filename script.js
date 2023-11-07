document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const checkoutButton = document.getElementById('checkout');

    let cart = [];
    let total = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-name');
            const price = parseInt(button.getAttribute('data-price'));
            cart.push({ name, price });
            total += price;

            updateCartDisplay();
        });
    });

    function updateCartDisplay() {
        cartItems.innerHTML = '';
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - Rp ${item.price}`;
            cartItems.appendChild(li);
        });

        cartTotal.textContent = `Rp ${total}`;
    }

    checkoutButton.addEventListener('click', () => {
        // Save cart data and total to local storage or send it to the booking page.
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('total', total);

        // Redirect to the booking page
        window.location.href = 'team.html';
    });
});
