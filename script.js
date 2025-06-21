const tags = document.querySelectorAll('.skills-cloud span');

tags.forEach(tag => {
  const x = Math.random() * 80;
  const y = Math.random() * 80;
  tag.style.top = `${y}%`;
  tag.style.left = `${x}%`;
});

