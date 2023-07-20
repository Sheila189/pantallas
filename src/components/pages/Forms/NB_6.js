import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../../css/forms.css';
import TopBar from '../TopBar';

const Formulario6 = () => {
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

  return (
    <form className="formulario" onSubmit={handleSubmit}>
          <label>
            <p>Date inspected</p>
            month
            <input type="text" id="month_inspected" name="month_inspected" value={form6Data.month_inspected} onChange={handleChange} />
            day
            <input type="text" id="day_inspected" name="day_inspected" value={form6Data.day_inspected} onChange={handleChange} />
            year
            <input type="text" id="year_inspected" name="year_inspected" value={form6Data.year_inspected} onChange={handleChange} />
          </label>
          <label>
            <p>Cert exp date</p>
            month
            <input type="text" id="month_cert" name="month_cert" value={form6Data.month_cert} onChange={handleChange} />
            year
            <input type="text" id="year_cert" name="year_cert" value={form6Data.year_cert} onChange={handleChange} />
          </label>
          <label className="form-field">
            <div className="field-label">Certificate posted:</div>
            <div className="option-buttons reason-options">
              <div className={`centered-option${form6Data.certificate_inspection === 'yes' ? ' selected' : ''}`}>
                <input
                  type="radio" id="yes" name="certificate_inspection" value="yes"
                  checked={form6Data.certificate_inspection === 'yes'}
                  onChange={() => handleOptionChange('certificate_inspection', 'yes')}
                />
                <label htmlFor="yes">yes</label>
              </div>
              <div className={`centered-option${form6Data.certificate_inspection === 'no' ? ' selected' : ''}`}>
                <input
                  type="radio" id="no" name="certificate_inspection" value="no"
                  checked={form6Data.certificate_inspection === 'no'}
                  onChange={() => handleOptionChange('certificate_inspection', 'no')}
                />
                <label htmlFor="no">no</label>
              </div>
            </div>
          </label>
          <label>Owner No.
            <input type="text" id="owner_n" name="owner_n" value={form6Data.owner_n} onChange={handleChange} />
          </label>
          <label>Jurisdiction number.
            <input type="text" id="jurisdiction_number" name="jurisdiction_number" value={form6Data.jurisdiction_number} onChange={handleChange} />
          </label>
          <label>
            natl bd no.
            <input type="radio" id="natl_bd_n" name="natl_bd_n" value="natl_bd_n"
                  checked={form6Data.natl_bd_n === 'natl_bd_n'}
                  onChange={() => handleOptionChange('natl_bd_n', 'natl_bd_n')}
                />
          </label>
          <label>
            other no.
            <input type="radio" id="other_n" name="other_n" value="other_n"
                  checked={form6Data.other_n === 'other_n'}
                  onChange={() => handleOptionChange('other_n', 'other_n')}
                />
          </label>
          <label>Owner
            <input type="text" id="owner_name" name="owner_name" value={form6Data.owner_name} onChange={handleChange} />
          </label>
          <label>Nature business
            <input type="text" id="nature_business" name="nature_business" value={form6Data.nature_business} onChange={handleChange} />
          </label>
          <label className="form-field">
            <div className="field-label">kind of inspection :</div>
            <div className="option-buttons reason-options">
              <div className={`centered-option${form6Data.inspection === 'internal' ? ' selected' : ''}`}>
                <input
                  type="radio" id="internal" name="inspection" value="internal"
                  checked={form6Data.inspection === 'internal'}
                  onChange={() => handleOptionChange('inspection', 'internal')}
                />
                <label htmlFor="internal">internal</label>
              </div>
              <div className={`centered-option${form6Data.inspection === 'external' ? ' selected' : ''}`}>
                <input
                  type="radio" id="external" name="inspection" value="external"
                  checked={form6Data.inspection === 'external'}
                  onChange={() => handleOptionChange('inspection', 'external')}
                />
                <label htmlFor="external">external</label>
              </div>
            </div>
          </label>
          <label className="form-field">
            <div className="field-label">Certificate inspection :</div>
            <div className="option-buttons reason-options">
              <div className={`centered-option${form6Data.certificate_inspection === 'yes' ? ' selected' : ''}`}>
                <input
                  type="radio" id="yes" name="certificate_inspection" value="yes"
                  checked={form6Data.certificate_inspection === 'yes'}
                  onChange={() => handleOptionChange('certificate_inspection', 'yes')}
                />
                <label htmlFor="yes">yes</label>
              </div>
              <div className={`centered-option${form6Data.certificate_inspection === 'no' ? ' selected' : ''}`}>
                <input
                  type="radio" id="no" name="certificate_inspection" value="no"
                  checked={form6Data.certificate_inspection === 'no'}
                  onChange={() => handleOptionChange('certificate_inspection', 'no')}
                />
                <label htmlFor="no">no</label>
              </div>
            </div>
          </label>
        <label>Owner's street address
          <input type="text" id="owner_address" name="owner_address" value={form6Data.owner_address} onChange={handleChange} />
        </label>
        <label>Owner's city
          <input type="text" id="owner_city" name="owner_city" value={form6Data.owner_city} onChange={handleChange} />
        </label>
        <label>state
          <input type="text" id="state" name="state" value={form6Data.state} onChange={handleChange} />
        </label>
        <label>zip
          <input type="text" id="zip" name="zip" value={form6Data.zip} onChange={handleChange} />
        </label>
        <label>user's name - object location
          <input type="text" id="user_name" name="user_name" value={form6Data.user_name} onChange={handleChange} />
        </label>
        <label>Specific location in plant
          <input type="text" id="object_location" name="object_location" value={form6Data.object_location} onChange={handleChange} />
        </label>
        <label>Object location - country
          <input type="text" id="state" name="state" value={form6Data.state} onChange={handleChange} />
        </label>
        <label>User's street address
          <input type="text" id="user_address" name="user_address" value={form6Data.user_address} onChange={handleChange} />
        </label>
        <label>Owner's city
          <input type="text" id="owner_city" name="owner_city" value={form6Data.owner_city} onChange={handleChange} />
        </label>
        <label>state
          <input type="text" id="state" name="state" value={form6Data.state} onChange={handleChange} />
        </label>
        <label>zip
          <input type="text" id="zip" name="zip" value={form6Data.zip} onChange={handleChange} />
        </label>
        <label>Certificate company name
          <input type="text" id="certificate_name" name="certificate_name" value={form6Data.certificate_name} onChange={handleChange} />
        </label>
        <label>Certificate company contact name
          <input type="text" id="certificate_company_contac" name="certificate_company_contac" value={form6Data.certificate_company_contac} onChange={handleChange} />
        </label>
        <label>email
          <input type="text" id="email" name="email" value={form6Data.email} onChange={handleChange} />
        </label>
        <label>Certificate company address
          <input type="text" id="certificate_address" name="certificate_address" value={form6Data.certificate_address} onChange={handleChange} />
        </label>
        <label>Certificate company city
          <input type="text" id="certificate_city" name="certificate_city" value={form6Data.certificate_city} onChange={handleChange} />
        </label>
        <label>state
          <input type="text" id="certificate_state" name="certificate_state" value={form6Data.certificate_state} onChange={handleChange} />
        </label>
        <label>zip
          <input type="text" id="certificate_zip" name="certificate_zip" value={form6Data.certificate_zip} onChange={handleChange} />
        </label>
        <label className="form-field">
          <div className="field-label">Type :</div>
          <div className="option-buttons reason-options">
            <div className={`centered-option${form6Data.type === 'ft' ? ' selected' : ''}`}>
              <input
                type="radio" id="ft" name="type" value="ft"
                checked={form6Data.type === 'ft'}
                onChange={() => handleOptionChange('type', 'ft')}
              />
              <label htmlFor="ft">ft</label>
            </div>
            <div className={`centered-option${form6Data.type === 'wt' ? ' selected' : ''}`}>
              <input
                type="radio" id="wt" name="type" value="wt"
                checked={form6Data.type === 'wt'}
                onChange={() => handleOptionChange('type', 'wt')}
              />
              <label htmlFor="wt">wt</label>
            </div>
          </div>
          <div className="option-buttons reason-options">
            <div className={`centered-option${form6Data.type === 'ci' ? ' selected' : ''}`}>
              <input
                type="radio" id="ci" name="type" value="ci"
                checked={form6Data.type === 'ci'}
                onChange={() => handleOptionChange('type', 'ci')}
              />
              <label htmlFor="ci">ci</label>
            </div>
            <div className={`centered-option${form6Data.type === 'other' ? ' selected' : ''}`}>
              <input
                type="radio" id="other" name="type" value="other"
                checked={form6Data.type === 'other'}
                onChange={() => handleOptionChange('type', 'other')}
              />
              <label htmlFor="other">other</label>
              <input type="text" id="other_text" name="other_text" value={form6Data.other_text} onChange={handleChange} />
            </div>
          </div>
        </label>
        <label>Year built
          <input type="text" id="year_built" name="year_built" value={form6Data.year_built} onChange={handleChange} />
        </label>
        <label>Manufacturer
          <input type="text" id="manufacturer" name="manufacturer" value={form6Data.manufacturer} onChange={handleChange} />
        </label>
        <label className="form-field">
        <div className="field-label">Use :</div>
        <div className="option-buttons reason-options">
          <div className={`centered-option${form6Data.use === 'power' ? ' selected' : ''}`}>
            <input
              type="radio" id="power" name="use" value="power"
              checked={form6Data.use === 'power'}
              onChange={() => handleOptionChange('use', 'power')}
            />
            <label htmlFor="power">power</label>
          </div>
          <div className={`centered-option${form6Data.use === 'process' ? ' selected' : ''}`}>
            <input
              type="radio" id="process" name="use" value="process"
              checked={form6Data.use === 'process'}
              onChange={() => handleOptionChange('use', 'process')}
            />
            <label htmlFor="process">process</label>
          </div>
        </div>
        <div className="option-buttons reason-options">
          <div className={`centered-option${form6Data.use === 'steam_htg' ? ' selected' : ''}`}>
            <input
              type="radio" id="steam_htg" name="use" value="steam_htg"
              checked={form6Data.use === 'steam_htg'}
              onChange={() => handleOptionChange('use', 'steam_htg')}
            />
            <label htmlFor="steam_htg">steam htg</label>
          </div>
          <div className={`centered-option${form6Data.use === 'hwh' ? ' selected' : ''}`}>
            <input
              type="radio" id="hwh" name="use" value="hwh"
              checked={form6Data.use === 'hwh'}
              onChange={() => handleOptionChange('use', 'hwh')}
            />
            <label htmlFor="hwh">hwh</label>
          </div>
          <div className={`centered-option${form6Data.use === 'hws' ? ' selected' : ''}`}>
            <input
              type="radio" id="hws" name="use" value="hws"
              checked={form6Data.use === 'hws'}
              onChange={() => handleOptionChange('use', 'hws')}
            />
            <label htmlFor="hws">hws</label>
          </div>
          <div className={`centered-option${form6Data.use === 'other' ? ' selected' : ''}`}>
            <input
              type="radio" id="other" name="use" value="other"
              checked={form6Data.use === 'other'}
              onChange={() => handleOptionChange('use', 'other')}
            />
            <label htmlFor="other">other</label>
            <input type="text" id="other_use_text" name="other_use_text" value={form6Data.other_use_text} onChange={handleChange} />
          </div>
        </div>
      </label>
      <label>Fuel
        <input type="text" id="fuel" name="fuel" value={form6Data.fuel} onChange={handleChange} />
      </label>
      <label>Method or firing
        <input type="text" id="method_firing" name="method_firing" value={form6Data.method_firing} onChange={handleChange} />
      </label>
      <label className="form-field">
      <div className="field-label">Pressure gage tested:</div>
      <div className="option-buttons reason-options">
        <div className={`centered-option${form6Data.pressure_gage === 'yes' ? ' selected' : ''}`}>
          <input
            type="radio" id="yes" name="pressure_gage" value="yes"
            checked={form6Data.pressure_gage === 'yes'}
            onChange={() => handleOptionChange('pressure_gage', 'yes')}
          />
          <label htmlFor="yes">yes</label>
        </div>
        <div className={`centered-option${form6Data.pressure_gage === 'no' ? ' selected' : ''}`}>
          <input
            type="radio" id="no" name="pressure_gage" value="no"
            checked={form6Data.pressure_gage === 'no'}
            onChange={() => handleOptionChange('pressure_gage', 'no')}
          />
          <label htmlFor="no">no</label>
        </div>
      </div>
    </label>
    <label>
      <p>Pressure allowed</p>
      mawp
      <input type="text" id="mawp" name="mawp" value={form6Data.mawp} onChange={handleChange} />
      this inspection
      <input type="text" id="this_inspection" name="this_inspection" value={form6Data.this_inspection} onChange={handleChange} />
      prev inspection
      <input type="text" id="prev_inspection" name="prev_inspection" value={form6Data.prev_inspection} onChange={handleChange} />
    </label>
    <label>
      <p>Safety-relief valves</p>
      Set at
      <input type="text" id="set_at" name="set_at" value={form6Data.set_at} onChange={handleChange} />
      Total capacity
      <input type="text" id="total_capacity" name="total_capacity" value={form6Data.total_capacity} onChange={handleChange} />
    </label>
    <label>Heating surface
      <input type="text" id="heating_surface" name="heating_surface" value={form6Data.heating_surface} onChange={handleChange} />
    </label>
    <label className="form-field">
    <div className="field-label">Is condition of object such that a certificate may be issued?</div>
    <div className="option-buttons reason-options">
      <div className={`centered-option${form6Data.condition_object === 'yes' ? ' selected' : ''}`}>
        <input
          type="radio" id="yes" name="condition_object" value="yes"
          checked={form6Data.condition_object === 'yes'}
          onChange={() => handleOptionChange('condition_object', 'yes')}
        />
        <label htmlFor="yes">yes</label>
      </div>
      <div className={`centered-option${form6Data.condition_object === 'no' ? ' selected' : ''}`}>
        <input
          type="radio" id="no" name="condition_object" value="no"
          checked={form6Data.condition_object === 'no'}
          onChange={() => handleOptionChange('condition_object', 'no')}
        />
        <label htmlFor="no">no (If no, explain fully under conditions)</label>
      </div>
    </div>
    </label>
    <label className="form-field">
    <div className="field-label">Pressure test: </div>
    <div className="option-buttons reason-options">
      <div className={`centered-option${form6Data.pressure_test === 'yes' ? ' selected' : ''}`}>
        <input
          type="radio" id="yes" name="pressure_test" value="yes"
          checked={form6Data.pressure_test === 'yes'}
          onChange={() => handleOptionChange('pressure_test', 'yes')}
        />
        <label htmlFor="yes">yes</label>
        <input type="text" id="yes_psi" name="yes_psi" value={form6Data.yes_psi} onChange={handleChange} />
        <label htmlFor="yes_psi">psi</label>
      </div>
      <label>Date
        <input type="text" id="date_test" name="date_test" value={form6Data.date_test} onChange={handleChange} />
      </label>
      <div className={`centered-option${form6Data.pressure_test === 'no' ? ' selected' : ''}`}>
        <input
          type="radio" id="no" name="pressure_test" value="no"
          checked={form6Data.pressure_test === 'no'}
          onChange={() => handleOptionChange('pressure_test', 'no')}
        />
        <label htmlFor="no">no</label>
      </div>
    </div>
    </label>
    <label>Conditions
      <input type="text" id="conditions" name="conditions" value={form6Data.conditions} onChange={handleChange} />
    </label>
    <label>Requirements: (List code violations)
      <input type="text" id="requirements" name="requirements" value={form6Data.requirements} onChange={handleChange} />
    </label>
    <label>Name and title of pperson to whom requirements were explained
      <input type="text" id="name_title_person" name="name_title_person" value={form6Data.name_title_person} onChange={handleChange} />
    </label>
    <label>I hereby certify this is a true report of my inspection
      <input type="text" id="signature_inspector" name="signature_inspector" value={form6Data.signature_inspector} onChange={handleChange} />
    </label>
    <label>Ident no:
      <input type="text" id="ident_inspec" name="ident_inspec" value={form6Data.ident_inspec} onChange={handleChange} /> 
    </label>
    <label>Employed by: 
      <input type="text" id="employed_by" name="employed_by" value={form6Data.employed_by} onChange={handleChange} />
    </label>
    <label>Ident no:
      <input type="text" id="ident_employed" name="ident_employed" value={form6Data.ident_employed} onChange={handleChange} />
    </label>
 </form>
);
};

const NB6 = () => {
  const navigate = useNavigate();
  
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <TopBar />
      <h1>Formulario NB 6</h1>
      <Formulario6 />
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

export default NB6;

