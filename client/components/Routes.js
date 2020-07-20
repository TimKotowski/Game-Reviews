import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import allGames from "./allGames";
import Reviews from "./Reviews";
import Homepage from "./Homepage";
import GameReview from "./GameReview";
import CreateAccount from "./Login/CreateAccount";
import Login from "./Login/Login";
import { connect } from "react-redux";
import { fetchUser } from "../store/users";

class Routes extends Component {
  componentDidMount() {
    this.props.loadUser();
  }

  render() {
    return (
      <Switch>
        <Route exact path="/games" component={allGames} />
        <Route path="/games/:gameId" component={GameReview} />
        <Route exact path="/login" component={Login} />
        <Route path="/login/createAccount" component={CreateAccount} />
        <Route path="/reviews" component={Reviews} />
        <Route path="/" component={Homepage} />
      </Switch>
    );
  }
}

const mapDispatch = (dispatch) => ({
  loadUser: () => dispatch(fetchUser()),
});

export default connect(null, mapDispatch)(Routes);
