document.getElementById('searchButton').addEventListener('click', () => {
    const pokemonName = document.getElementById('searchInput').value.toLowerCase().trim();
    if (pokemonName) {
        fetchPokemonData(pokemonName);
    } else {
        alert("Please enter a Pokémon name.");
    }
});

function fetchPokemonData(pokemonName) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Pokémon not found');
            }
            return response.json();
        })
        .then(data => {
            displayPokemonData(data);
        })
        .catch(error => {
            alert(error.message);
            document.getElementById('pokemonInfo').style.display = 'none';
        });
}

function displayPokemonData(data) {
    document.getElementById('pokemonName').textContent = data.name.charAt(0).toUpperCase() + data.name.slice(1);
    document.getElementById('pokemonType').textContent = data.types.map(type => type.type.name).join(', ');
    document.getElementById('pokemonHeight').textContent = data.height / 10 + ' m';
    document.getElementById('pokemonWeight').textContent = data.weight / 10 + ' kg';
    document.getElementById('pokemonBio').textContent = `This is a ${data.name}. It is of type(s) ${data.types.map(type => type.type.name).join(', ')}. It is ${data.height / 10} meters tall and weighs ${data.weight / 10} kg.`;
    document.getElementById('pokemonImage').src = data.sprites.front_default;
    document.getElementById('pokemonInfo').style.display = 'block';
}
function clearPokemonData() {
    document.getElementById('pokemonName').textContent = '';
    document.getElementById('pokemonType').textContent = '';
    document.getElementById('pokemonHeight').textContent = '';
    document.getElementById('pokemonWeight').textContent = '';
    document.getElementById('pokemonBio').textContent = '';
    document.getElementById('pokemonImage').src = '';
}