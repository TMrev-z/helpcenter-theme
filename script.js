// Dark Hero Theme JavaScript
document.addEventListener('DOMContentLoaded', function() {
  initPopularSearches();
  initCategoryCards();
  initSmoothScroll();
  initMarkdownParser();
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

// Markdown parser for article content
function initMarkdownParser() {
  const articleBody = document.querySelector('.article-body');
  if (!articleBody) return;
  
  const content = articleBody.innerHTML;
  
  // Check if content looks like markdown (contains # for headers or ** for bold)
  if (content.includes('##') || content.includes('**') || content.includes('```')) {
    articleBody.innerHTML = parseMarkdown(content);
  }
}

function parseMarkdown(text) {
  // Headers
  text = text.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  text = text.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  text = text.replace(/^# (.*$)/gim, '<h1>$1</h1>');
  
  // Bold
  text = text.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');
  
  // Italic  
  text = text.replace(/\*(.*?)\*/gim, '<em>$1</em>');
  
  // Code blocks
  text = text.replace(/```([\s\S]*?)```/gim, '<pre><code>$1</code></pre>');
  
  // Inline code
  text = text.replace(/`([^`]+)`/gim, '<code>$1</code>');
  
  // Links
  text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2">$1</a>');
  
  // Lists (simple implementation)
  text = text.replace(/^- (.*$)/gim, '<ul><li>$1</li></ul>');
  text = text.replace(/^\d+\. (.*$)/gim, '<ol><li>$1</li></ol>');
  
  // Line breaks
  text = text.replace(/\n/gim, '<br>');
  
  // Clean up multiple consecutive ul/ol tags
  text = text.replace(/<\/ul>\s*<ul>/gim, '');
  text = text.replace(/<\/ol>\s*<ol>/gim, '');
  
  return text;
}