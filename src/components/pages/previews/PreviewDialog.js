import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const PreviewDialog = ({ form, onClose }) => {
  const handleEditForm = () => { //Sera para cambiar el nombre del formulario
    // Lógica para editar el formulario
    console.log('Editar formulario:', form);
  };

  const handleDuplicateForm = () => { //Duplicar el formulario para que se pueda editar los campos que desee
    // Lógica para duplicar el formulario
    console.log('Duplicar formulario:', form);
  };

  const handleDeleteForm = () => { //Eliminar el formulario
    // Lógica para eliminar el formulario
    console.log('Eliminar formulario:', form);
  };

  return (
    <Dialog open onClose={onClose}>
      <DialogTitle>Vista previa del formulario</DialogTitle>
      <DialogContent>
        {/* Aquí puedes mostrar la vista previa del formulario */}
        <p>Nombre: {form.nombre}</p>
        <p>Fecha: {form.fecha}</p>
        <p>Tipo: {form.tipo}</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleEditForm} color="primary">Editar</Button>
        <Button onClick={handleDeleteForm} color="primary">Eliminar</Button>
        <Button onClick={handleDuplicateForm} color="primary">Duplicar</Button>
        <Button onClick={onClose} color="primary">Cerrar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default PreviewDialog;
