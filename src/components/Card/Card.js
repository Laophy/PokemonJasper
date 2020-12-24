import React from 'react'
import './style.css'
import pokemonType from '../../services/pokemonTypes'
import pokemonBackground from '../../services/pokemonTypesBackground'


function Card({ pokemon }){


    return(
        <div className="Card__Border">
            <div className="Card" style={{ backgroundImage: pokemonBackground[pokemon.types[0].type.name] }}>
                <div className="Card__name">
                    <p className="title__floatLeft">{pokemon.name}</p>
                    <p className="title__floatRight">HP: {pokemon.stats[0].base_stat}</p>
                </div>
                <div className="Card__img__background">
                    <div className="Card__img">
                        <img src={pokemon.sprites.other[`official-artwork`].front_default} alt=""></img>
                    </div>
                </div>
                <div className="Card__types">
                    {pokemon.types.map(type => {
                        return (
                            <div className="Card__type" style={{ backgroundColor: pokemonType[type.type.name] }}>
                                {type.type.name}
                            </div>
                        )
                    })}
                </div>
                <div className="Card__info">
                    <div className="Card__data Card__data--weight">
                        <p className="title">Weight</p>
                        <p>{pokemon.weight}</p>
                    </div>
                    <div className="Card__data Card__data--height">
                        <p className="title">Height</p>
                        <p>{pokemon.height}</p>
                    </div>
                    <div className="Card__data Card__data--ability">
                        <p className="title">Ability</p>
                        <p>{pokemon.abilities[0].ability.name}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;