document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const product = this.dataset.product;
        const price = this.dataset.price;
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        cart.push({ product, price });
        localStorage.setItem('cart', JSON.stringify(cart));

        alert(`${product} has been added to your cart!`);
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        star.addEventListener('click', () => {
            stars.forEach(s => s.classList.remove('selected'));
            star.classList.add('selected');
            let previousSibling = star.previousElementSibling;
            while (previousSibling) {
                previousSibling.classList.add('selected');
                previousSibling = previousSibling.previousElementSibling;
            }
        });
    });
});

