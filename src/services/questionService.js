import api from "../config/api";

import { setQuestions, setError, setLoading } from "../slices/questionSlice";

export const fetchQuestion = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await api.get("question/getAllQuestion");
    dispatch(setQuestions(response.data.questionsFind));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const addQuestion = (question) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await api.post("question/addQuestion", question);
    dispatch(fetchQuestion());
  } catch (error) {
    dispatch(setError(error.message));
  }
};
export const deleteQuestion = (id) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await api.delete(`question/deleteQuestion/${id}`);
    dispatch(fetchQuestion());
  } catch (error) {
    dispatch(setError(error.message));
  }
};
export const updateQuestion=(id,questionupdate)=>async (dispatch)=>
{
  dispatch(setLoading());
  try{
    const response= await api.put(`/question/updateQuestion/${id}`,questionupdate);
    dispatch(fetchQuestion());
  }
  catch(error)
  {
    dispatch(setError(error.message));
  }
  }





