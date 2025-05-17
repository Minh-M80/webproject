const applyBtn = document.querySelector('.apply-btn');
const updateBtn = document.querySelector('.update-btn');
const messageBox = document.getElementById('cart-message');

function showMessage(text, type) {
    messageBox.textContent = text;
    messageBox.className = `cart-message ${type}`;
    messageBox.style.display = 'block';

    setTimeout(() => {
    messageBox.style.display = 'none';
    }, 10000); 
}

applyBtn.addEventListener('click', () => {
    showMessage('Invalid coupon', 'error');
});

updateBtn.addEventListener('click', () => {
    showMessage('Update successfully', 'success');
});
