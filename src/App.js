import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/dashboard";
import Departement from "./pages/departemenet";
import { Box } from "@mui/material";
import Solution from "./pages/solution";
import OffreStage from "./pages/offreStage";
import OffreEmploi from "./pages/offreEmploi";
import Question  from "./pages/question";
import Posts from "./pages/posts";


const App = () => {
  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/departement" element={<Departement />} />
            <Route path="/solution" element={<Solution/>} />
            <Route path="/offre/stage" element={<OffreStage />} />
            <Route path="/offre/emploi" element={<OffreEmploi />} />
           <Route path="/Question" element={<Question/>} />
           <Route path="/post" element={<Posts/>} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
