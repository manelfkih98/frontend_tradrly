import api from "../config/api";
import { setPosts, setLoading, setError } from "../slices/postsSlice";

export const fetchPosts = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await api.get("post/getAll");
    dispatch(setPosts(response.data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};