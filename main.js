const fetchPokemon = () => {

    for (let i = 1; i <= 150; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
                const pokemon = {
                    'id': data.id,
                    'name': data.name,
                    'sprite': data.sprites['front_default'],
                    'type': data.types.map(element =>
                        element.type.name

                    ).join(', ')
                };
                console.log(pokemon);
            })
    }

}

fetchPokemon();