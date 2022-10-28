const pokedex = document.querySelector('#pokedex');

// const colors = {
//     fire: '#FDDFDF',
//     grass: '#DEFDE0',
//     electric: '#FCF7DE',
//     water: 'DEF3FD',
//     ground: '#f4e7da',
//     rock: '#d5d5d4',
//     fairy: '#fceaff',
//     poison: '#98d7a5',
//     bug: '#f8d5a3',
//     dragon: '#97b3e6',
//     psychic: '#eaeda1',
//     flying: '#F5F5F5',
//     fighting: '#E6E0D4',
//     normal: '#F5F5F5',
// }

// const main_types = Object.keys(colors)
const fetchPokemon = () => {

    const promises = []
    for (let i = 1; i <= 151; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;

        promises.push(fetch(url)
            .then(res => {
                return res.json();
            }))
    }

    Promise.all(promises).then(results => {
        const pokemon = results.map(data => ({
            'id': data.id.toString().padStart(3, '0'),
            'name': data.name,
            'sprite_front': data.sprites['front_default'],
            'sprite_back': data.sprites['back_default'],
            'type': data.types.map(element =>
                element.type.name
            ).join(' '),
            'main_type': data.types[0],
        }))

        displayPokemon(pokemon)
    })
}

const displayPokemon = (pokemon) => {
    const pokemonHTMLString = pokemon.map(element =>
    `
    <div class="col-12 col-sm-6 col-md-4"
        <li>
            <div class="d-flex flex-column align-items-center card p-2 my-2">
                <img class="card-image" src="${element.sprite_front}">
                <h5 class="card-id">#${element.id}</h2>
                <h2 class="card-name">${element.name.charAt(0).toUpperCase()+element.name.slice(1)}</h3>
                <p class="pokemon-type">${element.type.toUpperCase()}</p>
            </div>
        </li>  
    </div>  
    `
    ).join("")
    
    pokedex.innerHTML = pokemonHTMLString;
}



fetchPokemon();


// 2 novembre alle 11:30 dura 30 min firmare documenti 