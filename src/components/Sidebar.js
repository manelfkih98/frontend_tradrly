import React, { useState } from "react";
import { 
  Drawer, List, ListItemButton, ListItemIcon, ListItemText, Box, Collapse 
} from "@mui/material";
import { 
  Dashboard, TableChart, Receipt, Notifications, AccountCircle, Login, AppRegistration, ExpandLess, ExpandMore, Work, School 
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 250,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 250,
          boxSizing: "border-box",
          background: "linear-gradient(to bottom,rgb(65, 29, 167), #111)",
          color: "#fff",
        },
      }}
    >
      <Box sx={{ textAlign: "center", p: 2, fontSize: 18, fontWeight: "bold" }}>
        Tradrly
      </Box>

      <List>
        <ListItemButton component={Link} to="/dashboard">
          <ListItemIcon><Dashboard sx={{ color: "#fff" }} /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton component={Link} to="/departement">
          <ListItemIcon><TableChart sx={{ color: "#fff" }} /></ListItemIcon>
          <ListItemText primary="Département" />
        </ListItemButton>

        <ListItemButton component={Link} to="/solution">
          <ListItemIcon><Receipt sx={{ color: "#fff" }} /></ListItemIcon>
          <ListItemText primary="Projets" />
        </ListItemButton>

       
        <ListItemButton onClick={() => setOpen(!open)}>
          <ListItemIcon><Notifications sx={{ color: "#fff" }} /></ListItemIcon>
          <ListItemText primary="Offres" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton component={Link} to="/offre/stage" sx={{ pl: 4 }}>
              <ListItemIcon><School sx={{ color: "#fff" }} /></ListItemIcon>
              <ListItemText primary="Stage" />
            </ListItemButton>

            <ListItemButton component={Link} to="/offre/emploi" sx={{ pl: 4 }}>
              <ListItemIcon><Work sx={{ color: "#fff" }} /></ListItemIcon>
              <ListItemText primary="Emploi" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton component={Link} to="/post">
          <ListItemIcon><AccountCircle sx={{ color: "#fff" }} /></ListItemIcon>
          <ListItemText primary="Post " />
        </ListItemButton>

        <ListItemButton component={Link} to="/question">
          <ListItemIcon><Login sx={{ color: "#fff" }} /></ListItemIcon>
          <ListItemText primary="Questions" />
        </ListItemButton>

        <ListItemButton component={Link} to="/PostWithoutOffre">
        <ListItemIcon><AccountCircle sx={{ color: "#fff" }} /></ListItemIcon>
          <ListItemText primary="Demande d'offre " />
        </ListItemButton>
         

         
        <ListItemButton component={Link} to="/Qcm">
        <ListItemIcon><AccountCircle sx={{ color: "#fff" }} /></ListItemIcon>
          <ListItemText primary="Test " />
        </ListItemButton>

       


      
      </List>
    </Drawer>
  );
};

export default Sidebar;
