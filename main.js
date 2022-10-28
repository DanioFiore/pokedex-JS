const fetchPokemon = () => {

    const promises = []
    for (let i = 1; i <= 150; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;

        promises.push(fetch(url)
            .then(res => {
                return res.json();
            }))
    }

    Promise.all(promises).then(results => {
        const pokemon = results.map(data => ({
            'id': data.id,
            'name': data.name,
            'sprite': data.sprites['front_default'],
            'type': data.types.map(element =>
                element.type.name

            ).join(', ')
        }))
        console.log(pokemon)
    })
}

const displayPokemon = (pokemon) => {
    console.log(pokemon)
}
fetchPokemon();