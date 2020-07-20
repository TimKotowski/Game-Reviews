import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchReviewForm } from "../store/review";

class ReivewForm extends Component {
  constructor() {
    super();
    this.state = {
      content: "",
      rating: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { content, rating } = this.state;
    const { game, user } = this.props;
    const gameId = game.id;
    const userId = user.id;
    this.props.createReview({
      content,
      rating,
      gameId,
      userId,
    });
    this.setState({
      content: "",
      rating: "",
    });
  }

  render() {
    console.log(this.props.user);
    const { content, rating } = this.state;
    return (
      <div className="flex mx-auto items-center justify-center shadow-lg mt-6 mx-8 mb-4 max-w-lg">
        <form
          onSubmit={this.handleSubmit}
          className="w-full max-w-xl bg-white rounded-lg px-4 pt-2"
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">
              Add a Review
            </h2>
            <div className="w-full md:w-full px-3 mb-2 mt-2">
              <textarea
                className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-48 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                name="content"
                value={content}
                onChange={this.handleChange}
                placeholder="Type Your Comment"
                required
              ></textarea>
            </div>
            <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto"></div>
            <div className="-mr-1">
              <label
                className="uppercase text-gray-700 text-xs font-boldm py-1 px-4 tracking-wide mr-2 "
                htmlFor="rating"
              >
                Rating
              </label>
              <input
                type="number"
                min={0}
                max={5}
                step={0.01}
                name="rating"
                value={rating}
                onChange={this.handleChange}
              />
              <button
                type="submit"
                className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
              >
                Post Reivew
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapState = (state) => ({
  user: state.user,
});

const mapDispatch = (dispatch) => ({
  createReview: (review) => dispatch(fetchReviewForm(review)),
});

export default connect(mapState, mapDispatch)(ReivewForm);
