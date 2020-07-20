import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

export default class Homepage extends Component {
  render() {
    return (
      <section className="bg-white border-b py-8">
        <div className="container max-w-5xl mx-auto m-8">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Game Reviews
          </h1>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-5/6 sm:w-1/2 p-6">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                Start Reviewing a Game
              </h3>
              <NavLink to="/games">
                <p className="text-gray-600 mb-8">
                  Pick a game to review from a huge list of AAA title games to
                  Indie devolped games! We offer a wide variety of choices both
                  PC, Xbox, and PS4 and more!
                  <br />
                  <br />
                  Pick a Game:{" "}
                  <a className="text-orange-500 underline">Review a Game</a>
                </p>
              </NavLink>
            </div>
            <div className="w-full sm:w-1/2 p-6">
              <svg
                className="w-full sm:h-64 mx-auto"
                viewBox="0 0 1177 598.5"
                xmlns="http://www.w3.org/2000/svg"
              ></svg>
            </div>
          </div>

          <div className="flex flex-wrap flex-col-reverse sm:flex-row">
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <svg
                className="w-5/6 sm:h-64 mx-auto"
                viewBox="0 0 1176.60617 873.97852"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>connected world</title>
              </svg>
            </div>
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <div className="align-middle">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                  Check Out The Reviews
                </h3>
                <Link to="/reviews">
                  <p className="text-gray-600 mb-8">
                    See a list of all the reviews of gamers just like you who
                    reviews a game!
                    <br />
                    <br />
                    Check Out the Reviews:{" "}
                    <a className="text-orange-500 underline">Reviews</a>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
