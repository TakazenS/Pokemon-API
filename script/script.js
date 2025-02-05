let button = document.getElementById('button');
let pokeImage = document.getElementById('image');
let pokeNumber = document.getElementById('number');
let pokeName = document.getElementById('name');
let icon = document.querySelector('link[rel="shortcut icon"]');
let appleIcon = document.querySelector('link[rel="apple-touch-icon"]');

const changePokemon = async () => {
    let randomPoke = Math.floor(Math.random() * 1024) + 1;

    let request = `https://pokeapi.co/api/v2/pokemon/${randomPoke}/`;

    let getData = await fetch(request);

    let response = await getData.json();
    
    icon.href = response.sprites.front_default;
    appleIcon = icon.href
    pokeImage.src = icon.href;
    pokeNumber.textContent = `#${response.id}`;
    upperCaseName = pokeName.textContent = response.name;

    pokeName.textContent = upperCaseName.charAt(0).toUpperCase() + upperCaseName.slice(1).toLowerCase();
};

changePokemon();
button.addEventListener('click', changePokemon);

