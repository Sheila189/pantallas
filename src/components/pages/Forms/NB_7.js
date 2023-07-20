import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../../css/forms.css';
import TopBar from '../TopBar';

const Formulario7 = () => {
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
      const form6Data = {
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

      setFormData(form6Data);

      // Enviar datos de la persona al endpoint /api/persons
      fetch('http://localhost:3000/api/form/nb7', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form6Data),
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

  return (
    <form className="formulario" onSubmit={handleSubmit}>
          <label>
            <p>Date inspected</p>
            month
            <input type="text" id="month_inspected" name="month_inspected" value={form7Data.month_inspected} onChange={handleChange} />
            day
            <input type="text" id="day_inspected" name="day_inspected" value={form7Data.day_inspected} onChange={handleChange} />
            year
            <input type="text" id="year_inspected" name="year_inspected" value={form7Data.year_inspected} onChange={handleChange} />
          </label>
          <label>
            <p>Cert exp date</p>
            month
            <input type="text" id="month_cert" name="month_cert" value={form7Data.month_cert} onChange={handleChange} />
            year
            <input type="text" id="year_cert" name="year_cert" value={form7Data.year_cert} onChange={handleChange} />
          </label>
          <label className="form-field">
            <div className="field-label">Certificate posted:</div>
            <div className="option-buttons reason-options">
              <div className={`centered-option${form7Data.certificate_inspection === 'yes' ? ' selected' : ''}`}>
                <input
                  type="radio" id="yes" name="certificate_inspection" value="yes"
                  checked={form7Data.certificate_inspection === 'yes'}
                  onChange={() => handleOptionChange('certificate_inspection', 'yes')}
                />
                <label htmlFor="yes">yes</label>
              </div>
              <div className={`centered-option${form7Data.certificate_inspection === 'no' ? ' selected' : ''}`}>
                <input
                  type="radio" id="no" name="certificate_inspection" value="no"
                  checked={form7Data.certificate_inspection === 'no'}
                  onChange={() => handleOptionChange('certificate_inspection', 'no')}
                />
                <label htmlFor="no">no</label>
              </div>
            </div>
          </label>
          <label>Owner No.
            <input type="text" id="owner_n" name="owner_n" value={form7Data.owner_n} onChange={handleChange} />
          </label>
          <label>Jurisdiction number.
            <input type="text" id="jurisdiction_number" name="jurisdiction_number" value={form7Data.jurisdiction_number} onChange={handleChange} />
          </label>
          <label>
            natl bd no.
            <input type="radio" id="natl_bd_n" name="natl_bd_n" value="natl_bd_n"
                  checked={form7Data.natl_bd_n === 'natl_bd_n'}
                  onChange={() => handleOptionChange('natl_bd_n', 'natl_bd_n')}
                />
          </label>
          <label>
            other no.
            <input type="radio" id="other_n" name="other_n" value="other_n"
                  checked={form7Data.other_n === 'other_n'}
                  onChange={() => handleOptionChange('other_n', 'other_n')}
                />
          </label>
          <label>Owner
            <input type="text" id="owner_name" name="owner_name" value={form7Data.owner_name} onChange={handleChange} />
          </label>
          <label>Nature business
            <input type="text" id="nature_business" name="nature_business" value={form7Data.nature_business} onChange={handleChange} />
          </label>
          <label className="form-field">
            <div className="field-label">kind of inspection :</div>
            <div className="option-buttons reason-options">
              <div className={`centered-option${form7Data.inspection === 'internal' ? ' selected' : ''}`}>
                <input
                  type="radio" id="internal" name="inspection" value="internal"
                  checked={form7Data.inspection === 'internal'}
                  onChange={() => handleOptionChange('inspection', 'internal')}
                />
                <label htmlFor="internal">internal</label>
              </div>
              <div className={`centered-option${form7Data.inspection === 'external' ? ' selected' : ''}`}>
                <input
                  type="radio" id="external" name="inspection" value="external"
                  checked={form7Data.inspection === 'external'}
                  onChange={() => handleOptionChange('inspection', 'external')}
                />
                <label htmlFor="external">external</label>
              </div>
            </div>
          </label>
          <label className="form-field">
            <div className="field-label">Certificate inspection :</div>
            <div className="option-buttons reason-options">
              <div className={`centered-option${form7Data.certificate_inspection === 'yes' ? ' selected' : ''}`}>
                <input
                  type="radio" id="yes" name="certificate_inspection" value="yes"
                  checked={form7Data.certificate_inspection === 'yes'}
                  onChange={() => handleOptionChange('certificate_inspection', 'yes')}
                />
                <label htmlFor="yes">yes</label>
              </div>
              <div className={`centered-option${form7Data.certificate_inspection === 'no' ? ' selected' : ''}`}>
                <input
                  type="radio" id="no" name="certificate_inspection" value="no"
                  checked={form7Data.certificate_inspection === 'no'}
                  onChange={() => handleOptionChange('certificate_inspection', 'no')}
                />
                <label htmlFor="no">no</label>
              </div>
            </div>
          </label>
          <label>Owner's street address
            <input type="text" id="owner_address" name="owner_address" value={form7Data.owner_address} onChange={handleChange} />
          </label>
          <label>Owner's city
            <input type="text" id="owner_city" name="owner_city" value={form7Data.owner_city} onChange={handleChange} />
          </label>
          <label>state
            <input type="text" id="state" name="state" value={form7Data.state} onChange={handleChange} />
          </label>
          <label>zip
            <input type="text" id="zip" name="zip" value={form7Data.zip} onChange={handleChange} />
          </label>
          <label>user's name - object location
            <input type="text" id="user_name" name="user_name" value={form7Data.user_name} onChange={handleChange} />
          </label>
          <label>Specific location in plant
            <input type="text" id="object_location" name="object_location" value={form7Data.object_location} onChange={handleChange} />
          </label>
          <label>Object location - country
            <input type="text" id="state" name="state" value={form7Data.state} onChange={handleChange} />
          </label>
          <label>User's street address
            <input type="text" id="user_address" name="user_address" value={form7Data.user_address} onChange={handleChange} />
          </label>
          <label>Owner's city
            <input type="text" id="owner_city" name="owner_city" value={form7Data.owner_city} onChange={handleChange} />
          </label>
          <label>state
            <input type="text" id="state" name="state" value={form7Data.state} onChange={handleChange} />
          </label>
          <label>zip
            <input type="text" id="zip" name="zip" value={form7Data.zip} onChange={handleChange} />
          </label>
          <label>Certificate company name
            <input type="text" id="certificate_name" name="certificate_name" value={form7Data.certificate_name} onChange={handleChange} />
          </label>
          <label>Certificate company contact name
            <input type="text" id="certificate_company_contac" name="certificate_company_contac" value={form7Data.certificate_company_contac} onChange={handleChange} />
          </label>
          <label>email
            <input type="text" id="email" name="email" value={form7Data.email} onChange={handleChange} />
          </label>
          <label>Certificate company address
            <input type="text" id="certificate_address" name="certificate_address" value={form7Data.certificate_address} onChange={handleChange} />
          </label>
          <label>Certificate company city
            <input type="text" id="certificate_city" name="certificate_city" value={form7Data.certificate_city} onChange={handleChange} />
          </label>
          <label>state
            <input type="text" id="certificate_state" name="certificate_state" value={form7Data.certificate_state} onChange={handleChange} />
          </label>
          <label>zip
            <input type="text" id="certificate_zip" name="certificate_zip" value={form7Data.certificate_zip} onChange={handleChange} />
          </label>
          <label className="form-field">
            <div className="field-label">Type :</div>
            <div className="option-buttons reason-options">
              <div className={`centered-option${form7Data.type === 'air_tank' ? ' selected' : ''}`}>
                <input
                  type="radio" id="air_tank" name="type" value="air_tank"
                  checked={form7Data.type === 'air_tank'}
                  onChange={() => handleOptionChange('type', 'air_tank')}
                />
                <label htmlFor="air_tank">Air tank</label>
              </div>
              <div className={`centered-option${form7Data.type === 'water_tank' ? ' selected' : ''}`}>
                <input
                  type="radio" id="water_tank" name="type" value="water_tank"
                  checked={form7Data.type === 'water_tank'}
                  onChange={() => handleOptionChange('type', 'water_tank')}
                />
                <label htmlFor="water_tank">Water tank</label>
              </div>
            </div>
            <div className="option-buttons reason-options">
              <div className={`centered-option${form7Data.type === 'other' ? ' selected' : ''}`}>
                <input
                  type="radio" id="other" name="type" value="other"
                  checked={form7Data.type === 'other'}
                  onChange={() => handleOptionChange('type', 'other')}
                />
                <label htmlFor="other">other</label>
                <input type="text" id="other_text" name="other_text" value={form7Data.other_text} onChange={handleChange} />
              </div>
            </div>
          </label>
          <label>Year built
            <input type="text" id="year_built" name="year_built" value={form7Data.year_built} onChange={handleChange} />
          </label>
          <label>Manufacturer
            <input type="text" id="manufacturer" name="manufacturer" value={form7Data.manufacturer} onChange={handleChange} />
          </label>
          <label className="form-field">
          <div className="field-label">Use :</div>
          <div className="option-buttons reason-options">
            <div className={`centered-option${form7Data.use === 'storage_use' ? ' selected' : ''}`}>
              <input
                type="radio" id="storage_use" name="use" value="storage_use"
                checked={form7Data.use === 'storage_use'}
                onChange={() => handleOptionChange('use', 'storage_use')}
              />
              <label htmlFor="storage_use">Storage</label>
            </div>
            <div className={`centered-option${form7Data.use === 'process_use' ? ' selected' : ''}`}>
              <input
                type="radio" id="process_use" name="use" value="process_use"
                checked={form7Data.use === 'process_use'}
                onChange={() => handleOptionChange('use', 'process_use')}
              />
              <label htmlFor="process_use">process</label>
            </div>
          </div>
          <div className="option-buttons reason-options">
            <div className={`centered-option${form7Data.use === 'heat_exchange' ? ' selected' : ''}`}>
              <input
                type="radio" id="heat_exchange" name="use" value="heat_exchange"
                checked={form7Data.use === 'heat_exchange'}
                onChange={() => handleOptionChange('use', 'heat_exchange')}
              />
              <label htmlFor="heat_exchange">Heat exchange</label>
            </div>
            <div className={`centered-option${form7Data.use === 'other' ? ' selected' : ''}`}>
              <input
                type="radio" id="other" name="use" value="other"
                checked={form7Data.use === 'other'}
                onChange={() => handleOptionChange('use', 'other')}
              />
              <label htmlFor="other">other</label>
              <input type="text" id="other_use_text" name="other_use_text" value={form7Data.other_use_text} onChange={handleChange} />
            </div>
          </div>
          </label>
          <label>Size
            <input type="text" id="size" name="size" value={form7Data.size} onChange={handleChange} />
          </label>
          <label className="form-field">
          <div className="field-label">Pressure gage tested:</div>
          <div className="option-buttons reason-options">
            <div className={`centered-option${form7Data.pressure_gage === 'yes' ? ' selected' : ''}`}>
              <input
                type="radio" id="yes" name="pressure_gage" value="yes"
                checked={form7Data.pressure_gage === 'yes'}
                onChange={() => handleOptionChange('pressure_gage', 'yes')}
              />
              <label htmlFor="yes">yes</label>
            </div>
            <div className={`centered-option${form7Data.pressure_gage === 'no' ? ' selected' : ''}`}>
              <input
                type="radio" id="no" name="pressure_gage" value="no"
                checked={form7Data.pressure_gage === 'no'}
                onChange={() => handleOptionChange('pressure_gage', 'no')}
              />
              <label htmlFor="no">no</label>
            </div>
          </div>
        </label>
        <label>
          <p>Pressure allowed</p>
          this inspection
          <input type="text" id="this_inspection" name="this_inspection" value={form7Data.this_inspection} onChange={handleChange} />
          prev inspection
          <input type="text" id="prev_inspection" name="prev_inspection" value={form7Data.prev_inspection} onChange={handleChange} />
        </label>
        <label>
          <p>Safety-relief valves</p>
          Set at
          <input type="text" id="set_at" name="set_at" value={form7Data.set_at} onChange={handleChange} />
          Total capacity
          <input type="text" id="total_capacity" name="total_capacity" value={form7Data.total_capacity} onChange={handleChange} />
        </label>
        <label>EXPLAIN IF PRESSURE CHANGED
          <input type="text" id="pressure_changed" name="pressure_changed" value={form7Data.pressure_changed} onChange={handleChange} />
        </label>
        <label className="form-field">
        <div className="field-label">Is condition of object such that a certificate may be issued?</div>
        <div className="option-buttons reason-options">
          <div className={`centered-option${form7Data.condition_object === 'yes' ? ' selected' : ''}`}>
            <input
              type="radio" id="yes" name="condition_object" value="yes"
              checked={form7Data.condition_object === 'yes'}
              onChange={() => handleOptionChange('condition_object', 'yes')}
            />
            <label htmlFor="yes">yes</label>
          </div>
          <div className={`centered-option${form7Data.condition_object === 'no' ? ' selected' : ''}`}>
            <input
              type="radio" id="no" name="condition_object" value="no"
              checked={form7Data.condition_object === 'no'}
              onChange={() => handleOptionChange('condition_object', 'no')}
            />
            <label htmlFor="no">no (If no, explain fully under conditions)</label>
          </div>
        </div>
        </label>
        <label className="form-field">
        <div className="field-label">Pressure test: </div>
        <div className="option-buttons reason-options">
          <div className={`centered-option${form7Data.pressure_test === 'yes' ? ' selected' : ''}`}>
            <input
              type="radio" id="yes" name="pressure_test" value="yes"
              checked={form7Data.pressure_test === 'yes'}
              onChange={() => handleOptionChange('pressure_test', 'yes')}
            />
            <label htmlFor="yes">yes</label>
            <input type="text" id="yes_psi" name="yes_psi" value={form7Data.yes_psi} onChange={handleChange} />
            <label htmlFor="yes_psi">psi</label>
          </div>
          <label>Date
            <input type="text" id="date_test" name="date_test" value={form7Data.date_test} onChange={handleChange} />
          </label>
          <div className={`centered-option${form7Data.pressure_test === 'no' ? ' selected' : ''}`}>
            <input
              type="radio" id="no" name="pressure_test" value="no"
              checked={form7Data.pressure_test === 'no'}
              onChange={() => handleOptionChange('pressure_test', 'no')}
            />
            <label htmlFor="no">no</label>
          </div>
        </div>
        </label>
        <label>Conditions
          <input type="text" id="conditions" name="conditions" value={form7Data.conditions} onChange={handleChange} />
        </label>
        <label>Requirements: (List code violations)
          <input type="text" id="requirements" name="requirements" value={form7Data.requirements} onChange={handleChange} />
        </label>
        <label>Name and title of pperson to whom requirements were explained
          <input type="text" id="name_title_person" name="name_title_person" value={form7Data.name_title_person} onChange={handleChange} />
        </label>
        <label>I hereby certify this is a true report of my inspection
          <input type="text" id="signature_inspector" name="signature_inspector" value={form7Data.signature_inspector} onChange={handleChange} />
        </label>
        <label>Ident no:
          <input type="text" id="ident_inspec" name="ident_inspec" value={form7Data.ident_inspec} onChange={handleChange} /> 
        </label>
        <label>Employed by: 
          <input type="text" id="employed_by" name="employed_by" value={form7Data.employed_by} onChange={handleChange} />
        </label>
        <label>Ident no:
          <input type="text" id="ident_employed" name="ident_employed" value={form7Data.ident_employed} onChange={handleChange} />
        </label>
        {/* Agregar la tabla para llenar los datos de los tanques */}
        <p> Pressure vessel - Report of inspection - (Extension sheet</p>
 </form>
);
};

const NB7 = () => {
  const navigate = useNavigate();
  
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <TopBar />
      <h1>Formulario NB 7</h1>
      <Formulario7 />
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

export default NB7;

