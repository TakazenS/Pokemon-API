let button = document.getElementById('button');
let image = document.getElementById('image');
let number = document.getElementById('number');
let name = document.getElementById('name');

const changePokemon = async () => {
    let randomPoke = Math.floor(Math.random() * 1024) + 1;

    let request = `https://pokeapi.co/api/v2/pokemon/${randomPoke}/`;

    let getData = await fetch(request);

    let response = await getData.json();

    image.src = response.sprites.front_default;
    number.textContent = `#${response.id}`;
    name.textContent = response.name;
};

changePokemon();
button.addEventListener('click', changePokemon);
