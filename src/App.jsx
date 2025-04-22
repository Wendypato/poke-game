import './App.css';
import './game/style.css';

import Screen from './game/Screen';
import Pad from './game/buttons/Pad';
import StartSelect from './game/buttons/StartSelect';
import Actions from './game/buttons/Actions';
import { use, useEffect, useState } from 'react';


function App() {
  
  const [pokemones, setPokemones] = useState([]);
  const [hoverPokemon, setHoverPokemon] = useState(0);
  const [selectedPokemones, setSelectPokemones] = useState([])
  const [health, setHealth] = useState({ player: 100, rival: 100 });


  const BASE_URL = "https://pokeapi.co/api/v2/";

  const getPokemones = async() => {
    const res =  await fetch(`${BASE_URL}/pokemon`);
    const data = await res.json();
    console.log(data);
    const pokemonsDetails = await getDetails(data.results);
    setPokemones(pokemonsDetails);
  

  }

  const getDetails = async (results) => {
    const res = await Promise.all(results.map((result) => fetch(result.url)));
    const data = await Promise.all(res.map(gato => gato.json()) );
    return data;
}

const handlePress = (dir) => {
  console.log(dir);
  if (dir === 'right') {
    setHoverPokemon(hoverPokemon + 1);
  }
  if (dir === 'left') {
    setHoverPokemon(hoverPokemon - 1);
  }
  if (dir === 'down') {
    setHoverPokemon(hoverPokemon + 3);
  }
  if (dir === 'up') {
    setHoverPokemon(hoverPokemon - 3);
  }


};

const handleSelectPokemon = () => {
  console.log('select pokemon', hoverPokemon);
  const pokemonSelected = pokemones.filter(
    (pokemon) => pokemon.id === hoverPokemon
  );

  console.log({pokemonSelected});

  const rival = computerSelection();
  const selections = [pokemonSelected, rival];
  console.log(selections);
  setSelectPokemones(selections);

  setHealth({
    player: 100,         
    rival: 80            
  });
};


const computerSelection = () =>{
  const randomId = Math.floor(Math.random() * pokemones.length);
  console.log(randomId);

  const selectElement = pokemones.filter((pokemon) => pokemon.id === randomId);
  return selectElement;
}

  useEffect (() => {
    if (selectedPokemones.length === 2 && health.rival > 0) {
      const timeout = setTimeout(() => {
        setHealth((prev) => ({
          ...prev,
          rival: Math.max(prev.rival - 5, 0),
        }));
      }, 900); 
  
      return () => clearTimeout(timeout); 
    }
    getPokemones();

  }, [selectedPokemones, health.rival]);

  return (
    <div className="app-wrapper">
      <div className="game-container">
        <Screen pokemones={pokemones} hoverPokemon={hoverPokemon} selectedPokemones = {selectedPokemones } health={health}/>
        <div className="button-row">
          <Pad handlePress={handlePress}/>
          <StartSelect handleSelectPokemon={handleSelectPokemon}/>
          <Actions />
        </div>
      </div>
    </div>
  );
}

export default App;
