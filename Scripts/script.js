  // Manually list your HTML pages here (relative to your repo root or folder)
  const allPages = [
    "CookieClicker",
    "FarmingSimulator",
    "HigherOrLower",
    "kaboomsRNG",
    "MemoryTest",
    "RockPaperScissors",
    "Scrambled",
    "SmileyfacePlatformer",
    "TheSpaceshipGame",
    "WhatsWorthMore"
  ];

  const input = document.getElementById('searchInput');
  const resultsList = document.getElementById('results');

  input.setAttribute("autocomplete", "off");

  input.addEventListener('input', () => {
    const query = input.value.toLowerCase();
    resultsList.innerHTML = '';

    // Filter based on search input
    const matches = allPages.filter(page =>
      page.toLowerCase().includes(query)
    );

    // Show results
    matches.forEach(page => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      if (window.location.pathname.split('/').pop() == "index.html" || window.location.pathname.split('/').pop() == "Home.html") {
        a.href = `Games/${page}.html`; 
      } else {
        a.href = `../Games/${page}.html`; 
      }
      a.textContent = page;
      li.appendChild(a);
      resultsList.appendChild(li);
    });
  });

  input.addEventListener('focus', () => {
  results.style.display = 'flex'; // or 'block', depending on your layout
});

input.addEventListener('blur', () => {
  // Use a small delay to allow clicks on results before hiding
  setTimeout(() => {
    results.style.display = 'none';
  }, 150);
});
