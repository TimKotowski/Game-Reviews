import axios from "axios";

const GET_ALL_GAMES = "GET_ALL_GAMES";

export const getAllGames = (games) => ({
  type: GET_ALL_GAMES,
  games,
});

export const fetchAllGames = (query) => async (dispatch) => {
  try {
    if (!query) {
      const { data: allGames } = await axios.get("/api/game");
      return dispatch(getAllGames(allGames));
    } else {
      const { data: games } = await axios.get(`/api/game?search=${query}`);
      return dispatch(getAllGames(games));
    }
  } catch (error) {
    console.log("error in fetchAllGames thunk", error);
  }
};

const games = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_GAMES:
      return action.games;
    default:
      return state;
  }
};

export default games;
