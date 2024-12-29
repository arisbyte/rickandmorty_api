const characterContainer = document.getElementById('character-container');

// Fetch data from the Rick and Morty API
fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(data => {
    const characters = data.results;
    characters.forEach(character => {
      // Create a card for each character
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${character.image}" alt="${character.name}">
        <h2>${character.name}</h2>
        <p>Species: ${character.species}</p>
      `;
      characterContainer.appendChild(card);
    });
  })
  .catch(error => console.error('Error fetching data:', error));

