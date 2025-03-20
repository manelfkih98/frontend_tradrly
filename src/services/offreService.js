// src/services/offreService.js
import api from "../config/api";
import { setOffres, setLoading, setError } from "../slices/offreSlice";

export const fetchOffresStage = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await api.get("offre/offreByStage");
    dispatch(setOffres(response.data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};
export const fetchOffresEmploi = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await api.get("offre/offreByJob");
    dispatch(setOffres(response.data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};
export const createOffreStage = (offre) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await api.post("offre/addOffreStage", offre);
    dispatch(fetchOffresStage());
  } catch (error) {
    dispatch(setError(error.message));
  }
};
export const createOffreJob = (offre) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await api.post("offre/addOffreJob", offre);
    dispatch(fetchOffresEmploi());
  } catch (error) {
    dispatch(setError(error.message));
  }
};
export const updateOffreStage = (id, offre) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await api.put(`offre/update/${id}`, offre);
    dispatch(fetchOffresStage());
  } catch (error) {
    dispatch(setError(error.message));
  }
};
export const updateOffreEmploi = (id, offre) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await api.put(`offre/update/${id}`, offre);
    dispatch(fetchOffresEmploi());
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const deactivateOffreStage = (id) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await api.put(`offre/deactivateOffre/${id}`);
    dispatch(fetchOffresStage());
  } catch (error) {
    dispatch(setError(error.message));
  }
};
export const deactivateOffreEmploi = (id) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await api.put(`offre/deactivateOffre/${id}`);
    dispatch(fetchOffresEmploi());
  } catch (error) {
    dispatch(setError(error.message));
  }
};
export const activateOffreEmploi = (id) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await api.put(`offre/activateOffre/${id}`);
    dispatch(fetchOffresEmploi());
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const activateOffreStage = (id) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await api.put(`offre/activateOffre/${id}`);
    dispatch(fetchOffresStage());
  } catch (error) {
    dispatch(setError(error.message));
  }
};
