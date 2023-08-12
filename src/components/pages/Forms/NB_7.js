import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../../css/forms.css';
import TopBar from '../TopBar';

const NB7 = () => {
  const [form7Data, setFormData] = useState({
    month_inspected: '',
    day_inspected: '',
    year_inspected: '',
    month_cert: '',
    year_cert: '',
    certificate_posted: null,
    owner_n: '',
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
    size: '',
    pressure_gage: null,
    this_inspection: '',
    prev_inspection: '',
    set_at: '',
    total_capacity: '',
    pressure_changed: '',
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
    date_inspected: '',
    owner_user: '',
    location: '',
    owner_no: '',
    jurisdiction_no: '',
    internal: '',
    external: '',
    certificate_years: '',
    type_object: '',
    year_built_2: '',
    made: '',
    allow_express: '',
    temp_of: '',
    rvsv_setting: '',
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
        form7Data.month_inspected.trim() === '' ||
        form7Data.day_inspected.trim() === '' ||
        form7Data.year_inspected.trim() === '' ||
        form7Data.month_cert.trim() === '' ||
        form7Data.year_cert.trim() === '' ||
        form7Data.owner_n.trim() === '' ||
        form7Data.jurisdiction_number.trim() === '' ||
        form7Data.owner_name.trim() === '' ||
        form7Data.nature_business.trim() === '' ||
        form7Data.owner_address.trim() === '' ||
        form7Data.owner_city.trim() === '' ||
        form7Data.owner_state.trim() === '' ||
        form7Data.owner_zip.trim() === '' ||
        form7Data.user_name.trim() === '' ||
        form7Data.specific_location.trim() === '' ||
        form7Data.object_location.trim() === '' ||
        form7Data.user_address.trim() === '' ||
        form7Data.user_city.trim() === '' ||
        form7Data.user_state.trim() === '' ||
        form7Data.user_zip.trim() === '' ||
        form7Data.certificate_name.trim() === '' ||
        form7Data.certificate_company_contact.trim() === '' ||
        form7Data.email.trim() === '' ||
        form7Data.certificate_address.trim() === '' ||
        form7Data.certificate_city.trim() === '' ||
        form7Data.certificate_state.trim() === '' ||
        form7Data.certificate_zip.trim() === '' ||
        form7Data.year_built.trim() === '' ||
        form7Data.manufacturer.trim() === '' ||
        form7Data.size.trim() === '' ||
        form7Data.method_firing.trim() === '' ||
        form7Data.this_inspection.trim() === '' ||
        form7Data.prev_inspection.trim() === '' ||
        form7Data.set_at.trim() === '' ||
        form7Data.total_capacity.trim() === '' ||
        form7Data.pressure_changed.trim() === '' ||
        form7Data.yes_psi.trim() === '' ||
        form7Data.date_test.trim() === '' ||
        form7Data.conditions.trim() === '' ||
        form7Data.requirements.trim() === '' ||
        form7Data.name_title_person.trim() === '' ||
        form7Data.signature_inspector.trim() === '' ||
        form7Data.ident_inspec.trim() === '' ||
        form7Data.employed_by.trim() === '' ||
        form7Data.ident_employed.trim() === ''||
        form7Data.date_inspected.trim() === '' ||
        form7Data.owner_user.trim() === '' ||
        form7Data.location.trim() === '' ||
        form7Data.owner_no.trim() === '' ||
        form7Data.jurisdiction_no.trim() === '' ||
        form7Data.internal.trim() === '' ||
        form7Data.external.trim() === '' ||
        form7Data.certificate_years.trim() === '' ||
        form7Data.type_object.trim() === '' ||
        form7Data.year_built_2.trim() === '' ||
        form7Data.made.trim() === '' ||
        form7Data.allow_express.trim() === '' ||
        form7Data.temp_of.trim() === '' ||
        form7Data.rvsv_setting.trim() === ''
      ) {
        // Mostrar mensaje de error o realizar alguna acción adicional
        console.log('Todos los campos obligatorios deben ser completados');
        return false;
      }
    
      return true;
    };

    const isValid = validateForm();

    if (isValid) {
      const form7Data = {
        month_inspected: '',
        day_inspected: '',
        year_inspected: '',
        month_cert: '',
        year_cert: '',
        certificate_posted: null,
        owner_n: '',
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
        size: '',
        pressure_gage: null,
        this_inspection: '',
        prev_inspection: '',
        set_at: '',
        total_capacity: '',
        pressure_changed: '',
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
        date_inspected: '',
        owner_user: '',
        location: '',
        owner_no: '',
        jurisdiction_no: '',
        internal: '',
        external: '',
        certificate_years: '',
        type_object: '',
        year_built_2: '',
        made: '',
        allow_express: '',
        temp_of: '',
        rvsv_setting: '',
      };

      setFormData(form7Data);

      // Enviar datos de la persona al endpoint /api/persons
      fetch('http://localhost:3000/api/form/nb7', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form7Data),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Registro de formulario nb-7 exitoso:', data);
        })
        .catch(error => {
          console.error('Error al registrar formulario nb-7:', error);
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
    <div className='nowrap'>FORM NB-7 PRESSURE VESSELS</div>
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
              <input type="text" id="month_inspected" name="month_inspected" value={form7Data.month_inspected} onChange={handleChange} />
              DAY|
              <input type="text" id="day_inspected" name="day_inspected" value={form7Data.day_inspected} onChange={handleChange} />
              YEAR
              <input type="text" id="year_inspected" name="year_inspected" value={form7Data.year_inspected} onChange={handleChange} />
            </div>
          </td>
          <td>
            <div>
              <p className='nowrap'>CERT EXP DATE</p>
              MO|
              <input type="text" id="month_cert" name="month_cert" value={form7Data.month_cert} onChange={handleChange} />
              YEAR
              <input type="text" id="year_cert" name="year_cert" value={form7Data.year_cert} onChange={handleChange} />
            </div>
          </td>
          <td>
            <div className="form-field">
              <div className="nowrap">CERTIFICATE POSTED</div>
              <div className="option-buttons reason-options">
                <div className={`centered-option${form7Data.certificate_inspection === 'yes' ? ' selected' : ''}`}>
                  <input
                    type="checkbox" id="yes" name="certificate_inspection" value="yes"
                    checked={form7Data.certificate_inspection === 'yes'}
                    onChange={() => handleOptionChange('certificate_inspection', 'yes')}
                  />
                  <div htmlFor="yes">YES</div>
                </div>
                <div className={`centered-option${form7Data.certificate_inspection === 'no' ? ' selected' : ''}`}>
                  <input
                    type="checkbox" id="no" name="certificate_inspection" value="no"
                    checked={form7Data.certificate_inspection === 'no'}
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
              <input type="text" id="owner_n" name="owner_n" value={form7Data.owner_n} onChange={handleChange} />
            </div>
          </td>
          <td>
          <p className='nowrap'>JURISDICTION NUMBER</p>
            <div>
            <input type="text" id="jurisdiction_number" name="jurisdiction_number" value={form7Data.jurisdiction_number} onChange={handleChange} />
            </div>
          </td>
          <td>
          <div>
          <p className='nowrap'>NAT’L BD NO.</p>
            <input type="checkbox" id="natl_bd_n" name="natl_bd_n" value="natl_bd_n"
                  checked={form7Data.natl_bd_n === 'natl_bd_n'}
                  onChange={() => handleOptionChange('natl_bd_n', 'natl_bd_n')}
                />
          </div>
          </td>
          <td>
          <div>
          <p className='nowrap'>OTHER NO.</p>
            <input type="checkbox" id="other_n" name="other_n" value="other_n"
                  checked={form7Data.other_n === 'other_n'}
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
                <input type="text" id="owner_name" name="owner_name" value={form7Data.owner_name} onChange={handleChange} />
              </div>
            </td>
            <td>
              <div>
              <p className='nowrap'>NATURE OF BUSINESS</p>
                <input type="text" id="nature_business" name="nature_business" value={form7Data.nature_business} onChange={handleChange} />
              </div>
            </td>
            <td>
              <div className="form-field">
                <div className="nowrap">KIND OF INSPECTION</div>
                <div className="option-buttons reason-options">
                  <div className={`centered-option${form7Data.inspection === 'internal' ? ' selected' : ''}`}>
                    <input
                      type="checkbox" id="internal" name="inspection" value="internal"
                      checked={form7Data.inspection === 'internal'}
                      onChange={() => handleOptionChange('inspection', 'internal')}
                    />
                    <div htmlFor="internal">INT</div>
                  </div>
                  <div className={`centered-option${form7Data.inspection === 'external' ? ' selected' : ''}`}>
                    <input
                      type="checkbox" id="external" name="inspection" value="external"
                      checked={form7Data.inspection === 'external'}
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
                  <div className={`centered-option${form7Data.certificate_inspection === 'yes' ? ' selected' : ''}`}>
                    <input
                      type="checkbox" id="yes" name="certificate_inspection" value="yes"
                      checked={form7Data.certificate_inspection === 'yes'}
                      onChange={() => handleOptionChange('certificate_inspection', 'yes')}
                    />
                    <div htmlFor="yes">YES</div>
                  </div>
                  <div className={`centered-option${form7Data.certificate_inspection === 'no' ? ' selected' : ''}`}>
                    <input
                      type="checkbox" id="no" name="certificate_inspection" value="no"
                      checked={form7Data.certificate_inspection === 'no'}
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
                <input type="text" id="owner_address" name="owner_address" value={form7Data.owner_address} onChange={handleChange} />
                NUMBER
              </div>
            </td>
            <td>
            <p className='nowrap'>OWNER’S CITY</p>
              <div>
                <input type="text" id="owner_city" name="owner_city" value={form7Data.owner_city} onChange={handleChange} />
              </div>
            </td>
            <td>
            <p className='nowrap'>STATE</p>
              <div>
                <input type="text" id="state" name="state" value={form7Data.owner_state} onChange={handleChange} />
              </div>
            </td>
            <td>
            <p className='nowrap'>ZIP</p>
              <div>
                <input type="text" id="zip" name="zip" value={form7Data.owner_zip} onChange={handleChange} />
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
                <input type="text" id="user_name" name="user_name" value={form7Data.user_name} onChange={handleChange} />
              </div>
            </td>
            <td>
              <div>
              <p className='nowrap'>SPECIFIC LOCATION IN PLANT</p>
                <input type="text" id="object_location" name="object_location" value={form7Data.object_location} onChange={handleChange} />
              </div>
            </td>
            <td colSpan="2">
              <div>
              <p className='nowrap'>OBJECT LOCATION - COUNTY</p>
                <input type="text" id="state" name="state" value={form7Data.state} onChange={handleChange} />
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan="4">
              <div>
              <p className='nowrap'>USER’S STREET ADDRESS</p>
                <input type="text" id="user_address" name="user_address" value={form7Data.user_address} onChange={handleChange} />
                NUMBER
              </div>
            </td>
            <td>
              <div>
              <p className='nowrap'>USER'S CITY</p>
                <input type="text" id="owner_city" name="owner_city" value={form7Data.user_city} onChange={handleChange} />
              </div>
            </td>
            <td>
              <div>
              <p className='nowrap'>STATE</p>
                <input type="text" id="state" name="state" value={form7Data.user_state} onChange={handleChange} />
              </div>
            </td>
            <td>
              <div>
              <p className='nowrap'>ZIP</p>
                <input type="text" id="zip" name="zip" value={form7Data.user_zip} onChange={handleChange} />
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
                <input type="text" id="certificate_name" name="certificate_name" value={form7Data.certificate_name} onChange={handleChange} />
              </div>
            </td>
            <td>
              <div>
              <p className='nowrap'>CERTIFICATE COMPANY CONTACT NAME</p>
                <input type="text" id="certificate_company_contact" name="certificate_company_contact" value={form7Data.certificate_company_contact} onChange={handleChange} />
              </div>
            </td>
            <td colSpan="2">
              <div>
              <p className='nowrap'>EMAIL</p>
                <input type="text" id="email" name="email" value={form7Data.email} onChange={handleChange} />
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan="4">
              <div>
              <p className='nowrap'>CERTIFICATE COMPANY ADDRESS</p>
                <input type="text" id="certificate_address" name="certificate_address" value={form7Data.certificate_address} onChange={handleChange} />
              </div>
            </td>
            <td>
              <div>
              <p className='nowrap'>CERTIFICATE COMPANY CITY</p>
                <input type="text" id="certificate_city" name="certificate_city" value={form7Data.certificate_city} onChange={handleChange} />
              </div>
            </td>
            <td>
              <div>
              <p className='nowrap'>STATE</p>
                <input type="text" id="certificate_state" name="certificate_state" value={form7Data.certificate_state} onChange={handleChange} />
              </div>
            </td>
            <td>
              <div>
              <p className='nowrap'>ZIP</p>
                <input type="text" id="certificate_zip" name="certificate_zip" value={form7Data.certificate_zip} onChange={handleChange} />
              </div>
            </td>
            </tr>
        </tr>
        <tr>
          <td className='numero'>5</td>
          <td>
            <div className="form-field">
              <div className="nowrap">TYPE</div>
              <div className="option-buttons reason-options">
                <div className={`centered-option${form7Data.type === 'air_tank' ? ' selected' : ''}`}>
                  <input type="checkbox" id="air_tank" name="type" value="air_tank"
                      checked={form7Data.type === 'air_tank'} onChange={() => handleOptionChange('type', 'air_tank')}/>
                    <div htmlFor="air_tank">AIR TANK</div>
                  </div>
                  <div className={`centered-option${form7Data.type === 'water_tank' ? ' selected' : ''}`}>
                    <input type="checkbox" id="water_tank" name="type" value="water_tank"
                      checked={form7Data.type === 'water_tank'} onChange={() => handleOptionChange('type', 'water_tank')}/>
                    <div htmlFor="water_tank">WATER TANK</div>
                  </div>
                </div>
                <div className="option-buttons reason-options">
                  <div className={`centered-option${form7Data.type === 'other' ? ' selected' : ''}`}>
                    <input type="checkbox" id="other" name="type" value="other"
                      checked={form7Data.type === 'other'} onChange={() => handleOptionChange('type', 'other')}/>
                    <div htmlFor="other">OTHER</div>
                    <input type="text" id="other_text" name="other_text" value={form7Data.other_text} onChange={handleChange} />
                  </div>
                </div>
              </div>
          </td>
          <td>
            <div>
              <p className='nowrap'>YEAR BUILT</p>
              <input type="text" id="year_built" name="year_built" value={form7Data.year_built} onChange={handleChange} />
            </div>
          </td>
          <td>
            <div>
              <p className='nowrap'>MANUFACTURER</p>
              <input type="text" id="manufacturer" name="manufacturer" value={form7Data.manufacturer} onChange={handleChange} />
            </div>
            </td>
        </tr>
        <tr>
          <td className='numero'>6</td>
          <td>
            <div className="form-field">
              <div className="field-div">USE</div>
              <div className="option-buttons reason-options">
                <div className={`centered-option${form7Data.use === 'storage_use' ? ' selected' : ''}`}>
                  <input
                    type="checkbox" id="storage_use" name="use" value="storage_use"
                    checked={form7Data.use === 'storage_use'}
                    onChange={() => handleOptionChange('use', 'storage_use')}
                  />
                  <div htmlFor="storage_use">STORAGE</div>
                </div>
                <div className={`centered-option${form7Data.use === 'process_use' ? ' selected' : ''}`}>
                  <input
                    type="checkbox" id="process_use" name="use" value="process_use"
                    checked={form7Data.use === 'process_use'}
                    onChange={() => handleOptionChange('use', 'process_use')}
                  />
                  <div htmlFor="process_use">PROCESS</div>
                </div>
              </div>
              <div className="option-buttons reason-options">
                <div className={`centered-option${form7Data.use === 'heat_exchange' ? ' selected' : ''}`}>
                  <input
                    type="checkbox" id="heat_exchange" name="use" value="heat_exchange"
                    checked={form7Data.use === 'heat_exchange'}
                    onChange={() => handleOptionChange('use', 'heat_exchange')}
                  />
                  <div htmlFor="heat_exchange">HEAT EXCHANGE</div>
                </div>
                <div className={`centered-option${form7Data.use === 'other' ? ' selected' : ''}`}>
                  <input
                    type="checkbox" id="other" name="use" value="other"
                    checked={form7Data.use === 'other'}
                    onChange={() => handleOptionChange('use', 'other')}
                  />
                  <div htmlFor="other">OTHER</div>
                  <input type="text" id="other_use_text" name="other_use_text" value={form7Data.other_use_text} onChange={handleChange} />
                </div>
              </div>
              </div>
            </td>
            <td>
              <div>SIZE
                <input type="text" id="size" name="size" value={form7Data.size} onChange={handleChange} />
              </div>
            </td>
            <td>
              <div className="form-field">
              <div className="field-div">PRESSURE GAGE TESTED</div>
              <div className="option-buttons reason-options">
                <div className={`centered-option${form7Data.pressure_gage === 'yes' ? ' selected' : ''}`}>
                  <input
                    type="checkbox" id="yes" name="pressure_gage" value="yes"
                    checked={form7Data.pressure_gage === 'yes'}
                    onChange={() => handleOptionChange('pressure_gage', 'yes')}
                  />
                  <div htmlFor="yes">YES</div>
                </div>
                <div className={`centered-option${form7Data.pressure_gage === 'no' ? ' selected' : ''}`}>
                  <input
                    type="checkbox" id="no" name="pressure_gage" value="no"
                    checked={form7Data.pressure_gage === 'no'}
                    onChange={() => handleOptionChange('pressure_gage', 'no')}
                  />
                  <div htmlFor="no">NO</div>
                </div>
              </div>
            </div>
            </td>
        </tr>
        <tr>
            <div>
              <p>PRESSURE ALLOWED</p>
              <p className='nowrap'>THIS INSPECTION</p>
              <input type="text" id="this_inspection" name="this_inspection" value={form7Data.this_inspection} onChange={handleChange} />
              <p className='nowrap'>PREVIOUS INSPECTION</p>
              <input type="text" id="prev_inspection" name="prev_inspection" value={form7Data.prev_inspection} onChange={handleChange} />
            </div>
            <div>
              <p>SAFETY RELIEF VALVES</p>
              <p className='nowrap'>SET AT</p>
              <input type="text" id="set_at" name="set_at" value={form7Data.set_at} onChange={handleChange} />
              <p className='nowrap'>TOTAL CAPACITY</p>
              <input type="text" id="total_capacity" name="total_capacity" value={form7Data.total_capacity} onChange={handleChange} />
            </div>
            <div>
            <p className='nowrap'>EXPLAIN IF PRESSURE CHANGED</p>
              <input type="text" id="pressure_changed" name="pressure_changed" value={form7Data.pressure_changed} onChange={handleChange} />
            </div>
        </tr>
        <tr>
          <td className='numero'>8</td>
          <td colSpan="4">
            <div className="form-field">
            <div className="field-div">IS CONDITION OF OBJECT SUCH THAT A CERTIFICATE MAY BE ISSUED?</div>
            <div className="option-buttons reason-options">
              <div className={`centered-option${form7Data.condition_object === 'yes' ? ' selected' : ''}`}>
                <input type="checkbox" id="yes" name="condition_object" value="yes" checked={form7Data.condition_object === 'yes'} 
                onChange={() => handleOptionChange('condition_object', 'yes')} />
                <div htmlFor="yes">YEZ</div>
              </div>
              <div className={`centered-option${form7Data.condition_object === 'no' ? ' selected' : ''}`}>
                <input type="checkbox" id="no" name="condition_object" value="no"
                  checked={form7Data.condition_object === 'no'}
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
              <div className={`centered-option${form7Data.pressure_test === 'yes' ? ' selected' : ''}`}>
                <input type="checkbox" id="yes" name="pressure_test" value="yes"
                  checked={form7Data.pressure_test === 'yes'} onChange={() => handleOptionChange('pressure_test', 'yes')} />
                <div htmlFor="yes">YES</div>
                <input type="text" id="yes_psi" name="yes_psi" value={form7Data.yes_psi} onChange={handleChange} />
                <div htmlFor="yes_psi">PSI</div>
              </div>
              <div>DATE
                <input type="text" id="date_test" name="date_test" value={form7Data.date_test} onChange={handleChange} />
              </div>
              <div className={`centered-option${form7Data.pressure_test === 'no' ? ' selected' : ''}`}>
                <input type="checkbox" id="no" name="pressure_test" value="no" checked={form7Data.pressure_test === 'no'}
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
              <input type="text" id="conditions" name="conditions" value={form7Data.conditions} onChange={handleChange} />
            </div>
          </td>
        </tr> 
        <tr>
          <td className='numero'>10</td>
          <td colSpan="7">
            <div>REQUIREMENTS: (LIST CODE VIOLATIONS)
              <input type="text" id="requirements" name="requirements" value={form7Data.requirements} onChange={handleChange} />
            </div>
          </td>
        </tr>
        <tr>
          <td className='numero'>11</td>
          <tr>
            <td colSpan="7">
              <div>
              <p className='nowrap'>NAME AND TITLE OF PERSON TO WHOM REQUIREMENTS WERE EXPLAINED:</p>
                <input type="text" id="name_title_person" name="name_title_person" value={form7Data.name_title_person} onChange={handleChange} />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <p className='nowrap'>I HEREBY CERTIFY THIS IS A TRUE REPORT OF MY INSPECTION</p>
                <input type="text" id="signature_inspector" name="signature_inspector" value={form7Data.signature_inspector} onChange={handleChange} />
                SIGNATURE OF INSPECTOR
              </div>
            </td>
            <td>
              <div>IDENT NO.
                <input type="text" id="ident_inspec" name="ident_inspec" value={form7Data.ident_inspec} onChange={handleChange} /> 
              </div>
            </td>
            <td>
              <div>EMPLOYED BY
                <input type="text" id="employed_by" name="employed_by" value={form7Data.employed_by} onChange={handleChange} />
              </div>
            </td>
            <td>
              <div>IDENT NO.
                <input type="text" id="ident_employed" name="ident_employed" value={form7Data.ident_employed} onChange={handleChange} />
              </div>
            </td>
          </tr>
        </tr>
        </tbody>
      </table>
        {/* Contenido de la segunda página */}
        {/* Agregar la tabla para llenar los datos de los tanques */}
        <p className='nowrap'>PRESSURE VESSEL — REPORT OF INSPECTION — (EXTENSION SHEET)</p>
        <table className="table">
          <tbody>
            <tr>
              <td colSpan="2">DATE INSPECTED</td>
              <td colSpan="5">OWNER-USER</td>
              <td colSpan="4">LOCATION</td>
            </tr>
            <tr>
              <td>OWNER’S NO.</td>
              <td>JURISDICTION NO.</td>
              <td>NB ASME OR STD. NO.</td>
              <td>INT</td>
              <td>EXT</td>
              <td>*CERT – NO. OF YEARS</td>
              <td>TYPE OF OBJECT</td>
              <td>YEAR BUILT</td>
              <td>ALLOW. PRESS.</td>
              <td>MADE BY</td>
              <td>TEMP. OF</td>
              <td>R.V.S.V. SETTING</td>
            </tr>
            <tr>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
            </tr>
            <tr>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
            </tr>
            <tr>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
            </tr>
            <tr>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
            </tr>
            <tr>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
            </tr>
            <tr>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
            </tr>
            <tr>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
            </tr>
            <tr>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
            </tr>
            <tr>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
            </tr>
            <tr>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
            </tr>
            <tr>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
            </tr>
            <tr>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
            </tr>
            <tr>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
            </tr>
            <tr>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
            </tr>
            <tr>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
            </tr>
            <tr>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
            </tr>
            <tr>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
            </tr>
            <tr>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
            </tr>
            <tr>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
            </tr>
            <tr>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
            </tr>
            <tr>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
            </tr>
            <tr>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
            </tr>
            <tr>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
            </tr>
            <tr>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
            </tr>
            <tr>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
            </tr>
            <tr>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
            </tr>
            <tr>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
            </tr>
            <tr>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
            </tr>
            <tr>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
            </tr>
            <tr>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
            </tr>
            <tr>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
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

export default NB7;

