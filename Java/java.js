links.forEach(link => {
    link.addEventListener('click', () => {
      links.forEach(l => l.classList.remove('bg-dark', 'text-white'));
      link.classList.add('bg-dark', 'text-white', 'rounded');
    });
  });