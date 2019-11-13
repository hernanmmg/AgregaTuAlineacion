import React from "react";
import Players from "./Players";
import StartingEleven from "./StartingEleven";
import Subsbench from "./SubsBench";

const TeamSelected = ({
  players,
  startingeleven,
  subsbench,
  agregarTitular,
  agregarSuplente,
  eliminarTitular,
  eliminarSuplente
}) => (
  <section>
    <Players
      players={players}
      agregarTitular={agregarTitular}
      agregarSuplente={agregarSuplente}
    />
    <StartingEleven
      startingeleven={startingeleven}
      eliminarTitular={eliminarTitular}
    />
    <Subsbench subsbench={subsbench} eliminarSuplente={eliminarSuplente} />
  </section>
);

export default TeamSelected;
