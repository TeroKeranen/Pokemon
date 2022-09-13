const pokemons = [
    {
        id: 1,
        name: 'charmander',
        type: 'fire',
        img: 'https://archives.bulbagarden.net/media/upload/7/73/004Charmander.png',
        text: "Charmander is a bipedal, reptilian Pokémon with a primarily orange body and blue eyes. Its underside from the chest down and the soles of its feet are cream-colored. It has two small fangs visible in its upper jaw and two smaller fangs in its lower jaw. A fire burns at the tip of this Pokémon's slender tail and has blazed there since Charmander's birth. The flame can be used as an indication of Charmander's health and mood, burning brightly when the Pokémon is strong, weakly when it is exhausted, wavering when it is happy, and blazing when it is enraged. It is said that Charmander dies if its flame goes out. However, if the Pokémon is healthy, the flame will continue to burn even if it gets a bit wet and is said to steam in the rain."
    },

    {
        id: 2,
        name: 'Squirtle',
        type: 'water',
        img: 'https://archives.bulbagarden.net/media/upload/3/39/007Squirtle.png',
        text: "Squirtle is a small reptilian Pokémon that resembles a light-blue turtle. While it typically walks on its two short legs, it has been shown to run on all fours in Super Smash Bros. Brawl. It has large, purplish or reddish eyes and a slightly hooked upper lip. Each of its hands and feet have three pointed digits. The end of its long tail curls inward. Its body is encased by a tough shell that forms and hardens after birth. This shell is brown on the top, pale yellow on the bottom, and has a thick white ridge between the two halves."
    },

    {
        id: 3,
        name : 'Caterpie',
        type: 'bug',
        img : 'https://archives.bulbagarden.net/media/upload/5/5d/010Caterpie.png',
        text: "Caterpie is an insect Pokémon that resembles a green caterpillar with a yellow underside and teardrop-shaped tail. There are yellow ring-shaped markings down the sides of its segmented body, which resemble its eyes and are meant to scare off predators. Its most notable characteristic is the bright red antenna (osmeterium) on its head, which releases a stench to repel predators. Despite these features and its camouflage in green foliage, Caterpie is often preyed upon by Flying-type Pokémon. Its four tiny feet are tipped with suction cups, permitting this Pokémon to scale most surfaces with minimal effort."
    },
]

const img = document.getElementById('pokemon-img');
const name = document.getElementById('name');
const type = document.getElementById('type');
const info = document.getElementById('info');


let currentItem = 0;

window.addEventListener('DOMContentLoaded', function () {

    showPokemon(currentItem);

})


function showPokemon (pokemon) {
    const item = pokemons[pokemon]
    img.src = item.img;
    name.textContent = item.name;
    type.textContent = item.type;
    info.textContent = item.text;


}