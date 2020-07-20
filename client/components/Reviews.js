import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchReviews } from "../store/review";
import ListofReviews from "./ListofReviews";

class Reviews extends Component {
  componentDidMount() {
    this.props.loadReviews();
  }

  render() {
    const { reviews } = this.props;
    console.log(reviews);
    return (
      <div className="bg-gray-300">
        <ListofReviews reviews={reviews} />
      </div>
    );
  }
}

const mapState = (state) => ({
  reviews: state.reviews,
});

const mapDispatch = (dispatch) => ({
  loadReviews: () => dispatch(fetchReviews()),
});

export default connect(mapState, mapDispatch)(Reviews);
