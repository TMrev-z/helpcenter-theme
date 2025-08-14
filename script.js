// Dark Hero Theme JavaScript
document.addEventListener('DOMContentLoaded', function() {
  initPopularSearches();
  initCategoryCards();
  initSmoothScroll();
  initMarkdownParser();
  initMobileMenu();
  initSearchSuggestions();
  initAccessibility();
});

// Mobile menu functionality
function initMobileMenu() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (!menuToggle || !mobileMenu) return;
  
  menuToggle.addEventListener('click', function() {
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    
    this.setAttribute('aria-expanded', !isExpanded);
    mobileMenu.hidden = isExpanded;
    
    // Update button text for screen readers
    this.setAttribute('aria-label', isExpanded ? 'メニューを開く' : 'メニューを閉じる');
    
    // Animate hamburger
    const hamburger = this.querySelector('.hamburger');
    if (hamburger) {
      hamburger.style.transform = isExpanded ? 'rotate(0deg)' : 'rotate(45deg)';
    }
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
      menuToggle.setAttribute('aria-expanded', 'false');
      mobileMenu.hidden = true;
      menuToggle.setAttribute('aria-label', 'メニューを開く');
      
      const hamburger = menuToggle.querySelector('.hamburger');
      if (hamburger) {
        hamburger.style.transform = 'rotate(0deg)';
      }
    }
  });
  
  // Close menu on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
      menuToggle.setAttribute('aria-expanded', 'false');
      mobileMenu.hidden = true;
      menuToggle.focus();
    }
  });
}

// Search suggestions (placeholder for API integration)
function initSearchSuggestions() {
  const searchInputs = document.querySelectorAll('input[type="search"]');
  
  searchInputs.forEach(input => {
    const suggestionsContainer = input.parentNode.querySelector('.search-suggestions');
    if (!suggestionsContainer) return;
    
    let debounceTimer;
    
    input.addEventListener('input', function() {
      clearTimeout(debounceTimer);
      const query = this.value.trim();
      
      if (query.length < 2) {
        suggestionsContainer.innerHTML = '';
        suggestionsContainer.style.display = 'none';
        return;
      }
      
      debounceTimer = setTimeout(() => {
        // Mock suggestions - in production, this would call an API
        const mockSuggestions = [
          'パスワードリセット',
          'プラン変更',
          'アカウント削除',
          'ログインできない',
          '料金について'
        ].filter(suggestion => 
          suggestion.toLowerCase().includes(query.toLowerCase())
        );
        
        if (mockSuggestions.length > 0) {
          suggestionsContainer.innerHTML = mockSuggestions
            .map(suggestion => 
              `<div class="suggestion-item" role="option" tabindex="-1">${suggestion}</div>`
            ).join('');
          suggestionsContainer.style.display = 'block';
          
          // Add click handlers to suggestions
          suggestionsContainer.querySelectorAll('.suggestion-item').forEach(item => {
            item.addEventListener('click', () => {
              input.value = item.textContent;
              suggestionsContainer.style.display = 'none';
              input.form.submit();
            });
          });
        } else {
          suggestionsContainer.style.display = 'none';
        }
      }, 300);
    });
    
    // Hide suggestions when input loses focus
    input.addEventListener('blur', function() {
      setTimeout(() => {
        suggestionsContainer.style.display = 'none';
      }, 200);
    });
  });
}

// Accessibility enhancements
function initAccessibility() {
  // Add focus indicators for keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-navigation');
    }
  });
  
  document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
  });
  
  // Improve screen reader experience for dynamic content
  const dynamicElements = document.querySelectorAll('[aria-live]');
  dynamicElements.forEach(element => {
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.type === 'childList' || mutation.type === 'characterData') {
          // Announce changes to screen readers
          element.setAttribute('aria-live', 'polite');
        }
      });
    });
    
    observer.observe(element, { childList: true, subtree: true, characterData: true });
  });
  
  // Add reading time helper function
  window.readingTime = function(content) {
    if (!content) return 1;
    const wordsPerMinute = 500; // 日本語での平均読み速度（文字/分）
    const textLength = content.replace(/<[^>]*>/g, '').length;
    return Math.max(1, Math.ceil(textLength / wordsPerMinute));
  };
}

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