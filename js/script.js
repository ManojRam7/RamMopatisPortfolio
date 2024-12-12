// Initialize AOS animations
AOS.init({
    duration: 800, // Animation duration in ms
    offset: 120,   // Animation offset in px
  });
  
  // Smooth Scrolling for Navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  });
  
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
  