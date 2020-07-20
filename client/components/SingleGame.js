import React from "react";
import { NavLink } from "react-router-dom";

const SingleGame = (props) => {
  const { id, name, company, bio, logo } = props.game;
  return (
    <div className="flex align-item-center justify-center">
      <div className="font-medium text-purple-600 ">
        <NavLink to="/games">Back</NavLink>
      </div>
      <div
        key={id}
        className=" bg-gray-100 item-center mt-10 w-1/3 p-2 rounded shadow-xl "
      >
        <div></div>
        <img src={logo} />
        <h4 className="font-semibold  ">{name}</h4>
        <h4 className="font-normal ">{company}</h4>
        <h4 className="font-thin">{bio}</h4>
      </div>
    </div>
  );
};

export default SingleGame;
