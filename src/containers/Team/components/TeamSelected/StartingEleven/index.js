import React from 'react';

const StartingEleven = ({ startingeleven, eliminarTitular }) => (
  <section>
    <h2>Titulares</h2>
    <div className="cancha">
      {startingeleven &&
        startingeleven.map(player => (
          <article key={player.id} className="ttular">
            <div>
              <img src={player.foto} alt={player.nombre} />
              <button onClick={() => eliminarTitular(player.id)}>X</button>
            </div>
            <p>{player.nombre}</p>
          </article>
        ))
      }
    </div>
  </section>
);

export default StartingEleven;
