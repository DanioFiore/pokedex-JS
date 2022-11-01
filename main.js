const pokedex = document.querySelector('#pokedex');

// // const main_types = Object.keys(colors)
// const fetchPokemon = () => {

//     const promises = []
//     for (let i = 1; i <= 151; i++) {
//         const url = `https://pokeapi.co/api/v2/pokemon/${i}`;

//         promises.push(fetch(url)
//             .then(res => {
//                 return res.json();
//             }))
//     }

//     Promise.all(promises).then(results => {
//         const pokemon = results.map(data => ({
//             'id': data.id.toString().padStart(3, '0'),
//             'name': data.name,
//             'sprite_front': data.sprites['front_default'],
//             'sprite_back': data.sprites['back_default'],
//             'type': data.types.map(element =>
//                 element.type.name
//             ).join(' '),
//             'main_type': data.types[0],
//         }))

//         displayPokemon(pokemon)
//     })
// }

// const displayPokemon = (pokemon) => {
//     const pokemonHTMLString = pokemon.map(element =>
//     `
    // <div class="col-12 col-sm-6 col-md-4"
    //     <li>
    //         <div class="d-flex flex-column align-items-center card p-2 my-2">
    //             <img class="card-image" src="${element.sprite_front}">
    //             <h5 class="card-id">#${element.id}</h2>
    //             <h2 class="card-name">${element.name.charAt(0).toUpperCase()+element.name.slice(1)}</h3>
    //             <p class="pokemon-type">${element.type.toUpperCase()}</p>
    //         </div>
    //     </li>  
    // </div>  
//     `
//     ).join("")
    
//     pokedex.innerHTML = pokemonHTMLString;
// }



// fetchPokemon();

const getPokemon = async () => {
  let pokemonTotal = []
  for(let i = 1; i<= 151; i++) {
    let id = `https://pokeapi.co/api/v2/pokemon/${i}/`
    let appro = await fetch(id).then(res=>res.json())
    pokemonTotal.push(appro);
  }
  console.log(pokemonTotal)
  displayPokemon(pokemonTotal)
}

const displayPokemon = (pokemonTotal) => {
  let pokemonInner = pokemonTotal.map(element => 
    `
    <div class="col-12 col-sm-6 col-md-4"
      <li>
          <div class="d-flex flex-column align-items-center card p-2 my-2">
              <img class="card-image" src="${element.sprites.front_default}">
              <h5 class="card-id">#${element.id.toString().padStart(3, 0)}</h2>
              <h2 class="card-name">${element.name.charAt(0).toUpperCase()+element.name.slice(1)}</h3>
              <p class="pokemon-type">${element.types.map(element=> (element.type.name.toUpperCase()))}</p>
          </div>
      </li>  
    </div> 
    `
  ).join("")
  
  pokedex.innerHTML = pokemonInner
}

getPokemon()