import React from "react";

const Players = ({ players, agregarTitular, agregarSuplente }) => (
  <section>
    <h2>Jugadores</h2>
    <div className="contenedor-jugadores">
      {players &&
        players.map(player => (
          <article key={player.id} className="jugador">
            <img src={player.foto} alt={player.nombre} />
            <p>{player.nombre}</p>
            <div>
              <button onClick={() => agregarTitular(player)}>Titular</button>
              <button onClick={() => agregarSuplente(player)}>Suplénte</button>
            </div>
          </article>
        ))}
    </div>
  </section>
);

export default Players;
