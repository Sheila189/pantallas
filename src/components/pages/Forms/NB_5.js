import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../../css/forms.css';
import TopBar from '../TopBar';

const NB5 = () => {
  const [form5Data, setFormData] = useState({
    month_inspected: '',
    day_inspected: '',
    year_inspected: '',
    month_cert: '',
    year_cert: '',
    certificate_posted: null,
    owner_no: '',
    jurisdiction_number: '',
    natl_bd_n: '',
    other_n: '',
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
    yeart_inst: '',
    new_object: null,
    use: null,
    other_use_text: '',
    fuel: '',
    method_firing: '',
    pressure_gage: null,
    this_inspection: '',
    prev_inspection: '',
    set_at: '',
    explaind_pressure: '',
    condition_object: null,
    pressure_test: null,
    yes_psi: '',
    date_test: '',
    shell_no: '',
    diameter_id: null,
    diameter: '',
    lenght_ft: '',
    lenght_in: '',
    thickness: '',
    total_htg: '',
    material_asme: '',
    allowable_stress: '',
    strap_thks: '',
    strap: null,
    header_thks: '',
    type_2: null,
    other_text_2: '',
    type_longitudinal: null,
    dia_hole: '',
    base: '',
    height: '',
    width: '',
    seam_eff: '',
    head_thickness: '',
    type_head: null,
    radius_dish: '',
    ellip_checkbox: '',
    bolting_no: '',
    bolting_dia: '',
    bolting_in: '',
    material: '',
    tube_sheet: '',
    tubes_no: '',
    tubes_dia: '',
    tubes_in: '',
    tubes_length_ft: '',
    tubes_length_in: '',
    pinch_wt_length: '',
    pinch_wt_height: '',
    ligament_eff: '',
    front: '',
    rear: '',
    front_above: '',
    front_below: '',
    rear_above: '',
    rear_below: '',
    above_front: '',
    above_rear: '',
    type_adove: null,
    adove_area_front: '',
    adove_area_rear: '',
    bellow_front: '',
    bellow_rear: '',
    type_bellow: null,
    bellow_area_front: '',
    bellow_area_rear: '',
    adamson_sect: '',
    type_furnace: null,
    furnace_other_text: '',
    furnace_thickness: '',
    total_length_ft: '',
    total_length_in: '',
    type_long_seam: null,
    type_staybolts: null,
    drilled: '',
    diameter_staybolts: '',
    staybolts_pitch: '',
    staybolts_pitch_in: '',
    net_area: '',
    valves_no: '',
    valves_size: '',
    capacity_cfm: '',
    capacity_lb: '',
    capacity_btu: '',
    outlets_no: '',
    outlets_size: '',
    properly_drained: null,
    on_steam_line: null,
    on_return_line: null,
    other_connections: null,
    steam_lines_properly_drained: null,
    feed_size: '',
    feed_no: '',
    type_drive: null,
    feed_line: null,
    return_line: null,
    water_no: '',
    cocks_no: '',
    blowoff_size: '',
    blowoff_location: '',
    inspection_openings: null,
    boilers_length: '',
    boilers_width: '',
    boilers_height: '',
    sections_no: '',
    welding_on_steam: null,
    all_material_other: null,
    name_title_person: '',
    signature_inspector: '',
    ident_inspec: '',
    employed_by: '',
    ident_employed: '',
    other_conditions: '',
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
        form5Data.month_inspected.trim() === '' ||
        form5Data.day_inspected.trim() === '' ||
        form5Data.year_inspected.trim() === '' ||
        form5Data.month_cert.trim() === '' ||
        form5Data.year_cert.trim() === '' ||
        form5Data.owner_no.trim() === '' ||
        form5Data.jurisdiction_number.trim() === '' ||
        form5Data.owner_name.trim() === '' ||
        form5Data.nature_business.trim() === '' ||
        form5Data.owner_address.trim() === '' ||
        form5Data.owner_city.trim() === '' ||
        form5Data.owner_state.trim() === '' ||
        form5Data.owner_zip.trim() === '' ||
        form5Data.user_name.trim() === '' ||
        form5Data.specific_location.trim() === '' ||
        form5Data.object_location.trim() === '' ||
        form5Data.user_address.trim() === '' ||
        form5Data.user_city.trim() === '' ||
        form5Data.user_state.trim() === '' ||
        form5Data.user_zip.trim() === '' ||
        form5Data.certificate_name.trim() === '' ||
        form5Data.certificate_company_contact.trim() === '' ||
        form5Data.email.trim() === '' ||
        form5Data.certificate_address.trim() === '' ||
        form5Data.certificate_city.trim() === '' ||
        form5Data.certificate_state.trim() === '' ||
        form5Data.certificate_zip.trim() === '' ||
        form5Data.year_built.trim() === '' ||
        form5Data.manufacturer.trim() === '' ||
        form5Data.fuel.trim() === '' ||
        form5Data.method_firing.trim() === '' ||
        form5Data.this_inspection.trim() === '' ||
        form5Data.prev_inspection.trim() === '' ||
        form5Data.set_at.trim() === '' ||
        form5Data.explaind_pressure.trim() === '' ||
        form5Data.yes_psi.trim() === '' ||
        form5Data.date_test.trim() === '' ||
        form5Data.shell_no.trim() === '' ||
        form5Data.diameter.trim() === '' ||
        form5Data.lenght_ft.trim() === '' ||
        form5Data.lenght_in.trim() === '' ||
        form5Data.thickness.trim() === '' ||
        form5Data.total_htg.trim() === '' ||
        form5Data.material_asme.trim() === '' ||
        form5Data.allowable_stress.trim() === '' ||
        form5Data.strap_thks.trim() === '' ||
        form5Data.header_thks.trim() === '' ||
        form5Data.other_text_2.trim() === '' ||
        form5Data.dia_hole.trim() === '' ||
        form5Data.base.trim() === '' ||
        form5Data.height.trim() === '' ||
        form5Data.width.trim() === '' ||
        form5Data.seam_eff.trim() === '' ||
        form5Data.head_thickness.trim() === '' ||
        form5Data.radius_dish.trim() === '' ||
        form5Data.ellip_checkbox.trim() === '' ||
        form5Data.bolting_no.trim() === '' ||
        form5Data.bolting_dia.trim() === '' ||
        form5Data.bolting_in.trim() === '' ||
        form5Data.material.trim() === '' ||
        form5Data.tube_sheet.trim() === '' ||
        form5Data.tubes_no.trim() === '' ||
        form5Data.tubes_dia.trim() === '' ||
        form5Data.tubes_in.trim() === '' ||
        form5Data.tubes_length_ft.trim() === '' ||
        form5Data.tubes_length_in.trim() === '' ||
        form5Data.pinch_wt_length.trim() === '' ||
        form5Data.pinch_wt_height.trim() === '' ||
        form5Data.ligament_eff.trim() === '' ||
        form5Data.front.trim() === '' ||
        form5Data.rear.trim() === '' ||
        form5Data.front_above.trim() === '' ||
        form5Data.front_below.trim() === '' ||
        form5Data.rear_above.trim() === '' ||
        form5Data.rear_below.trim() === '' ||
        form5Data.above_front.trim() === '' ||
        form5Data.above_rear.trim() === '' ||
        form5Data.adove_area_rear.trim() === '' ||
        form5Data.adove_area_front.trim() === '' ||
        form5Data.bellow_rear.trim() === '' ||
        form5Data.bellow_front.trim() === '' ||
        form5Data.bellow_area_front.trim() === '' ||
        form5Data.bellow_area_rear.trim() === '' ||
        form5Data.adamson_sect.trim() === '' ||
        form5Data.furnace_other_text.trim() === '' ||
        form5Data.furnace_thickness.trim() === '' ||
        form5Data.total_length_ft.trim() === '' ||
        form5Data.total_length_in.trim() === '' ||
        form5Data.drilled.trim() === '' ||
        form5Data.diameter_staybolts.trim() === '' ||
        form5Data.staybolts_pitch.trim() === '' ||
        form5Data.staybolts_pitch_in.trim() === '' ||
        form5Data.net_area.trim() === '' ||
        form5Data.valves_no.trim() === '' ||
        form5Data.valves_size.trim() === '' ||
        form5Data.capacity_cfm.trim() === '' ||
        form5Data.capacity_lb.trim() === '' ||
        form5Data.capacity_btu.trim() === '' ||
        form5Data.outlets_no.trim() === '' ||
        form5Data.outlets_size.trim() === '' ||
        form5Data.feed_size.trim() === '' ||
        form5Data.feed_no.trim() === '' ||
        form5Data.water_no.trim() === '' ||
        form5Data.cocks_no.trim() === '' ||
        form5Data.blowoff_size.trim() === '' ||
        form5Data.blowoff_location.trim() === '' ||
        form5Data.boilers_length.trim() === '' ||
        form5Data.boilers_width.trim() === '' ||
        form5Data.boilers_height.trim() === '' ||
        form5Data.sections_no.trim() === '' ||
        form5Data.name_title_person.trim() === '' ||
        form5Data.signature_inspector.trim() === '' ||
        form5Data.ident_inspec.trim() === '' ||
        form5Data.employed_by.trim() === '' ||
        form5Data.ident_employed.trim() === '' ||
        form5Data.other_conditions.trim() === '' 
      ) {
        // Mostrar mensaje de error o realizar alguna acción adicional
        console.log('Todos los campos obligatorios deben ser completados');
        return false;
      }
    
      return true;
    };

    const isValid = validateForm();

    if (isValid) {
      const form5Data = {
        month_inspected: '',
        day_inspected: '',
        year_inspected: '',
        month_cert: '',
        year_cert: '',
        certificate_posted: null,
        owner_no: '',
        jurisdiction_number: '',
        natl_bd_n: '',
        other_n: '',
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
        yeart_inst: '',
        new_object: null,
        use: null,
        other_use_text: '',
        fuel: '',
        method_firing: '',
        pressure_gage: null,
        this_inspection: '',
        prev_inspection: '',
        set_at: '',
        explaind_pressure: '',
        condition_object: null,
        pressure_test: null,
        yes_psi: '',
        date_test: '',
        shell_no: '',
        diameter_id: null,
        diameter: '',
        lenght_ft: '',
        lenght_in: '',
        thickness: '',
        total_htg: '',
        material_asme: '',
        allowable_stress: '',
        strap_thks: '',
        strap: null,
        header_thks: '',
        type_2: null,
        other_text_2: '',
        type_longitudinal: null,
        dia_hole: '',
        base: '',
        height: '',
        width: '',
        seam_eff: '',
        head_thickness: '',
        type_head: null,
        radius_dish: '',
        ellip_checkbox: '',
        bolting_no: '',
        bolting_dia: '',
        bolting_in: '',
        material: '',
        tube_sheet: '',
        tubes_no: '',
        tubes_dia: '',
        tubes_in: '',
        tubes_length_ft: '',
        tubes_length_in: '',
        pinch_wt_length: '',
        pinch_wt_height: '',
        ligament_eff: '',
        front: '',
        rear: '',
        front_above: '',
        front_below: '',
        rear_above: '',
        rear_below: '',
        above_front: '',
        above_rear: '',
        type_adove: null,
        adove_area_front: '',
        adove_area_rear: '',
        bellow_front: '',
        bellow_rear: '',
        type_bellow: null,
        bellow_area_front: '',
        bellow_area_rear: '',
        adamson_sect: '',
        type_furnace: null,
        furnace_other_text: '',
        furnace_thickness: '',
        total_length_ft: '',
        total_length_in: '',
        type_long_seam: null,
        type_staybolts: null,
        drilled: '',
        diameter_staybolts: '',
        staybolts_pitch: '',
        staybolts_pitch_in: '',
        net_area: '',
        valves_no: '',
        valves_size: '',
        capacity_cfm: '',
        capacity_lb: '',
        capacity_btu: '',
        outlets_no: '',
        outlets_size: '',
        properly_drained: null,
        on_steam_line: null,
        on_return_line: null,
        other_connections: null,
        steam_lines_properly_drained: null,
        feed_size: '',
        feed_no: '',
        type_drive: null,
        feed_line: null,
        return_line: null,
        water_no: '',
        cocks_no: '',
        blowoff_size: '',
        blowoff_location: '',
        inspection_openings: null,
        boilers_length: '',
        boilers_width: '',
        boilers_height: '',
        sections_no: '',
        welding_on_steam: null,
        all_material_other: null,
        name_title_person: '',
        signature_inspector: '',
        ident_inspec: '',
        employed_by: '',
        ident_employed: '',
      };

      setFormData(form5Data);

      // Enviar datos de la persona al endpoint /api/persons
      fetch('http://localhost:3000/api/form/nb5', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form5Data),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Registro de formulario nb-5 exitoso:', data);
        })
        .catch(error => {
          console.error('Error al registrar formulario nb-5:', error);
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
    <div className='nowrap'>FORM NB-5 BOILER OR PRESSURE VESSEL DATA REPORT</div>
      <br />
      <div className='nowrap'>FIRST INTERNAL INSPECTION</div>
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
              <input type="text" id="month_inspected" name="month_inspected" value={form5Data.month_inspected} onChange={handleChange} />
              DAY|
              <input type="text" id="day_inspected" name="day_inspected" value={form5Data.day_inspected} onChange={handleChange} />
              YEAR
              <input type="text" id="year_inspected" name="year_inspected" value={form5Data.year_inspected} onChange={handleChange} />
            </div>
          </td>
          <td>
            <div>
              <p className='nowrap'>CERT EXP DATE</p>
              MO|
              <input type="text" id="month_cert" name="month_cert" value={form5Data.month_cert} onChange={handleChange} />
              YEAR
              <input type="text" id="year_cert" name="year_cert" value={form5Data.year_cert} onChange={handleChange} />
            </div>
          </td>
          <td>
            <div className="form-field">
              <div className="nowrap">CERTIFICATE POSTED</div>
              <div className="option-buttons reason-options">
                <div className={`centered-option${form5Data.certificate_inspection === 'yes' ? ' selected' : ''}`}>
                  <input
                    type="checkbox" id="yes" name="certificate_inspection" value="yes"
                    checked={form5Data.certificate_inspection === 'yes'}
                    onChange={() => handleOptionChange('certificate_inspection', 'yes')}
                  />
                  <div htmlFor="yes">YES</div>
                </div>
                <div className={`centered-option${form5Data.certificate_inspection === 'no' ? ' selected' : ''}`}>
                  <input
                    type="checkbox" id="no" name="certificate_inspection" value="no"
                    checked={form5Data.certificate_inspection === 'no'}
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
              <input type="text" id="owner_n" name="owner_n" value={form5Data.owner_n} onChange={handleChange} />
            </div>
          </td>
          <td>
          <p className='nowrap'>JURISDICTION NUMBER</p>
            <div>
            <input type="text" id="jurisdiction_number" name="jurisdiction_number" value={form5Data.jurisdiction_number} onChange={handleChange} />
            </div>
          </td>
          <td>
          <div>
          <p className='nowrap'>NAT’L BD NO.</p>
            <input type="checkbox" id="natl_bd_n" name="natl_bd_n" value="natl_bd_n"
                  checked={form5Data.natl_bd_n === 'natl_bd_n'}
                  onChange={() => handleOptionChange('natl_bd_n', 'natl_bd_n')}
                />
          </div>
          </td>
          <td>
          <div>
          <p className='nowrap'>OTHER NO.</p>
            <input type="checkbox" id="other_n" name="other_n" value="other_n"
                  checked={form5Data.other_n === 'other_n'}
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
                <input type="text" id="owner_name" name="owner_name" value={form5Data.owner_name} onChange={handleChange} />
              </div>
            </td>
            <td>
              <div>
              <p className='nowrap'>NATURE OF BUSINESS</p>
                <input type="text" id="nature_business" name="nature_business" value={form5Data.nature_business} onChange={handleChange} />
              </div>
            </td>
            <td>
              <div className="form-field">
                <div className="nowrap">KIND OF INSPECTION</div>
                <div className="option-buttons reason-options">
                  <div className={`centered-option${form5Data.inspection === 'internal' ? ' selected' : ''}`}>
                    <input
                      type="checkbox" id="internal" name="inspection" value="internal"
                      checked={form5Data.inspection === 'internal'}
                      onChange={() => handleOptionChange('inspection', 'internal')}
                    />
                    <div htmlFor="internal">INT</div>
                  </div>
                  <div className={`centered-option${form5Data.inspection === 'external' ? ' selected' : ''}`}>
                    <input
                      type="checkbox" id="external" name="inspection" value="external"
                      checked={form5Data.inspection === 'external'}
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
                  <div className={`centered-option${form5Data.certificate_inspection === 'yes' ? ' selected' : ''}`}>
                    <input
                      type="checkbox" id="yes" name="certificate_inspection" value="yes"
                      checked={form5Data.certificate_inspection === 'yes'}
                      onChange={() => handleOptionChange('certificate_inspection', 'yes')}
                    />
                    <div htmlFor="yes">YES</div>
                  </div>
                  <div className={`centered-option${form5Data.certificate_inspection === 'no' ? ' selected' : ''}`}>
                    <input
                      type="checkbox" id="no" name="certificate_inspection" value="no"
                      checked={form5Data.certificate_inspection === 'no'}
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
                <input type="text" id="owner_address" name="owner_address" value={form5Data.owner_address} onChange={handleChange} />
                NUMBER
              </div>
            </td>
            <td>
            <p className='nowrap'>OWNER’S CITY</p>
              <div>
                <input type="text" id="owner_city" name="owner_city" value={form5Data.owner_city} onChange={handleChange} />
              </div>
            </td>
            <td>
            <p className='nowrap'>STATE</p>
              <div>
                <input type="text" id="state" name="state" value={form5Data.owner_state} onChange={handleChange} />
              </div>
            </td>
            <td>
            <p className='nowrap'>ZIP</p>
              <div>
                <input type="text" id="zip" name="zip" value={form5Data.owner_zip} onChange={handleChange} />
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
                <input type="text" id="user_name" name="user_name" value={form5Data.user_name} onChange={handleChange} />
              </div>
            </td>
            <td>
              <div>
              <p className='nowrap'>SPECIFIC LOCATION IN PLANT</p>
                <input type="text" id="object_location" name="object_location" value={form5Data.object_location} onChange={handleChange} />
              </div>
            </td>
            <td colSpan="2">
              <div>
              <p className='nowrap'>OBJECT LOCATION - COUNTY</p>
                <input type="text" id="state" name="state" value={form5Data.state} onChange={handleChange} />
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan="4">
              <div>
              <p className='nowrap'>USER’S STREET ADDRESS</p>
                <input type="text" id="user_address" name="user_address" value={form5Data.user_address} onChange={handleChange} />
                NUMBER
              </div>
            </td>
            <td>
              <div>
              <p className='nowrap'>USER'S CITY</p>
                <input type="text" id="owner_city" name="owner_city" value={form5Data.user_city} onChange={handleChange} />
              </div>
            </td>
            <td>
              <div>
              <p className='nowrap'>STATE</p>
                <input type="text" id="state" name="state" value={form5Data.user_state} onChange={handleChange} />
              </div>
            </td>
            <td>
              <div>
              <p className='nowrap'>ZIP</p>
                <input type="text" id="zip" name="zip" value={form5Data.user_zip} onChange={handleChange} />
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
                <input type="text" id="certificate_name" name="certificate_name" value={form5Data.certificate_name} onChange={handleChange} />
              </div>
            </td>
            <td>
              <div>
              <p className='nowrap'>CERTIFICATE COMPANY CONTACT NAME</p>
                <input type="text" id="certificate_company_contact" name="certificate_company_contact" value={form5Data.certificate_company_contact} onChange={handleChange} />
              </div>
            </td>
            <td colSpan="2">
              <div>
              <p className='nowrap'>EMAIL</p>
                <input type="text" id="email" name="email" value={form5Data.email} onChange={handleChange} />
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan="4">
              <div>
              <p className='nowrap'>CERTIFICATE COMPANY ADDRESS</p>
                <input type="text" id="certificate_address" name="certificate_address" value={form5Data.certificate_address} onChange={handleChange} />
              </div>
            </td>
            <td>
              <div>
              <p className='nowrap'>CERTIFICATE COMPANY CITY</p>
                <input type="text" id="certificate_city" name="certificate_city" value={form5Data.certificate_city} onChange={handleChange} />
              </div>
            </td>
            <td>
              <div>
              <p className='nowrap'>STATE</p>
                <input type="text" id="certificate_state" name="certificate_state" value={form5Data.certificate_state} onChange={handleChange} />
              </div>
            </td>
            <td>
              <div>
              <p className='nowrap'>ZIP</p>
                <input type="text" id="certificate_zip" name="certificate_zip" value={form5Data.certificate_zip} onChange={handleChange} />
              </div>
            </td>
            </tr>
      </tr>
        <div className="form-field">
          <div className="field-div">Type :</div>
          <div className="option-buttons reason-options">
            <div className={`centered-option${form5Data.type === 'ft' ? ' selected' : ''}`}>
              <input
                type="checkbox" id="ft" name="type" value="ft"
                checked={form5Data.type === 'ft'}
                onChange={() => handleOptionChange('type', 'ft')}
              />
              <div htmlFor="ft">ft</div>
            </div>
            <div className={`centered-option${form5Data.type === 'wt' ? ' selected' : ''}`}>
              <input
                type="checkbox" id="wt" name="type" value="wt"
                checked={form5Data.type === 'wt'}
                onChange={() => handleOptionChange('type', 'wt')}
              />
              <div htmlFor="wt">wt</div>
            </div>
          </div>
          <div className="option-buttons reason-options">
            <div className={`centered-option${form5Data.type === 'ci' ? ' selected' : ''}`}>
              <input
                type="checkbox" id="ci" name="type" value="ci"
                checked={form5Data.type === 'ci'}
                onChange={() => handleOptionChange('type', 'ci')}
              />
              <div htmlFor="ci">ci</div>
            </div>
            <div className={`centered-option${form5Data.type === 'other' ? ' selected' : ''}`}>
              <input
                type="checkbox" id="other" name="type" value="other"
                checked={form5Data.type === 'other'}
                onChange={() => handleOptionChange('type', 'other')}
              />
              <div htmlFor="other">other</div>
              <input type="text" id="other_text" name="other_text" value={form5Data.other_text} onChange={handleChange} />
            </div>
          </div>
        </div>
        <div>Year built
          <input type="text" id="year_built" name="year_built" value={form5Data.year_built} onChange={handleChange} />
        </div>
        <div>Manufacturer
          <input type="text" id="manufacturer" name="manufacturer" value={form5Data.manufacturer} onChange={handleChange} />
        </div>
        <div className="form-field">
        <div className="field-div">Use :</div>
        <div className="option-buttons reason-options">
          <div className={`centered-option${form5Data.use === 'power' ? ' selected' : ''}`}>
            <input
              type="checkbox" id="power" name="use" value="power"
              checked={form5Data.use === 'power'}
              onChange={() => handleOptionChange('use', 'power')}
            />
            <div htmlFor="power">power</div>
          </div>
          <div className={`centered-option${form5Data.use === 'process' ? ' selected' : ''}`}>
            <input
              type="checkbox" id="process" name="use" value="process"
              checked={form5Data.use === 'process'}
              onChange={() => handleOptionChange('use', 'process')}
            />
            <div htmlFor="process">process</div>
          </div>
        </div>
        <div className="option-buttons reason-options">
          <div className={`centered-option${form5Data.use === 'steam_htg' ? ' selected' : ''}`}>
            <input
              type="checkbox" id="steam_htg" name="use" value="steam_htg"
              checked={form5Data.use === 'steam_htg'}
              onChange={() => handleOptionChange('use', 'steam_htg')}
            />
            <div htmlFor="steam_htg">steam htg</div>
          </div>
          <div className={`centered-option${form5Data.use === 'hwh' ? ' selected' : ''}`}>
            <input
              type="checkbox" id="hwh" name="use" value="hwh"
              checked={form5Data.use === 'hwh'}
              onChange={() => handleOptionChange('use', 'hwh')}
            />
            <div htmlFor="hwh">hwh</div>
          </div>
          <div className={`centered-option${form5Data.use === 'hws' ? ' selected' : ''}`}>
            <input
              type="checkbox" id="hws" name="use" value="hws"
              checked={form5Data.use === 'hws'}
              onChange={() => handleOptionChange('use', 'hws')}
            />
            <div htmlFor="hws">hws</div>
          </div>
          <div className={`centered-option${form5Data.use === 'other' ? ' selected' : ''}`}>
            <input
              type="checkbox" id="other" name="use" value="other"
              checked={form5Data.use === 'other'}
              onChange={() => handleOptionChange('use', 'other')}
            />
            <div htmlFor="other">other</div>
            <input type="text" id="other_use_text" name="other_use_text" value={form5Data.other_use_text} onChange={handleChange} />
          </div>
        </div>
      </div>
      <div>Fuel
        <input type="text" id="fuel" name="fuel" value={form5Data.fuel} onChange={handleChange} />
      </div>
      <div>Method or firing
        <input type="text" id="method_firing" name="method_firing" value={form5Data.method_firing} onChange={handleChange} />
      </div>
      <div className="form-field">
      <div className="field-div">Pressure gage tested:</div>
      <div className="option-buttons reason-options">
        <div className={`centered-option${form5Data.pressure_gage === 'yes' ? ' selected' : ''}`}>
          <input
            type="checkbox" id="yes" name="pressure_gage" value="yes"
            checked={form5Data.pressure_gage === 'yes'}
            onChange={() => handleOptionChange('pressure_gage', 'yes')}
          />
          <div htmlFor="yes">yes</div>
        </div>
        <div className={`centered-option${form5Data.pressure_gage === 'no' ? ' selected' : ''}`}>
          <input
            type="checkbox" id="no" name="pressure_gage" value="no"
            checked={form5Data.pressure_gage === 'no'}
            onChange={() => handleOptionChange('pressure_gage', 'no')}
          />
          <div htmlFor="no">no</div>
        </div>
      </div>
    </div>
    <div>
      <p>Pressure allowed</p>
      mawp
      <input type="text" id="mawp" name="mawp" value={form5Data.mawp} onChange={handleChange} />
      this inspection
      <input type="text" id="this_inspection" name="this_inspection" value={form5Data.this_inspection} onChange={handleChange} />
      prev inspection
      <input type="text" id="prev_inspection" name="prev_inspection" value={form5Data.prev_inspection} onChange={handleChange} />
    </div>
    <div>
      <p>Safety-relief valves</p>
      Set at
      <input type="text" id="set_at" name="set_at" value={form5Data.set_at} onChange={handleChange} />
      explaind_pressure
      <input type="text" id="explaind_pressure" name="explaind_pressure" value={form5Data.explaind_pressure} onChange={handleChange} />
    </div>
    <div className="form-field">
    <div className="field-div">Is condition of object such that a certificate may be issued?</div>
    <div className="option-buttons reason-options">
      <div className={`centered-option${form5Data.condition_object === 'yes' ? ' selected' : ''}`}>
        <input
          type="checkbox" id="yes" name="condition_object" value="yes"
          checked={form5Data.condition_object === 'yes'}
          onChange={() => handleOptionChange('condition_object', 'yes')}
        />
        <div htmlFor="yes">yes</div>
      </div>
      <div className={`centered-option${form5Data.condition_object === 'no' ? ' selected' : ''}`}>
        <input
          type="checkbox" id="no" name="condition_object" value="no"
          checked={form5Data.condition_object === 'no'}
          onChange={() => handleOptionChange('condition_object', 'no')}
        />
        <div htmlFor="no">no (If no, explain fully under conditions)</div>
      </div>
    </div>
    </div>
    <div className="form-field">
    <div className="field-div">Pressure test: </div>
    <div className="option-buttons reason-options">
      <div className={`centered-option${form5Data.pressure_test === 'yes' ? ' selected' : ''}`}>
        <input
          type="checkbox" id="yes" name="pressure_test" value="yes"
          checked={form5Data.pressure_test === 'yes'}
          onChange={() => handleOptionChange('pressure_test', 'yes')}
        />
        <div htmlFor="yes">yes</div>
        <input type="text" id="yes_psi" name="yes_psi" value={form5Data.yes_psi} onChange={handleChange} />
        <div htmlFor="yes_psi">psi</div>
      </div>
      <div>Date
        <input type="text" id="date_test" name="date_test" value={form5Data.date_test} onChange={handleChange} />
      </div>
      <div className={`centered-option${form5Data.pressure_test === 'no' ? ' selected' : ''}`}>
        <input
          type="checkbox" id="no" name="pressure_test" value="no"
          checked={form5Data.pressure_test === 'no'}
          onChange={() => handleOptionChange('pressure_test', 'no')}
        />
        <div htmlFor="no">no</div>
      </div>
    </div>
    </div>
        <tr>
          <td className='numero'>23</td>
          <tr>
            <td colSpan="7">
              <div>
              <p className='nowrap'>NAME AND TITLE OF PERSON TO WHOM REQUIREMENTS WERE EXPLAINED:</p>
                <input type="text" id="name_title_person" name="name_title_person" value={form5Data.name_title_person} onChange={handleChange} />
              </div>
            </td>
          </tr>
        </tr>
        <tr>
          <td className='numero'>24</td>
          <tr>
            <td>
              <div>
                <p className='nowrap'>I HEREBY CERTIFY THIS IS A TRUE REPORT OF MY INSPECTION</p>
                <input type="text" id="signature_inspector" name="signature_inspector" value={form5Data.signature_inspector} onChange={handleChange} />
                SIGNATURE OF INSPECTOR
              </div>
            </td>
            <td>
              <div>IDENT NO.
                <input type="text" id="ident_inspec" name="ident_inspec" value={form5Data.ident_inspec} onChange={handleChange} /> 
              </div>
            </td>
            <td>
              <div>EMPLOYED BY
                <input type="text" id="employed_by" name="employed_by" value={form5Data.employed_by} onChange={handleChange} />
              </div>
            </td>
            <td>
              <div>IDENT NO.
                <input type="text" id="ident_employed" name="ident_employed" value={form5Data.ident_employed} onChange={handleChange} />
              </div>
            </td>
          </tr>
        </tr>
    {/* Contenido de la segunda página */}
    <tr>
      <td>OTHER CONDITIONS AND REQUIREMENTS</td>
    </tr>
    <tr>
      <td><input type="text" id="other_conditions" name="other_conditions" value={form5Data.other_conditions} onChange={handleChange} /></td>
    </tr>
    <tr>
      <td colSpan="5">
        <div class="custom-box">
          <p>CODE STAMPING</p>
          <p/>
          <p/>
          <p/>
        </div>
      </td>
      (BACK)
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


export default NB5;

