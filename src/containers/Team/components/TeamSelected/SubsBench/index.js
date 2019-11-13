import React from "react";

const SubsBench = ({ subsbench, eliminarSuplente }) => (
  <section>
    <h2>Suplentes</h2>
    <div className="cancha">
      {subsbench &&
        subsbench.map(player => (
          <article key={player.id} className="ttular">
            <div>
              <img src={player.foto} alt={player.nombre} />
              <button onClick={() => eliminarSuplente(player.id)}>X</button>
            </div>
            <p>{player.nombre}</p>
          </article>
        ))}
    </div>
  </section>
);

export default SubsBench;
