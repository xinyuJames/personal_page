function setActivePageSelector() {
  // Get current page filename from URL (e.g., "index.html" or "blog.html")
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  // Find all navigation links in the page selector
  const selectorLinks = document.querySelectorAll('.page-selector a');

  // Loop through each link
  selectorLinks.forEach(link => {
    // Remove "active" class from all links first
    link.classList.remove('active');

    // Add "active" class only to the link that matches current page
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
}

function init() {
  // Highlight current page in navigation
  setActivePageSelector();

  // Enable smooth scrolling for anchor links
  //enableSmoothScrolling();

  console.log('Personal webpage initialized!');
}


// Wait for page to fully load, then run initialization
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
