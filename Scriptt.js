document.addEventListener('DOMContentLoaded', function () {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const checkoutButton = document.getElementById('checkout-button');
    
    // Dummy cart data
    const cart = JSON.parse(localStorage.getItem('cart'));
    const total = localStorage.getItem('total');
    
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - Rp ${item.price}`;
        cartItems.appendChild(li);
    });
    
    cartTotal.textContent = `Rp ${total}`;
    
    checkoutButton.addEventListener('click', function () {
        const selectedPayment = document.querySelector('input[name="payment"]:checked').id;
        const selectedDelivery = document.querySelector('input[name="delivery"]:checked').id;
        
        // Perform the payment based on the selected method (Dana/OVO)
        if (selectedPayment === 'dana') {
            // Redirect to Dana app with the payment details
            window.location.href = 'dana://payment?amount=' + total;
        } else if (selectedPayment === 'ovo') {
            // Redirect to OVO app with the payment details
            window.location.href = 'ovo://pay?amount=' + total;
        }
        
        // Handle the delivery method (Kurir/Ambil Sendiri) here
    });
});
