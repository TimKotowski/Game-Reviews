import axios from "axios";

const GET_SINGLE_GAME = "GET_SINGLE_GAME";

export const getSingleGame = (game) => ({
  type: GET_SINGLE_GAME,
  game,
});

export const fetchSingleGame = (gameId) => async (dispatch) => {
  try {
    const { data: singleGame } = await axios.get(`/api/game/${gameId}`);
    return dispatch(getSingleGame(singleGame));
  } catch (error) {
    console.log("error in fetchSingleGame thunk", error);
  }
};

const singleGame = (state = {}, action) => {
  switch (action.type) {
    case GET_SINGLE_GAME:
      return action.game;
    default:
      return state;
  }
};

export default singleGame;
