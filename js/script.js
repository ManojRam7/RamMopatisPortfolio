// Improved Confetti Shower Animation
document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W = window.innerWidth;
  let H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;
  window.addEventListener('resize', () => {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
  });
  const confettiColors = ['#ffd700', '#ff6a00', '#5f0a87', '#a4508b', '#fff', '#2575fc'];
  const confettiCount = 180;
  const confetti = [];
  function randomConfettiPiece() {
    return {
      x: Math.random() * W,
      y: Math.random() * -H, // start above the screen
      r: Math.random() * 6 + 4,
      d: Math.random() * 40 + 10,
      color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
      tilt: Math.random() * 20 - 10,
      tiltAngle: Math.random() * Math.PI,
      tiltAngleIncremental: (Math.random() * 0.07) + 0.05
    };
  }
  for (let i = 0; i < confettiCount; i++) {
    confetti.push(randomConfettiPiece());
  }
  function drawConfetti() {
    ctx.clearRect(0, 0, W, H);
    confetti.forEach(c => {
      ctx.beginPath();
      ctx.lineWidth = c.r;
      ctx.strokeStyle = c.color;
      ctx.moveTo(c.x + c.tilt + c.r / 3, c.y);
      ctx.lineTo(c.x + c.tilt, c.y + c.tilt + c.d / 5);
      ctx.stroke();
    });
  }
  function updateConfetti() {
    for (let i = 0; i < confetti.length; i++) {
      let c = confetti[i];
      c.y += (Math.cos(c.d) + 2 + c.r / 2) * 0.9;
      c.x += Math.sin(c.tiltAngle) * 1.2;
      c.tiltAngle += c.tiltAngleIncremental;
      c.tilt = Math.sin(c.tiltAngle) * 15;
      // If out of screen, respawn at top
      if (c.y > H + 20) {
        confetti[i] = randomConfettiPiece();
        confetti[i].y = -10;
      }
    }
  }
  function animateConfetti() {
    drawConfetti();
    updateConfetti();
    requestAnimationFrame(animateConfetti);
  }
  animateConfetti();
});
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
  