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
export const refuser = (id) => async (dispatch) => {
  
  try {
    const response = await api.post(`post/refuser/${id}`);
  } catch (error) {
    dispatch(setError(error)); 
  }
};

export const accepter = (id) => async (dispatch) => {
  
  try {
    const response = await api.post(`post/accepter/${id}`);
  } catch (error) {
    dispatch(setError(error)); 
  }
};


