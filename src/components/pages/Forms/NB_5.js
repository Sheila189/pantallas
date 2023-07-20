import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../../css/forms.css';
import TopBar from '../TopBar';

const Formulario5 = () => {
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
    ellip_radio: '',
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
        form5Data.ellip_radio.trim() === '' ||
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
        form5Data.ident_employed.trim() === ''
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
        ellip_radio: '',
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

  return (
    <form className="formulario" onSubmit={handleSubmit}>
          <label>
            <p>Date inspected</p>
            month
            <input type="text" id="month_inspected" name="month_inspected" value={form5Data.month_inspected} onChange={handleChange} />
            day
            <input type="text" id="day_inspected" name="day_inspected" value={form5Data.day_inspected} onChange={handleChange} />
            year
            <input type="text" id="year_inspected" name="year_inspected" value={form5Data.year_inspected} onChange={handleChange} />
          </label>
          <label>
            <p>Cert exp date</p>
            month
            <input type="text" id="month_cert" name="month_cert" value={form5Data.month_cert} onChange={handleChange} />
            year
            <input type="text" id="year_cert" name="year_cert" value={form5Data.year_cert} onChange={handleChange} />
          </label>
          <label className="form-field">
            <div className="field-label">Certificate posted:</div>
            <div className="option-buttons reason-options">
              <div className={`centered-option${form5Data.certificate_inspection === 'yes' ? ' selected' : ''}`}>
                <input
                  type="radio" id="yes" name="certificate_inspection" value="yes"
                  checked={form5Data.certificate_inspection === 'yes'}
                  onChange={() => handleOptionChange('certificate_inspection', 'yes')}
                />
                <label htmlFor="yes">yes</label>
              </div>
              <div className={`centered-option${form5Data.certificate_inspection === 'no' ? ' selected' : ''}`}>
                <input
                  type="radio" id="no" name="certificate_inspection" value="no"
                  checked={form5Data.certificate_inspection === 'no'}
                  onChange={() => handleOptionChange('certificate_inspection', 'no')}
                />
                <label htmlFor="no">no</label>
              </div>
            </div>
          </label>
          <label>Owner No.
            <input type="text" id="owner_n" name="owner_n" value={form5Data.owner_n} onChange={handleChange} />
          </label>
          <label>Jurisdiction number.
            <input type="text" id="jurisdiction_number" name="jurisdiction_number" value={form5Data.jurisdiction_number} onChange={handleChange} />
          </label>
          <label>
            natl bd no.
            <input type="radio" id="natl_bd_n" name="natl_bd_n" value="natl_bd_n"
                  checked={form5Data.natl_bd_n === 'natl_bd_n'}
                  onChange={() => handleOptionChange('natl_bd_n', 'natl_bd_n')}
                />
          </label>
          <label>
            other no.
            <input type="radio" id="other_n" name="other_n" value="other_n"
                  checked={form5Data.other_n === 'other_n'}
                  onChange={() => handleOptionChange('other_n', 'other_n')}
                />
          </label>
          <label>Owner
            <input type="text" id="owner_name" name="owner_name" value={form5Data.owner_name} onChange={handleChange} />
          </label>
          <label>Nature business
            <input type="text" id="nature_business" name="nature_business" value={form5Data.nature_business} onChange={handleChange} />
          </label>
          <label className="form-field">
            <div className="field-label">kind of inspection :</div>
            <div className="option-buttons reason-options">
              <div className={`centered-option${form5Data.inspection === 'internal' ? ' selected' : ''}`}>
                <input
                  type="radio" id="internal" name="inspection" value="internal"
                  checked={form5Data.inspection === 'internal'}
                  onChange={() => handleOptionChange('inspection', 'internal')}
                />
                <label htmlFor="internal">internal</label>
              </div>
              <div className={`centered-option${form5Data.inspection === 'external' ? ' selected' : ''}`}>
                <input
                  type="radio" id="external" name="inspection" value="external"
                  checked={form5Data.inspection === 'external'}
                  onChange={() => handleOptionChange('inspection', 'external')}
                />
                <label htmlFor="external">external</label>
              </div>
            </div>
          </label>
          <label className="form-field">
            <div className="field-label">Certificate inspection :</div>
            <div className="option-buttons reason-options">
              <div className={`centered-option${form5Data.certificate_inspection === 'yes' ? ' selected' : ''}`}>
                <input
                  type="radio" id="yes" name="certificate_inspection" value="yes"
                  checked={form5Data.certificate_inspection === 'yes'}
                  onChange={() => handleOptionChange('certificate_inspection', 'yes')}
                />
                <label htmlFor="yes">yes</label>
              </div>
              <div className={`centered-option${form5Data.certificate_inspection === 'no' ? ' selected' : ''}`}>
                <input
                  type="radio" id="no" name="certificate_inspection" value="no"
                  checked={form5Data.certificate_inspection === 'no'}
                  onChange={() => handleOptionChange('certificate_inspection', 'no')}
                />
                <label htmlFor="no">no</label>
              </div>
            </div>
          </label>
        <label>Owner's street address
          <input type="text" id="owner_address" name="owner_address" value={form5Data.owner_address} onChange={handleChange} />
        </label>
        <label>Owner's city
          <input type="text" id="owner_city" name="owner_city" value={form5Data.owner_city} onChange={handleChange} />
        </label>
        <label>state
          <input type="text" id="state" name="state" value={form5Data.state} onChange={handleChange} />
        </label>
        <label>zip
          <input type="text" id="zip" name="zip" value={form5Data.zip} onChange={handleChange} />
        </label>
        <label>user's name - object location
          <input type="text" id="user_name" name="user_name" value={form5Data.user_name} onChange={handleChange} />
        </label>
        <label>Specific location in plant
          <input type="text" id="object_location" name="object_location" value={form5Data.object_location} onChange={handleChange} />
        </label>
        <label>Object location - country
          <input type="text" id="state" name="state" value={form5Data.state} onChange={handleChange} />
        </label>
        <label>User's street address
          <input type="text" id="user_address" name="user_address" value={form5Data.user_address} onChange={handleChange} />
        </label>
        <label>Owner's city
          <input type="text" id="owner_city" name="owner_city" value={form5Data.owner_city} onChange={handleChange} />
        </label>
        <label>state
          <input type="text" id="state" name="state" value={form5Data.state} onChange={handleChange} />
        </label>
        <label>zip
          <input type="text" id="zip" name="zip" value={form5Data.zip} onChange={handleChange} />
        </label>
        <label>Certificate company name
          <input type="text" id="certificate_name" name="certificate_name" value={form5Data.certificate_name} onChange={handleChange} />
        </label>
        <label>Certificate company contact name
          <input type="text" id="certificate_company_contac" name="certificate_company_contac" value={form5Data.certificate_company_contac} onChange={handleChange} />
        </label>
        <label>email
          <input type="text" id="email" name="email" value={form5Data.email} onChange={handleChange} />
        </label>
        <label>Certificate company address
          <input type="text" id="certificate_address" name="certificate_address" value={form5Data.certificate_address} onChange={handleChange} />
        </label>
        <label>Certificate company city
          <input type="text" id="certificate_city" name="certificate_city" value={form5Data.certificate_city} onChange={handleChange} />
        </label>
        <label>state
          <input type="text" id="certificate_state" name="certificate_state" value={form5Data.certificate_state} onChange={handleChange} />
        </label>
        <label>zip
          <input type="text" id="certificate_zip" name="certificate_zip" value={form5Data.certificate_zip} onChange={handleChange} />
        </label>
        <label className="form-field">
          <div className="field-label">Type :</div>
          <div className="option-buttons reason-options">
            <div className={`centered-option${form5Data.type === 'ft' ? ' selected' : ''}`}>
              <input
                type="radio" id="ft" name="type" value="ft"
                checked={form5Data.type === 'ft'}
                onChange={() => handleOptionChange('type', 'ft')}
              />
              <label htmlFor="ft">ft</label>
            </div>
            <div className={`centered-option${form5Data.type === 'wt' ? ' selected' : ''}`}>
              <input
                type="radio" id="wt" name="type" value="wt"
                checked={form5Data.type === 'wt'}
                onChange={() => handleOptionChange('type', 'wt')}
              />
              <label htmlFor="wt">wt</label>
            </div>
          </div>
          <div className="option-buttons reason-options">
            <div className={`centered-option${form5Data.type === 'ci' ? ' selected' : ''}`}>
              <input
                type="radio" id="ci" name="type" value="ci"
                checked={form5Data.type === 'ci'}
                onChange={() => handleOptionChange('type', 'ci')}
              />
              <label htmlFor="ci">ci</label>
            </div>
            <div className={`centered-option${form5Data.type === 'other' ? ' selected' : ''}`}>
              <input
                type="radio" id="other" name="type" value="other"
                checked={form5Data.type === 'other'}
                onChange={() => handleOptionChange('type', 'other')}
              />
              <label htmlFor="other">other</label>
              <input type="text" id="other_text" name="other_text" value={form5Data.other_text} onChange={handleChange} />
            </div>
          </div>
        </label>
        <label>Year built
          <input type="text" id="year_built" name="year_built" value={form5Data.year_built} onChange={handleChange} />
        </label>
        <label>Manufacturer
          <input type="text" id="manufacturer" name="manufacturer" value={form5Data.manufacturer} onChange={handleChange} />
        </label>
        <label className="form-field">
        <div className="field-label">Use :</div>
        <div className="option-buttons reason-options">
          <div className={`centered-option${form5Data.use === 'power' ? ' selected' : ''}`}>
            <input
              type="radio" id="power" name="use" value="power"
              checked={form5Data.use === 'power'}
              onChange={() => handleOptionChange('use', 'power')}
            />
            <label htmlFor="power">power</label>
          </div>
          <div className={`centered-option${form5Data.use === 'process' ? ' selected' : ''}`}>
            <input
              type="radio" id="process" name="use" value="process"
              checked={form5Data.use === 'process'}
              onChange={() => handleOptionChange('use', 'process')}
            />
            <label htmlFor="process">process</label>
          </div>
        </div>
        <div className="option-buttons reason-options">
          <div className={`centered-option${form5Data.use === 'steam_htg' ? ' selected' : ''}`}>
            <input
              type="radio" id="steam_htg" name="use" value="steam_htg"
              checked={form5Data.use === 'steam_htg'}
              onChange={() => handleOptionChange('use', 'steam_htg')}
            />
            <label htmlFor="steam_htg">steam htg</label>
          </div>
          <div className={`centered-option${form5Data.use === 'hwh' ? ' selected' : ''}`}>
            <input
              type="radio" id="hwh" name="use" value="hwh"
              checked={form5Data.use === 'hwh'}
              onChange={() => handleOptionChange('use', 'hwh')}
            />
            <label htmlFor="hwh">hwh</label>
          </div>
          <div className={`centered-option${form5Data.use === 'hws' ? ' selected' : ''}`}>
            <input
              type="radio" id="hws" name="use" value="hws"
              checked={form5Data.use === 'hws'}
              onChange={() => handleOptionChange('use', 'hws')}
            />
            <label htmlFor="hws">hws</label>
          </div>
          <div className={`centered-option${form5Data.use === 'other' ? ' selected' : ''}`}>
            <input
              type="radio" id="other" name="use" value="other"
              checked={form5Data.use === 'other'}
              onChange={() => handleOptionChange('use', 'other')}
            />
            <label htmlFor="other">other</label>
            <input type="text" id="other_use_text" name="other_use_text" value={form5Data.other_use_text} onChange={handleChange} />
          </div>
        </div>
      </label>
      <label>Fuel
        <input type="text" id="fuel" name="fuel" value={form5Data.fuel} onChange={handleChange} />
      </label>
      <label>Method or firing
        <input type="text" id="method_firing" name="method_firing" value={form5Data.method_firing} onChange={handleChange} />
      </label>
      <label className="form-field">
      <div className="field-label">Pressure gage tested:</div>
      <div className="option-buttons reason-options">
        <div className={`centered-option${form5Data.pressure_gage === 'yes' ? ' selected' : ''}`}>
          <input
            type="radio" id="yes" name="pressure_gage" value="yes"
            checked={form5Data.pressure_gage === 'yes'}
            onChange={() => handleOptionChange('pressure_gage', 'yes')}
          />
          <label htmlFor="yes">yes</label>
        </div>
        <div className={`centered-option${form5Data.pressure_gage === 'no' ? ' selected' : ''}`}>
          <input
            type="radio" id="no" name="pressure_gage" value="no"
            checked={form5Data.pressure_gage === 'no'}
            onChange={() => handleOptionChange('pressure_gage', 'no')}
          />
          <label htmlFor="no">no</label>
        </div>
      </div>
    </label>
    <label>
      <p>Pressure allowed</p>
      mawp
      <input type="text" id="mawp" name="mawp" value={form5Data.mawp} onChange={handleChange} />
      this inspection
      <input type="text" id="this_inspection" name="this_inspection" value={form5Data.this_inspection} onChange={handleChange} />
      prev inspection
      <input type="text" id="prev_inspection" name="prev_inspection" value={form5Data.prev_inspection} onChange={handleChange} />
    </label>
    <label>
      <p>Safety-relief valves</p>
      Set at
      <input type="text" id="set_at" name="set_at" value={form5Data.set_at} onChange={handleChange} />
      explaind_pressure
      <input type="text" id="explaind_pressure" name="explaind_pressure" value={form5Data.explaind_pressure} onChange={handleChange} />
    </label>
    <label className="form-field">
    <div className="field-label">Is condition of object such that a certificate may be issued?</div>
    <div className="option-buttons reason-options">
      <div className={`centered-option${form5Data.condition_object === 'yes' ? ' selected' : ''}`}>
        <input
          type="radio" id="yes" name="condition_object" value="yes"
          checked={form5Data.condition_object === 'yes'}
          onChange={() => handleOptionChange('condition_object', 'yes')}
        />
        <label htmlFor="yes">yes</label>
      </div>
      <div className={`centered-option${form5Data.condition_object === 'no' ? ' selected' : ''}`}>
        <input
          type="radio" id="no" name="condition_object" value="no"
          checked={form5Data.condition_object === 'no'}
          onChange={() => handleOptionChange('condition_object', 'no')}
        />
        <label htmlFor="no">no (If no, explain fully under conditions)</label>
      </div>
    </div>
    </label>
    <label className="form-field">
    <div className="field-label">Pressure test: </div>
    <div className="option-buttons reason-options">
      <div className={`centered-option${form5Data.pressure_test === 'yes' ? ' selected' : ''}`}>
        <input
          type="radio" id="yes" name="pressure_test" value="yes"
          checked={form5Data.pressure_test === 'yes'}
          onChange={() => handleOptionChange('pressure_test', 'yes')}
        />
        <label htmlFor="yes">yes</label>
        <input type="text" id="yes_psi" name="yes_psi" value={form5Data.yes_psi} onChange={handleChange} />
        <label htmlFor="yes_psi">psi</label>
      </div>
      <label>Date
        <input type="text" id="date_test" name="date_test" value={form5Data.date_test} onChange={handleChange} />
      </label>
      <div className={`centered-option${form5Data.pressure_test === 'no' ? ' selected' : ''}`}>
        <input
          type="radio" id="no" name="pressure_test" value="no"
          checked={form5Data.pressure_test === 'no'}
          onChange={() => handleOptionChange('pressure_test', 'no')}
        />
        <label htmlFor="no">no</label>
      </div>
    </div>
    </label>
    <label>Name and title of pperson to whom requirements were explained
      <input type="text" id="name_title_person" name="name_title_person" value={form5Data.name_title_person} onChange={handleChange} />
    </label>
    <label>I hereby certify this is a true report of my inspection
      <input type="text" id="signature_inspector" name="signature_inspector" value={form5Data.signature_inspector} onChange={handleChange} />
    </label>
    <label>Ident no:
      <input type="text" id="ident_inspec" name="ident_inspec" value={form5Data.ident_inspec} onChange={handleChange} /> 
    </label>
    <label>Employed by: 
      <input type="text" id="employed_by" name="employed_by" value={form5Data.employed_by} onChange={handleChange} />
    </label>
    <label>Ident no:
      <input type="text" id="ident_employed" name="ident_employed" value={form5Data.ident_employed} onChange={handleChange} />
    </label>
 </form>
);
};

const NB5 = () => {
  const navigate = useNavigate();
  
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <TopBar />
      <h1>Formulario NB 5</h1>
      <Formulario5 />
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

export default NB5;

