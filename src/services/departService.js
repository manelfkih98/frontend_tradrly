import api from "../config/api";
import { setDepartments, setLoading, setError } from "../slices/departmentsSlice";

export const fetchDepartments = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await api.get("depart/allDep");
    dispatch(setDepartments(response.data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};
export const createDepartment = (department) => async (dispatch) => {
    dispatch(setLoading()); // Met l'état de loading à true
    try {
      const response = await api.post("depart/add", department); // Envoi de la requête POST
      dispatch(fetchDepartments());
      console.log(response.data); 
    } catch (error) {
      dispatch(setError(error.message)); // Gère l'erreur si la requête échoue
    }
  };
  
export const deleteDepartments = (id) => async (dispatch) => {
    dispatch(setLoading());
    try {
      await api.delete(`depart/deleteDep/${id}`); // Ajout des guillemets autour de l'URL
      await dispatch(fetchDepartments()); 
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
   
  export const updateDepartment = (id, department) => async (dispatch) => {
    dispatch(setLoading()); // Active le chargement
    try {
      const response = await api.put(`depart/updateDep/${id}`, department);
  
      // Met à jour Redux avec la réponse de l'API
      dispatch({
        type: "UPDATE_DEPARTMENT_SUCCESS",
        payload: response.data, // La réponse de l'API
      });
  
      dispatch(fetchDepartments()); // Recharge la liste des départements
    } catch (error) {
      dispatch(setError(error.message)); // Gestion des erreurs
    }
  };
  