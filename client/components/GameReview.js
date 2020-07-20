import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSingleGame } from "../store/singleGame";
import SingleGame from "./SingleGame";
import ReivewForm from "./ReivewForm";

class GameReview extends Component {
  componentDidMount() {
    const gameId = this.props.match.params.gameId;
    this.props.loadSingleGame(gameId);
  }

  render() {
    const { game } = this.props;
    return (
      <div id="container">
        <div className="max-w-d  max-w-6xl mx-auto bg-gray-300">
          <SingleGame game={game} />
          <ReivewForm game={game} />
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  game: state.singleGame,
});

const mapDispatch = (dispatch) => ({
  loadSingleGame: (gameId) => dispatch(fetchSingleGame(gameId)),
});

export default connect(mapState, mapDispatch)(GameReview);
