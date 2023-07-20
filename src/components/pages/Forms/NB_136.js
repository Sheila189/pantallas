import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../../css/forms.css';
import TopBar from '../TopBar';

const Formulario136 = () => {
  const [form136Data, setFormData] = useState({
    job_No: '',
    name_jurisdiction: '',
    address: '',
    telephone: '',
    name_ower: '',
    address_owner: '',
    name_contact: '',
    email: '',
    telephone_contact: '',
    same_as: null,
    stock_item: null,
    name_installation: '',
    address_installation: '',
    date_installation: '',
    unknown_installation: null,
    name_manufacturer: '',
    data_report: null,
    item_registered_nacional: null,
    item_registered: '',
    type_item: '',
    serial_item: '',
    jurisdiction_item: '',
    year_built: '',
    dimensions: '',
    mawp_psi: '',
    safety_relief: '',
    nameplate: null,
    picture_nameplate: '',
    traceability: null,
    name_user: '',
    number_certificate: '',
    signature_representative: '',
    date_replace: '',
    signature_jurisdiction: '',
    date_jurisdiction: '',
    nacional_board_commission: '',
    number_jurisdiction: '',
    facsimile: '',
    name_user_certify: '',
    number_certificate_certify: '',
    signature_representative_certify: '',
    date_replace_certify: '',
    name_inspector: '',
    employer: '',
    signature_inspector: '',
    date_inspector: '',
    nb_commission: '',
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === 'checkbox' ? checked : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: inputValue,
    }));
  };

  const handleOptionChange = (name, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: prevFormData[name] === value ? null : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validateForm = () => {
      if (
        form136Data.assesment_No.trim() === '' ||
        form136Data.name_jurisdiction.trim() === '' ||
        form136Data.address.trim() === '' ||
        form136Data.telephone.trim() === '' ||
        form136Data.name_ower.trim() === '' ||
        form136Data.address_owner.trim() === '' ||
        form136Data.name_contact.trim() === '' ||
        form136Data.email.trim() === '' ||
        form136Data.telephone_contact.trim() === '' ||
        form136Data.same_as === null ||
        form136Data.stock_item === null ||
        form136Data.name_installation.trim() === '' ||
        form136Data.address_installation.trim() === '' ||
        form136Data.date_installation.trim() === '' ||
        form136Data.unknown_installation === null ||
        form136Data.name_manufacturer.trim() === '' ||
        form136Data.data_report.trim() === '' ||
        form136Data.item_registered_nacional.trim() === '' ||
        form136Data.item_registered.trim() === '' ||
        form136Data.type_item.trim() === '' ||
        form136Data.serial_item.trim() === '' ||
        form136Data.jurisdiction_item.trim() === '' ||
        form136Data.year_built.trim() === '' ||
        form136Data.dimensions.trim() === '' ||
        form136Data.mawp_psi.trim() === '' ||
        form136Data.safety_relief.trim() === '' ||
        form136Data.nameplate === null ||
        form136Data.picture_nameplate.trim() === '' ||
        form136Data.traceability === null ||
        form136Data.name_user.trim() === '' ||
        form136Data.number_certificate.trim() === '' ||
        form136Data.signature_representative.trim() === '' ||
        form136Data.date_replace.trim() === '' ||
        form136Data.signature_jurisdiction.trim() === '' ||
        form136Data.date_jurisdiction.trim() === '' ||
        form136Data.nacional_board_commission.trim() === '' ||
        form136Data.number_jurisdiction.trim() === '' ||
        form136Data.facsimile.trim() === '' ||
        form136Data.name_user_certify.trim() === '' ||
        form136Data.number_certificate_certify.trim() === '' ||
        form136Data.signature_representative_certify.trim() === '' ||
        form136Data.date_replace_certify.trim() === '' ||
        form136Data.name_inspector.trim() === '' ||
        form136Data.employer.trim() === '' ||
        form136Data.signature_inspector.trim() === '' ||
        form136Data.date_inspector.trim() === '' ||
        form136Data.nb_commission.trim() === ''
      ) {
        // Mostrar mensaje de error o realizar alguna acción adicional
        console.log('Todos los campos obligatorios deben ser completados');
        return false;
      }
    
      return true;
    };

    const isValid = validateForm();

    if (isValid) {
      const form136Data = {
        job_No: '',
        assesment_No: '',
        address: '',
        telephone: '',
        name_ower: '',
        address_owner: '',
        name_contact: '',
        email: '',
        telephone_contact: '',
        same_as: null,
        stock_item: null,
        name_installation: '',
        address_installation: '',
        date_installation: '',
        unknown_installation: null,
        name_manufacturer: '',
        data_report: '',
        item_registered_nacional: null,
        item_registered: '',
        type_item: '',
        serial_item: '',
        jurisdiction_item: '',
        year_built: '',
        dimensions: '',
        mawp_psi: '',
        safety_relief: '',
        nameplate: null,
        picture_nameplate: '',
        traceability: null,
        name_user: '',
        number_certificate: '',
        signature_representative: '',
        date_replace: '',
        signature_jurisdiction: '',
        date_jurisdiction: '',
        nacional_board_commission: '',
        number_jurisdiction: '',
        facsimile: '',
        name_user_certify: '',
        number_certificate_certify: '',
        signature_representative_certify: '',
        date_replace_certify: '',
        name_inspector: '',
        employer: '',
        signature_inspector: '',
        date_inspector: '',
        nb_commission: '',
      };

      setFormData(form136Data);

      // Enviar datos de la persona al endpoint /api/persons
      fetch('http://localhost:3000/api/form/nb136', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form136Data),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Registro de formulario nb-136 exitoso:', data);
        })
        .catch(error => {
          console.error('Error al registrar formulario nb-136:', error);
        });
    }
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
          <label>
            No. de Trabajo
            <input type="text" id="job_No" name="job_No" value={form136Data.job_No} onChange={handleChange} />
          </label>
          <label>
            Nombre de Jurisdicción
            <input type="text" id="name_jurisdiction" name="name_jurisdiction" value={form136Data.name_jurisdiction} onChange={handleChange} />
          </label>
          <label>
            Dirección
            <input type="text" id="address" name="address" value={form136Data.address} onChange={handleChange} />
          </label>
          <label>
            Teléfono
            <input type="text" id="telephone" name="telephone" value={form136Data.telephone} onChange={handleChange} />
          </label>
          <label>
            Nombre del Propietario
            <input type="text" id="name_ower" name="name_ower" value={form136Data.name_ower} onChange={handleChange} />
          </label>
          <label>
            Dirección del Propietario
            <input type="text" id="address_owner" name="address_owner" value={form136Data.address_owner} onChange={handleChange} />
          </label>
          <label>
            Nombre de Contacto
            <input type="text" id="name_contact" name="name_contact" value={form136Data.name_contact} onChange={handleChange} />
          </label>
          <label>
            Correo Electrónico
            <input type="text" id="email" name="email" value={form136Data.email} onChange={handleChange} />
          </label>
          <label>
            Teléfono de Contacto
            <input type="text" id="telephone_contact" name="telephone_contact" value={form136Data.telephone_contact} onChange={handleChange} />
          </label>
          <label className="form-field">
            <div className="field-label">Location of installation: :</div>
            <div className="option-buttons reason-options">
              <div className={`centered-option${form136Data.location === 'same_as' ? ' selected' : ''}`}>
                <input
                  type="radio"
                  id="same_as"
                  name="location"
                  value="same_as"
                  checked={form136Data.location === 'same_as'}
                  onChange={() => handleOptionChange('location', 'same_as')}
                />
                <label htmlFor="same_as">Same as #3</label>
              </div>
              <div className={`centered-option${form136Data.location === 'stock_item' ? ' selected' : ''}`}>
                <input
                  type="radio"
                  id="stock_item"
                  name="location"
                  value="stock_item"
                  checked={form136Data.location === 'stock_item'}
                  onChange={() => handleOptionChange('location', 'stock_item')}
                />
                <label htmlFor="stock_item">Stock Item-unknown</label>
              </div>
            </div>
          </label>
          <label>
            Nombre de la Instalación
            <input type="text" id="name_installation" name="name_installation" value={form136Data.name_installation} onChange={handleChange} />
          </label>
          <label>
            Dirección de la Instalación
            <input type="text" id="address_installation" name="address_installation" value={form136Data.address_installation} onChange={handleChange} />
          </label>
          <label>
            Fecha de Instalación
            <input type="text" id="date_installation" name="date_installation" value={form136Data.date_installation} onChange={handleChange} />
          </label>
          <label>
            ¿Se desconoce la fecha de instalación?
            <input type="checkbox" id="unknown_installation" name="unknown_installation" value={form136Data.unknown_installation} onChange={handleChange} />
          </label>
          <label className="form-field">
            <div className="field-label">Manufacturer's data report attached:</div>
            <div className="option-buttons reason-options">
              <div className={`centered-option${form136Data.data_report === 'yes' ? ' selected' : ''}`}>
                <input
                  type="radio"
                  id="yes"
                  name="data_report"
                  value="yes"
                  checked={form136Data.data_report === 'yes'}
                  onChange={() => handleOptionChange('data_report', 'yes')}
                />
                <label htmlFor="yes">Yes</label>
              </div>
              <div className={`centered-option${form136Data.data_report === 'No' ? ' selected' : ''}`}>
                <input
                  type="radio"
                  id="No"
                  name="data_report"
                  value="No"
                  checked={form136Data.data_report === 'No'}
                  onChange={() => handleOptionChange('data_report', 'No')}
                />
                <label htmlFor="No">No</label>
              </div>
            </div>
          </label>
          <label className="form-field">
            <div className="field-label">ITEM REGISTERED WITH NATIONAL BOARD:</div>
            <div className="option-buttons reason-options">
              <div className={`centered-option${form136Data.item_registered_nacional === 'yes' ? ' selected' : ''}`}>
                <input
                  type="radio"
                  id="yes"
                  name="item_registered_nacional"
                  value="yes"
                  checked={form136Data.item_registered_nacional === 'yes'}
                  onChange={() => handleOptionChange('item_registered_nacional', 'yes')}
                />
                <label htmlFor="yes">Yes</label>
              </div>
              <label>
                NB, NUMBER
                <input type="text" id="item_registered" name="item_registered" value={form136Data.item_registered} onChange={handleChange} />
              </label>
              <div className={`centered-option${form136Data.item_registered_nacional === 'No' ? ' selected' : ''}`}>
                <input
                  type="radio"
                  id="No"
                  name="item_registered_nacional"
                  value="No"
                  checked={form136Data.item_registered_nacional === 'No'}
                  onChange={() => handleOptionChange('item_registered_nacional', 'No')}
                />
                <label htmlFor="No">No</label>
              </div>
            </div>
          </label>
          <label>
            Nombre del Fabricante
            <input type="text" id="name_manufacturer" name="name_manufacturer" value={form136Data.name_manufacturer} onChange={handleChange} />
          </label>
          <label>
            Tipo de item
            <input type="text" id="type_item" name="type_item" value={form136Data.type_item} onChange={handleChange} />
          </label>  
          <label>
            Serial del item
            <input type="text" id="serial_item" name="serial_item" value={form136Data.serial_item} onChange={handleChange} />
          </label>
          <label>
            Jurisdicción del item
            <input type="text" id="jurisdiction_item" name="jurisdiction_item" value={form136Data.jurisdiction_item} onChange={handleChange} />
          </label>
          <label>
            Año de fabricación
            <input type="text" id="year_built" name="year_built" value={form136Data.year_built} onChange={handleChange} />
          </label>
          <label>
            Dimensiones
            <input type="text" id="dimensions" name="dimensions" value={form136Data.dimensions} onChange={handleChange} />
          </label>
          <label>
            mawp_psi
            <input type="text" id="mawp_psi" name="mawp_psi" value={form136Data.mawp_psi} onChange={handleChange} />
          </label>
          <label>
            Safety relief
            <input type="text" id="safety_relief" name="safety_relief" value={form136Data.safety_relief} onChange={handleChange} />
          </label>
          <label>
            nameplate
            <input
                  type="radio"
                  id="nameplate"
                  name="nameplate"
                  value="nameplate"
                  checked={form136Data.nameplate === 'nameplate'}
                  onChange={() => handleOptionChange('nameplate', 'nameplate')}
                />
          </label>
          <label>
            picture nameplate
            <input type="text" id="picture_nameplate" name="picture_nameplate" value={form136Data.picture_nameplate} onChange={handleChange} />
          </label>
          <label>
            traceability
            <input
                  type="radio"
                  id="traceability"
                  name="traceability"
                  value="traceability"
                  checked={form136Data.traceability === 'traceability'}
                  onChange={() => handleOptionChange('traceability', 'traceability')}
                />
          </label>
          <label>
            Nombre del usuario
            <input type="text" id="name_user" name="name_user" value={form136Data.name_user} onChange={handleChange} />
          </label>
          <label>
            Numero del certificado
            <input type="text" id="number_certificate" name="number_certificate" value={form136Data.number_certificate} onChange={handleChange} />
          </label>
          <label>
            Firma del representante
            <input type="text" id="signature_representative" name="signature_representative" value={form136Data.signature_representative} onChange={handleChange} />
          </label>
          <label>
            Fecha de reemplazo
            <input type="text" id="date_replace" name="date_replace" value={form136Data.date_replace} onChange={handleChange} />
          </label>
          <label>
            Firma de jurisdicción
            <input type="text" id="signature_jurisdiction" name="signature_jurisdiction" value={form136Data.signature_jurisdiction} onChange={handleChange} />
          </label>
          <label>
            Fecha de Jurisdicción
            <input type="text" id="date_jurisdiction" name="date_jurisdiction" value={form136Data.date_jurisdiction} onChange={handleChange} />
          </label>
          <label>
          comisión de la junta nacional
            <input type="text" id="commission_national_board" name="commission_national_board" value={form136Data.commission_national_board} onChange={handleChange} />
          </label>
          <label>
            Número de Jurisdicción
            <input type="text" id="number_jurisdiction" name="number_jurisdiction" value={form136Data.number_jurisdiction} onChange={handleChange} />
          </label>
          <label>
            facsimile
            <input
                  type="radio"
                  id="facsimile"
                  name="facsimile"
                  value="facsimile"
                  checked={form136Data.facsimile === 'facsimile'}
                  onChange={() => handleOptionChange('facsimile', 'facsimile')}
                />
          </label>
          <label>
            Nombre del certificado del usuario
            <input type="text" id="name_user_certify" name="name_user_certify" value={form136Data.name_user_certify} onChange={handleChange} />
          </label>
          <label>
            Número del certificado del usuario
            <input type="text" id="number_certificate_certify" name="number_certificate_certify" value={form136Data.number_certificate_certify} onChange={handleChange} />
          </label>
          <label>
            Firma del representante del certificado
            <input type="text" id="signature_representative_certify" name="signature_representative_certify" value={form136Data.signature_representative_certify} onChange={handleChange} />
          </label>
          <label>
            Fecha de reemplazo del certificado
            <input type="text" id="date_replace_certify" name="date_replace_certify" value={form136Data.date_replace_certify} onChange={handleChange} />
          </label>
          <label>
            Nombre del Inspector
            <input type="text" id="name_inspector" name="name_inspector" value={form136Data.name_inspector} onChange={handleChange} />
          </label>
          <label>
            Empleado
            <input type="text" id="employer" name="employer" value={form136Data.employer} onChange={handleChange} />
          </label>
          <label>
            Firma del Inspector
            <input type="text" id="signature_inspector" name="signature_inspector" value={form136Data.signature_inspector} onChange={handleChange} />
          </label>
          <label>
            Fecha de Inspección
            <input type="text" id="date_inspector" name="date_inspector" value={form136Data.date_inspector} onChange={handleChange} />
          </label>
          <label>
            Nb de comisión
            <input type="text" id="nb_commission" name="nb_commission" value={form136Data.nb_commission} onChange={handleChange} />
          </label>
  </form>
);
};

const NB136 = () => {
  const navigate = useNavigate();
  
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <TopBar />
      <h1>Formulario NB 136</h1>
      <Formulario136 />
      <div className="button-container">
        <button type="submit">Enviar</button>
        <button type="submit">Guardar y Salir</button>
        <button type="submit">Cancelar</button>
      </div>
      <div className="arrow-container">
        <div style={{ marginTop: '7px'}}>
            <ArrowBackIcon style={{ fontSize: ' rem' }} variant="contained" color="primary" onClick={handleGoBack} />
        </div>
      </div>
    </div>
  );
};

export default NB136;

