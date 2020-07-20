import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllGames } from "../store/games";
import ListOfGames from "./ListOfGames";
import SearchForGame from "./SearchForGame";

class allGames extends Component {
  componentDidMount() {
    this.props.loadGames();
  }

  render() {
    const { games } = this.props;
    return (
      <div className=" bg-gray-300">
        <div className="max-w-d max-w-sm mx-auto">
          <SearchForGame />
        </div>
        <div className="max-w-d max-w-6xl mx-auto">
          <ListOfGames games={games} />
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  games: state.games,
});

const mapDispatch = (dispatch) => ({
  loadGames: () => dispatch(fetchAllGames()),
});

export default connect(mapState, mapDispatch)(allGames);
