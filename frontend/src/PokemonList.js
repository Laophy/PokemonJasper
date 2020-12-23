import React from 'react'
import './App.css'

export default function PokemonList({ pokemon, pokeId }) {
    return (
        <div className="pokeDex">
            {pokemon.map(p => (
                <div key={p}>{p}</div>
            ))}
        </div>
    )
}
