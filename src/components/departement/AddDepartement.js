import React, { useEffect } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

function AddDepartement({ open, handleClose, handleSubmit, editingDepartment }) {
  const {
    register,
    handleSubmit: onSubmit,
    setValue, // Permet de pré-remplir les champs
    formState: { errors },
    reset,
  } = useForm();

  // Pré-remplir les champs en cas d'édition
  useEffect(() => {
    if (editingDepartment) {
      setValue("NameDep", editingDepartment.NameDep);
      setValue("DescrpDetp", editingDepartment.DescrpDetp);
    } else {
      reset();
    }
  }, [editingDepartment, setValue, reset]);

  // Soumettre le formulaire
  const handleFormSubmit = (data) => {
    handleSubmit(data);
    reset();
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{editingDepartment ? "Modifier le Département" : "Ajouter un Département"}</DialogTitle>
      <DialogContent>
        <form onSubmit={onSubmit(handleFormSubmit)}>
          <TextField
            label="Nom du Département"
            variant="standard"
            fullWidth
            {...register("NameDep", { required: "Le nom du département est requis" })}
            error={!!errors.NameDep}
            helperText={errors.NameDep?.message}
            sx={{ marginBottom: 3 }}
          />
          <TextField
            label="Description"
            variant="standard"
            fullWidth
            {...register("DescrpDetp", { required: "La description est requise" })}
            error={!!errors.DescrpDetp}
            helperText={errors.DescrpDetp?.message}
            sx={{ marginBottom: 2 }}
          />
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Annuler
            </Button>
            <Button type="submit" color="primary">
              {editingDepartment ? "Modifier" : "Ajouter"}
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddDepartement;
