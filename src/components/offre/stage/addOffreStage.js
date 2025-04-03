import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOffreStage } from "../../../store/services/offreService";
import { fetchDepartments } from "../../../store/services/departService";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

const AddOffreStage = ({ open, handleClose }) => {
  const dispatch = useDispatch();
  const departments = useSelector((state) => state.departments.departments) || [];

  const [newOffre, setNewOffre] = useState({
    titre: "",
    description: "",
    status: "true",
    date_publi: new Date().toISOString(),
    date_limite: "",
    departement_name: "",
  });

  useEffect(() => {
    dispatch(fetchDepartments());
  }, [dispatch]);

  const handleChange = (e) => {
    setNewOffre({ ...newOffre, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(newOffre);
    dispatch(createOffreStage(newOffre));
    handleClose(); // Ferme la modale après soumission
    setNewOffre({
      titre: "",
      description: "",
      status: "true",
      date_publi: new Date().toISOString(),
      date_limite: "",
      departement_name: "",
    });
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Nouvelle offre de stage</DialogTitle>
      <DialogContent>
        <TextField
          label="Titre"
          name="titre"
          fullWidth
          margin="dense"
          value={newOffre.titre}
          onChange={handleChange}
        />
        <TextField
          label="Description"
          name="description"
          fullWidth
          margin="dense"
          value={newOffre.description}
          onChange={handleChange}
        />
        <TextField
          label="Date de clôture"
          name="date_limite"
          type="date"
          fullWidth
          margin="dense"
          InputLabelProps={{ shrink: true }}
          value={newOffre.date_limite}
          onChange={handleChange}
        />

        {/* Liste déroulante des départements */}
        <FormControl fullWidth margin="dense">
          <InputLabel>Département</InputLabel>
          <Select
            name="departement_name"
            value={newOffre.departement_name}
            onChange={handleChange}
          >
            {departments.length > 0 ? (
              departments.map((dep) => (
                <MenuItem key={dep._id} value={dep.NameDep}>
                  {dep.NameDep}
                </MenuItem>
              ))
            ) : (
              <MenuItem disabled>Aucun département disponible</MenuItem>
            )}
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Annuler</Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Ajouter
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddOffreStage;
