import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../../css/forms2.css';
import TopBar from '../TopBar';
import { savePDF } from '@progress/kendo-react-pdf';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

const NB4 = () => {
  const [formErrors, setFormErrors] = useState({});

  const [form4Data, setFormData] = useState({
    jurisdiction: '',
    date_service: '',
    noticeOf: null,
    effective_Date: '',
    typeObject: null,
    object: '',
    ownersNo: '',
    jurisdictionNo: '',
    national_BoardNo: '',
    name_Manufacturer: '',
    name_Owner: '',
    name_Owner_Country: '',
    location_Object_Country: '',
    user_Object: '',
    date_Last_Certificate: '',
    certificateIssued: null,
    reasonDiscontinuance: null,
    chief_inspector: '',
    branch_office: '',
    customFileName: '', 
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

  const handleClearError = (fieldName) => {
    setFormErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors };
      delete updatedErrors[fieldName];
      return updatedErrors;
    });
  };

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      const nb4Data = {
        jurisdiction: form4Data.jurisdiction,
        dateService: form4Data.date_service,
        noticeOf: form4Data.noticeOf,
        effectiveDate: form4Data.effective_Date,
        typeObject: form4Data.typeObject,
        object: form4Data.object,
        ownersNo: form4Data.ownersNo,
        jurisdictionNo: form4Data.jurisdictionNo,
        nationalBoardNo: form4Data.national_BoardNo,
        nameManufacturer: form4Data.name_Manufacturer,
        nameOwner: form4Data.name_Owner,
        nameOwnerCountry: form4Data.name_Owner_Country,
        locationObjectCountry: form4Data.location_Object_Country,
        userObject: form4Data.user_Object,
        dateLastCertificate: form4Data.date_Last_Certificate,
        certificateIssued: form4Data.certificateIssued,
        reasonDiscontinuance: form4Data.reasonDiscontinuance,
        chiefInspector: form4Data.chief_inspector,
        branchOffice: form4Data.branch_office,
      };

      // Enviar datos de la persona al endpoint /api/persons
      fetch('http://localhost:3000/api/persons', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nb4Data),
      })
        .catch(error => {
          console.error('Error al registrar el formulario NB-4:', error);
        });

    

    const generatePDF = async (pdfData) => {
      const { jurisdiction, dateService, noticeOf, effectiveDate, typeObject, object, ownersNo, jurisdictionNo, nationalBoardNo, nameManufacturer, nameOwner, nameOwnerCountry, locationObjectCountry, userObject, dateLastCertificate, certificateIssued, reasonDiscontinuance, chiefInspector, branchOffice } = pdfData;
    
      // Crear un nuevo documento PDF
      const pdfDoc = await PDFDocument.create();
      const page = pdfDoc.addPage();
    
      // Establecer fuentes
      const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    
      // Agregar texto al PDF
      page.drawText('FORM NB-4', { x: 50, y: 750, font, size: 16, color: rgb(0, 0, 0) });
      page.drawText('NEW BUSINESS OR DISCONTINUANCE', { x: 50, y: 730, font, size: 14, color: rgb(0, 0, 0) });
    
      // Datos del formulario
      page.drawText(`1. JURISDICTION: ${jurisdiction}`, { x: 50, y: 700, font, size: 12, color: rgb(0, 0, 0) });
      page.drawText(`2. DATE OF SERVICE: ${dateService}`, { x: 50, y: 680, font, size: 12, color: rgb(0, 0, 0) });
      page.drawText(`2. NOTICE OF: ${noticeOf ? 'Yes' : 'No'}`, { x: 50, y: 660, font, size: 12, color: rgb(0, 0, 0) });
      page.drawText(`3. EFFECTIVE DATE: ${effectiveDate}`, { x: 50, y: 640, font, size: 12, color: rgb(0, 0, 0) });
      page.drawText(`4. TYPE OF OBJECT: ${typeObject ? 'High Pressure' : 'Low Pressure'}`, { x: 50, y: 620, font, size: 12, color: rgb(0, 0, 0) });
      page.drawText(`5. OBJECT: ${object}`, { x: 50, y: 600, font, size: 12, color: rgb(0, 0, 0) });
      page.drawText(`6. OWNER'S NO.: ${ownersNo}`, { x: 50, y: 580, font, size: 12, color: rgb(0, 0, 0) });
      page.drawText(`7. JURISDICTION NO.: ${jurisdictionNo}`, { x: 50, y: 560, font, size: 12, color: rgb(0, 0, 0) });
      page.drawText(`8. NATIONAL BOARD NO.: ${nationalBoardNo}`, { x: 50, y: 540, font, size: 12, color: rgb(0, 0, 0) });
      page.drawText(`9. NAME OF MANUFACTURER: ${nameManufacturer}`, { x: 50, y: 520, font, size: 12, color: rgb(0, 0, 0) });
      page.drawText(`10. NAME OF OWNER: ${nameOwner}`, { x: 50, y: 500, font, size: 12, color: rgb(0, 0, 0) });
      page.drawText(`11. NAME OF OWNER INCLUDING COUNTY: ${nameOwnerCountry}`, { x: 50, y: 480, font, size: 12, color: rgb(0, 0, 0) });
      page.drawText(`12. LOCATION OF OBJECT INCLUDING COUNTY: ${locationObjectCountry}`, { x: 50, y: 460, font, size: 12, color: rgb(0, 0, 0) });
      page.drawText(`13. USER OF OBJECT (IF SAME AS OWNER SHOW “SAME”): ${userObject}`, { x: 50, y: 440, font, size: 12, color: rgb(0, 0, 0) });
      page.drawText(`14. DATE OF LAST CERTIFICATE INSPECT., IF ANY: ${dateLastCertificate}`, { x: 50, y: 420, font, size: 12, color: rgb(0, 0, 0) });
      page.drawText(`15. CERTIFICATE ISSUED: ${certificateIssued ? 'Yes' : 'No'}`, { x: 50, y: 400, font, size: 12, color: rgb(0, 0, 0) });
      page.drawText(`16. REASON FOR DISCONTINUANCE OR CANCELLATION: ${reasonDiscontinuance ? 'Yes' : 'No'}`, { x: 50, y: 380, font, size: 12, color: rgb(0, 0, 0) });
      page.drawText(`17. REMARKS (USE REVERSE SIDE):`, { x: 50, y: 360, font, size: 12, color: rgb(0, 0, 0) });
      page.drawText(`18. By: ${chiefInspector}`, { x: 50, y: 340, font, size: 12, color: rgb(0, 0, 0) });
      page.drawText(`BRANCH OFFICE: ${branchOffice}`, { x: 50, y: 320, font, size: 12, color: rgb(0, 0, 0) });
      
      // Guardar el PDF en una variable Uint8Array
      const pdfBytes = await pdfDoc.save();

      // Guardar el PDF en el navegador y abrirlo en una nueva pestaña
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      window.open(url);
    };

    const pdfBlob = await generatePDF(pdfData); // Generar el PDF

    let fileName = 'formulario_nb4.pdf'; // Nombre predeterminado

    // Obtener el nombre personalizado del archivo del formulario
    const customFileName = form4Data.customFileName.trim();
    if (customFileName !== '') {
      fileName = `${customFileName}.pdf`;
    }

    savePDF(pdfBlob, { fileName }); // Descargar el PDF generado con el nombre personalizado
    }
  }, [form4Data]);

// Función para guardar los datos en la base de datos
/*const saveFormData = useCallback(async () => {
  // Realizar la lógica para guardar los datos en la base de datos
  // Puedes utilizar fetch u otra librería para hacer la solicitud al servidor
  try {
    const response = await fetch('http://localhost:3000/api/form/nb4', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form4Data),
    });

    if (response.ok) {
      console.log('Datos guardados exitosamente');
    } else {
      console.error('Error al guardar los datos:', response.status);
    }
  } catch (error) {
    console.error('Error al comunicarse con el servidor:', error);
  }
}, [form4Data]);*/

const validateForm = () => {
  const {
    jurisdiction,
    date_service,
    noticeOf,
    effective_Date,
    typeObject,
    object,
    ownersNo,
    jurisdictionNo,
    national_BoardNo,
    name_Manufacturer,
    name_Owner,
    name_Owner_Country,
    location_Object_Country,
    user_Object,
    date_Last_Certificate,
    certificateIssued,
    reasonDiscontinuance,
    chief_inspector,
    branch_office, 
  } = form4Data;

  console.log('Form Data: ',form4Data);

  const errors = {};

  if (jurisdiction === '') {
    errors.jurisdiction = 'enter the jurisdiction'
  }
  if (date_service === '') {
    errors.date_service = 'enter the date service'
  }
  if (noticeOf === '') {
    errors.noticeOf = 'enter the noticeOf'
  }
  if (effective_Date === '') {
    errors.effective_Date = 'enter the effective_Date'
  }
  if (typeObject === '') {
    errors.typeObject = 'enter the typeObject'
  }
  if (object === '') {
    errors.object = 'enter the object'
  }
  if (ownersNo === '') {
    errors.ownersNo = 'enter the ownersNo'
  }
  if (jurisdictionNo === '') {
    errors.jurisdictionNo = 'enter the jurisdictionNo'
  }
  if (national_BoardNo === '') {
    errors.national_BoardNo = 'enter the national_BoardNo'
  }
  if (name_Manufacturer === '') {
    errors.name_Manufacturer = 'enter the name_Manufacturer'
  }
  if (name_Owner === '') {
    errors.name_Owner = 'enter the name_Owner'
  }
  if (name_Owner_Country === '') {
    errors.name_Owner_Country = 'enter the name_Owner_Country'
  }
  if (location_Object_Country === '') {
    errors.location_Object_Country = 'enter the location_Object_Country'
  }
  if (user_Object === '') {
    errors.user_Object = 'enter the user_Object'
  }
  if (date_Last_Certificate === '') {
    errors.date_Last_Certificate = 'enter the date_Last_Certificate'
  }
  if (certificateIssued === '') {
    errors.certificateIssued = 'enter the certificateIssued'
  }
  if (reasonDiscontinuance === '') {
    errors.reasonDiscontinuance = 'enter the reasonDiscontinuance'
  }
  if (chief_inspector === '') {
    errors.chief_inspector = 'enter the chief_inspector'
  }
  if (branch_office === '') {
    errors.branch_office = 'enter the branch_office'
  }

  setFormErrors(errors);

  return Object.keys(errors).length === 0;
};

useEffect(() => {
  handleSubmit();
}, [form4Data, handleSubmit]);

const navigate = useNavigate();

const handleGoBack = () => {
  navigate(-1);
};

const handleSaveAndExit = () => {
  handleSubmit(); // Guardar los datos en la base de datos
  navigate(-1); // Redirigir al usuario a la página anterior
};

const handleCancel = () => {
  navigate(-1); // Redirigir al usuario a la página anterior
};

  return (
    <form className="formulario" onSubmit={handleSubmit}>
    <TopBar />
    <div className="form-title">
      FORM NB-4
      <br />
      NEW BUSINESS OR DISCONTINUANCE
      <br />
      USED BY AUTHORIZED INSPECTION AGENCIES
    </div>
  <div className="container">
    <table>
    <tbody>
      <tr>
        <td>
          <div className="form-item">
            <label htmlFor="date_service">To:</label>
          </div>
        </td>
        <td>
          <div className="form-item">
            <input type="text" id="jurisdiction" name="jurisdiction" value={form4Data.jurisdiction} onChange={handleChange} />
            JURISDICTION
            {formErrors.jurisdiction && (
              <p className="error-message">
                {formErrors.jurisdiction}
                <span className="close-button" onClick={() => handleClearError('jurisdiction')}>X</span>
              </p>
            )}
          </div>
        </td>
        <td colSpan="2"></td>
        <td>
          <div className="form-item">
            <input type="text" id="date_service" name="date_service" value={form4Data.date_service} onChange={handleChange} />
            <label htmlFor="date_service">1. DATE OF SERVICE</label>
            {formErrors.date_service && (
              <p className="error-message">
                {formErrors.date_service}
                <span className="close-button" onClick={() => handleClearError('date_service')}>X</span>
              </p>
            )}
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <p>2. Notice of:</p>
        </td>
        <td colSpan="2">
        <div className="option-buttons reason-options">
              <div className={`centered-option${form4Data.noticeOf === 'new_insurance' ? ' selected' : ''}`}>
                <input
                  type="checkbox" id="new_insurance" name="noticeOf" value="new_insurance"
                  checked={form4Data.noticeOf === 'new_insurance'}
                  onChange={() => handleOptionChange('noticeOf', 'new_insurance')}
                />
                <label htmlFor="new_insurance">New insurance business</label>
              </div>
              <div className={`centered-option${form4Data.noticeOf === 'discontinuance' ? ' selected' : ''}`}>
                <input
                  type="checkbox" id="discontinuance" name="noticeOf" value="discontinuance"
                  checked={form4Data.noticeOf === 'discontinuance'}
                  onChange={() => handleOptionChange('noticeOf', 'discontinuance')}
                />
                <label htmlFor="discontinuance">Discontinuance</label>
              </div>
              <div className={`centered-option${form4Data.noticeOf === 'discontinuance' ? ' selected' : ''}`}>
                <input
                  type="checkbox" id="refusal" name="noticeOf" value="refusal"
                  checked={form4Data.noticeOf === 'refusal'}
                  onChange={() => handleOptionChange('noticeOf', 'refusal')}
                />
                <label htmlFor="refusal">Refusal to insure</label>
              </div>
              {formErrors.noticeOf && (
              <p className="error-message">
                {formErrors.noticeOf}
                <span className="close-button" onClick={() => handleClearError('noticeOf')}>X</span>
              </p>
            )}
            </div>
        </td>
        <td>
          <div className="form-item">
            <label htmlFor="effective_Date">3. Effective Date</label>
            <input type="text" id="effective_Date" name="effective_Date" value={form4Data.effective_Date} onChange={handleChange} />
            {formErrors.effective_Date && (
              <p className="error-message">
                {formErrors.effective_Date}
                <span className="close-button" onClick={() => handleClearError('effective_Date')}>X</span>
              </p>
            )}
          </div>
        </td>
        <td>
          <div className="form-item">
            <label htmlFor="object">4. Type of Object:</label>
          </div>
        </td>
        <td>
        <div className="option-buttons reason-options">
              <div className={`centered-option${form4Data.typeObject === 'high_pressure' ? ' selected' : ''}`}>
                <input
                  type="checkbox" id="high_pressure" name="typeObject" value="high_pressure"
                  checked={form4Data.typeObject === 'high_pressure'}
                  onChange={() => handleOptionChange('typeObject', 'high_pressure')}
                />
                <label htmlFor="new_insurance">High-pressure boiler</label>
              </div>
              <div className={`centered-option${form4Data.typeObject === 'low_pressure' ? ' selected' : ''}`}>
                <input
                  type="checkbox" id="low_pressure" name="typeObject" value="low_pressure"
                  checked={form4Data.typeObject === 'low_pressure'}
                  onChange={() => handleOptionChange('typeObject', 'low_pressure')}
                />
                <label htmlFor="discontinuance">Low-pressure boiler</label>
              </div>
              <div className={`centered-option${form4Data.typeObject === 'pressure_vessel' ? ' selected' : ''}`}>
                <input
                  type="checkbox" id="pressure_vessel" name="typeObject" value="pressure_vessel"
                  checked={form4Data.typeObject === 'pressure_vessel'}
                  onChange={() => handleOptionChange('typeObject', 'pressure_vessel')}
                />
                <label htmlFor="pressure_vessel">Pressure vessel</label>
              </div>
              {formErrors.typeObject && (
              <p className="error-message">
                {formErrors.typeObject}
                <span className="close-button" onClick={() => handleClearError('typeObject')}>X</span>
              </p>
            )}
            </div>
        </td>
      </tr>
      <tr>
      <td>
          <div className="form-item">
            <label htmlFor="object">5. OBJECT</label>
            <input type="text" id="object" name="object" value={form4Data.object} onChange={handleChange} />
            {formErrors.object && (
              <p className="error-message">
                {formErrors.object}
                <span className="close-button" onClick={() => handleClearError('object')}>X</span>
              </p>
            )}
          </div>
        </td>
      <td>
          <div className="form-item">
            <label htmlFor="ownersNo">6. OWNER’S NO.</label>
            <input type="text" id="ownersNo" name="ownersNo" value={form4Data.ownersNo} onChange={handleChange} />
            {formErrors.ownersNo && (
              <p className="error-message">
                {formErrors.ownersNo}
                <span className="close-button" onClick={() => handleClearError('ownersNo')}>X</span>
              </p>
            )}
          </div>
        </td>
        <td>
          <div className="form-item">
            <label htmlFor="jurisdictionNo">7. JURISDICTION NO.</label>
            <input type="text" id="jurisdictionNo" name="jurisdictionNo" value={form4Data.jurisdictionNo} onChange={handleChange} />
            {formErrors.jurisdictionNo && (
              <p className="error-message">
                {formErrors.jurisdictionNo}
                <span className="close-button" onClick={() => handleClearError('jurisdictionNo')}>X</span>
              </p>
            )}
          </div>
        </td>
        <td>
          <div className="form-item">
            <label htmlFor="national_BoardNo">8. NATIONAL BOARD NO.</label>
            <input type="text" id="national_BoardNo" name="national_BoardNo" value={form4Data.national_BoardNo} onChange={handleChange} />
            {formErrors.national_BoardNo && (
              <p className="error-message">
                {formErrors.national_BoardNo}
                <span className="close-button" onClick={() => handleClearError('national_BoardNo')}>X</span>
              </p>
            )}
          </div>
        </td>
        <td>
          <div className="form-item">
            <label htmlFor="name_Manufacturer">9. NAME OF MANUFACTURER:</label>
            <input type="text" id="name_Manufacturer" name="name_Manufacturer" value={form4Data.name_Manufacturer} onChange={handleChange} />
            {formErrors.name_Manufacturer && (
              <p className="error-message">
                {formErrors.name_Manufacturer}
                <span className="close-button" onClick={() => handleClearError('name_Manufacturer')}>X</span>
              </p>
            )}
          </div>
        </td>
      </tr>
      <tr>
        <td colSpan="6">
          <div className="form-item">
            <label htmlFor="name_Owner">10. NAME OF OWNER:</label>
            <input type="text" id="name_Owner" name="name_Owner" value={form4Data.name_Owner} onChange={handleChange} />
            {formErrors.name_Owner && (
              <p className="error-message">
                {formErrors.name_Owner}
                <span className="close-button" onClick={() => handleClearError('name_Owner')}>X</span>
              </p>
            )}
          </div>
        </td>
      </tr>
      <tr>
        <td colSpan="6">
          <div className="form-item">
            <label htmlFor="name_Owner_Country">11. NAME OF OWNER INCLUDING COUNTY:</label>
            <input type="text" id="name_Owner_Country" name="name_Owner_Country" value={form4Data.name_Owner_Country} onChange={handleChange} />
            {formErrors.name_Owner_Country && (
              <p className="error-message">
                {formErrors.name_Owner_Country}
                <span className="close-button" onClick={() => handleClearError('name_Owner_Country')}>X</span>
              </p>
            )}
          </div>
        </td>
      </tr>
      <tr>
        <td colSpan="6">
          <div className="form-item">
            <label htmlFor="location_Object_Country">12. LOCATION OF OBJECT INCLUDING COUNTY:</label>
            <input type="text" id="location_Object_Country" name="location_Object_Country" value={form4Data.location_Object_Country} onChange={handleChange} />
            {formErrors.location_Object_Country && (
              <p className="error-message">
                {formErrors.location_Object_Country}
                <span className="close-button" onClick={() => handleClearError('location_Object_Country')}>X</span>
              </p>
            )}
          </div>
        </td>
      </tr>
      <tr>
        <td colSpan="6">
          <div className="form-item">
            <label htmlFor="user_Object">13. USER OF OBJECT (IF SAME AS OWNER SHOW “SAME”):</label>
            <input type="text" id="user_Object" name="user_Object" value={form4Data.user_Object} onChange={handleChange} />
            {formErrors.user_Object && (
              <p className="error-message">
                {formErrors.user_Object}
                <span className="close-button" onClick={() => handleClearError('user_Object')}>X</span>
              </p>
            )}
          </div>
        </td>
      </tr>
      <tr>
        <td colSpan="2">
          <div className="form-item">
            <label htmlFor="date_Last_Certificate">14. DATE OF LAST CERTIFICATE INSPECT., IF ANY:</label>
            <input type="text" id="date_Last_Certificate" name="date_Last_Certificate" value={form4Data.date_Last_Certificate} onChange={handleChange} />
            {formErrors.date_Last_Certificate && (
              <p className="error-message">
                {formErrors.date_Last_Certificate}
                <span className="close-button" onClick={() => handleClearError('date_Last_Certificate')}>X</span>
              </p>
            )}
          </div>
        </td>
        <td>
          <div className="form-item">
            <p>15. CERTIFICATE ISSUED:</p>
          </div>
        </td>
        <td>
            <div className="field-label">2. Notice of:</div>
            <div className="option-buttons reason-options">
              <div className={`centered-option${form4Data.certificateIssued === 'yes' ? ' selected' : ''}`}>
                <input
                  type="checkbox" id="yes" name="certificateIssued" value="yes"
                  checked={form4Data.certificateIssued === 'yes'}
                  onChange={() => handleOptionChange('certificateIssued', 'yes')}
                />
                <label htmlFor="yes">yes</label>
              </div>
              <div className={`centered-option${form4Data.certificateIssued === 'no' ? ' selected' : ''}`}>
                <input
                  type="checkbox" id="no" name="certificateIssued" value="no"
                  checked={form4Data.certificateIssued === 'no'}
                  onChange={() => handleOptionChange('certificateIssued', 'no')}
                />
                <label htmlFor="no">no</label>
              </div>
              {formErrors.certificateIssued && (
              <p className="error-message">
                {formErrors.certificateIssued}
                <span className="close-button" onClick={() => handleClearError('certificateIssued')}>X</span>
              </p>
            )}
            </div>
        </td>
        <td>
          <div className="form-item">
            <p className="nowrap">16. REASON FOR DISCONTINUANCE OR CANCELLATION</p>
            <div className="option-buttons reason-options">
              <div className={`centered-option${form4Data.reasonDiscontinuance === 'phys_condition' ? ' selected' : ''}`}>
                <input
                  type="checkbox" id="phys_condition" name="reasonDiscontinuance" value="phys_condition"
                  checked={form4Data.reasonDiscontinuance === 'phys_condition'}
                  onChange={() => handleOptionChange('reasonDiscontinuance', 'phys_condition')}
                />
                <label htmlFor="phys_condition">Phys condition</label>
              </div>
              <div className={`centered-option${form4Data.reasonDiscontinuance === 'out_use' ? ' selected' : ''}`}>
                <input
                  type="checkbox" id="out_use" name="reasonDiscontinuance" value="low_pressure"
                  checked={form4Data.reasonDiscontinuance === 'out_use'}
                  onChange={() => handleOptionChange('reasonDiscontinuance', 'out_use')}
                />
                <label htmlFor="out_use">Out of use</label>
              </div>
              <div className={`centered-option${form4Data.reasonDiscontinuance === 'other' ? ' selected' : ''}`}>
                <input
                  type="checkbox" id="other" name="reasonDiscontinuance" value="other"
                  checked={form4Data.reasonDiscontinuance === 'other'}
                  onChange={() => handleOptionChange('reasonDiscontinuance', 'other')}
                />
                <label htmlFor="other">Other</label>
              </div>
              {formErrors.reasonDiscontinuance && (
              <p className="error-message">
                {formErrors.reasonDiscontinuance}
                <span className="close-button" onClick={() => handleClearError('reasonDiscontinuance')}>X</span>
              </p>
            )}
            </div>
          </div>
        </td>
        <td></td>
      </tr>
      <tr>
        <td colSpan={2}>
          <div className="form-item">
            <label htmlFor="inspection">17. REMARKS (USE REVERSE SIDE):</label>
          </div>
        </td>
        <td></td>
        <td>
          <div className="form-item">
            <label htmlFor="inspection">18. By:</label>
          </div>
        </td>
        <td colSpan={2}>
          <div className="form-item">
            <input type="text" id="chief_inspector" name="chief_inspector" value={form4Data.chief_inspector} onChange={handleChange} />
            {formErrors.chief_inspector && (
              <p className="error-message">
                {formErrors.chief_inspector}
                <span className="close-button" onClick={() => handleClearError('chief_inspector')}>X</span>
              </p>
            )}
            CHIEF INSPECTOR                           
            <input type="text" id="branch_office" name="branch_office" value={form4Data.branch_office} onChange={handleChange} />
            {formErrors.branch_office && (
              <p className="error-message">
                {formErrors.branch_office}
                <span className="close-button" onClick={() => handleClearError('branch_office')}>X</span>
              </p>
            )}
            BRANCH OFFICE
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
  <div className="button-container">
        <button type="submit">Enviar</button>
        <button onClick={handleSaveAndExit}>Guardar y Salir</button>
        <button onClick={handleCancel}>Cancelar</button>
      </div>
      <div className="arrow-container">
        <div style={{ marginTop: '7px'}}>
            <ArrowBackIcon style={{ fontSize: ' rem' }} variant="contained" color="primary" onClick={handleGoBack} />
        </div>
      </div>
</form>

);
};

export default NB4;


