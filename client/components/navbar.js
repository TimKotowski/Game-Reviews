import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fetchLogOut } from "../store/users";

class Navbar extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logOut({});
  }

  render() {
    return (
      <nav className="flex items-center justify-between flex-wrap bg-indigo-900 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">
            Game Reviews
          </span>
        </div>
        <div className="block lg:hidden"></div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              className="block mr-6 lg:inline-block lg:mt-0 text-indigo-100 hover:text-white mr-4"
            >
              <NavLink to="/games">Games</NavLink>
            </a>
            <a
              href="#responsive-header"
              className="block mr-6 lg:inline-block lg:mt-0 text-indigo-100 hover:text-white mr-4"
            >
              <NavLink to="/reviews">Reviews</NavLink>
            </a>
            <a
              href="#responsive-header"
              className="block mr-6 lg:inline-block lg:mt-0 text-indigo-100 hover:text-white"
            >
              <NavLink to="/">Home</NavLink>
            </a>
          </div>
          <div>
            <NavLink to="/login">
              <a
                href="#"
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-indigo-300 hover:bg-white mt-4 lg:mt-0"
              >
                login
              </a>
            </NavLink>
          </div>
          <div>
            <button
              className="inline-block text-sm px-4 py-2 ml-5 leading-none border rounded text-white border-white hover:border-transparent hover:text-indigo-300 hover:bg-white mt-4 lg:mt-0"
              type="button"
              onClick={this.handleClick}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

const mapDispatch = (dispatch) => ({
  logOut: () => dispatch(fetchLogOut()),
});

export default connect(null, mapDispatch)(Navbar);
