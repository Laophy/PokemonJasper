import React, { useState, useEffect } from 'react'
import { getAllPokemon } from './services/pokemon'
import { getPokemon } from './services/pokemon'
import Card from './components/Card/Card'
import './App.css';
import Navbar from './components/Navbar/Navbar'

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon';

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialUrl);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      let pokemon = await loadingPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, [])

  const next = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const prev = async () => {
    if(!prevUrl) return;
    setLoading(true);
    let data = await getAllPokemon(prevUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon.url);
      console.log(pokemonRecord)
      return pokemonRecord
    }))

    setPokemonData(_pokemonData);
  }

  return (
    <div className="App">
      
        
            <Navbar />
            <div className="btn">
              <button onClick="">Shiny</button>
              <button onClick={prev}>Prev</button>
              <button onClick={next}>Next</button>
            </div>
            { loading ? <h1>Loading...</h1> : ( 
              <>
            <div className="grid-container">
              { pokemonData.map((pokemon, i) => {
                  return <Card key={i} pokemon={pokemon}/>
              })} 
            </div>
          </>
        )
      }
    </div>
  );
}

export default App;
