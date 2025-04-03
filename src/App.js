import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/dashboard";
import Departement from "./pages/departemenet";
import { Box } from "@mui/material";
import Solution from "./pages/solution";
import OffreStage from "./pages/offreStage";
import OffreEmploi from "./pages/offreEmploi";
import Question from "./pages/question";
import Posts from "./pages/posts";
import PostWithoutOffre from "./pages/postWithoutOffre";
import Login from "./pages/login";
import Qcm from "./pages/Qcm";
import Test from "./pages/test";

const App = () => {
  const location = useLocation();
  const hideSidebarRoutes = ["/"];
  const shouldHideSidebar = hideSidebarRoutes.includes(location.pathname.toLowerCase());

  return (
    <Box sx={{ display: "flex" }}>
      {!shouldHideSidebar && <Sidebar />}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/departement" element={<Departement />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/offre/stage" element={<OffreStage />} />
          <Route path="/offre/emploi" element={<OffreEmploi />} />
          <Route path="/question" element={<Question />} />
          <Route path="/post" element={<Posts />} />
          <Route path="/postwithoutoffre" element={<PostWithoutOffre />} />
          <Route path="/login" element={<Login />} />
          <Route path="/QCM" element={<Qcm />} />
          <Route path="/test" element={<Test/>}/>

        </Routes>
      </Box>
    </Box>
  );
};
export default App;
