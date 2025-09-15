// Initialize AOS animations
AOS.init({
    duration: 800, // Animation duration in ms
    offset: 120,   // Animation offset in px
  });
  
  // Smooth Scrolling for Navigation
  
  // Tooltip for Contact Icons
  document.querySelectorAll('.contact-link').forEach(link => {
    link.addEventListener('mouseover', function () {
      const tooltip = document.createElement('div');
      tooltip.className = 'tooltip';
      tooltip.textContent = this.textContent.trim();
      document.body.appendChild(tooltip);
  
      // Position the tooltip
      const rect = this.getBoundingClientRect();
      tooltip.style.left = `${rect.left + rect.width / 2 - tooltip.offsetWidth / 2}px`;
      tooltip.style.top = `${rect.top - 30}px`;
  
      this.addEventListener('mouseleave', () => tooltip.remove());
    });
  });
  
  // Button Hover Animation
// Dark Mode Toggle
document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.createElement('button');
  toggleBtn.textContent = '🌙 Dark Mode';
  toggleBtn.className = 'btn';
  toggleBtn.style.position = 'fixed';
  toggleBtn.style.bottom = '32px';
  toggleBtn.style.right = '32px';
  toggleBtn.style.zIndex = '1000';
  toggleBtn.style.background = '#222';
  toggleBtn.style.color = '#ffd700';
  toggleBtn.style.fontWeight = 'bold';
  toggleBtn.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
  document.body.appendChild(toggleBtn);

  // Check localStorage for dark mode preference
  let darkMode = localStorage.getItem('darkMode') === 'true';
  if (darkMode) {
    document.body.classList.add('dark-mode');
    toggleBtn.textContent = '☀️ Light Mode';
  }

  toggleBtn.addEventListener('click', function() {
    darkMode = !darkMode;
    document.body.classList.toggle('dark-mode', darkMode);
    toggleBtn.textContent = darkMode ? '☀️ Light Mode' : '🌙 Dark Mode';
    localStorage.setItem('darkMode', darkMode);
  });
});
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'scale(1.1)';
      button.style.transition = 'transform 0.3s ease';
    });
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'scale(1)';
    });
  });
  