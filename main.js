// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons(); // Ensure Lucide CDN is working
});

// Global state
let showConfetti = false;

// Initialize the application
function initApp() {
  // Simulate loading time
  setTimeout(() => {
    document.getElementById('loading-screen').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');
    
    // Show confetti
    showConfetti = true;
    
    // Hide confetti after 5 seconds
    setTimeout(() => {
      showConfetti = false;
    }, 5000);
  }, 3000);
}

// Start the app
initApp();
