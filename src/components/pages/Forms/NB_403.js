import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../../css/forms.css';
import TopBar from '../TopBar';

const Formulario403 = () => {
  const [form403Data, setFormData] = useState({
    assesment_No: '',
    name: '',
    noticeOf: '',
    address: '',
    name_Organization: '',
    address_Organization: '',
    jurisdiction: '',
    information: '',
    equipment_Material: '',
    specifications: '',
    name_code: '',
    section: '',
    division: '',
    edition: '',
    addendum: '',
    firnedd_service: '',
    flaw_type: '',
    assessment_procedures: '',
    inspection_result: '',
    failure_modes: '',
    continued_operation: '',
    repair_operation: '',
    replace_operation: '',
    continue_operation: '',
    continue_operation_until: '',
    details: '',
    owner_inspection_intervals: '',
    service_monitoring: '',
    operating_limitations: '',
    name_inspector: '',
    owner_name: '',
    signature_owner: '',
    date_owner: '',
    organization_name: '',
    signature_engineer: '',
    date_engineer: '',
    verified: '',
    employer: '',
    signature_inspector: '',
    date_inspector: '',
    commission: '',
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
        form403Data.assesment_No.trim() === '' ||
        form403Data.name.trim() === '' ||
        form403Data.address.trim() === '' ||
        form403Data.name_Organization.trim() === '' ||
        form403Data.address_Organization.trim() === '' ||
        form403Data.jurisdiction.trim() === '' ||
        form403Data.information.trim() === '' ||
        form403Data.equipment_Material.trim() === '' ||
        form403Data.specifications.trim() === '' ||
        form403Data.name_code.trim() === '' ||
        form403Data.section.trim() === '' ||
        form403Data.division.trim() === '' ||
        form403Data.edition.trim() === '' ||
        form403Data.addendum.trim() === '' || 
        form403Data.firnedd_service.trim() === '' ||
        form403Data.flaw_type.trim() === '' ||
        form403Data.assessment_procedures.trim() === '' ||
        form403Data.inspection_result.trim() === '' ||
        form403Data.failure_modes.trim() === '' ||
        form403Data.continued_operation.trim() === '' ||
        form403Data.repair_operation.trim() === '' ||
        form403Data.replace_operation.trim() === '' ||
        form403Data.continue_operation.trim() === '' ||
        form403Data.continue_operation_until.trim() === '' ||
        form403Data.details.trim() === '' ||
        form403Data.owner_inspection_intervals.trim() === '' ||
        form403Data.service_monitoring.trim() === '' ||
        form403Data.operating_limitations.trim() === '' ||
        form403Data.name_inspector.trim() === '' ||
        form403Data.owner_name.trim() === '' ||
        form403Data.signature_owner.trim() === '' ||
        form403Data.date_owner.trim() === '' ||
        form403Data.organization_name.trim() === '' ||
        form403Data.signature_engineer.trim() === '' ||
        form403Data.date_engineer.trim() === '' ||
        form403Data.verified.trim() === '' ||
        form403Data.employer.trim() === '' ||
        form403Data.signature_inspector.trim() === '' ||
        form403Data.date_inspector.trim() === '' ||
        form403Data.commission.trim() === ''
      ) {
        // Mostrar mensaje de error o realizar alguna acción adicional
        console.log('Todos los campos obligatorios deben ser completados');
        return false;
      }
    
      return true;
    };

    const isValid = validateForm();

    if (isValid) {
      const form403Data = {
        assesment_No: '',
        name: '',
        address: '',
        name_Organization: '',
        address_Organization: '',
        jurisdiction: '',
        information: '',
        equipment_Material: '',
        specifications: '',
        name_code: '',
        section: '',
        division: '',
        edition: '',
        addendum: '',
        firnedd_service: '',
        flaw_type: '',
        assessment_procedures: '',
        inspection_result: '',
        failure_modes: '',
        continued_operation: '',
        repair_operation: '',
        replace_operation: '',
        continue_operation: '',
        continue_operation_until: '',
        details: '',
        owner_inspection_intervals: '',
        service_monitoring: '',
        operating_limitations: '',
        name_inspector: '',
        owner_name: '',
        signature_owner: '',
        date_owner: '',
        organization_name: '',
        signature_engineer: '',
        date_engineer: '',
        verified: '',
        employer: '',
        signature_inspector: '',
        date_inspector: '',
        commission: '',
      };

      setFormData(form403Data);

      // Enviar datos de la persona al endpoint /api/persons
      fetch('http://localhost:3000/api/form/nb403', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form403Data),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Registro de formulario nb-403 exitoso:', data);
        })
        .catch(error => {
          console.error('Error al registrar formulario nb-403:', error);
        });
    }
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
          <label>
            No. de Evaluación
            <input type="text" id="assesment_No" name="assesment_No" value={form403Data.assesment_No} onChange={handleChange} />
          </label>
          <label>
            Nombre
            <input type="text" id="name" name="name" value={form403Data.name} onChange={handleChange} />
          </label>
          <label>
            Dirección
            <input type="text" id="address" name="address" value={form403Data.address} onChange={handleChange} />
          </label>
          <label>
            Nombre de la Organización
          <input type="text" id="name_Organization" name="name_Organization" value={form403Data.name_Organization} onChange={handleChange} />
            </label>
        <label>Dirección de la Organización
          <input type="text" id="address_Organization" name="address_Organization" value={form403Data.address_Organization} onChange={handleChange} />
        </label>
        <label>Jurisdicción
          <input type="text" id="jurisdiction" name="jurisdiction" value={form403Data.jurisdiction} onChange={handleChange} />
        </label>
        <label>Información
          <input type="text" id="information" name="information" value={form403Data.information} onChange={handleChange} />
        </label>
        <label>Equipo/Material
          <input type="text" id="equipment_Material" name="equipment_Material" value={form403Data.equipment_Material} onChange={handleChange} />
        </label>
        <label>Especificaciones
          <input type="text" id="specifications" name="specifications" value={form403Data.specifications} onChange={handleChange} />
        </label>
        <label>Nombre del Código
          <input type="text" id="name_code" name="name_code" value={form403Data.name_code} onChange={handleChange} />
        </label>
        <label>Sección
          <input type="text" id="section" name="section" value={form403Data.section} onChange={handleChange} />
        </label>
        <label>División
          <input type="text" id="division" name="division" value={form403Data.division} onChange={handleChange} />
        </label>
        <label>Edición
          <input type="text" id="edition" name="edition" value={form403Data.edition} onChange={handleChange} />
        </label>
        <label>Addenda
          <input type="text" id="addenda" name="addenda" value={form403Data.addenda} onChange={handleChange} />
        </label>
        <label>Servicio
          <input type="text" id="firnedd_service" name="firnedd_service" value={form403Data.firnedd_service} onChange={handleChange} />
      </label>
      <label>Tipo de Falla
        <input type="text" id="flaw_type" name="flaw_type" value={form403Data.flaw_type} onChange={handleChange} />
      </label>
      <label>Procedimientos de Evaluación
        <input type="text" id="assessment_procedures" name="assessment_procedures" value={form403Data.assessment_procedures} onChange={handleChange} />
      </label>
      <label>Resultado de la Inspección
        <input type="text" id="inspection_result" name="inspection_result" value={form403Data.inspection_result} onChange={handleChange} />
      </label>
      <label>Modo de Falla
        <input type="text" id="failure_modes" name="failure_modes" value={form403Data.failure_modes} onChange={handleChange} />
      </label>

      <label className="form-field">
  <div className="field-label">FFS ASSESSMENTS RESULTS/RECOMMENDATIONS (CHECK BOXES THAT APPLY AND PROVIDE DETAILS):</div>
  <div className="option-buttons reason-options">
    <div className={`centered-option${form403Data.assessmentsRecommendations === 'continued_Operation' ? ' selected' : ''}`}>
      <input
        type="radio"
        id="continued_Operation"
        name="assessmentsRecommendations"
        value="continued_Operation"
        checked={form403Data.assessmentsRecommendations === 'continued_Operation'}
        onChange={() => handleOptionChange('assessmentsRecommendations', 'continued_Operation')}
      />
      <label htmlFor="continued_Operation">Continued Operation</label>
    </div>
    <div className={`centered-option${form403Data.assessmentsRecommendations === 'repair_Operation' ? ' selected' : ''}`}>
      <input
        type="radio"
        id="repair_Operation"
        name="assessmentsRecommendations"
        value="repair_Operation"
        checked={form403Data.assessmentsRecommendations === 'repair_Operation'}
        onChange={() => handleOptionChange('assessmentsRecommendations', 'repair_Operation')}
      />
      <label htmlFor="repair_Operation">Repair Operation</label>
    </div>
    <div className={`centered-option${form403Data.assessmentsRecommendations === 'replace_Operation' ? ' selected' : ''}`}>
      <input
        type="radio"
        id="replace_Operation"
        name="assessmentsRecommendations"
        value="replace_Operation"
        checked={form403Data.assessmentsRecommendations === 'replace_Operation'}
        onChange={() => handleOptionChange('assessmentsRecommendations', 'replace_Operation')}
      />
      <label htmlFor="replace_Operation">Replace Operation</label>
    </div>
    <div className={`centered-option${form403Data.assessmentsRecommendations === 'continue_Operation_Until' ? ' selected' : ''}`}>
      <input
        type="radio"
        id="continue_Operation_Until"
        name="assessmentsRecommendations"
        value="continue_Operation_Until"
        checked={form403Data.assessmentsRecommendations === 'continue_Operation_Until'}
        onChange={() => handleOptionChange('assessmentsRecommendations', 'continue_Operation_Until')}
      />
      <label htmlFor="continue_Operation_Until">Continue Operation Until</label>
    </div>
  </div>
</label>
      <label>Detalles
        <input type="text" id="details" name="details" value={form403Data.details} onChange={handleChange} />
      </label>
      <label>Intervalos de Inspección del Propietario
        <input type="text" id="owner_inspection_intervals" name="owner_inspection_intervals" value={form403Data.owner_inspection_intervals} onChange={handleChange} />
      </label>
      <label>Monitoreo del Servicio
        <input type="text" id="service_monitoring" name="service_monitoring" value={form403Data.service_monitoring} onChange={handleChange} />
      </label>
      <label>
        Limitaciones de Operación
        <input type="text" id="operating_limitations" name="operating_limitations" value={form403Data.operating_lomotations} onChange={handleChange} />
      </label>
      <label>
       Nombre del Inspector
        <input type="text" id="name_inspector" name="name_inspector" value={form403Data.name_inspector} onChange={handleChange} />
      </label>
      <label>
       Nombre del Propietario
        <input type="text" id="owner_name" name="owner_name" value={form403Data.owner_name} onChange={handleChange} />
      </label>
      <label>
        Firma del Propietario
        <input type="text" id="owner_signature" name="owner_signature" value={form403Data.owner_signature} onChange={handleChange} />
      </label>
      <label>
        Fecha
        <input type="text" id="owner_date" name="owner_date" value={form403Data.owner_date} onChange={handleChange} />
      </label>
      <label>
        Nombre de la Organización
        <input type="text" id="organization_name" name="organization_name" value={form403Data.organization_name} onChange={handleChange} />
      </label>
      <label>
        Firma del Ingeniero
        <input type="text" id="signature_enginner" name="signature_enginner" value={form403Data.signature_enginner} onChange={handleChange} />
      </label>
      <label>
        Fecha
        <input type="text" id="date_engineer" name="date_engineer" value={form403Data.date_engineer} onChange={handleChange} />
      </label>
      <label>
        Verificado por
        <input type="text" id="verified_by" name="verified_by" value={form403Data.verified_by} onChange={handleChange} />
      </label>
      <label>
        Empleador
        <input type="text" id="employer" name="employer" value={form403Data.employer} onChange={handleChange} />
      </label>
      <label>
        Firma del Inspector
        <input type="text" id="signature_inspector" name="signature_inspector" value={form403Data.signature_inspector} onChange={handleChange} />
      </label>
      <label>
        Fecha
        <input type="text" id="date_inspector" name="date_inspector" value={form403Data.date_inspector} onChange={handleChange} />
      </label>
      <label>
        Comisión
        <input type="text" id="commission" name="commission" value={form403Data.commission} onChange={handleChange} />
      </label>
  </form>
);
};

const NB403 = () => {
  const navigate = useNavigate();
  
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <TopBar />
      <h1>Formulario NB 403</h1>
      <Formulario403 />
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

export default NB403;

