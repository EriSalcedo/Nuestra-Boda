// Animación simple al cargar cada sección
const pages = document.querySelectorAll('.page');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.3 });

pages.forEach(page => {
  page.style.opacity = 0;
  page.style.transform = 'translateY(20px)';
  observer.observe(page);
});
const music = document.getElementById('music');
const musicBtn = document.getElementById('music-btn');
let playing = false;

musicBtn.addEventListener('click', () => {
  if (!playing) {
    music.play();
    musicBtn.textContent = '⏸ Pausar';
  } else {
    music.pause();
    musicBtn.textContent = '▶ Música';
  }
  playing = !playing;
});
const weddingDate = new Date('2026-10-12T17:00:00').getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = weddingDate - now;

  if (diff <= 0) return;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
}, 1000);
