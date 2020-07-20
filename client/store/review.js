import axios from "axios";

const CREATE_REVIEW = "CREATE_REVIEW";
const GET_REVIEWS = "GET_REVIEWS";

export const createReview = (reviewInfo) => ({
  type: CREATE_REVIEW,
  reviewInfo,
});

export const getReviews = (reviews) => ({
  type: GET_REVIEWS,
  reviews,
});

export const fetchReviews = () => async (dispatch) => {
  try {
    const { data: reviews } = await axios.get("/api/review");
    return dispatch(getReviews(reviews));
  } catch (error) {
    console.log("error in fetchReviews thunk", error);
  }
};

export const fetchReviewForm = (review) => async (dispatch) => {
  try {
    const { data: reviewData } = await axios.post("/api/game", review);
    return dispatch(createReview(reviewData));
  } catch (error) {
    console.log("error in fetchReviewFrom thunk", error);
  }
};

const reviews = (state = [], action) => {
  switch (action.type) {
    case GET_REVIEWS:
      return action.reviews;
    case CREATE_REVIEW:
      return [...state.reviews, action.reviewInfo];
    default:
      return state;
  }
};

export default reviews;
