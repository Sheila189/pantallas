import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';

const EditFormNameDialog = ({ open, initialName, onSave, onClose }) => {
  const [formName, setFormName] = useState(initialName);

  const handleNameChange = (event) => {
    setFormName(event.target.value);
  };

  const handleSave = () => {
    onSave(formName);
  };

  const handleClose = () => {
    setFormName(initialName);
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Editar nombre del formulario</DialogTitle>
      <DialogContent>
        <TextField value={formName} onChange={handleNameChange} label="Nuevo nombre" fullWidth />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={handleSave} color="primary">
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditFormNameDialog;
