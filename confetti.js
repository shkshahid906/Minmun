// Confetti animation
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');
let confettiPieces = [];
let animationFrameId;
let showConfetti = true; // Declare showConfetti and initialize it to true.  It can be changed later based on other conditions.

// Set canvas to full window size
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

// Create confetti pieces
function createConfettiPieces() {
  const colors = [
    '#FF5252', // red
    '#FF4081', // pink
    '#E040FB', // purple
    '#7C4DFF', // deep purple
    '#536DFE', // indigo
    '#448AFF', // blue
    '#40C4FF', // light blue
    '#18FFFF', // cyan
    '#64FFDA', // teal
    '#69F0AE', // green
    '#B2FF59', // light green
    '#EEFF41', // lime
    '#FFFF00', // yellow
    '#FFD740', // amber
    '#FFAB40', // orange
    '#FF6E40', // deep orange
  ];

  const pieces = [];
  const count = Math.floor(window.innerWidth / 10); // Adjust density based on screen width

  for (let i = 0; i < count; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: -Math.random() * canvas.height, // Start above the screen
      size: Math.random() * 10 + 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: Math.random() * 3 + 1,
      angle: Math.random() * Math.PI * 2,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.2,
    });
  }

  return pieces;
}

// Use the global `showConfetti` variable dynamically
function animate() {
  if (!window.showConfetti) { // Use `window.showConfetti` to access the global variable
    cancelAnimationFrame(animationFrameId);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    return;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  confettiPieces.forEach((piece, index) => {
    // Update position
    piece.y += piece.speed;
    piece.x += Math.sin(piece.angle) * 0.5;
    piece.rotation += piece.rotationSpeed;

    // Draw confetti piece
    ctx.save();
    ctx.translate(piece.x, piece.y);
    ctx.rotate(piece.rotation);

    ctx.fillStyle = piece.color;
    ctx.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size / 2);

    ctx.restore();

    // Reset if it goes off screen
    if (piece.y > canvas.height) {
      confettiPieces[index].y = -piece.size;
      confettiPieces[index].x = Math.random() * canvas.width;
    }
  });

  animationFrameId = requestAnimationFrame(animate);
}

// Initialize confetti
function initConfetti() {
  resizeCanvas();
  confettiPieces = createConfettiPieces();
  animate();
}

// Event listeners
window.addEventListener('resize', resizeCanvas);

// Start confetti when main content is shown
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(initConfetti, 3000);
});