import React from 'react';

const Screen = ({ pokemones, hoverPokemon, selectedPokemones, health }) => {
  console.log(selectedPokemones);

  return (
    <div className="container-screen">
      <div className="screen-text">
        <div className="screen">
          {selectedPokemones.length === 2 ? (
            <div>
              
              <div className="battle-player-container">
                <div className="battle-box">
                  <div className="hp-bar-bg">
                    <div className="hp-bar-fill" style={{ width: `${health.player}%` }}></div>
                  </div>
                  <img
                    src={selectedPokemones[0][0].sprites?.front_default}
                    alt="imagen1"
                    className="battle-sprite player"
                  />
                </div>
              </div>

              
              <div className="battle-rival-container">
                <div className="battle-box">
                  <div className="hp-bar-bg" >
                    <div className="hp-bar-fill" style={{ width: `${health.rival}%` }}></div>
                  </div>
                  <img
                    src={selectedPokemones[1][0].sprites?.back_default}
                    alt="imagen2"
                    className="battle-sprite rival"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="pokemon-list">
              {pokemones?.map((pokemon) => (
                <div
                  key={pokemon.id}
                  className={`pokemon-card ${
                    hoverPokemon === pokemon.id ? 'highlight' : ''
                  }`}
                >
                  <img src={pokemon.sprites.front_default} alt="pokemones" />
                  <p className="pokemon-name">{pokemon.name}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="container-text">
          <p className="text">
            Nintendo <span>GAME BOY</span>
            <span style={{ fontSize: '8px' }}> TM</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Screen;
