function navigate(page) {
  const contentDiv = document.getElementById('content');

  fetch(`${page}/${page}.html`)
    .then(response => response.text())
    .then(data => {
      contentDiv.innerHTML = data;

      //  Load CSS tương ứng
      loadCSS(`${page}/style.css`);
      loadJS(`${page}/main.js`);
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

    // const headerLink = document.getElementById(`nav-${page}`);
    // const footerLink = document.getElementById(`footer-${page}`);

    // if (headerLink) headerLink.classList.add('active');
    // if (footerLink) footerLink.classList.add('active');
    const ids = [`nav-${page}`, `nav-${page}-desktop`, `footer-${page}`];
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add('active');
  });
  }

  window.addEventListener("load", () => {
    const hash = window.location.hash.replace('#', '') || 'home';
    console.log("load",hash)
    navigate(hash);
  });

  window.addEventListener("popstate", () => {
    const page = window.location.hash.replace('#', '') || 'home';
    const page2 = window.location.hash;
    console.log("hash",page2)
    console.log("popstate",page)
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
  function loadJS(path) {
    // Xóa script cũ (nếu có) dựa vào thuộc tính tùy chỉnh
    const oldScripts = document.querySelectorAll('script[data-spa-js]');
    oldScripts.forEach(script => script.remove());
  
    // Tạo thẻ script mới
    const script = document.createElement('script');
    script.src = path;
    script.setAttribute('data-spa-js', 'true'); // đánh dấu để dễ xóa
    script.defer = true; // Tùy chọn: đảm bảo script chạy sau khi DOM load
    document.body.appendChild(script);
  }
  
  
 
  const backToTopButton = document.getElementById('backToTop');

  window.onscroll = function () {
    if (window.scrollY > 500) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  };

  backToTopButton.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  function updateStatus() {
    const now = new Date();
    const hour = now.getHours();

    const statusDiv = document.getElementById("status");

    if (hour >= 8 && hour < 22) {
      statusDiv.innerText = "We're opening";
    } else {
      statusDiv.innerText = "We're closing";
    }
  }

 
  setInterval(updateStatus, 1000);

  
  updateStatus();