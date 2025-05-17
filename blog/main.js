const submitBtn = document.querySelector('.submit-btn');
const successMsg = document.querySelector('.email__success');
submitBtn.addEventListener('click', () => {
    successMsg.style.display = 'block';
    setTimeout(() => {
      successMsg.style.display = 'none';
    }, 3000);
  });