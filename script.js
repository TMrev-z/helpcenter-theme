// Dark Hero Theme JavaScript
document.addEventListener('DOMContentLoaded', function() {
  initPopularSearches();
  initCategoryCards();
  initSmoothScroll();
});

// Popular searches functionality
function initPopularSearches() {
  const container = document.querySelector('.popular-searches');
  if (!container) return;
  
  // Clear existing tags (in case of duplicate initialization)
  const existingTags = container.querySelectorAll('.popular-tag');
  existingTags.forEach(tag => tag.remove());
  
  const tags = container.dataset.tags;
  if (!tags) return;
  
  // Remove duplicates and empty strings
  const tagList = [...new Set(tags.split(',').map(tag => tag.trim()).filter(tag => tag))];
  
  tagList.forEach(tag => {
    const link = document.createElement('a');
    link.href = `/hc/ja/search?query=${encodeURIComponent(tag)}`;
    link.className = 'popular-tag';
    link.textContent = tag;
    container.appendChild(link);
  });
}

// Category cards animation
function initCategoryCards() {
  const cards = document.querySelectorAll('.category-card');
  
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
}

// Smooth scroll for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}