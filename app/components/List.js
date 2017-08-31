import React from 'react';


export default function List(props) {

    const { pokemon } = props
    return (
        <ul>
            { pokemon.map(poke => {
                const { pokemon } = poke;
                return <li key={pokemon.name}>{pokemon.name}</li>
            })}
        </ul>
    )
}
