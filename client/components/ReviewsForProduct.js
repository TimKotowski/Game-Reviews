import React, { Component } from "react";
import { fetchReviewsForProduct } from "../store/review";
import { connect } from "react-redux";
class ReviewsForProduct extends Component {
  componentDidMount() {
    const productId = this.props.productId;
    this.props.loadReviewsForProduct(productId);
  }

  render() {
    const { reviews } = this.props;
    const { user } = this.props;
    return (
      <div>
        <ReviewsList user={user} reviews={reviews} />
      </div>
    );
  }
}

const mapState = (state) => ({
  user: state.user,
  product: state.singleProduct,
  reviews: state.reviews,
});

const mapDispatch = (dispatch) => ({
  loadReviewsForProduct: (productId) =>
    dispatch(fetchReviewsForProduct(productId)),
});
export default connect(mapState, mapDispatch)(ReviewsForProduct);
