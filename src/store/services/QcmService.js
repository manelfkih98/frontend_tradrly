import api from "../../config/api"
import PATHS from "../../path/apiPath";

import { setQCM, setLoading, setError } from "../slices/QcmSlice";

export const fetchQcm = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await api.get(PATHS.QCM.ALL_QCM);
    dispatch(setQCM(response.data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};


export const passrTest=(id) => async(dispatch) =>
{
  try{
   const response= api.post(`${PATHS.QCM.PASSER_TEST}/${id}`)
  }
  catch(error)
  {
    dispatch(setError(error.message));
  }

}

export const Test=(id) => async(dispatch) =>
  {
    try{
     const response= api.get(`${PATHS.QCM.TEST}/${id}`)
    }
    catch(error)
    {
      dispatch(setError(error.message));
    }
  
  }
  




