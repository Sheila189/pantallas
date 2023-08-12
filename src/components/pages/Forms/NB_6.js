import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../../css/forms2.css';
import TopBar from '../TopBar';

const NB6 = () => {
  const [form6Data, setFormData] = useState({
    month_inspected: '',
    day_inspected: '',
    year_inspected: '',
    month_cert: '',
    year_cert: '',
    certificate_posted: null,
    owner_no: '',
    jurisdiction_number: '',
    natl_bd_n: null,
    other_n: null,
    owner_name: '',
    nature_business: '',
    inspection: null,
    certificate_inspection: null,
    owner_address: '',
    owner_city: '',
    owner_state: '',
    owner_zip: '',
    user_name: '',
    specific_location: '',
    object_location: '',
    user_address: '',
    user_city: '',
    user_state: '',
    user_zip: '',
    certificate_name: '',
    certificate_company_contact: '',
    email: '',
    certificate_address: '',
    certificate_city: '',
    certificate_state: '',
    certificate_zip: '',
    type: null,
    other_text: '',
    year_built: '',
    manufacturer: '',
    use: null,
    other_use_text: '',
    fuel: '',
    method_firing: '',
    pressure_gage: null,
    mawp: '',
    this_inspection: '',
    prev_inspection: '',
    set_at: '',
    total_capacity: '',
    heating_surface: '',
    condition_object: null,
    pressure_test: null,
    yes_psi: '',
    date_test: '',
    conditions: '',
    requirements: '',
    name_title_person: '',
    signature_inspector: '',
    ident_inspec: '',
    employed_by: '',
    ident_employed: '',
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
        form6Data.month_inspected.trim() === '' ||
        form6Data.day_inspected.trim() === '' ||
        form6Data.year_inspected.trim() === '' ||
        form6Data.month_cert.trim() === '' ||
        form6Data.year_cert.trim() === '' ||
        form6Data.owner_no.trim() === '' ||
        form6Data.jurisdiction_number.trim() === '' ||
        form6Data.owner_name.trim() === '' ||
        form6Data.nature_business.trim() === '' ||
        form6Data.owner_address.trim() === '' ||
        form6Data.owner_city.trim() === '' ||
        form6Data.owner_state.trim() === '' ||
        form6Data.owner_zip.trim() === '' ||
        form6Data.user_name.trim() === '' ||
        form6Data.specific_location.trim() === '' ||
        form6Data.object_location.trim() === '' ||
        form6Data.user_address.trim() === '' ||
        form6Data.user_city.trim() === '' ||
        form6Data.user_state.trim() === '' ||
        form6Data.user_zip.trim() === '' ||
        form6Data.certificate_name.trim() === '' ||
        form6Data.certificate_company_contact.trim() === '' ||
        form6Data.email.trim() === '' ||
        form6Data.certificate_address.trim() === '' ||
        form6Data.certificate_city.trim() === '' ||
        form6Data.certificate_state.trim() === '' ||
        form6Data.certificate_zip.trim() === '' ||
        form6Data.year_built.trim() === '' ||
        form6Data.manufacturer.trim() === '' ||
        form6Data.fuel.trim() === '' ||
        form6Data.method_firing.trim() === '' ||
        form6Data.mawp.trim() === '' ||
        form6Data.this_inspection.trim() === '' ||
        form6Data.prev_inspection.trim() === '' ||
        form6Data.set_at.trim() === '' ||
        form6Data.total_capacity.trim() === '' ||
        form6Data.heating_surface.trim() === '' ||
        form6Data.yes_psi.trim() === '' ||
        form6Data.date_test.trim() === '' ||
        form6Data.conditions.trim() === '' ||
        form6Data.requirements.trim() === '' ||
        form6Data.name_title_person.trim() === '' ||
        form6Data.signature_inspector.trim() === '' ||
        form6Data.ident_inspec.trim() === '' ||
        form6Data.employed_by.trim() === '' ||
        form6Data.ident_employed.trim() === ''
      ) {
        // Mostrar mensaje de error o realizar alguna acción adicional
        console.log('Todos los campos obligatorios deben ser completados');
        return false;
      }
    
      return true;
    };

    const isValid = validateForm();

    if (isValid) {
      const form6Data = {
        month_inspected: '',
        day_inspected: '',
        year_inspected: '',
        month_cert: '',
        year_cert: '',
        certificate_posted: null,
        owner_no: '',
        jurisdiction_number: '',
        natl_bd_n: null,
        other_n: null,
        owner_name: '',
        nature_business: '',
        inspection: null,
        certificate_inspection: null,
        owner_address: '',
        owner_city: '',
        owner_state: '',
        owner_zip: '',
        user_name: '',
        specific_location: '',
        object_location: '',
        user_address: '',
        user_city: '',
        user_state: '',
        user_zip: '',
        certificate_name: '',
        certificate_company_contact: '',
        email: '',
        certificate_address: '',
        certificate_city: '',
        certificate_state: '',
        certificate_zip: '',
        type: null,
        other_text: '',
        year_built: '',
        manufacturer: '',
        use: null,
        other_use_text: '',
        fuel: '',
        method_firing: '',
        pressure_gage: null,
        mawp: '',
        this_inspection: '',
        prev_inspection: '',
        set_at: '',
        total_capacity: '',
        heating_surface: '',
        condition_object: null,
        pressure_test: null,
        yes_psi: '',
        date_test: '',
        conditions: '',
        requirements: '',
        name_title_person: '',
        signature_inspector: '',
        ident_inspec: '',
        employed_by: '',
        ident_employed: '',
      };

      setFormData(form6Data);

      // Enviar datos de la persona al endpoint /api/persons
      fetch('http://localhost:3000/api/form/nb6', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form6Data),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Registro de formulario nb-6 exitoso:', data);
        })
        .catch(error => {
          console.error('Error al registrar formulario nb-6:', error);
        });
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
    <div className='nowrap'>FORM NB-6 BOILER-FIRED PRESSURE VESSEL</div>
      <br />
      <div className='nowrap'>REPORT OF INSPECTION</div>
      <br />
      <div className='nowrap'>Standard Form for Jurisdictions Operating Under the ASME Code</div>
    </div>
    <div className="container">
      <table> 
      <tbody>
        <tr>
          <td className='numero'>1</td>
          <td>
            <div>
              <p className='nowrap'>DATE INSPECTED</p>
              MO|
              <input type="text" id="month_inspected" name="month_inspected" value={form6Data.month_inspected} onChange={handleChange} />
              DAY|
              <input type="text" id="day_inspected" name="day_inspected" value={form6Data.day_inspected} onChange={handleChange} />
              YEAR
              <input type="text" id="year_inspected" name="year_inspected" value={form6Data.year_inspected} onChange={handleChange} />
            </div>
          </td>
          <td>
            <div>
              <p className='nowrap'>CERT EXP DATE</p>
              MO|
              <input type="text" id="month_cert" name="month_cert" value={form6Data.month_cert} onChange={handleChange} />
              YEAR
              <input type="text" id="year_cert" name="year_cert" value={form6Data.year_cert} onChange={handleChange} />
            </div>
          </td>
          <td>
            <div className="form-field">
              <div className="nowrap">CERTIFICATE POSTED</div>
              <div className="option-buttons reason-options">
                <div className={`centered-option${form6Data.certificate_inspection === 'yes' ? ' selected' : ''}`}>
                  <input
                    type="checkbox" id="yes" name="certificate_inspection" value="yes"
                    checked={form6Data.certificate_inspection === 'yes'}
                    onChange={() => handleOptionChange('certificate_inspection', 'yes')}
                  />
                  <div htmlFor="yes">YES</div>
                </div>
                <div className={`centered-option${form6Data.certificate_inspection === 'no' ? ' selected' : ''}`}>
                  <input
                    type="checkbox" id="no" name="certificate_inspection" value="no"
                    checked={form6Data.certificate_inspection === 'no'}
                    onChange={() => handleOptionChange('certificate_inspection', 'no')}
                  />
                  <div htmlFor="no">NO</div>
                </div>
              </div>
            </div>
          </td>
          <td>
            <p className='nowrap'>OWNER NO.</p>
            <div>
              <input type="text" id="owner_n" name="owner_n" value={form6Data.owner_n} onChange={handleChange} />
            </div>
          </td>
          <td>
          <p className='nowrap'>JURISDICTION NUMBER</p>
            <div>
            <input type="text" id="jurisdiction_number" name="jurisdiction_number" value={form6Data.jurisdiction_number} onChange={handleChange} />
            </div>
          </td>
          <td>
          <div>
          <p className='nowrap'>NAT’L BD NO.</p>
            <input type="checkbox" id="natl_bd_n" name="natl_bd_n" value="natl_bd_n"
                  checked={form6Data.natl_bd_n === 'natl_bd_n'}
                  onChange={() => handleOptionChange('natl_bd_n', 'natl_bd_n')}
                />
          </div>
          </td>
          <td>
          <div>
          <p className='nowrap'>OTHER NO.</p>
            <input type="checkbox" id="other_n" name="other_n" value="other_n"
                  checked={form6Data.other_n === 'other_n'}
                  onChange={() => handleOptionChange('other_n', 'other_n')}
                />
          </div>
          </td>
        </tr>
        <tr>
          <td className='numero'>2</td>
          <tr>
            <td colSpan="4">
              <div>
                <p className='nowrap'>OWNER</p>
                <input type="text" id="owner_name" name="owner_name" value={form6Data.owner_name} onChange={handleChange} />
              </div>
            </td>
            <td>
              <div>
              <p className='nowrap'>NATURE OF BUSINESS</p>
                <input type="text" id="nature_business" name="nature_business" value={form6Data.nature_business} onChange={handleChange} />
              </div>
            </td>
            <td>
              <div className="form-field">
                <div className="nowrap">KIND OF INSPECTION</div>
                <div className="option-buttons reason-options">
                  <div className={`centered-option${form6Data.inspection === 'internal' ? ' selected' : ''}`}>
                    <input
                      type="checkbox" id="internal" name="inspection" value="internal"
                      checked={form6Data.inspection === 'internal'}
                      onChange={() => handleOptionChange('inspection', 'internal')}
                    />
                    <div htmlFor="internal">INT</div>
                  </div>
                  <div className={`centered-option${form6Data.inspection === 'external' ? ' selected' : ''}`}>
                    <input
                      type="checkbox" id="external" name="inspection" value="external"
                      checked={form6Data.inspection === 'external'}
                      onChange={() => handleOptionChange('inspection', 'external')}
                    />
                    <div htmlFor="external">EXT</div>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div className="form-field">
                <div className="nowrap">CERTIFICATE INSPECTION</div>
                <div className="option-buttons reason-options">
                  <div className={`centered-option${form6Data.certificate_inspection === 'yes' ? ' selected' : ''}`}>
                    <input
                      type="checkbox" id="yes" name="certificate_inspection" value="yes"
                      checked={form6Data.certificate_inspection === 'yes'}
                      onChange={() => handleOptionChange('certificate_inspection', 'yes')}
                    />
                    <div htmlFor="yes">YES</div>
                  </div>
                  <div className={`centered-option${form6Data.certificate_inspection === 'no' ? ' selected' : ''}`}>
                    <input
                      type="checkbox" id="no" name="certificate_inspection" value="no"
                      checked={form6Data.certificate_inspection === 'no'}
                      onChange={() => handleOptionChange('certificate_inspection', 'no')}
                    />
                    <div htmlFor="no">NO</div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan="4">
            <p className='nowrap'>OWNER’S STREET ADDRESS</p>
              <div>
                <input type="text" id="owner_address" name="owner_address" value={form6Data.owner_address} onChange={handleChange} />
                NUMBER
              </div>
            </td>
            <td>
            <p className='nowrap'>OWNER’S CITY</p>
              <div>
                <input type="text" id="owner_city" name="owner_city" value={form6Data.owner_city} onChange={handleChange} />
              </div>
            </td>
            <td>
            <p className='nowrap'>STATE</p>
              <div>
                <input type="text" id="state" name="state" value={form6Data.owner_state} onChange={handleChange} />
              </div>
            </td>
            <td>
            <p className='nowrap'>ZIP</p>
              <div>
                <input type="text" id="zip" name="zip" value={form6Data.owner_zip} onChange={handleChange} />
              </div>
            </td>
          </tr>
        </tr>
        <tr>
          <td className='numero'>3</td>
          <tr>
            <td colSpan="4">
              <div>
                <p className='nowrap'>USER’S STREET ADDRESS</p>
                <input type="text" id="user_name" name="user_name" value={form6Data.user_name} onChange={handleChange} />
              </div>
            </td>
            <td>
              <div>
              <p className='nowrap'>SPECIFIC LOCATION IN PLANT</p>
                <input type="text" id="object_location" name="object_location" value={form6Data.object_location} onChange={handleChange} />
              </div>
            </td>
            <td colSpan="2">
              <div>
              <p className='nowrap'>OBJECT LOCATION - COUNTY</p>
                <input type="text" id="state" name="state" value={form6Data.state} onChange={handleChange} />
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan="4">
              <div>
              <p className='nowrap'>USER’S STREET ADDRESS</p>
                <input type="text" id="user_address" name="user_address" value={form6Data.user_address} onChange={handleChange} />
                NUMBER
              </div>
            </td>
            <td>
              <div>
              <p className='nowrap'>USER'S CITY</p>
                <input type="text" id="owner_city" name="owner_city" value={form6Data.user_city} onChange={handleChange} />
              </div>
            </td>
            <td>
              <div>
              <p className='nowrap'>STATE</p>
                <input type="text" id="state" name="state" value={form6Data.user_state} onChange={handleChange} />
              </div>
            </td>
            <td>
              <div>
              <p className='nowrap'>ZIP</p>
                <input type="text" id="zip" name="zip" value={form6Data.user_zip} onChange={handleChange} />
              </div>
            </td>
          </tr>
        </tr>
        <tr>
          <td className='numero'>4</td>
          <tr>
            <td colSpan="4">
              <div>
                <p className='nowrap'>CERTIFICATE COMPANY NAME</p>
                <input type="text" id="certificate_name" name="certificate_name" value={form6Data.certificate_name} onChange={handleChange} />
              </div>
            </td>
            <td>
              <div>
              <p className='nowrap'>CERTIFICATE COMPANY CONTACT NAME</p>
                <input type="text" id="certificate_company_contact" name="certificate_company_contact" value={form6Data.certificate_company_contact} onChange={handleChange} />
              </div>
            </td>
            <td colSpan="2">
              <div>
              <p className='nowrap'>EMAIL</p>
                <input type="text" id="email" name="email" value={form6Data.email} onChange={handleChange} />
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan="4">
              <div>
              <p className='nowrap'>CERTIFICATE COMPANY ADDRESS</p>
                <input type="text" id="certificate_address" name="certificate_address" value={form6Data.certificate_address} onChange={handleChange} />
              </div>
            </td>
            <td>
              <div>
              <p className='nowrap'>CERTIFICATE COMPANY CITY</p>
                <input type="text" id="certificate_city" name="certificate_city" value={form6Data.certificate_city} onChange={handleChange} />
              </div>
            </td>
            <td>
              <div>
              <p className='nowrap'>STATE</p>
                <input type="text" id="certificate_state" name="certificate_state" value={form6Data.certificate_state} onChange={handleChange} />
              </div>
            </td>
            <td>
              <div>
              <p className='nowrap'>ZIP</p>
                <input type="text" id="certificate_zip" name="certificate_zip" value={form6Data.certificate_zip} onChange={handleChange} />
              </div>
            </td>
            </tr>
        </tr>
        <tr>
          <td className='numero'>5</td>
            <td >
              <div className="form-field">
                <div className="nowrap">TYPE</div>
                <div className="option-buttons reason-options">
                  <div className={`centered-option${form6Data.type === 'ft' ? ' selected' : ''}`}>
                    <input type="checkbox" id="ft" name="type" value="ft" checked={form6Data.type === 'ft'} onChange={() => handleOptionChange('type', 'ft')}  />
                    <div htmlFor="ft">FT</div>
                  </div>
                  <div className={`centered-option${form6Data.type === 'wt' ? ' selected' : ''}`}>
                    <input type="checkbox" id="wt" name="type" value="wt" checked={form6Data.type === 'wt'} onChange={() => handleOptionChange('type', 'wt')} />
                    <div htmlFor="wt">WT</div>
                  </div>
                </div>
                <div className="option-buttons reason-options">
                  <div className={`centered-option${form6Data.type === 'ci' ? ' selected' : ''}`}>
                    <input type="checkbox" id="ci" name="type" value="ci" checked={form6Data.type === 'ci'} onChange={() => handleOptionChange('type', 'ci')} />
                    <div htmlFor="ci">CI</div>
                  </div>
                  <div className={`centered-option${form6Data.type === 'other' ? ' selected' : ''}`}>
                    <input type="checkbox" id="other" name="type" value="other" checked={form6Data.type === 'other'} onChange={() => handleOptionChange('type', 'other')} />
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div htmlFor="other">OTHER</div>
              <input type="text" id="other_text" name="other_text" value={form6Data.other_text} onChange={handleChange} />
            </td>
            <td>
              <div>
              <p className='nowrap'>YEAR BUILT</p>
                <input type="text" id="year_built" name="year_built" value={form6Data.year_built} onChange={handleChange} />
              </div>
            </td>
            <td colSpan="3">
              <div>
              <p className='nowrap'>MANUFACTURER</p>
                <input type="text" id="manufacturer" name="manufacturer" value={form6Data.manufacturer} onChange={handleChange} />
              </div>
            </td>
        </tr>
        <tr>
          <td className='numero'>6</td>
          <td>
            <div className="form-field">
            <div className="field-div">USE</div>
            <div className="option-buttons reason-options">
              <div className={`centered-option${form6Data.use === 'power' ? ' selected' : ''}`}>
                <input type="checkbox" id="power" name="use" value="power" checked={form6Data.use === 'power'} onChange={() => handleOptionChange('use', 'power')} />
                <div htmlFor="power">POWER</div>
              </div>
              <div className={`centered-option${form6Data.use === 'process' ? ' selected' : ''}`}>
                <input type="checkbox" id="process" name="use" value="process" checked={form6Data.use === 'process'} onChange={() => handleOptionChange('use', 'process')} />
                <div htmlFor="process">PROCESS</div>
              </div>
            </div>
            <div className="option-buttons reason-options">
              <div className={`centered-option${form6Data.use === 'steam_htg' ? ' selected' : ''}`}>
                <input type="checkbox" id="steam_htg" name="use" value="steam_htg" checked={form6Data.use === 'steam_htg'} onChange={() => handleOptionChange('use', 'steam_htg')} />
                <div htmlFor="steam_htg">STEAM HTG</div>
              </div>
              <div className={`centered-option${form6Data.use === 'hwh' ? ' selected' : ''}`}>
                <input type="checkbox" id="hwh" name="use" value="hwh" checked={form6Data.use === 'hwh'} onChange={() => handleOptionChange('use', 'hwh')} />
                <div htmlFor="hwh">HWH</div>
              </div>
              <div className={`centered-option${form6Data.use === 'hws' ? ' selected' : ''}`}>
                <input type="checkbox" id="hws" name="use" value="hws" checked={form6Data.use === 'hws'} onChange={() => handleOptionChange('use', 'hws')} />
                <div htmlFor="hws">HWS</div>
              </div>
              <div className={`centered-option${form6Data.use === 'other' ? ' selected' : ''}`}>
                <input type="checkbox" id="other" name="use" value="other"checked={form6Data.use === 'other'} onChange={() => handleOptionChange('use', 'other')} />
                <div htmlFor="other">OTHER</div>
                <input type="text" id="other_use_text" name="other_use_text" value={form6Data.other_use_text} onChange={handleChange} />
              </div>
            </div>
            </div>
          </td>
          <td>
            <div>
            <p className='nowrap'>FUEL</p>
              <input type="text" id="fuel" name="fuel" value={form6Data.fuel} onChange={handleChange} />
            </div>
          </td>
          <td>
            <div><p className='nowrap'>METHOD OF FIRING</p>
              <input type="text" id="method_firing" name="method_firing" value={form6Data.method_firing} onChange={handleChange} />
            </div>
          </td>
          <td>
            <div className="form-field">
            <div className="nowrap">PRESSURE GAGE TESTED</div>
            <div className="option-buttons reason-options">
              <div className={`centered-option${form6Data.pressure_gage === 'yes' ? ' selected' : ''}`}>
                <input
                  type="checkbox" id="yes" name="pressure_gage" value="yes"
                  checked={form6Data.pressure_gage === 'yes'}
                  onChange={() => handleOptionChange('pressure_gage', 'yes')}
                />
                <div htmlFor="yes">YES</div>
              </div>
              <div className={`centered-option${form6Data.pressure_gage === 'no' ? ' selected' : ''}`}>
                <input
                  type="checkbox" id="no" name="pressure_gage" value="no"
                  checked={form6Data.pressure_gage === 'no'}
                  onChange={() => handleOptionChange('pressure_gage', 'no')}
                />
                <div htmlFor="no">NO</div>
              </div>
            </div>
            </div>
          </td>
        </tr>
        <tr>
          <td className='numero'>7</td>
          <td colSpan="3">
            <div>
              <p className='nowrap'>PRESSURE ALLOWED</p>
              MAWP
                <input type="text" id="mawp" name="mawp" value={form6Data.mawp} onChange={handleChange} />
                THIS INSPECTION
                <input type="text" id="this_inspection" name="this_inspection" value={form6Data.this_inspection} onChange={handleChange} />
                PREV. INSPECTION
                <input type="text" id="prev_inspection" name="prev_inspection" value={form6Data.prev_inspection} onChange={handleChange} />
            </div>
          </td>
          <td>
            <div>
            <p className='nowrap'>SAFETY-RELIEF VALVES</p>
            SET AT
              <input type="text" id="set_at" name="set_at" value={form6Data.set_at} onChange={handleChange} />
              TOTAL CAPACITY
              <input type="text" id="total_capacity" name="total_capacity" value={form6Data.total_capacity} onChange={handleChange} />
            </div>
          </td>
          <td>
            <div><p className='nowrap'>HEATING SURFACE OR BTU (INPUT/OUTPUT)</p>
              <input type="text" id="heating_surface" name="heating_surface" value={form6Data.heating_surface} onChange={handleChange} />
            </div>
          </td>
        </tr>
        <tr>
          <td className='numero'>8</td>
          <td colSpan="4">
            <div className="form-field">
            <div className="field-div">IS CONDITION OF OBJECT SUCH THAT A CERTIFICATE MAY BE ISSUED?</div>
            <div className="option-buttons reason-options">
              <div className={`centered-option${form6Data.condition_object === 'yes' ? ' selected' : ''}`}>
                <input type="checkbox" id="yes" name="condition_object" value="yes" checked={form6Data.condition_object === 'yes'} 
                onChange={() => handleOptionChange('condition_object', 'yes')} />
                <div htmlFor="yes">YEZ</div>
              </div>
              <div className={`centered-option${form6Data.condition_object === 'no' ? ' selected' : ''}`}>
                <input type="checkbox" id="no" name="condition_object" value="no"
                  checked={form6Data.condition_object === 'no'}
                  onChange={() => handleOptionChange('condition_object', 'no')}
                />
                <div htmlFor="no">NO (IF NO, EXPLAIN FULLY UNDER CONDITIONS)</div>
              </div>
            </div>
            </div>
          </td>
          <td>
            <div className="form-field">
            <div className="field-div">PRESSURE TEST </div>
            <div className="option-buttons reason-options">
              <div className={`centered-option${form6Data.pressure_test === 'yes' ? ' selected' : ''}`}>
                <input type="checkbox" id="yes" name="pressure_test" value="yes"
                  checked={form6Data.pressure_test === 'yes'} onChange={() => handleOptionChange('pressure_test', 'yes')} />
                <div htmlFor="yes">YES</div>
                <input type="text" id="yes_psi" name="yes_psi" value={form6Data.yes_psi} onChange={handleChange} />
                <div htmlFor="yes_psi">PSI</div>
              </div>
              <div>DATE
                <input type="text" id="date_test" name="date_test" value={form6Data.date_test} onChange={handleChange} />
              </div>
              <div className={`centered-option${form6Data.pressure_test === 'no' ? ' selected' : ''}`}>
                <input type="checkbox" id="no" name="pressure_test" value="no" checked={form6Data.pressure_test === 'no'}
                  onChange={() => handleOptionChange('pressure_test', 'no')} />
                <div htmlFor="no">NO</div>
              </div>
            </div>
            </div>
          </td>
        </tr>
        <tr>
          <td className='numero'>9</td>
          <td colSpan="7">
            <p className='nowrap'>CONDITIONS: With respect to the internal surface, describe and state location of any scale, oil or other deposits. Give location and extent of any corrosion and state whether active or</p>
            <p className='nowrap'>inactive. State location and extent of any erosion, grooving, bulging, warping, cracking or similar condition. Report on any defective rivets, bowed, loose or broken stays. State condition of all</p>
            <p className='nowrap'>tubes, tube ends, coils, nipples, etc. Describe any adverse conditions with respect to pressure gage, water column, gage glass, gage cocks, safety valves, etc. Report condition of setting,</p>
            <p className='nowrap'>linings, baffles, supports, etc. Describe any major changes or repairs made since last inspection.</p>
            <div>
              <input type="text" id="conditions" name="conditions" value={form6Data.conditions} onChange={handleChange} />
            </div>
          </td>
        </tr> 
        <tr>
          <td className='numero'>10</td>
          <td colSpan="7">
            <div>REQUIREMENTS: (LIST CODE VIOLATIONS)
              <input type="text" id="requirements" name="requirements" value={form6Data.requirements} onChange={handleChange} />
            </div>
          </td>
        </tr>
        <tr>
          <td className='numero'>11</td>
          <tr>
            <td colSpan="7">
              <div>
              <p className='nowrap'>NAME AND TITLE OF PERSON TO WHOM REQUIREMENTS WERE EXPLAINED:</p>
                <input type="text" id="name_title_person" name="name_title_person" value={form6Data.name_title_person} onChange={handleChange} />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <p className='nowrap'>I HEREBY CERTIFY THIS IS A TRUE REPORT OF MY INSPECTION</p>
                <input type="text" id="signature_inspector" name="signature_inspector" value={form6Data.signature_inspector} onChange={handleChange} />
                SIGNATURE OF INSPECTOR
              </div>
            </td>
            <td>
              <div>IDENT NO.
                <input type="text" id="ident_inspec" name="ident_inspec" value={form6Data.ident_inspec} onChange={handleChange} /> 
              </div>
            </td>
            <td>
              <div>EMPLOYED BY
                <input type="text" id="employed_by" name="employed_by" value={form6Data.employed_by} onChange={handleChange} />
              </div>
            </td>
            <td>
              <div>IDENT NO.
                <input type="text" id="ident_employed" name="ident_employed" value={form6Data.ident_employed} onChange={handleChange} />
              </div>
            </td>
          </tr>
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

export default NB6;

