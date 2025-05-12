let currentIndex = 0;

const cardsData = [
  {
    type: 'video',
    src: 'ved5.mp4',
    quote: 'May all your wishes come true today and always!'
  },
  {
    type: 'image',
    src: 'img1.jpg',
    quote: 'Happy Birthday! May your day be as bright as your smile and as wonderful as you are!'
  },
  {
    type: 'video',
    src: 'ved3.mp4',
    quote: 'Another year older, another year wiser. But still just as fun!'
  },
  {
    type: 'image',
    src: 'img2.jpg',
    quote: 'Wishing you a day filled with happiness and a year filled with joy!'
  },
  {
    type: 'video',
    src: 'ved6.mp4',
    quote: 'May all your wishes come true today and always!'
  },
  {
    type: 'image',
    src: 'img3.jpg',
    quote: 'Count your life by smiles, not tears. Count your age by friends, not years!'
  },
  {
    type: 'video',
    src: 'ved1.mp4',
    quote: 'May all your wishes come true today and always!'
  },
   {
    type: 'video',
    src: 'ved4.mp4',
    quote: 'May all your wishes come true today and always!'
  }
];

const cardsWrapper = document.getElementById('cards-wrapper');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const cardCounter = document.getElementById('card-counter');

// Create all cards, but only one is visible at a time
function createCards() {
  cardsWrapper.innerHTML = ''; // Clear existing cards

  cardsData.forEach((card, index) => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('birthday-card');
    cardElement.dataset.index = index;

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    let mediaElement;

    if (card.type === 'image') {
      const img = document.createElement('img');
      img.src = card.src;
      img.className = 'card-image';
      img.alt = 'Birthday Image';
      mediaElement = img;
    } else if (card.type === 'video') {
      const video = document.createElement('video');
      video.src = card.src;
      video.className = 'card-video';
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.autoplay = true;

      // Force autoplay programmatically
      video.addEventListener('canplay', () => {
        video.play().catch((e) => {
          console.warn('Autoplay failed:', e);
        });
      });

      mediaElement = video;
    }

    const quoteDiv = document.createElement('div');
    quoteDiv.className = 'card-quote';
    quoteDiv.innerHTML = `<p>${card.quote}</p>`;

    cardContent.appendChild(mediaElement);
    cardContent.appendChild(quoteDiv);
    cardElement.appendChild(cardContent);

    if (index !== currentIndex) {
      cardElement.style.display = 'none';
    }

    cardsWrapper.appendChild(cardElement);
  });

  updateCounter();
}


function updateCounter() {
  cardCounter.textContent = `${currentIndex + 1} / ${cardsData.length}`;
}

function showCard(index) {
  const cards = document.querySelectorAll('.birthday-card');

  cards.forEach((card, idx) => {
    const video = card.querySelector('video');

    if (idx === index) {
      card.style.display = 'block';

      // If it's a video card, play it
      if (video) {
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        video.play().catch(err => {
          console.warn('Video play error:', err);
        });
      }

    } else {
      if (video) video.pause();
      card.style.display = 'none';
    }
  });

  updateCounter();
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + cardsData.length) % cardsData.length;
  showCard(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % cardsData.length;
  showCard(currentIndex);
});

document.addEventListener('DOMContentLoaded', () => {
  createCards();
  showCard(currentIndex);
});
