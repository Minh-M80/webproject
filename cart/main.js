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
    showMessage('Mã không hợp lệ', 'error');
});

updateBtn.addEventListener('click', () => {
    showMessage('Thêm thành công', 'success');
});
