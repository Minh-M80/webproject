function navigate(page) {
  const contentDiv = document.getElementById('content');

  fetch(`${page}/${page}.html`)
    .then(response => response.text())
    .then(data => {
      contentDiv.innerHTML = data;

      // 🔥 Load CSS tương ứng
      loadCSS(`${page}/style.css`);

      window.history.pushState({ page }, "", `#${page}`);
      updateActiveLink(page);
    })
    .catch(error => {
      contentDiv.innerHTML = "<p>Page not found.</p>";
    });
}


  function updateActiveLink(page) {
    const allLinks = document.querySelectorAll('header a, footer a');
    allLinks.forEach(link => {
      link.classList.remove('active');
    });

    const headerLink = document.getElementById(`nav-${page}`);
    const footerLink = document.getElementById(`footer-${page}`);

    if (headerLink) headerLink.classList.add('active');
    if (footerLink) footerLink.classList.add('active');
  }

  window.addEventListener("load", () => {
    const hash = window.location.hash.replace('#', '') || 'home';
    navigate(hash);
  });

  window.addEventListener("popstate", () => {
    const page = window.location.hash.replace('#', '') || 'home';
    navigate(page);
  });

  // function loadCSS(path) {
  //   const link = document.createElement("link");
  //   link.rel = "stylesheet";
  //   link.href = path;
  //   document.head.appendChild(link);
  // }
 
  function loadCSS(path) {
    // Xóa CSS cũ (nếu có) dựa vào thuộc tính tùy chỉnh
    const oldCSS = document.querySelectorAll('link[data-spa-css]');
    oldCSS.forEach(link => link.remove());
  
    // Tạo thẻ link mới
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = path;
    link.setAttribute("data-spa-css", "true"); // đánh dấu để dễ xóa sau
    document.head.appendChild(link);
  }
  
  