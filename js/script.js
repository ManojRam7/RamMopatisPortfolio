// Mobile navigation
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  links.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => links.classList.remove('open')));
}

// Highlight the current page in the navigation
const page = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach((a) => {
  const href = a.getAttribute('href');
  if (href === page || (page === 'index.html' && href === './') || (page === 'ai-career-copilot.html' && href === 'projects.html')) {
    a.classList.add('active');
  }
});

// Fade sections in as they scroll into view
const revealables = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  revealables.forEach((el) => io.observe(el));
} else {
  revealables.forEach((el) => el.classList.add('in'));
}

// Project filters
const filters = document.querySelectorAll('.filter');
if (filters.length) {
  const cards = document.querySelectorAll('.pcard');
  const groups = document.querySelectorAll('.project-group');

  filters.forEach((btn) => {
    const key = btn.dataset.filter;
    const n = key === 'all' ? cards.length : [...cards].filter((c) => c.dataset.cat.split(' ').includes(key)).length;
    const count = btn.querySelector('.count');
    if (count) count.textContent = n;

    btn.addEventListener('click', () => {
      filters.forEach((b) => { b.classList.remove('on'); b.setAttribute('aria-pressed', 'false'); });
      btn.classList.add('on');
      btn.setAttribute('aria-pressed', 'true');
      cards.forEach((c) => {
        const show = key === 'all' || c.dataset.cat.split(' ').includes(key);
        c.classList.toggle('hide', !show);
        if (show) c.classList.add('in');
      });
      groups.forEach((g) => {
        g.style.display = g.querySelector('.pcard:not(.hide)') ? '' : 'none';
      });
    });
  });
}

// Footer year
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
