/* box shadow colors
red = rgb(223, 159, 108)
blue = rgb(142, 221, 221)
green = rgb(142, 221, 166)
brown = rgb(221, 200, 142)
violet = rgb(163, 142, 221)
yellow = rgb(209, 221, 142)
*/
// List of pokemos
const pokemons = [
    {
        id: 1,
        name: 'charmander',
        type: 'fire',
        img: 'https://archives.bulbagarden.net/media/upload/7/73/004Charmander.png',
        text: "Charmander is a bipedal, reptilian Pokémon with a primarily orange body and blue eyes. Its underside from the chest down and the soles of its feet are cream-colored. It has two small fangs visible in its upper jaw and two smaller fangs in its lower jaw. A fire burns at the tip of this Pokémon's slender tail and has blazed there since Charmander's birth. The flame can be used as an indication of Charmander's health and mood, burning brightly when the Pokémon is strong, weakly when it is exhausted, wavering when it is happy, and blazing when it is enraged. It is said that Charmander dies if its flame goes out. However, if the Pokémon is healthy, the flame will continue to burn even if it gets a bit wet and is said to steam in the rain.",
        color: 'rgb(223, 159, 108)',
    },

    {
        id: 2,
        name: 'Squirtle',
        type: 'water',
        img: 'https://archives.bulbagarden.net/media/upload/3/39/007Squirtle.png',
        text: "Squirtle is a small reptilian Pokémon that resembles a light-blue turtle. While it typically walks on its two short legs, it has been shown to run on all fours in Super Smash Bros. Brawl. It has large, purplish or reddish eyes and a slightly hooked upper lip. Each of its hands and feet have three pointed digits. The end of its long tail curls inward. Its body is encased by a tough shell that forms and hardens after birth. This shell is brown on the top, pale yellow on the bottom, and has a thick white ridge between the two halves.",
        color: 'rgb(142, 221, 221)',
    },

    {
        id: 3,
        name : 'Caterpie',
        type: 'bug',
        img : 'https://archives.bulbagarden.net/media/upload/5/5d/010Caterpie.png',
        text: "Caterpie is an insect Pokémon that resembles a green caterpillar with a yellow underside and teardrop-shaped tail. There are yellow ring-shaped markings down the sides of its segmented body, which resemble its eyes and are meant to scare off predators. Its most notable characteristic is the bright red antenna (osmeterium) on its head, which releases a stench to repel predators. Despite these features and its camouflage in green foliage, Caterpie is often preyed upon by Flying-type Pokémon. Its four tiny feet are tipped with suction cups, permitting this Pokémon to scale most surfaces with minimal effort.",
        color: 'rgb(142, 221, 166)',
    },
    {
        id: 4,
        name : 'Metapod',
        type: 'bug',
        img : 'https://archives.bulbagarden.net/media/upload/c/cd/011Metapod.png',
        text: "Metapod is an insect Pokémon that resembles a green chrysalis. Its body is crescent-shaped with several segments making up the lower point. The front of Metapod's shell resembles a face with heavy-lidded eyes and a sharply pointed nose. The back of its shell consists of several geometrically shaped portions and projections.",
        color: 'rgb(142, 221, 166)',
    },
    {
        id: 5,
        name : 'Butterfree',
        type: 'bug, flying',
        img : 'https://archives.bulbagarden.net/media/upload/d/d1/012Butterfree.png',
        text: "Butterfree is a lepidopteran insect Pokémon which resembles a vaguely anthropomorphic butterfly with a purple body. Unlike true insects, it only has two body segments and four light blue legs. The upper pair of its legs resemble small, three-fingered hands, while the lower pair resembles long, digit-less feet. Butterfree has two black antennae, a light blue snout with two fangs underneath, and large, red compound eyes. Its two pairs of wings are white with black venation. Two oval scales on a female Butterfree's lower wings are black, but they are white on a male.",
        color: 'rgb(142, 221, 166)',
    },
    {
        id: 6,
        name : 'Weedle ',
        type: 'bug, poison',
        img : 'https://archives.bulbagarden.net/media/upload/d/df/013Weedle.png',
        text: "Weedle is a larval insect Pokémon with a segmented body ranging in color from yellow to reddish-brown. Each segment of its body is a sphere. It has a bulbous red nose, two small, black eyes on its face and two spherical feet on each body segment. The combination of red and yellow in its color scheme creates a bright warning to predators that it is poisonous. Weedle has a conical, two-inch (five centimeter) venomous stinger on its head and a barbed one on its tail. Weedle can retaliate against attackers and those who step on it with its strong toxin. It can distinguish its favorite kinds of leaves using its acute sense of smell. As a young Bug-type Pokémon, its daily appetite for leaves matches its weight. Weedle can be found in temperate forests and usually hides in grass, bushes, and under the leaves it eats.",
        color: 'rgb(142, 221, 166)',
    },
    {
        id: 7,
        name : 'Kakuna',
        type: 'bug, poison',
        img : 'https://archives.bulbagarden.net/media/upload/f/f0/014Kakuna.png',
        text: "Kakuna is a yellow, insect cocoon-like Pokémon. Kakuna has a dome-shaped head and black, triangular eyes with glowing white pupils. It has two scythe-like arms in the middle of its body. When it comes close to evolving, its body gives off heat that makes it warm to the touch. Kakuna remains virtually immobile and waits for evolution, often hanging from tree branches by long strands of silk. When attacked, however, it can extend its poison barbs. Kakuna nests in temperate forests and misty wooded areas. Occasionally, it will also nest at the mouth of tunnels and caves, as seen in Pokémon Snap.",
        color: 'rgb(142, 221, 166)',
    },
    {
    id: 8,
    name : 'Pidgey',
    type: 'normal, flying',
    img : 'https://archives.bulbagarden.net/media/upload/5/55/016Pidgey.png',
    text: "Pidgey is a small, plump-bodied avian Pokémon. It is primarily brown with a cream-colored face, underside, and flight feathers. On top of its head is a short crest of three tufts. The center crest feathers are brown and the outer two tufts are cream-colored. Just under its crest are its narrow eyes which have white sclera and pupil along with its black irises. Angular black marking extend from behind its eyes and continue down its cheeks. It has a short, stubby beak and feet with two toes in front and one in back. Both its beak and feet are a grayish-pink. It has a short, brown tail made of three feathers.",
    color: 'rgb(221, 200, 142)',
    },
    {
        id: 9,
        name : 'Rattata',
        type: 'normal',
        img : 'https://archives.bulbagarden.net/media/upload/4/46/019Rattata.png',
        text: "Rattata is a small, quadrupedal rodent Pokémon. It has purple fur with a cream-colored face, paws, and underbelly. It has narrow eyes containing white sclera and pupil with red irises, rounded ears with cream-colored insides, and a single whisker on each cheek. Its long tail is tightly curled at the end. Its most notable feature is its large teeth. Like most rodents, its teeth grow continuously throughout its life and must be worn down by gnawing. A female Rattata will have shorter whiskers and lighter fur.",
        color: 'rgb(163, 142, 221)',
        },
        {
            id: 10,
            name : 'Pikachu',
            type: 'Electric',
            img : 'https://archives.bulbagarden.net/media/upload/0/0d/025Pikachu.png',
            text: "Pikachu is a short, chubby rodent Pokémon. It is covered in yellow fur with two horizontal brown stripes on its back. It has a small mouth, long, pointed ears with black tips, and brown eyes. Each cheek is a red circle that contains a pouch for electricity storage. It has short forearms with five fingers on each paw, and its feet each have three toes. At the base of its lightning bolt-shaped tail is a patch of brown fur. A female will have a V-shaped notch at the end of its tail, which looks like the top of a heart. It is classified as a quadruped, but it has been known to stand and walk on its hind legs.",
            color: 'rgb(209, 221, 142)',
            },
]

// select img,name, type and indo ids
const img = document.getElementById('pokemon-img');
const name = document.getElementById('name');
const type = document.getElementById('type');
const info = document.getElementById('info');
const review = document.querySelector('.review');

// Select buttons
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;


// main programm
window.addEventListener('DOMContentLoaded', function () {

    showPokemon(currentItem);

})


// Function that show pokemon
function showPokemon () {
    const item = pokemons[currentItem]
    img.src = item.img;
    name.textContent = item.name;
    type.textContent = item.type;
    info.textContent = item.text;
    review.style.boxShadow = `0px 8px 100px ${item.color}`
    
}

// next pokemon
nextBtn.addEventListener('click', function () {
    // Add current item when pressing next btn
    currentItem++;

    // when you scroll all pokemons it goes back to first pokemon
    if (currentItem > pokemons.length - 1) {
        currentItem = 0;

    }
    scrollTop();
    showPokemon(currentItem);
})


// Prev pokemon
prevBtn.addEventListener('click', function () {

    // when pressing prev btn it goes backwards
    currentItem--;

    if(currentItem < 0) {
        currentItem = pokemons.length - 1;

    }
    scrollTop();
    showPokemon(currentItem);
})

// random pokemon when pressing random button
randomBtn.addEventListener('click', function () {
    currentItem = Math.floor(Math.random() * pokemons.length);
    scrollTop();
    showPokemon();
})

// When pokemon changes it takes you top of the page
function scrollTop () {
    window.scrollTo({
        top: 0,
        behavior : 'smooth',
    })
}
