import axios from "axios";

const GET_USER = "GET_USER";

export const getUser = (user) => ({
  type: GET_USER,
  user,
});

export const fetchLoginUser = (userInfo) => async (dispatch) => {
  try {
    const { data: user } = await axios.put("/api/user/login", userInfo);
    dispatch(getUser(user));
  } catch (error) {
    console.log("erorr in login thunk", error);
  }
};

export const fetchUser = () => async (dispatch) => {
  try {
    const { data: singleUser } = await axios.get("/api/user/me");
    dispatch(getUser(singleUser));
  } catch (error) {
    console.log("error in fetchUser thunk", error);
  }
};

export const fetchLogOut = () => async (dispatch) => {
  try {
    await axios.delete("/api/user/logout");
    dispatch(getUser({}));
  } catch (error) {
    console.log("error in logout thunk", error);
  }
};

export const fetchCreatedUser = (user) => async (dispatch) => {
  try {
    const { data: userInfo } = await axios.post("/api/user", user);
    dispatch(getUser(userInfo));
  } catch (error) {
    console.log("error in fetchCreatedUser thunk", error);
  }
};

const users = (state = {}, action) => {
  switch (action.type) {
    case GET_USER:
      return action.user;
    default:
      return state;
  }
};
export default users;
