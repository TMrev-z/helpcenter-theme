document.addEventListener('DOMContentLoaded', function() {
  // 1. Popular searches タグ生成
  const popularContainer = document.querySelector('.popular-searches');
  if (popularContainer) {
    const tags = popularContainer.dataset.tags;
    if (tags) {
      const tagArray = tags.split(',').map(tag => tag.trim()).filter(tag => tag);
      tagArray.forEach(tag => {
        const button = document.createElement('button');
        button.className = 'popular-tag';
        button.setAttribute('data-search', tag);
        button.setAttribute('type', 'button');
        button.setAttribute('aria-label', `人気検索: ${tag}`);
        button.textContent = tag;
        popularContainer.appendChild(button);
      });
    }
  }
  
  // 2. Popular searches クリック処理
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('popular-tag')) {
      const searchInput = document.querySelector('.hero-search-input');
      const searchTerm = e.target.getAttribute('data-search');
      if (searchInput && searchTerm) {
        searchInput.value = searchTerm;
        searchInput.focus();
      }
    }
  });
  
  // 3. ナビゲーションスクロール処理
  const nav = document.querySelector('.nav');
  if (nav) {
    let scrollTimer;
    
    window.addEventListener('scroll', function() {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(function() {
        const scrollY = window.scrollY || window.pageYOffset;
        
        if (scrollY > 100) {
          nav.classList.add('nav--solid');
        } else {
          nav.classList.remove('nav--solid');
        }
      }, 10);
    }, { passive: true });
  }
  
  // 4. アクセシビリティ: フォーカストラップ
  const searchInput = document.querySelector('.hero-search-input');
  if (searchInput) {
    searchInput.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        this.value = '';
        this.blur();
      }
    });
  }
  
  // 5. パフォーマンス: 画像遅延読み込み（自動付与 + フォールバック）
  // 未指定の画像にlazy loading属性を自動付与
  document.querySelectorAll('img:not([loading])').forEach(img => {
    img.setAttribute('loading', 'lazy');
  });
  
  // ブラウザサポートのフォールバック
  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      img.src = img.dataset.src || img.src;
    });
  }
  
  // 6. 記事投票機能
  const voteButtons = document.querySelectorAll('.article-vote-up, .article-vote-down');
  voteButtons.forEach(button => {
    button.addEventListener('click', function() {
      const articleId = this.dataset.articleId;
      const voteType = this.classList.contains('article-vote-up') ? 'up' : 'down';
      
      // フィードバック表示
      this.textContent = '送信しました';
      this.disabled = true;
      
      // 他のボタンも無効化
      voteButtons.forEach(btn => {
        btn.disabled = true;
      });
    });
  });
  
  // 7. スムーズスクロール
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
});