import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../../css/forms.css';
import TopBar from '../TopBar';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

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
    material: '',
    tube_sheet: '',
    tubes_no: '',
    tubes_dia: '',
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
    type_staybolts_Threaded:  '',
    type_staybolts_Welded:   '',
    type_staybolts_Hollow:  '',
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

  const handleSubmit = async (e) => {
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
        form5Data.material.trim() === '' ||
        form5Data.tube_sheet.trim() === '' ||
        form5Data.tubes_no.trim() === '' ||
        form5Data.tubes_dia.trim() === '' ||
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
        form5Data.type_staybolts_Threaded.trim() === '' ||
        form5Data.type_staybolts_Welded.trim() === '' ||
        form5Data.type_staybolts_Hollow.trim() === '' ||
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
    material: '',
    tube_sheet: '',
    tubes_no: '',
    tubes_dia: '',
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
    type_staybolts_Threaded:  '',
    type_staybolts_Welded:   '',
    type_staybolts_Hollow:  '',
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
      };

      setFormData(form5Data);

      const db = getFirestore();
      const ref = collection(db, "form_nb_5");
      try {
        const data = await addDoc(ref, form5Data);
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
      {/* Contenido de la primera página */}
      <div className="form-container">
        <TopBar />
        <div className="form-title">
        <div className='nowrap'>FORM NB-5 BOILER OR PRESSURE VESSEL DATA REPORT</div>
          <br />
          <div className='nowrap'>FIRST INTERNAL INSPECTION</div>
          <br />
          <div className='nowrap'>Standard Form for Jurisdictions Operating Under the ASME Code</div>
        </div>
        <div className="form-content">
          <div className="table-container">
            <table className="conteiner_cert">
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
                <tr>
                  <td className='numero'>5</td>
                    <td colSpan="4">
                      <div className="form-field">
                        <div className="field-div">Type :</div>
                        <div className="option-buttons reason-options">
                          <div className={`centered-option${form5Data.type === 'ft' ? ' selected' : ''}`}>
                            <input type="checkbox" id="ft" name="type" value="ft" checked={form5Data.type === 'ft'} onChange={() => handleOptionChange('type', 'ft')}/>
                            <div htmlFor="ft">FT</div>
                          </div>
                          <div className={`centered-option${form5Data.type === 'wt' ? ' selected' : ''}`}>
                            <input type="checkbox" id="wt" name="type" value="wt" checked={form5Data.type === 'wt'} onChange={() => handleOptionChange('type', 'wt')}/>
                            <div htmlFor="wt">WT</div>
                          </div>
                          <div className={`centered-option${form5Data.type === 'ci' ? ' selected' : ''}`}>
                            <input type="checkbox" id="ci" name="type" value="ci" checked={form5Data.type === 'ci'} onChange={() => handleOptionChange('type', 'ci')}/>
                            <div htmlFor="ci">CI</div>
                          </div>
                          <div className={`centered-option${form5Data.type === 'air_tank' ? ' selected' : ''}`}>
                            <input type="checkbox" id="air_tank" name="type" value="air_tank"  checked={form5Data.type === 'air_tank'} onChange={() => handleOptionChange('type', 'air_tank')}/>
                              <div htmlFor="air_tank">AIR TANK</div>
                          </div>
                          <div className={`centered-option${form5Data.type === 'water_tank' ? ' selected' : ''}`}>
                            <input type="checkbox" id="water_tank" name="type" value="water_tank" checked={form5Data.type === 'water_tank'} onChange={() => handleOptionChange('type', 'water_tank')}/>
                            <div htmlFor="water_tank">WATER TANK</div>
                          </div>
                          <div className={`centered-option${form5Data.type === 'other' ? ' selected' : ''}`}>
                            <input type="checkbox" id="other" name="type" value="other" checked={form5Data.type === 'other'} onChange={() => handleOptionChange('type', 'other')}/>
                            <div htmlFor="other">OTHER</div>
                            <input type="text" id="other_text" name="other_text" value={form5Data.other_text} onChange={handleChange} />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <p className='nowrap'>YEAR BUILT</p>
                        <input type="text" id="year_built" name="year_built" value={form5Data.year_built} onChange={handleChange} />
                      </div>
                    </td>
                    <td>
                      <div>
                        <p className='nowrap'>MANUFACTURER</p>
                        <input type="text" id="manufacturer" name="manufacturer" value={form5Data.manufacturer} onChange={handleChange} />
                      </div>
                      <div>
                        <p className='nowrap'>YEAR INST</p>
                        <input type="text" id="manufacturer" name="manufacturer" value={form5Data.yeart_inst} onChange={handleChange} />
                      </div>
                    </td>
                    <td>
                      <div className="form-field">
                        <div className="option-buttons reason-options">
                          <div className={`centered-option${form5Data.new_object === 'new' ? ' selected' : ''}`}>
                            <input type="checkbox" id="new" name="new_object" value="new"
                              checked={form5Data.new_object === 'new'} onChange={() => handleOptionChange('new_object', 'new')}/>
                            <div htmlFor="nowrap">New</div>
                          </div>
                          <div className={`centered-option${form5Data.new_object === 'Seconhand' ? ' selected' : ''}`}>
                            <input type="checkbox" id="Seconhand" name="new_object" value="Seconhand"
                              checked={form5Data.new_object === 'Seconhand'} onChange={() => handleOptionChange('new_object', 'Seconhand')}/>
                            <div htmlFor="nowrap">Seconhand</div>
                          </div>
                        </div>
                      </div>
                    </td>
                </tr>
                <tr>
                  <td className='numero'>6</td>
                    <td colSpan="4"></td>
                    <td>
                      <div className="form-field">
                        <div className="field-div">USE</div>
                        <div className="option-buttons reason-options">
                          <div className={`centered-option${form5Data.use === 'power' ? ' selected' : ''}`}>
                            <input type="checkbox" id="power" name="use" value="power" checked={form5Data.use === 'power'} onChange={() => handleOptionChange('use', 'power')}/>
                            <div htmlFor="power">POWER</div>
                          </div>
                          <div className={`centered-option${form5Data.use === 'process' ? ' selected' : ''}`}>
                            <input type="checkbox" id="process" name="use" value="process" checked={form5Data.use === 'process'} onChange={() => handleOptionChange('use', 'process')}/>
                            <div htmlFor="process">PROCESS</div>
                          </div>
                        </div>
                        <div className="option-buttons reason-options">
                          <div className={`centered-option${form5Data.use === 'steam_htg' ? ' selected' : ''}`}>
                            <input type="checkbox" id="steam_htg" name="use" value="steam_htg" checked={form5Data.use === 'steam_htg'} onChange={() => handleOptionChange('use', 'steam_htg')}/>
                            <div htmlFor="steam_htg">Steam Htg</div>
                          </div>
                          <div className={`centered-option${form5Data.use === 'hwh' ? ' selected' : ''}`}>
                            <input type="checkbox" id="hwh" name="use" value="hwh" checked={form5Data.use === 'hwh'} onChange={() => handleOptionChange('use', 'hwh')}/>
                            <div htmlFor="hwh">HWH</div>
                          </div>
                          <div className={`centered-option${form5Data.use === 'hws' ? ' selected' : ''}`}>
                            <input type="checkbox" id="hws" name="use" value="hws" checked={form5Data.use === 'hws'} onChange={() => handleOptionChange('use', 'hws')}/>
                            <div htmlFor="hws">HWS</div>
                          </div>
                          <div className={`centered-option${form5Data.use === 'other' ? ' selected' : ''}`}>
                            <input type="checkbox" id="other" name="use" value="other" checked={form5Data.use === 'other'} onChange={() => handleOptionChange('use', 'other')}/>
                            <div htmlFor="other">OTHER</div>
                            <input type="text" id="other_use_text" name="other_use_text" value={form5Data.other_use_text} onChange={handleChange} />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div>
                      <p className='nowrap'>FUEL (BOILER)</p>
                        <input type="text" id="fuel" name="fuel" value={form5Data.fuel} onChange={handleChange} />
                      </div>
                    </td>
                    <td>
                      <div><p className='nowrap'>METHOD OF FIRING (BOILER)</p>
                        <input type="text" id="method_firing" name="method_firing" value={form5Data.method_firing} onChange={handleChange} />
                      </div>
                    </td>
                    <td>
                      <div className="form-field">
                      <div className="nowrap">PRESSURE GAGE TESTED</div>
                      <div className="option-buttons reason-options">
                        <div className={`centered-option${form5Data.pressure_gage === 'yes' ? ' selected' : ''}`}>
                          <input
                            type="checkbox" id="yes" name="pressure_gage" value="yes"
                            checked={form5Data.pressure_gage === 'yes'}
                            onChange={() => handleOptionChange('pressure_gage', 'yes')}
                          />
                          <div htmlFor="yes">YES</div>
                        </div>
                        <div className={`centered-option${form5Data.pressure_gage === 'no' ? ' selected' : ''}`}>
                          <input
                            type="checkbox" id="no" name="pressure_gage" value="no"
                            checked={form5Data.pressure_gage === 'no'}
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
                          THIS INSPECTION
                          <input type="text" id="this_inspection" name="this_inspection" value={form5Data.this_inspection} onChange={handleChange} />
                          PREV. INSPECTION
                          <input type="text" id="prev_inspection" name="prev_inspection" value={form5Data.prev_inspection} onChange={handleChange} />
                      </div>
                    </td>
                    <td>
                      <div>
                      <p className='nowrap'>SAFETY-RELIEF VALVES</p>
                        SET AT
                        <input type="text" id="set_at" name="set_at" value={form5Data.set_at} onChange={handleChange} />
                      </div>
                    </td>
                    <td>
                      <div><p className='nowrap'>EXPLAIN IF PRESSURE CHANGED</p>
                        <input type="text" id="explaind_pressure" name="explaind_pressure" value={form5Data.explaind_pressure} onChange={handleChange} />
                      </div>
                    </td>
                </tr>
                <tr>
                  <td className='numero'>8</td>
                    <td colSpan="4">
                      <div className="form-field">
                      <div className="field-div">IS CONDITION OF OBJECT SUCH THAT A CERTIFICATE MAY BE ISSUED?</div>
                      <div className="option-buttons reason-options">
                        <div className={`centered-option${form5Data.condition_object === 'yes' ? ' selected' : ''}`}>
                          <input type="checkbox" id="yes" name="condition_object" value="yes" checked={form5Data.condition_object === 'yes'} 
                          onChange={() => handleOptionChange('condition_object', 'yes')} />
                          <div htmlFor="yes">YES</div>
                        </div>
                        <div className={`centered-option${form5Data.condition_object === 'no' ? ' selected' : ''}`}>
                          <input type="checkbox" id="no" name="condition_object" value="no"
                            checked={form5Data.condition_object === 'no'}
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
                        <div className={`centered-option${form5Data.pressure_test === 'yes' ? ' selected' : ''}`}>
                          <input type="checkbox" id="yes" name="pressure_test" value="yes"
                            checked={form5Data.pressure_test === 'yes'} onChange={() => handleOptionChange('pressure_test', 'yes')} />
                          <div htmlFor="yes">Yes</div>
                          <input type="text" id="yes_psi" name="yes_psi" value={form5Data.yes_psi} onChange={handleChange} />
                          <div htmlFor="yes_psi">psi</div>
                        </div>
                        <div>Date
                          <input type="text" id="date_test" name="date_test" value={form5Data.date_test} onChange={handleChange} />
                        </div>
                        <div className={`centered-option${form5Data.pressure_test === 'no' ? ' selected' : ''}`}>
                          <input type="checkbox" id="no" name="pressure_test" value="no" checked={form5Data.pressure_test === 'no'}
                            onChange={() => handleOptionChange('pressure_test', 'no')} />
                          <div htmlFor="no">No</div>
                        </div>
                      </div>
                      </div>
                    </td>
                </tr>
                <tr>
                  <td className='numero'>9</td>
                  <tr>
                    <td>
                    <p className='nowrap'>SHELL </p>
                    </td>
                    <td>
                    <p className='nowrap'>DIAMETER </p>
                    </td>
                    <td>
                      <p className='nowrap'>OVERALL LENGTH </p>
                    </td>
                    <td>
                    <p className='nowrap'>THICKNESS </p>
                    </td>
                    <td>
                    <p className='nowrap'>TOTAL HTG SURFACE (BOILER) </p>
                    </td>
                    <td>
                    <p className='nowrap'>MATERIAL </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>
                        <p className='nowrap'>No</p>
                        <input type="text" id="shell_no" name="shell_no" value={form5Data.shell_no} onChange={handleChange} />
                      </div>
                    </td>
                    <td>
                      <div>
                        <input type="text" id="diameter" name="diameter" value={form5Data.diameter} onChange={handleChange} />
                        <p className='nowrap'>in.</p>
                      </div>
                      <div className="option-buttons reason-options">
                          <div className={`centered-option${form5Data.diameter_id === 'id' ? ' selected' : ''}`}>
                            <input type="checkbox" id="id" name="diameter_id" value="id" checked={form5Data.diameter_id === 'id'} onChange={() => handleOptionChange('diameter_id', 'id')} />
                              <div htmlFor="id">ID</div>
                          </div>
                          <div className={`centered-option${form5Data.diameter_id === 'od' ? ' selected' : ''}`}>
                            <input type="checkbox" id="od" name="diameter_id" value="od" checked={form5Data.diameter_id === 'od'} onChange={() => handleOptionChange('diameter_id', 'od')}/>
                            <div className='id'>OD</div>
                          </div>
                        </div>
                    </td>
                    <td>
                    <div>
                        <input type="text" id="lenght_ft" name="lenght_ft" value={form5Data.lenght_ft} onChange={handleChange} />
                        <p className='nowrap'>ft.</p>
                      </div>
                      <div>
                        <input type="text" id="lenght_in" name="lenght_in" value={form5Data.lenght_in} onChange={handleChange} />
                        <p className='nowrap'>in.</p>
                      </div>
                    </td>
                    <td>
                    <div>
                        <input type="text" id="thickness" name="thickness" value={form5Data.thickness} onChange={handleChange} />
                        <p className='nowrap'>in.</p>
                      </div>
                    </td>
                    <td>
                    <div>
                        <input type="text" id="total_htg" name="total_htg" value={form5Data.total_htg} onChange={handleChange} />
                        <p className='nowrap'>Sq. Ft.</p>
                      </div>
                    </td>
                    <td>
                    <div>
                    <p className='nowrap'>ASME Spec Nos</p>
                        <input type="text" id="material_asme" name="material_asme" value={form5Data.material_asme} onChange={handleChange} />
                      </div>
                    </td>
                  </tr>
                </tr>
                <tr>
                  <td className='numero'>10</td>
                    <tr>
                      <td>
                      <p className='nowrap'>ALLOWABLE STRESS </p>
                      </td>
                      <td>
                      <p className='nowrap'>BUTT STRAP </p>
                      </td>
                      <td>
                        <p className='nowrap'>HEADERS - WT BOILERS</p>
                      </td>
                      <td colSpan="3">
                      <p className='nowrap'>TYPE </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>
                          <input type="text" id="allowable_stress" name="allowable_stress" value={form5Data.allowable_stress} onChange={handleChange} />
                          <p className='nowrap'>psi</p>
                        </div>
                      </td>
                      <td>
                        <div>
                        <p className='nowrap'>Thks</p>
                          <input type="text" id="strap_thks" name="strap_thks" value={form5Data.strap_thks} onChange={handleChange} />
                          <p className='nowrap'>in.</p>
                        </div>
                        <div className="option-buttons reason-options">
                            <div className={`centered-option${form5Data.strap === 'single' ? ' selected' : ''}`}>
                              <input type="checkbox" id="single" name="strap" value="single" checked={form5Data.strap === 'single'} onChange={() => handleOptionChange('strap', 'single')} />
                                <div htmlFor="single">Single</div>
                            </div>
                            <div className={`centered-option${form5Data.strap === 'double' ? ' selected' : ''}`}>
                              <input type="checkbox" id="double" name="strap" value="double" checked={form5Data.strap === 'double'} onChange={() => handleOptionChange('strap', 'double')}/>
                              <div className='double'>Double</div>
                            </div>
                          </div>
                      </td>
                      <td>
                      <div>
                      <p className='nowrap'>Thickness</p>
                          <input type="text" id="header_thks" name="header_thks" value={form5Data.header_thks} onChange={handleChange} />
                          <p className='nowrap'>in.</p>
                        </div>
                      </td>
                      <td colSpan="3">
                          <div className="option-buttons reason-options">
                            <div className={`centered-option${form5Data.type_2 === 'box' ? ' selected' : ''}`}>
                              <input type="checkbox" id="box" name="type_2" value="box" checked={form5Data.type_2 === 'box'} onChange={() => handleOptionChange('type_2', 'box')} />
                                <div htmlFor="box">Box</div>
                            </div>
                            <div className={`centered-option${form5Data.type_2 === 'sinuous' ? ' selected' : ''}`}>
                              <input type="checkbox" id="sinuous" name="type_2" value="sinuous" checked={form5Data.type_2 === 'sinuous'} onChange={() => handleOptionChange('type_2', 'sinuous')}/>
                              <div className='sinuous'>Sinuous</div>
                            </div>
                            <div className={`centered-option${form5Data.type_2 === 'wtr_wall' ? ' selected' : ''}`}>
                              <input type="checkbox" id="wtr_wall" name="type_2" value="wtr_wall" checked={form5Data.type_2 === 'wtr_wall'} onChange={() => handleOptionChange('type_2', 'wtr_wall')}/>
                              <div className='wtr_wall'>Wtr Wall</div> 
                            </div>
                            <div className={`centered-option${form5Data.type_2 === 'other_text_2' ? ' selected' : ''}`}>
                              <input type="checkbox" id="other_text_2" name="type_2" value="other_text_2" checked={form5Data.type_2 === 'other_text_2'} onChange={() => handleOptionChange('type_2', 'other_text_2')}/>
                              <div className='other_text_2'>Other</div>
                              <input type="text" id="other_text_2" name="other_text_2" value={form5Data.other_text_2} onChange={handleChange} />
                            </div>
                          </div>
                        </td>
                    </tr>
                </tr>
                <tr>
                  <td className='numero'>11</td>
                    <tr>
                      <td colSpan="3">
                      <p className='nowrap'>TYPE LONGITUDINAL SEAM </p>
                      </td>
                      <td>
                      <p className='nowrap'>RIVETED </p>
                      </td>
                      <td colSpan="2">
                        <p className='nowrap'>PITCH</p>
                      </td>
                      <td >
                      <p className='nowrap'>SEAM EFF </p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="3">
                        <div className="option-buttons reason-options">
                          <div className={`centered-option${form5Data.type_longitudinal === 'lap' ? ' selected' : ''}`}>
                            <input type="checkbox" id="lap" name="type_longitudinal" value="lap" checked={form5Data.type_longitudinal === 'lap'} onChange={() => handleOptionChange('type_longitudinal', 'lap')} />
                              <div htmlFor="lap">Lap</div>
                          </div>
                          <div className={`centered-option${form5Data.type_longitudinal === 'buff' ? ' selected' : ''}`}>
                            <input type="checkbox" id="buff" name="type_longitudinal" value="buff" checked={form5Data.type_longitudinal === 'buff'} onChange={() => handleOptionChange('type_longitudinal', 'buff')}/>
                            <div className='buff'>Buff</div>
                          </div>
                          <div className={`centered-option${form5Data.type_longitudinal === 'welded' ? ' selected' : ''}`}>
                            <input type="checkbox" id="welded" name="type_longitudinal" value="welded" checked={form5Data.type_longitudinal === 'welded'} onChange={() => handleOptionChange('type_longitudinal', 'welded')}/>
                            <div className='welded'>Welded</div> 
                          </div>
                          <div className={`centered-option${form5Data.type_longitudinal === 'brazed' ? ' selected' : ''}`}>
                            <input type="checkbox" id="brazed" name="type_longitudinal" value="brazed" checked={form5Data.type_longitudinal === 'brazed'} onChange={() => handleOptionChange('type_longitudinal', 'brazed')}/>
                            <div className='brazed'>Brazed</div>
                          </div>
                          <div className={`centered-option${form5Data.type_longitudinal === 'riveted' ? ' selected' : ''}`}>
                            <input type="checkbox" id="riveted" name="type_longitudinal" value="riveted" checked={form5Data.type_longitudinal === 'riveted'} onChange={() => handleOptionChange('type_longitudinal', 'riveted')}/>
                            <div className='riveted'>Riveted</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div>
                        <p className='nowrap'>Dia. Hole</p>
                          <input type="text" id="dia_hole" name="dia_hole" value={form5Data.dia_hole} onChange={handleChange} />
                          <p className='nowrap'>in.</p>
                        </div>
                      </td>
                      <td colSpan="2">
                        <div>
                          <input type="text" id="base" name="base" value={form5Data.base} onChange={handleChange} />
                          <p className='nowrap'>in.</p>
                          <p className='nowrap'>x</p>
                        </div>
                        <div>
                          <input type="text" id="height" name="height" value={form5Data.height} onChange={handleChange} />
                          <p className='nowrap'>in.</p>
                          <p className='nowrap'>x</p>
                        </div>
                        <div>
                          <input type="text" id="width" name="width" value={form5Data.width} onChange={handleChange} />
                          <p className='nowrap'>in.</p>
                        </div>
                      </td>
                      <td>
                      <div>
                          <input type="text" id="seam_eff" name="seam_eff" value={form5Data.seam_eff} onChange={handleChange} />
                          <p className='nowrap'>%</p>
                        </div>
                      </td>
                    </tr>
                </tr>
                <tr>
                  <td className='numero'>12</td>
                    <tr>
                      <td colSpan="3">
                      <p className='nowrap'>HEAD THICKNESS </p>
                      </td>
                      <td>
                      <p className='nowrap'>HEAD TYPE </p>
                      </td>
                      <td >
                        <p className='nowrap'>RADIUS DISH</p>
                      </td>
                      <td >
                      <p className='nowrap'>ELLIP RATIO </p>
                      </td>
                      <td >
                      <p className='nowrap'>BOLTING </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>
                          <input type="text" id="head_thickness" name="head_thickness" value={form5Data.head_thickness} onChange={handleChange} />
                          <p className='nowrap'>in.</p>
                        </div>
                      </td>
                      <td colSpan="3">
                        <div className="option-buttons reason-options">
                          <div className={`centered-option${form5Data.type_head === 'plus' ? ' selected' : ''}`}>
                            <input type="checkbox" id="plus" name="type_head" value="plus" checked={form5Data.type_head === 'plus'} onChange={() => handleOptionChange('type_head', 'plus')} />
                              <div htmlFor="plus">Plus</div>
                          </div>
                          <div className={`centered-option${form5Data.type_head === 'minus' ? ' selected' : ''}`}>
                            <input type="checkbox" id="minus" name="type_head" value="minus" checked={form5Data.type_head === 'minus'} onChange={() => handleOptionChange('type_head', 'minus')}/>
                            <div className='minus'>Minus</div>
                          </div>
                          <div className={`centered-option${form5Data.type_head === 'welded' ? ' selected' : ''}`}>
                            <input type="checkbox" id="welded" name="type_head" value="welded" checked={form5Data.type_head === 'welded'} onChange={() => handleOptionChange('type_head', 'welded')}/>
                            <div className='fixed'>Fixed</div> 
                          </div>
                          <div className={`centered-option${form5Data.type_head === 'brazed' ? ' selected' : ''}`}>
                            <input type="checkbox" id="brazed" name="type_head" value="brazed" checked={form5Data.type_head === 'brazed'} onChange={() => handleOptionChange('type_head', 'brazed')}/>
                            <div className='flat'>Flat</div>
                          </div>
                          <div className={`centered-option${form5Data.type_head === 'movable' ? ' selected' : ''}`}>
                            <input type="checkbox" id="movable" name="type_head" value="movable" checked={form5Data.type_head === 'movable'} onChange={() => handleOptionChange('type_head', 'movable')}/>
                            <div className='movable'>Movable</div>
                          </div>
                          <div className={`centered-option${form5Data.type_head === 'quick_Opening' ? ' selected' : ''}`}>
                            <input type="checkbox" id="quick_Opening" name="type_head" value="quick_Opening" checked={form5Data.type_head === 'quick_Opening'} onChange={() => handleOptionChange('type_head', 'quick_Opening')}/>
                            <div className='quick_Opening'>Quick Opening</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div>
                          <input type="text" id="radius_dish" name="radius_dish" value={form5Data.radius_dish} onChange={handleChange} />
                          <p className='nowrap'>in.</p>
                        </div>
                      </td>
                      <td>
                        <div>
                          <input type="text" id="ellip_checkbox" name="ellip_checkbox" value={form5Data.ellip_checkbox} onChange={handleChange} />
                        </div>
                      </td>
                      <td >
                        <div>
                        <p className='nowrap'>No.</p>
                          <input type="text" id="bolting_no" name="bolting_no" value={form5Data.bolting_no} onChange={handleChange} />
                        </div>
                        <div>
                        <p className='nowrap'>Dia</p>
                          <input type="text" id="bolting_dia" name="bolting_dia" value={form5Data.bolting_dia} onChange={handleChange} />
                          <p className='nowrap'>in.</p>
                        </div>
                        <div>
                        <p className='nowrap'>Material</p>
                          <input type="text" id="material" name="material" value={form5Data.material} onChange={handleChange} />
                        </div>
                      </td>
                    </tr>
                </tr>
                <tr>
                  <td className='numero'>13</td>
                  <tr>
                    <td colSpan="2">
                      <p className='nowrap'>TUBE SHEET THICKNESS </p>
                    </td>
                    <td colSpan="3">
                      <p className='nowrap'>TUBES </p>
                    </td>
                    <td >
                      <p className='nowrap'>PITCH (WT BLRS)</p>
                    </td>
                    <td >
                      <p className='nowrap'>LIGAMENT EFF </p>
                    </td>
                  </tr>
                    <tr>
                      <td colSpan="2">
                        <div>
                          <input type="text" id="tube_sheet" name="tube_sheet" value={form5Data.tube_sheet} onChange={handleChange} />
                          <p className='nowrap'>in.</p>
                        </div>
                      </td>
                      <td colSpan="3">
                        <div>
                        <p className='nowrap'>No</p>
                          <input type="text" id="tubes_no" name="tubes_no" value={form5Data.tubes_no} onChange={handleChange} />
                        </div>
                        <div>
                        <p className='nowrap'>Dia.</p>
                          <input type="text" id="tubes_dia" name="tubes_dia" value={form5Data.tubes_dia} onChange={handleChange} />
                          <p className='nowrap'>in.</p>
                        </div>
                        <div>
                          <p className='nowrap'>Lenght</p>
                          <input type="text" id="tubes_length_ft" name="tubes_length_ft" value={form5Data.tubes_length_ft} onChange={handleChange} />
                          <p className='nowrap'>ft.</p>
                          <input type="text" id="tubes_length_in" name="tubes_length_in" value={form5Data.tubes_length_in} onChange={handleChange} />
                          <p className='nowrap'>in.</p>
                        </div>
                      </td>
                      <td>
                        <div>
                          <input type="text" id="pinch_wt_length" name="pinch_wt_length" value={form5Data.pinch_wt_length} onChange={handleChange} />
                          <p className='nowrap'>in.</p>
                          <p className='nowrap'>X</p>
                          <input type="text" id="pinch_wt_height" name="pinch_wt_height" value={form5Data.pinch_wt_height} onChange={handleChange} />
                          <p className='nowrap'>in.</p>
                        </div>
                      </td>
                      <td>
                      <div>
                          <input type="text" id="ligament_eff" name="ligament_eff" value={form5Data.ligament_eff} onChange={handleChange} />
                          <p className='nowrap'>%</p>
                        </div>
                      </td>
                    </tr>
                </tr>
                <tr>
                  <td className='numero'>14</td>
                  <tr>
                    <td>
                      <p className='nowrap'>FIRE TUBE</p>
                      <p className='nowrap'>BOILERS</p>
                    </td>
                      <tr>
                        <td>
                        <p className='nowrap'>DISTANCE UPPER TUBES TO SHELL</p>
                        </td>
                        <td>
                        <p className='nowrap'>STAYED AREA</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <div>
                          <p className='nowrap'>Front</p>
                          <input type="text" id="front" name="front" value={form5Data.front} onChange={handleChange} />
                          <p className='nowrap'>in.</p>
                        </div>
                        <div>
                          <p className='nowrap'>Rear</p>
                          <input type="text" id="rear" name="rear" value={form5Data.rear} onChange={handleChange} />
                          <p className='nowrap'>in.</p>
                        </div>
                        </td>
                        <td>
                          <td><p className='nowrap'>FRONT HEAD</p></td>
                          <td>
                            <div>
                              <p className='nowrap'>Adove Tubes</p>
                              <input type="text" id="front_above" name="front_above" value={form5Data.front_above} onChange={handleChange} />
                            </div>
                            <div>
                              <p className='nowrap'>Below Tubes</p>
                              <input type="text" id="front_below" name="front_below" value={form5Data.front_below} onChange={handleChange} />
                            </div>
                          </td>
                          <td><p className='nowrap'>REAR HEAD</p></td>
                          <td>
                            <div>
                              <p className='nowrap'>Adove Tubes</p>
                              <input type="text" id="rear_above" name="rear_above" value={form5Data.rear_above} onChange={handleChange} />
                            </div>
                            <div>
                              <p className='nowrap'>Below Tubes</p>
                              <input type="text" id="rear_below" name="rear_below" value={form5Data.rear_below} onChange={handleChange} />
                            </div>
                          </td>
                        </td>
                      </tr>
                  </tr>
                  <tr>
                    <tr>
                      <td colSpan="2">
                      <div>
                        <p className='nowrap'>STAY ABOVE TUBES</p>
                        </div>
                      </td>
                      <td colSpan="3">
                      <div>
                        <p className='nowrap'>TYPE</p>
                        </div>
                      </td>
                      <td colSpan="2">
                      <div>
                        <p className='nowrap'>AREA OF STAYS</p>
                        </div>
                      </td>
                    </tr>  
                    <tr>
                      <td colSpan="2">
                      <div>
                        <p className='nowrap'>Front No.</p>
                          <input type="text" id="above_front" name="above_front" value={form5Data.above_front} onChange={handleChange} />
                        </div>
                        <div>
                        <p className='nowrap'>Rear No.</p>
                          <input type="text" id="above_rear" name="above_rear" value={form5Data.above_rear} onChange={handleChange} />
                        </div>
                      </td>
                      <td colSpan="3">
                        <div className="option-buttons reason-options">
                          <div className={`centered-option${form5Data.type_adove === 'headtohead' ? ' selected' : ''}`}>
                            <input type="checkbox" id="headtohead" name="type_adove" value="headtohead" checked={form5Data.type_adove === 'headtohead'} onChange={() => handleOptionChange('type_adove', 'headtohead')} />
                              <div htmlFor="headtohead">Head to Head</div>
                          </div>
                          <div className={`centered-option${form5Data.type_adove === 'diagonal' ? ' selected' : ''}`}>
                            <input type="checkbox" id="diagonal" name="type_adove" value="diagonal" checked={form5Data.type_adove === 'diagonal'} onChange={() => handleOptionChange('type_adove', 'diagonal')}/>
                            <div className='diagonal'>Diagonal</div>
                          </div>
                          <div className={`centered-option${form5Data.type_adove === 'welded' ? ' selected' : ''}`}>
                            <input type="checkbox" id="welded" name="type_adove" value="welded" checked={form5Data.type_adove === 'welded'} onChange={() => handleOptionChange('type_adove', 'welded')}/>
                            <div className='welded'>Welded</div> 
                          </div>
                          <div className={`centered-option${form5Data.type_adove === 'weldless' ? ' selected' : ''}`}>
                            <input type="checkbox" id="weldless" name="type_adove" value="weldless" checked={form5Data.type_adove === 'weldless'} onChange={() => handleOptionChange('type_adove', 'weldless')}/>
                            <div className='weldless'>Weldless</div>
                          </div>
                        </div>
                      </td>
                      <td colSpan="2">
                      <div>
                        <p className='nowrap'>Front</p>
                          <input type="text" id="adove_area_front" name="adove_area_front" value={form5Data.adove_area_front} onChange={handleChange} />
                        </div>
                      </td>
                      <td>
                      <div>
                        <p className='nowrap'>Rear</p>
                          <input type="text" id="adove_area_rear" name="adove_area_rear" value={form5Data.adove_area_rear} onChange={handleChange} />
                        </div>
                      </td>
                    </tr>  
                  </tr>  
                  <tr>
                    <tr>
                      <td colSpan="2">
                      <div>
                        <p className='nowrap'>STAY BELLOW TUBES</p>
                        </div>
                      </td>
                      <td colSpan="3">
                      <div>
                        <p className='nowrap'>TYPE</p>
                        </div>
                      </td>
                      <td colSpan="2"> 
                      <div>
                        <p className='nowrap'>AREA OF STAYS</p>
                        </div>
                      </td>
                    </tr>  
                    <tr>
                      <td colSpan="2">
                      <div>
                        <p className='nowrap'>Front No.</p>
                          <input type="text" id="bellow_front" name="bellow_front" value={form5Data.bellow_front} onChange={handleChange} />
                        </div>
                        <div>
                        <p className='nowrap'>Rear No.</p>
                          <input type="text" id="bellow_rear" name="bellow_rear" value={form5Data.bellow_rear} onChange={handleChange} />
                        </div>
                      </td>
                      <td colSpan="3">
                        <div className="option-buttons reason-options">
                          <div className={`centered-option${form5Data.type_bellow === 'headtohead' ? ' selected' : ''}`}>
                            <input type="checkbox" id="headtohead" name="type_bellow" value="headtohead" checked={form5Data.type_bellow === 'headtohead'} onChange={() => handleOptionChange('type_bellow', 'headtohead')} />
                              <div htmlFor="headtohead">Head to Head</div>
                          </div>
                          <div className={`centered-option${form5Data.type_bellow === 'diagonal' ? ' selected' : ''}`}>
                            <input type="checkbox" id="diagonal" name="type_bellow" value="diagonal" checked={form5Data.type_bellow === 'diagonal'} onChange={() => handleOptionChange('type_bellow', 'diagonal')}/>
                            <div className='diagonal'>Diagonal</div>
                          </div>
                          <div className={`centered-option${form5Data.type_bellow === 'welded' ? ' selected' : ''}`}>
                            <input type="checkbox" id="welded" name="type_bellow" value="welded" checked={form5Data.type_bellow === 'welded'} onChange={() => handleOptionChange('type_bellow', 'welded')}/>
                            <div className='welded'>Welded</div> 
                          </div>
                          <div className={`centered-option${form5Data.type_bellow === 'weldless' ? ' selected' : ''}`}>
                            <input type="checkbox" id="weldless" name="type_bellow" value="weldless" checked={form5Data.type_bellow === 'weldless'} onChange={() => handleOptionChange('type_bellow', 'weldless')}/>
                            <div className='weldless'>Weldless</div>
                          </div>
                        </div>
                      </td>
                      <td colSpan="2">
                      <div>
                        <p className='nowrap'>Front</p>
                          <input type="text" id="bellow_area_front" name="bellow_area_front" value={form5Data.bellow_area_front} onChange={handleChange} />
                        </div>
                      </td>
                      <td>
                      <div>
                        <p className='nowrap'>Rear</p>
                          <input type="text" id="bellow_area_rear" name="bellow_area_rear" value={form5Data.bellow_area_rear} onChange={handleChange} />
                        </div>
                      </td>
                    </tr>  
                  </tr>     
                </tr>
                <tr>
                  <td className='numero'>15</td>
                  <tr>
                    <td colSpan="4">
                      <div>
                        <p className='nowrap'>FURNACE - TYPE</p>
                        </div>
                    </td>
                    <td>
                    <div>
                        <p className='nowrap'>THICKNESS</p>
                        </div>
                    </td>
                    <td>
                    <div>
                        <p className='nowrap'>TOTAL LENGTH</p>
                        </div>
                    </td>
                    <td>
                    <div>
                        <p className='nowrap'>TYPE LONG. SEAM</p>
                        </div>
                    </td>
                  </tr>
                  <tr>
                    <td  colSpan="4">
                      <div>
                        <p className='nowrap'>Adamson (No. Sect</p>
                          <input type="text" id="adamson_sect" name="adamson_sect" value={form5Data.adamson_sect} onChange={handleChange} />
                          <p className='nowrap'>)</p>
                        </div>
                    <div className="option-buttons reason-options">
                      <div className={`centered-option${form5Data.type_furnace === 'corrugated' ? ' selected' : ''}`}>
                        <input type="checkbox" id="corrugated" name="type_furnace" value="corrugated" checked={form5Data.type_furnace === 'corrugated'} onChange={() => handleOptionChange('type_furnace', 'corrugated')} />
                          <div htmlFor="corrugated">Corrugated</div>
                      </div>
                      <div className={`centered-option${form5Data.type_furnace === 'plain' ? ' selected' : ''}`}>
                        <input type="checkbox" id="plain" name="type_furnace" value="plain" checked={form5Data.type_furnace === 'plain'} onChange={() => handleOptionChange('type_furnace', 'plain')}/>
                        <div className='plain'>Plain</div>
                      </div>
                      <div className={`centered-option${form5Data.type_furnace === 'other' ? ' selected' : ''}`}>
                        <input type="checkbox" id="other" name="type_furnace" value="other" checked={form5Data.type_furnace === 'other'} onChange={() => handleOptionChange('type_furnace', 'other')}/>
                        <div className='other'>Other</div>
                        <input type="text" id="furnace_other_text" name="furnace_other_text" value={form5Data.furnace_other_text} onChange={handleChange} />
                      </div>
                    </div>
                    </td>
                    <td>
                    <div>
                          <input type="text" id="furnace_thickness" name="furnace_thickness" value={form5Data.furnace_thickness} onChange={handleChange} />
                          <p className='nowrap'>in</p>
                        </div>
                    </td>
                    <td>
                    <div>
                          <input type="text" id="total_length_ft" name="total_length_ft" value={form5Data.total_length_ft} onChange={handleChange} />
                          <p className='nowrap'>ft</p>
                        </div>
                        <div>
                          <input type="text" id="total_length_in" name="total_length_in" value={form5Data.total_length_in} onChange={handleChange} />
                          <p className='nowrap'>in</p>
                        </div>
                    </td>
                    <td>
                    <div className="option-buttons reason-options">
                      <div className={`centered-option${form5Data.type_long_seam === 'welded' ? ' selected' : ''}`}>
                        <input type="checkbox" id="welded" name="type_long_seam" value="welded" checked={form5Data.type_long_seam === 'welded'} onChange={() => handleOptionChange('type_long_seam', 'welded')} />
                          <div htmlFor="welded">Welded</div>
                      </div>
                      <div className={`centered-option${form5Data.type_long_seam === 'riveted' ? ' selected' : ''}`}>
                        <input type="checkbox" id="riveted" name="type_long_seam" value="riveted" checked={form5Data.type_long_seam === 'riveted'} onChange={() => handleOptionChange('type_long_seam', 'riveted')}/>
                        <div className='riveted'>Riveted</div>
                      </div>
                      <div className={`centered-option${form5Data.type_long_seam === 'seamless' ? ' selected' : ''}`}>
                        <input type="checkbox" id="seamless" name="type_long_seam" value="seamless" checked={form5Data.type_long_seam === 'no'} onChange={() => handleOptionChange('type_long_seam', 'seamless')}/>
                        <div className='seamless'>Seamless</div>
                      </div>
                    </div>
                    </td>
                  </tr>
                </tr>
                <tr>
                  <td className='numero'>16</td>
                  <tr>
                    <td colSpan="4">
                      <div>
                        <p className='nowrap'>STAYBOLTS - TYPE</p>
                        </div>
                    </td>
                    <td>
                    <div>
                        <p className='nowrap'>DIAMETER</p>
                        </div>
                    </td>
                    <td>
                    <div>
                        <p className='nowrap'>PITCH</p>
                        </div>
                    </td>
                    <td>
                    <div>
                        <p className='nowrap'>NET AREA</p>
                        </div>
                    </td>
                  </tr>
                  <tr>
                    <td  colSpan="4">
                    <div>
                        <p className='nowrap'>Threaded</p>
                          <input type="text" id="type_staybolts_Threaded" name="type_staybolts_Threaded" value={form5Data.type_staybolts_Threaded} onChange={handleChange} />
                        </div>
                        <div>
                        <p className='nowrap'>Welded</p>
                          <input type="text" id="type_staybolts_Welded" name="type_staybolts_Welded" value={form5Data.type_staybolts_Welded} onChange={handleChange} />
                        </div>
                        <div>
                        <p className='nowrap'>Hollow</p>
                          <input type="text" id="type_staybolts_Hollow" name="type_staybolts_Hollow" value={form5Data.type_staybolts_Hollow} onChange={handleChange} />
                        </div>
                        <div>
                        <p className='nowrap'>Drilled (Size Hole</p>
                          <input type="text" id="drilled" name="drilled" value={form5Data.drilled} onChange={handleChange} />
                          <p className='nowrap'>in.)</p>
                        </div>
                    </td>
                    <td>
                    <div>
                          <input type="text" id="diameter_staybolts" name="diameter_staybolts" value={form5Data.diameter_staybolts} onChange={handleChange} />
                          <p className='nowrap'>in.</p>
                        </div>
                    </td>
                    <td>
                    <div>
                          <input type="text" id="staybolts_pitch" name="staybolts_pitch" value={form5Data.staybolts_pitch} onChange={handleChange} />
                          <p className='nowrap'>in.</p>
                          <p className='nowrap'>X</p>
                          <input type="text" id="staybolts_pitch_in" name="staybolts_pitch_in" value={form5Data.staybolts_pitch_in} onChange={handleChange} />
                          <p className='nowrap'>in.</p>
                        </div>
                    </td>
                    <td>
                      <div>
                          <input type="text" id="net_area" name="net_area" value={form5Data.net_area} onChange={handleChange} />
                          <p className='nowrap'>so. in.</p>
                        </div>
                    </td>
                  </tr>
                </tr>
                <tr>
                  <td className='numero'>17</td>
                  <td>
                  <p className='nowrap'>SAFETY-RELIEF VALVES</p>
                  <p className='nowrap'>No.</p>
                  <input type="text" id="valves_no" name="valves_no" value={form5Data.valves_no} onChange={handleChange} />
                  <p className='nowrap'>Size</p>
                  <input type="text" id="valves_size" name="valves_size" value={form5Data.valves_size} onChange={handleChange} />
                  </td>
                  <td>
                  <p className='nowrap'>TOTAL CAPACITY</p>
                  <input type="text" id="capacity_cfm" name="capacity_cfm" value={form5Data.capacity_cfm} onChange={handleChange} />
                  <p className='medidas'>Lb/Hr</p>
                  <input type="text" id="capacity_lb" name="capacity_lb" value={form5Data.capacity_lb} onChange={handleChange} />
                  <p className='medidas'>Cfm</p>
                  <input type="text" id="capacity_btu" name="capacity_btu" value={form5Data.capacity_btu} onChange={handleChange} />
                  <p className='medidas'>Btm/Hr</p>
                  </td>
                  <td>
                  <p className='nowrap'>OUTLETS</p>
                  <p className='nowrap'>No.</p>
                  <input type="text" id="outlets_no" name="outlets_no" value={form5Data.outlets_no} onChange={handleChange} />
                  <p className='nowrap'>Size</p>
                  <input type="text" id="outlets_size" name="outlets_size" value={form5Data.outlets_size} onChange={handleChange} />
                  </td>
                  <td>
                  <p className='nowrap'>PROPERLY DRAINED</p>
                    <div className="option-buttons reason-options">
                      <div className={`centered-option${form5Data.properly_drained === 'yes' ? ' selected' : ''}`}>
                        <input type="checkbox" id="yes" name="properly_drained" value="yes" checked={form5Data.properly_drained === 'yes'} onChange={() => handleOptionChange('properly_drained', 'yes')} />
                          <div htmlFor="yes">Yes</div>
                      </div>
                      <div className={`centered-option${form5Data.properly_drained === 'no' ? ' selected' : ''}`}>
                        <input type="checkbox" id="no" name="properly_drained" value="no" checked={form5Data.properly_drained === 'no'} onChange={() => handleOptionChange('properly_drained', 'no')}/>
                        <div className='nowrap'>No (If no, explain on back of form)</div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className='numero'>18</td>
                  <td>
                    <p className='nowrap'>STOP</p>
                    <p className='nowrap'>VALVES</p>
                  </td>
                  <td>
                  <p className='nowrap'>ON STEAM LINE</p>
                    <div className="option-buttons reason-options">
                      <div className={`centered-option${form5Data.on_steam_line === 'yes' ? ' selected' : ''}`}>
                        <input type="checkbox" id="yes" name="feed_line" value="yes" checked={form5Data.on_steam_line === 'yes'} onChange={() => handleOptionChange('on_steam_line', 'yes')} />
                          <div htmlFor="yes">Yes</div>
                      </div>
                      <div className={`centered-option${form5Data.on_steam_line === 'no' ? ' selected' : ''}`}>
                        <input type="checkbox" id="no" name="feed_line" value="no" checked={form5Data.on_steam_line === 'no'} onChange={() => handleOptionChange('on_steam_line', 'no')}/>
                        <div className='nowrap'>No</div>
                      </div>
                    </div>
                  </td>
                  <td>
                  <p className='nowrap'>ON RETURN LINES</p>
                    <div className="option-buttons reason-options">
                      <div className={`centered-option${form5Data.on_return_line === 'yes' ? ' selected' : ''}`}>
                        <input type="checkbox" id="yes" name="on_return_line" value="yes" checked={form5Data.on_return_line === 'yes'} onChange={() => handleOptionChange('on_return_line', 'yes')} />
                          <div htmlFor="yes">Yes</div>
                      </div>
                      <div className={`centered-option${form5Data.on_return_line === 'no' ? ' selected' : ''}`}>
                        <input type="checkbox" id="no" name="on_return_line" value="no" checked={form5Data.on_return_line === 'no'} onChange={() => handleOptionChange('on_return_line', 'no')}/>
                        <div className='nowrap'>No</div>
                      </div>
                    </div>
                  </td>
                  <td>
                  <p className='nowrap'>OTHER CONNECTIONS</p>
                    <div className="option-buttons reason-options">
                      <div className={`centered-option${form5Data.other_connections === 'yes' ? ' selected' : ''}`}>
                        <input type="checkbox" id="yes" name="other_connections" value="yes" checked={form5Data.other_connections === 'yes'} onChange={() => handleOptionChange('other_connections', 'yes')} />
                          <div htmlFor="yes">Yes</div>
                      </div>
                      <div className={`centered-option${form5Data.other_connections === 'no' ? ' selected' : ''}`}>
                        <input type="checkbox" id="no" name="other_connections" value="no" checked={form5Data.other_connections === 'no'} onChange={() => handleOptionChange('other_connections', 'no')}/>
                        <div className='nowrap'>No</div>
                      </div>
                    </div>
                  </td>
                  <td colSpan="3">
                    <p className='nowrap'>STEAM LINES PROPERLY DRAINED</p>
                    <div className="option-buttons reason-options">
                      <div className={`centered-option${form5Data.steam_lines_properly_drained === 'yes' ? ' selected' : ''}`}>
                        <input type="checkbox" id="yes" name="steam_lines_properly_drained" value="yes" checked={form5Data.steam_lines_properly_drained === 'yes'} onChange={() => handleOptionChange('steam_lines_properly_drained', 'yes')} />
                          <div htmlFor="yes">Yes</div>
                      </div>
                      <div className={`centered-option${form5Data.steam_lines_properly_drained === 'no' ? ' selected' : ''}`}>
                        <input type="checkbox" id="no" name="steam_lines_properly_drained" value="no" checked={form5Data.steam_lines_properly_drained === 'no'} onChange={() => handleOptionChange('steam_lines_properly_drained', 'no')}/>
                        <div className='nowrap'>No (If no, explain on back of form)</div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className='numero'>19</td>
                  <td>
                  <p className='nowrap'>FEED PIPE</p>
                  <p className='nowrap'>Size</p>
                  <input type="text" id="feed_size" name="feed_size" value={form5Data.feed_size} onChange={handleChange} />
                  <p className='medidas'>in</p>
                  </td>
                  <td>
                  <p className='nowrap'>FEED APPLIANCES</p>
                  <p className='nowrap'>No.</p>
                  <input type="text" id="feed_no" name="feed_no" value={form5Data.feed_no} onChange={handleChange} />
                  </td>
                  <td>
                    <p className='nowrap'>TYPE DRIVE</p>
                    <div className="option-buttons reason-options">
                      <div className={`centered-option${form5Data.type_drive === 'steam' ? ' selected' : ''}`}>
                        <input type="checkbox" id="steam" name="steam" value="steam" checked={form5Data.type_drive === 'steam'} onChange={() => handleOptionChange('type_drive', 'steam')} />
                          <div htmlFor="steam">Steam</div>
                      </div>
                      <div className={`centered-option${form5Data.type_drive === 'motor' ? ' selected' : ''}`}>
                        <input type="checkbox" id="no" name="motor" value="motor" checked={form5Data.type_drive === 'motor'} onChange={() => handleOptionChange('type_drive', 'motor')}/>
                        <div className='nowrap'>Motor</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className='nowrap'>CHECK</p>
                    <p className='nowrap'>VALVES</p>
                  </td>
                  <td>
                    <p className='nowrap'>FEED LINE</p>
                    <div className="option-buttons reason-options">
                      <div className={`centered-option${form5Data.feed_line === 'yes' ? ' selected' : ''}`}>
                        <input type="checkbox" id="yes" name="feed_line" value="yes" checked={form5Data.feed_line === 'yes'} onChange={() => handleOptionChange('feed_line', 'yes')} />
                          <div htmlFor="yes">Yes</div>
                      </div>
                      <div className={`centered-option${form5Data.feed_line === 'no' ? ' selected' : ''}`}>
                        <input type="checkbox" id="no" name="feed_line" value="no" checked={form5Data.feed_line === 'no'} onChange={() => handleOptionChange('feed_line', 'no')}/>
                        <div className='nowrap'>No</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className='nowrap'>RETURN LINE</p>
                    <div className="option-buttons reason-options">
                      <div className={`centered-option${form5Data.return_line === 'yes' ? ' selected' : ''}`}>
                        <input type="checkbox" id="yes" name="return_line" value="yes" checked={form5Data.return_line === 'yes'} onChange={() => handleOptionChange('return_line', 'yes')} />
                          <div htmlFor="yes">Yes</div>
                      </div>
                      <div className={`centered-option${form5Data.return_line === 'no' ? ' selected' : ''}`}>
                        <input type="checkbox" id="no" name="return_line" value="no" checked={form5Data.return_line === 'no'} onChange={() => handleOptionChange('return_line', 'no')}/>
                        <div className='nowrap'>No</div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className='numero'>20</td>
                  <td>
                  <p className='nowrap'>WATER GAGE GLASS</p>
                  <p className='nowrap'>No.</p>
                  <input type="text" id="water_no" name="water_no" value={form5Data.water_no} onChange={handleChange} />
                  </td>
                  <td>
                  <p className='nowrap'>TRY COCKS</p>
                  <p className='medidas'>No.</p>
                  <input type="text" id="cocks_no" name="cocks_no" value={form5Data.cocks_no} onChange={handleChange} />
                  </td>
                  <td>
                  <p className='nowrap'>BLOWOFF PIPE</p>
                  <p className='nowrap'>Size</p>
                  <input type="text" id="blowoff_size" name="blowoff_size" value={form5Data.blowoff_size} onChange={handleChange} />
                  <p className='medidas'>in</p>
                  <p className='nowrap'>Location</p>
                  <input type="text" id="blowoff_location" name="blowoff_location" value={form5Data.blowoff_location} onChange={handleChange} />
                  </td>
                  <td colSpan="3">
                    <p className='nowrap'>INSPECTION OPENINGS COMPLY WTH CODE</p>
                    <div className="option-buttons reason-options">
                      <div className={`centered-option${form5Data.inspection_openings === 'yes' ? ' selected' : ''}`}>
                        <input type="checkbox" id="yes" name="inspection_openings" value="yes" checked={form5Data.inspection_openings === 'yes'} onChange={() => handleOptionChange('inspection_openings', 'yes')} />
                          <div htmlFor="yes">Yes</div>
                      </div>
                      <div className={`centered-option${form5Data.inspection_openings === 'no' ? ' selected' : ''}`}>
                        <input type="checkbox" id="no" name="inspection_openings" value="no" checked={form5Data.inspection_openings === 'no'} onChange={() => handleOptionChange('inspection_openings', 'no')}/>
                        <div className='nowrap'>No (If no, explain on back of form)</div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className='numero'>21</td>
                  <tr>
                  <td colSpan="2">
                    <p className='nowrap'>CAST-IRON BOILERS</p>
                  </td>
                  <td>
                    <p className='nowrap'>SECTIONS</p>
                  </td>
                  </tr>
                  <tr>
                  <td colSpan="2">
                  <p className='nowrap'>Lenght</p>
                  <input type="text" id="boilers_length" name="boilers_length" value={form5Data.boilers_length} onChange={handleChange} />
                  <p className='medidas'>in.</p>
                  <p className='nowrap'>Width</p>
                  <input type="text" id="boilers_width" name="boilers_width" value={form5Data.boilers_width} onChange={handleChange} />
                  <p className='medidas'>in.</p>
                  <p className='nowrap'>Height</p>
                  <input type="text" id="boilers_height" name="boilers_height" value={form5Data.boilers_height} onChange={handleChange} />
                  <p className='medidas'>in.</p>
                  </td>
                  <td>
                  <div>
                    <p className='nowrap'>No.</p>
                    <input type="text" id="sections_no" name="sections_no" value={form5Data.sections_no} onChange={handleChange} />
                  </div>
                  </td>
                  </tr>
                  <td>
                  </td>
                  <td colSpan="3">
                    <p className='nowrap'>DOES WELDING ON STEAM, FEED BLOWOFF AND OTHER PIPING COMPLY WITH CODE?</p>
                    <div className="option-buttons reason-options">
                      <div className={`centered-option${form5Data.welding_on_steam === 'yes' ? ' selected' : ''}`}>
                        <input type="checkbox" id="yes" name="welding_on_steam" value="yes" checked={form5Data.welding_on_steam === 'yes'} onChange={() => handleOptionChange('welding_on_steam', 'yes')} />
                          <div htmlFor="yes">Yes</div>
                      </div>
                      <div className={`centered-option${form5Data.welding_on_steam === 'no' ? ' selected' : ''}`}>
                        <input type="checkbox" id="no" name="welding_on_steam" value="no" checked={form5Data.welding_on_steam === 'no'} onChange={() => handleOptionChange('welding_on_steam', 'no')}/>
                        <div className='nowrap'>No (If no, explain on back of form)</div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                <td className='numero'>22</td>
                  <td colSpan="3">
                    <p className='nowrap'>SHOW ALL CODE STAMPING ON BACK OF FORM. Give details (use sketch) for</p>
                    <p className='nowrap'>special objects NOT covered above - such as double wall vessels, etc.</p>
                  </td>
                  <td colSpan="3">
                    <p className='nowrap'>DOES ALL MATERIAL OTHER THAN AS INDICATED ABOVE COMPLY WITH CODE?</p>
                    <div className="option-buttons reason-options">
                      <div className={`centered-option${form5Data.all_material_other === 'yes' ? ' selected' : ''}`}>
                        <input type="checkbox" id="yes" name="all_material_other" value="yes" checked={form5Data.all_material_other === 'yes'} onChange={() => handleOptionChange('all_material_other', 'yes')} />
                          <div htmlFor="yes">Yes</div>
                      </div>
                      <div className={`centered-option${form5Data.all_material_other === 'no' ? ' selected' : ''}`}>
                        <input type="checkbox" id="no" name="all_material_other" value="no" checked={form5Data.all_material_other === 'no'} onChange={() => handleOptionChange('all_material_other', 'no')}/>
                        <div className='nowrap'>No (If no, explain on back of form)</div>
                      </div>
                    </div>
                  </td>
                </tr>
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
                {/* Contenido de la segunda página */}
                <tr>
                <td>OTHER CONDITIONS AND REQUIREMENTS</td>
                </tr>
                <tr>
                    <td><input type="text" id="other_conditions" name="other_conditions" value={form5Data.other_conditions} onChange={handleChange} /></td>
                </tr>
                <tr>
                    <td colSpan="5">
                      <div className="custom-box2">
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
        </div>
        <div className="button-container">
        <div className="centered-buttons">
          <button type="submit">Enviar</button>
          <button onClick={handleSaveAndExit}>Guardar y Salir</button>
          <button onClick={handleCancel}>Cancelar</button>
        </div>
      </div>
      <div className="arrow-container">
        <div style={{ marginTop: '7px'}}>
          <ArrowBackIcon style={{ fontSize: ' rem' }} variant="contained" color="primary" onClick={handleGoBack} />
        </div>
      </div>
    </div>
  </form>
  );
};

export default NB5;

