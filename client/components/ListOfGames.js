import React from "react";
import { NavLink } from "react-router-dom";

const ListOfGames = (props) => {
  const { games } = props;
  return (
    <div className="flex flex-row flex-wrap">
      {games.map((game) => (
        <div
          key={game.id}
          className=" bg-gray-100 item-center mt-10 w-1/5 p-2 mr-4 rounded shadow-xl"
        >
          <NavLink to={`/games/${game.id}`}>
            <img className="bg-auto " src={game.logo} />
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default ListOfGames;
