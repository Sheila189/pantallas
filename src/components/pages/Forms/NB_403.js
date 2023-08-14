import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../../css/forms2.css';
import TopBar from '../TopBar';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

const NB403 = () => {
  const [form403Data, setFormData] = useState({
    assesment_No: '',
    name: '',
    address: '',
    name_Organization: '',
    address_Organization: '',
    name_Company: '',
    address_Company: '',
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
    owner_date: '',
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

  const handleSubmit = async (e) => { 
    e.preventDefault();

    const validateForm = () => {
      if (
        form403Data.assesment_No.trim() === '' ||
        form403Data.name.trim() === '' ||
        form403Data.address.trim() === '' ||
        form403Data.name_Organization.trim() === '' ||
        form403Data.address_Organization.trim() === '' ||
        form403Data.name_Company.trim() === '' ||
        form403Data.address_Company.trim() === '' ||
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
        form403Data.owner_date.trim() === '' ||
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
        owner_date: '',
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

      const db = getFirestore();
      const ref = collection(db, "form_nb_403");
      try {
        const data = await addDoc(ref, form403Data);
        alert("Document written with ID: ", data.id);
      } catch (e) {
        alert("Error adding document: ", e);
      }
    }
  };

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
    {/* Contenido de la primera página */}
    <div className="form-title">
    <div className='nowrap'>FORM NB-403 REPORT OF FITNESS FOR</div>
      <br />
      <div className='nowrap'>SERVICE ASSESSMENT</div>
      <br />
      <div className='nowrap'>in accordance with provisions of the National Board Inspection Code</div>
    </div>
    <div className="container">
      <table> 
      <tbody>
        <tr>
          <td>
            <div>
            <p className='nowrap'>F.F.S ASSESMENT NO.</p>
            </div>
          </td>
          <td>
            <div>
              <input type="text" id="assesment_No" name="assesment_No" value={form403Data.assesment_No} onChange={handleChange} />
            </div>
          </td>
          <td colSpan="4">
            <div/>
          </td>
        </tr>
        <tr>
          <td>
          <p className='nowrap'> 1. EQUIPMENT OWNER INFORMATION:  </p>
          </td>
          <td>
            <div>
              <input type="text" id="name" name="name" value={form403Data.name} onChange={handleChange} />
              (name)
          </div>
          </td>
        </tr>
        <tr>
          <td colSpan="6">
            <div>
            <input type="text" id="address" name="address" value={form403Data.address} onChange={handleChange} />
              (address)
          </div>
          </td>
        </tr>
        <tr>
          <td><p className='nowrap'>2. FFS ASSESSMENT PERFORMED BY:</p></td>
          <td>
          <div>
            <input type="text" id="name_Organization" name="name_Organization" value={form403Data.name_Organization} onChange={handleChange} />
            <p className='nowrap'>(Name of Organization or Individual)</p>
          </div>
          </td>
        </tr>
        <tr>
          <td colSpan="6">
            <div>
            <input type="text" id="address_Organization" name="address_Organization" value={form403Data.address_Organization} onChange={handleChange} />
              (address)
          </div>
          </td>
        </tr>
        <tr>
          <td>
          <p className='nowrap'>3. LOCATION OF EQUIPMENT INSTALLATION:</p>
          </td>
          <td>
          <div>
              <input type="text" id="name_Company" name="name_Company" value={form403Data.name_Company} onChange={handleChange} />
              (Name of Company)
            </div>
          </td>
        </tr>
        <tr>
          <td>
          <div>
              <input type="text" id="address_Company" name="address_Company" value={form403Data.address_Company} onChange={handleChange} />
              (address)
            </div>
          </td>
          <td>
            <div>
              <input type="text" id="jurisdiction" name="jurisdiction" value={form403Data.jurisdiction} onChange={handleChange} />
              (Jurisdiction)
            </div>
          </td>
        </tr>
        <tr>
          <td>
          <p className='nowrap'>4. EQUIPMENT OR COMPONENT INFORMATION:</p>
          </td>
          <td colSpan="4">
          <div>
            <input type="text" id="information" name="information" value={form403Data.information} onChange={handleChange} />
            <p className='nowrap'>(MFG SR#, NB#, JURISDICTION# , YEAR BUILT, OTHER)</p>
          </div>
        </td>
        </tr>
        <tr>
          <td colSpan="6">
            <div>
              <input type="text" id="equipment_Material" name="equipment_Material" value={form403Data.equipment_Material} onChange={handleChange} />
              <p className='nowrap'>(Equipment Material Specification, Grade)</p>
            </div>
          </td>
        </tr>
        <tr>
          <td colSpan="6">
            <div>
              <input type="text" id="specifications" name="specifications" value={form403Data.specifications} onChange={handleChange} />
              <p className='nowrap'>(Design & Operating Pressures, Design & Operating Temperatures)</p>
            </div>
          </td>
        </tr>
        <tr>
          <td><p className='nowrap'>5. ORIGINAL CODE OF CONSTRUCTION:</p></td>
          <td>
            <div>
              <input type="text" id="name_code" name="name_code" value={form403Data.name_code} onChange={handleChange} />
              (Name)
            </div>
          </td>
          <td>
            <div>
              <input type="text" id="section" name="section" value={form403Data.section} onChange={handleChange} />(Section)
            </div>
          </td>
          <td>
            <div>
              <input type="text" id="division" name="division" value={form403Data.division} onChange={handleChange} />(Division)
            </div>
          </td>
          <td>
            <div>
              <input type="text" id="edition" name="edition" value={form403Data.edition} onChange={handleChange} />(Edition)
            </div>
          </td>
          <td>
            <div>
              <input type="text" id="addenda" name="addenda" value={form403Data.addenda} onChange={handleChange} className='nowrap' />( Addendum)
            </div>
          </td>
        </tr>
        <tr>
          <td><p className='nowrap'>FITNESS FOR SERVICE STANDARD USED FOR ASSESSMENT</p></td>
          <td>
            <div>
              <input type="text" id="firnedd_service" name="firnedd_service" value={form403Data.firnedd_service} onChange={handleChange} />
            </div>
          </td>
        </tr>
        <tr>
          <td><p className='nowrap'>6. FLAW TYPE(S) AND / OR DAMAGE MECHANISMS CONSIDERED IN FFS ASSESSMENT:</p></td>
          <td>
            <div>
              <input type="text" id="flaw_type" name="flaw_type" value={form403Data.flaw_type} onChange={handleChange} />
            </div>
          </td>
        </tr>
        <tr>
          <td><p className='nowrap'>7. FFS ASSESSMENT PROCEDURES (ATTACH FFS ASSESSMENT REFERENCE DOCUMENTS WITH DETAILS IF APPLICABLE):</p></td>
        </tr>
        <tr>
          <tp colSpan="6">
            <div>
              <input type="text" id="assessment_procedures" name="assessment_procedures" value={form403Data.assessment_procedures} onChange={handleChange} />
            </div>
          </tp>
        </tr>
        <tr>
          <td><p className='nowrap'>INSPECTION RESULTS:</p></td>
          <td>
            <div>
              <input type="text" id="inspection_result" name="inspection_result" value={form403Data.inspection_result} onChange={handleChange} />
              <p className='nowrap'>(Type of NDE Performed, Pressure Tests, Thickness Measurements, etc.)</p>
            </div>
          </td>
        </tr>
        <tr>
          <td><p className='nowrap'>FAILURE MODES IDENTIFIED:</p></td>
          <td>
            <div>
              <input type="text" id="failure_modes" name="failure_modes" value={form403Data.failure_modes} onChange={handleChange} />
              <p className='nowrap'>(Crack-Like Flaws, Pitting, Bulges/Blisters, General or Localized Corrosion, etc.)</p>
            </div>
          </td>
        </tr>


{/* Contenido de la segunda página */}
        <tr>
          <td><p className='nowrap'>8. FFS ASSESSMENTS RESULTS / RECOMMENDATIONS (CHECK BOXES THAT APPLY AND PROVIDE DETAILS):</p></td>
        </tr>
        <tr>
          <td>
            <div className="form-field">
              <div className="option-buttons reason-options">
                <div className={`centered-option${form403Data.assessmentsRecommendations === 'continued_Operation' ? ' selected' : ''}`}>
                  <input type="checkbox" id="continued_Operation" name="assessmentsRecommendations" value="continued_Operation"
                    checked={form403Data.assessmentsRecommendations === 'continued_Operation'} onChange={() => handleOptionChange('assessmentsRecommendations', 'continued_Operation')}
                  />
                <div htmlFor="continued_Operation" className='nowrap'>CONTINUED OPERATION</div>
                </div>
                <div className={`centered-option${form403Data.assessmentsRecommendations === 'repair_Operation' ? ' selected' : ''}`}>
                  <input type="checkbox" id="repair_Operation" name="assessmentsRecommendations" value="repair_Operation"
                    checked={form403Data.assessmentsRecommendations === 'repair_Operation'} onChange={() => handleOptionChange('assessmentsRecommendations', 'repair_Operation')}
                  />
                  <div htmlFor="repair_Operation" className='nowrap'>REPAIR</div>
                </div>
                <div className={`centered-option${form403Data.assessmentsRecommendations === 'replace_Operation' ? ' selected' : ''}`}>
                  <input type="checkbox" id="replace_Operation" name="assessmentsRecommendations" value="replace_Operation"
                    checked={form403Data.assessmentsRecommendations === 'replace_Operation'} onChange={() => handleOptionChange('assessmentsRecommendations', 'replace_Operation')}
                  />
                  <div htmlFor="replace_Operation" className='nowrap'>REPLACE</div>
                </div>
                <div className={`centered-option${form403Data.assessmentsRecommendations === 'continue_Operation_Until' ? ' selected' : ''}`}>
                  <input type="checkbox" id="continue_Operation_Until" name="assessmentsRecommendations" value="continue_Operation_Until"
                    checked={form403Data.assessmentsRecommendations === 'continue_Operation_Until'} onChange={() => handleOptionChange('assessmentsRecommendations', 'continue_Operation_Until')}
                  />
                  <div htmlFor="continue_Operation_Until" className='nowrap'>CONTINUE OPERATION UNTIL:</div>
                </div>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>DETAILS (IF APPLICABLE)</td>
          <td>
            <div>
              <input type="text" id="details" name="details" value={form403Data.details} onChange={handleChange} />
            </div>
          </td>
        </tr>
        <tr>
          <td><p className='nowrap'>9. OWNERS INSPECTION INTERVALS (BASED ON ASSESSMENT):</p></td>
          <td>
            <div>
              <input type="text" id="owner_inspection_intervals" name="owner_inspection_intervals" value={form403Data.owner_inspection_intervals} onChange={handleChange} />
              (Months/Years)
            </div>
          </td>
        </tr>
        <tr>
          <td><p className='nowrap'>10. IN SERVICE MONITORING METHODS AND INTERVALS:</p></td>
          <td>
            <div>
              <input type="text" id="service_monitoring" name="service_monitoring" value={form403Data.service_monitoring} onChange={handleChange} />
              (Methods, Months/Years)
            </div>
          </td>
        </tr>
        <tr>
          <td><p className='nowrap'>11. OPERATING LIMITATIONS (IF APPLICABLE):</p></td>
          <td>
            <div>
              <input type="text" id="operating_limitations" name="operating_limitations" value={form403Data.operating_limitations} onChange={handleChange} />
            </div>
          </td>
        </tr>
    </tbody>
  </table>
  <table>
    <tbody>
      <div className="conteiner_cert">
        <tr>
          <td><p className='nowrap title' >CERTIFICATE OF COMPLIANCE</p></td>
        </tr>
        <tr>
          <td><p className='nowrap'>I,</p>
          <input type="text" id="name_inspector" name="name_inspector" value={form403Data.name_inspector} onChange={handleChange} />
          <td><p className='nowrap'>certify that to the best of my knowledge and belief the statements in</p></td>
          </td>
        </tr>
        <tr>
          <td><p className='nowrap'>this report are correct and that the information, data, and identification numbers are correct and in accordance with provisions of the</p></td>
          <td><p className='nowrap'>National Board Inspection Code, Part 2, 4.4. Applicable documentation is attached to support this assessment</p></td>
        </tr>
        <tr>
          <td><p className='nowrap'>Owner Name</p></td>
          <td colSpan="5">
            <div>
              <input type="text" id="owner_name" name="owner_name" value={form403Data.owner_name} onChange={handleChange} />
              (Printed)
            </div>
          </td>
        </tr>
        <tr>
          <td><p className='nowrap'>Signature</p></td>
          <td colSpan="2">
            <div>
              <input type="text" id="owner_signature" name="owner_signature" value={form403Data.owner_signature} onChange={handleChange} />(Owner)
            </div>
          </td>
          <td><p className='nowrap'>Date</p></td>
          <td colSpan="2">
            <div>
              <input type="text" id="owner_date" name="owner_date" value={form403Data.owner_date} onChange={handleChange} />
            </div>
          </td>
        </tr>
        <tr>
          <td><p className='nowrap'>Organization Performing Assessment</p></td>
          <td colSpan="5">
            <div>
              <input type="text" id="organization_name" name="organization_name" value={form403Data.organization_name} onChange={handleChange} /> (Name)
            </div>
          </td>
        </tr>
        <tr>
          <td><p className='nowrap'>Signature</p></td>
          <td colSpan="2">
            <div>
              <input type="text" id="signature_engineer" name="signature_engineer" value={form403Data.signature_engineer} onChange={handleChange} />
              (Responsible Engineer)
            </div>
          </td>
          <td><p className='nowrap'>Date</p></td>
          <td colSpan="2">
            <div>
              <input type="text" id="date_engineer" name="date_engineer" value={form403Data.date_engineer} onChange={handleChange} />
            </div>
          </td>
        </tr>
        <tr>
          <td><p className='nowrap'>Verified By</p></td>
          <td colSpan="2">
            <div>
              <input type="text" id="verified" name="verified" value={form403Data.verified} onChange={handleChange} /> (Inspector, Printed) 
            </div>
          </td>
          <td><p className='nowrap'>Employer</p></td>
          <td colSpan="2">
            <div>
              <input type="text" id="employer" name="employer" value={form403Data.employer} onChange={handleChange} /> (Accredited Inspection Agency)
            </div>
          </td>
        </tr>
        <tr>
          <td><p className='nowrap'>Signature</p></td>
          <td colSpan="2">
            <div>
              <input type="text" id="signature_inspector" name="signature_inspector" value={form403Data.signature_inspector} onChange={handleChange} /> (Inspector)
            </div>
          </td>
          <td><p className='nowrap'>Date</p></td>
          <td colSpan="2">
            <div>
              <input type="text" id="date_inspector" name="date_inspector" value={form403Data.date_inspector} onChange={handleChange} />
            </div>
          </td>
        </tr>
        <tr>
          <td><p className='nowrap'>12. CERTIFICATION:</p></td>
          <td colSpan="5">
            <div>
              <input type="text" id="commission" name="commission" value={form403Data.commission} onChange={handleChange} /> (National Board & Jurisdiction Number)
            </div>
          </td>
        </tr>
      </div>
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

export default NB403;

