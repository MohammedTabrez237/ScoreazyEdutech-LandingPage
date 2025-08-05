function handleSubmit(e) {
  e.preventDefault();
  document.getElementById("thankyou").classList.remove("hidden");
}

// Countdown to 7 days from now
const deadline = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

function updateTimer() {
  const now = new Date();
  const diff = deadline - now;
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  document.getElementById('days').textContent = d.toString().padStart(2, '0');
  document.getElementById('hours').textContent = h.toString().padStart(2, '0');
  document.getElementById('minutes').textContent = m.toString().padStart(2, '0');
  document.getElementById('seconds').textContent = s.toString().padStart(2, '0');
}

setInterval(updateTimer, 1000);

let currentIndex = 0;
const track = document.getElementById('testimonialTrack');
const cards = track.children;
const visibleCards = 3;
const cardWidth = 320 + 32; // 300px + 20px padding + 12px gap

function updateSlider() {
  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

function nextTestimonial() {
  if (currentIndex < cards.length - visibleCards) {
    currentIndex++;
  } else {
    currentIndex = 0; // loop
  }
  updateSlider();
}

function prevTestimonial() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = cards.length - visibleCards;
  }
  updateSlider();
}

// Auto-slide every 6s
setInterval(nextTestimonial, 6000);

