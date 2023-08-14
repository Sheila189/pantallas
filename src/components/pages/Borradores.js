import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, TextField, InputAdornment, Table, TableHead, TableRow, TableCell, TableBody, TableSortLabel, IconButton, Pagination, Select, MenuItem } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import PreviewDialog from './previews/PreviewDialog';
import EditFormNameDialog from './previews/EditFormNameDialog';
import TopBar from './TopBar';

const Borradores = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');
  const [sortColumn, setSortColumn] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [openPreviewDialog, setOpenPreviewDialog] = useState(false);
  const [selectedForm, setSelectedForm] = useState(null);
  const [editingFormName, setEditingFormName] = useState('');
  const [openEditFormNameDialog, setOpenEditFormNameDialog] = useState(false);


  const handleGoBack = () => {
    navigate(-1);
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    setCurrentPage(1); // Reiniciar la página actual al realizar una nueva búsqueda
  };

  const handleSort = (column) => {
    if (sortColumn === column) {
      // Cambiar la dirección del ordenamiento si se hace clic en la columna actualmente ordenada
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      // Establecer una nueva columna de ordenamiento y ordenar de forma ascendente
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value);
    setCurrentPage(1); // Reiniciar la página actual al cambiar el número de filas por página
  };

  // Datos de ejemplo
  const formData = [
    { nombre: 'Formulario 1', owner: 'Metalins', fecha: '2023-05-20', tipo: 'NB-136' },
    { nombre: 'Formulario 2', owner: 'Coca-Cola', fecha: '2023-05-22', tipo: 'NB-4' },
    { nombre: 'Formulario 3', owner: 'Femsa', fecha: '2023-05-23', tipo: 'NB-5' },
    { nombre: 'Formulario 1', owner: 'Thales', fecha: '2023-05-20', tipo: 'NB-6' },
    { nombre: 'Formulario 2', owner: 'Nissan', fecha: '2023-05-22', tipo: 'NB-7' },
    { nombre: 'Formulario 3', owner: 'Gems', fecha: '2023-05-23', tipo: 'NB-403' },
    // ...
  ];

  // Filtrar los datos basado en el texto de búsqueda
  const filteredData = formData.filter((form) => {
    const searchValue = searchText.toLowerCase();
    return form.nombre.toLowerCase().includes(searchValue) || form.owner.toLowerCase().includes(searchValue) || form.tipo.toLowerCase().includes(searchValue) || form.fecha.toLowerCase().includes(searchValue);
  });

  // Ordenar los datos según la columna y dirección del ordenamiento
  const sortedData = [...filteredData].sort((a, b) => {
    const valueA = a[sortColumn] || '';
    const valueB = b[sortColumn] || '';
  
    const comparison = valueA.localeCompare(valueB);
    return sortDirection === 'asc' ? comparison : -comparison;
  });

  // Calcular el índice inicial y final de los datos a mostrar según la paginación
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  // Obtener los datos para la página actual
  const paginatedData = sortedData.slice(startIndex, endIndex);

  // Calcular el número total de páginas
  const totalPages = Math.ceil(sortedData.length / rowsPerPage);

  const handleDownloadForm = (form) => {
    // Lógica para descargar el formulario
    console.log('Descargar formulario:', form);
  };

  const handleDeleteForm = (form) => {
    // Lógica para eliminar el formulario
    console.log('Eliminar formulario:', form);
  };

  const handleOpenPreviewDialog = (form) => {
    setSelectedForm(form);
    setOpenPreviewDialog(true);
  };

  const handleOpenEditFormNameDialog = (form) => {
    setEditingFormName(form.nombre);
    setOpenEditFormNameDialog(true);
  };

  const handleSaveFormName = (newName) => {
    // Lógica para guardar el nuevo nombre del formulario
    // Puedes realizar una llamada a la API o actualizar los datos localmente
  
    // Desactivar el modo de edición
    setEditingFormName('');
    setOpenEditFormNameDialog(false);
  };
  
  const handleCancelEditFormName = () => {
    // Cancelar la edición del nombre del formulario
    setEditingFormName('');
    setOpenEditFormNameDialog(false);
  };

  return (
    <div>
      <TopBar />
      <div style={{ overflowX: 'auto', padding: '16px', border: '1px solid #ccc', borderRadius: '4px', marginTop: '15px' }}>
        <TextField label="Buscar" variant="outlined" value={searchText} onChange={handleSearchChange}
          InputProps={{ endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ), }}
        />
      </div>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ textAlign: 'center' }}>
              <TableSortLabel active={sortColumn === 'nombre'} direction={sortColumn === 'nombre' ? sortDirection : 'asc'} onClick={() => handleSort('nombre')}>
                Name
              </TableSortLabel>
            </TableCell>
            <TableCell style={{ textAlign: 'center' }}>
              <TableSortLabel active={sortColumn === 'owner'} direction={sortColumn === 'owner' ? sortDirection : 'asc'} onClick={() => handleSort('owner')}>
                Owner
              </TableSortLabel>
            </TableCell>
            <TableCell style={{ textAlign: 'center' }}>
              <TableSortLabel active={sortColumn === 'fecha'} direction={sortColumn === 'fecha' ? sortDirection : 'asc'} onClick={() => handleSort('fecha')}>
                Date
              </TableSortLabel>
            </TableCell>
            <TableCell style={{ textAlign: 'center' }}>
              <TableSortLabel active={sortColumn === 'tipo'} direction={sortColumn === 'tipo' ? sortDirection : 'asc'} onClick={() => handleSort('tipo')}>
                Type
              </TableSortLabel>
            </TableCell>
            <TableCell style={{ width: '20%', textAlign: 'center' }}>Accion</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedData.map((form, index) => (
            <TableRow key={index}>
              <TableCell style={{ textAlign: 'center' }}>{form.nombre}</TableCell>
              <TableCell style={{ textAlign: 'center' }}>{form.owner}</TableCell>
              <TableCell style={{ textAlign: 'center' }}>{form.fecha}</TableCell>
              <TableCell style={{ textAlign: 'center' }}>{form.tipo}</TableCell>
              {/* Columna para el Owner */}
              
              <TableCell style={{ display: 'flex', justifyContent: 'space-between' }}>
                {/* Botón para ver el formulario */}
                <IconButton color="primary" onClick={() => handleOpenPreviewDialog(form)}>
                  <VisibilityIcon />
                </IconButton>
                {openPreviewDialog && (
                  <PreviewDialog form={selectedForm} onClose={() => setOpenPreviewDialog(false)} />
                )}
                {/* Icono para editar el nombre del formulario */}
                <IconButton color="primary" onClick={() => handleOpenEditFormNameDialog(form)}>
                  <EditIcon />
                </IconButton>
                <EditFormNameDialog open={openEditFormNameDialog} initialName={editingFormName} onSave={handleSaveFormName} onClose={handleCancelEditFormName}/>
                {/* Botón para descargar el formulario */}
                <IconButton color="primary" onClick={() => handleDownloadForm(form)}>
                  <CloudDownloadIcon />
                </IconButton>
                {/* Botón para eliminar el formulario */}
                <IconButton color="primary" onClick={() => handleDeleteForm(form)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', margin: 'auto' }}>
          <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} variant="outlined" shape="rounded" />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="caption">Filas por página:</Typography>
          <Select value={rowsPerPage} onChange={handleRowsPerPageChange} style={{ marginLeft: '8px', width: '65px', fontSize: '90%' }}>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={50}>50</MenuItem>
            <MenuItem value={100}>100</MenuItem>
          </Select>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px'}}>
          <ArrowBackIcon style={{ fontSize: '2.5rem' }} variant="contained" color="primary" onClick={handleGoBack} />
      </div>

    </div>
  );
};

export default Borradores;
