const counters = document.querySelectorAll(".counter");

const runCounter = (counter) => {
  const target = Number(counter.dataset.target);
  let current = 0;
  const step = Math.max(1, Math.floor(target / 80));

  const interval = setInterval(() => {
    current += step;
    if (current >= target) {
      counter.textContent = target;
      clearInterval(interval);
    } else {
      counter.textContent = current;
    }
  }, 18);
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.dataset.done) {
      entry.target.dataset.done = "true";
      runCounter(entry.target);
    }
  });
}, { threshold: 0.4 });

counters.forEach(counter => observer.observe(counter));
