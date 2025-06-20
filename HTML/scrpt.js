document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    alert(`You clicked on ${e.target.textContent}`);
  });
});
