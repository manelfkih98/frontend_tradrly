import { configureStore } from "@reduxjs/toolkit";
import departmentsReducer from "./slices/departmentsSlice"; 
import projectsreducer from "./slices/projectsSlice";
import offresreducer from "./slices/offreSlice";
import questionreducer from "./slices/questionSlice"
import postsSlice from "./slices/postsSlice"
const store = configureStore({
  reducer: {
    departments: departmentsReducer,
    projects:projectsreducer,
    offres:offresreducer,
    questions:questionreducer,
    posts:postsSlice,
   
  },
});

export default store;
