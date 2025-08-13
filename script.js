// Dark Hero Theme JavaScript
console.log('Dark Hero Theme loaded');

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded');
  
  // Basic popular searches functionality
  const popularContainer = document.querySelector('.popular-searches');
  if (popularContainer) {
    console.log('Popular container found');
    const tags = popularContainer.dataset.tags;
    if (tags) {
      const tagArray = tags.split(',').map(tag => tag.trim()).filter(tag => tag);
      tagArray.forEach(tag => {
        const button = document.createElement('button');
        button.className = 'popular-tag';
        button.textContent = tag;
        button.onclick = function() {
          const searchInput = document.querySelector('.hero-search-input');
          if (searchInput) {
            searchInput.value = tag;
            searchInput.focus();
          }
        };
        popularContainer.appendChild(button);
      });
    }
  }
});