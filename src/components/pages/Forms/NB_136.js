import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../../css/forms2.css';
import TopBar from '../TopBar';

const NB136 = () => {
  const [form136Data, setFormData] = useState({
    job_No: '',
    name_jurisdiction: '',
    address: '',
    telephone: '',
    name_ower: '',
    address_owner: '',
    name_contact: '',
    email: '',
    telephone_contact: '',
    same_as: null,
    stock_item: null,
    name_installation: '',
    address_installation: '',
    date_installation: '',
    unknown_installation: null,
    name_manufacturer: '',
    data_report: null,
    item_registered_nacional: null,
    nb_number: '',
    type_item: '',
    serial_item: '',
    jurisdiction_item: '',
    year_built: '',
    dimensions: '',
    mawp_psi: '',
    safety_relief: '',
    nameplate: null,
    traceability: null,
    name_user: '',
    number_certificate: '',
    signature_representative: '',
    date_replace: '',
    signature_jurisdiction: '',
    date_jurisdiction: '',
    nacional_board_commission: '',
    number_jurisdiction: '',
    facsimile: '',
    name_user_certify: '',
    number_certificate_certify: '',
    signature_representative_certify: '',
    date_replace_certify: '',
    name_inspector: '',
    employer: '',
    signature_inspector: '',
    date_inspector: '',
    nb_commission: '',
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
        form136Data.assesment_No.trim() === '' ||
        form136Data.name_jurisdiction.trim() === '' ||
        form136Data.address.trim() === '' ||
        form136Data.telephone.trim() === '' ||
        form136Data.name_ower.trim() === '' ||
        form136Data.address_owner.trim() === '' ||
        form136Data.name_contact.trim() === '' ||
        form136Data.email.trim() === '' ||
        form136Data.telephone_contact.trim() === '' ||
        form136Data.same_as === null ||
        form136Data.stock_item === null ||
        form136Data.name_installation.trim() === '' ||
        form136Data.address_installation.trim() === '' ||
        form136Data.date_installation.trim() === '' ||
        form136Data.unknown_installation === null ||
        form136Data.name_manufacturer.trim() === '' ||
        form136Data.data_report.trim() === '' ||
        form136Data.item_registered_nacional.trim() === '' ||
        form136Data.nb_number.trim() === '' ||
        form136Data.type_item.trim() === '' ||
        form136Data.serial_item.trim() === '' ||
        form136Data.jurisdiction_item.trim() === '' ||
        form136Data.year_built.trim() === '' ||
        form136Data.dimensions.trim() === '' ||
        form136Data.mawp_psi.trim() === '' ||
        form136Data.safety_relief.trim() === '' ||
        form136Data.nameplate === null ||
        form136Data.traceability === null ||
        form136Data.name_user.trim() === '' ||
        form136Data.number_certificate.trim() === '' ||
        form136Data.signature_representative.trim() === '' ||
        form136Data.date_replace.trim() === '' ||
        form136Data.signature_jurisdiction.trim() === '' ||
        form136Data.date_jurisdiction.trim() === '' ||
        form136Data.nacional_board_commission.trim() === '' ||
        form136Data.number_jurisdiction.trim() === '' ||
        form136Data.facsimile.trim() === '' ||
        form136Data.name_user_certify.trim() === '' ||
        form136Data.number_certificate_certify.trim() === '' ||
        form136Data.signature_representative_certify.trim() === '' ||
        form136Data.date_replace_certify.trim() === '' ||
        form136Data.name_inspector.trim() === '' ||
        form136Data.employer.trim() === '' ||
        form136Data.signature_inspector.trim() === '' ||
        form136Data.date_inspector.trim() === '' ||
        form136Data.nb_commission.trim() === ''
      ) {
        // Mostrar mensaje de error o realizar alguna acción adicional
        console.log('Todos los campos obligatorios deben ser completados');
        return false;
      }
    
      return true;
    };

    const isValid = validateForm();

    if (isValid) {
      const form136Data = {
        job_No: '',
        assesment_No: '',
        address: '',
        telephone: '',
        name_ower: '',
        address_owner: '',
        name_contact: '',
        email: '',
        telephone_contact: '',
        same_as: null,
        stock_item: null,
        name_installation: '',
        address_installation: '',
        date_installation: '',
        unknown_installation: null,
        name_manufacturer: '',
        data_report: '',
        item_registered_nacional: null,
        nb_number: '',
        type_item: '',
        serial_item: '',
        jurisdiction_item: '',
        year_built: '',
        dimensions: '',
        mawp_psi: '',
        safety_relief: '',
        nameplate: null,
        picture_nameplate: '',
        traceability: null,
        name_user: '',
        number_certificate: '',
        signature_representative: '',
        date_replace: '',
        signature_jurisdiction: '',
        date_jurisdiction: '',
        nacional_board_commission: '',
        number_jurisdiction: '',
        facsimile: '',
        name_user_certify: '',
        number_certificate_certify: '',
        signature_representative_certify: '',
        date_replace_certify: '',
        name_inspector: '',
        employer: '',
        signature_inspector: '',
        date_inspector: '',
        nb_commission: '',
      };

      setFormData(form136Data);

      // Enviar datos de la persona al endpoint /api/persons
      fetch('http://localhost:3000/api/form/nb136', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form136Data),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Registro de formulario nb-136 exitoso:', data);
        })
        .catch(error => {
          console.error('Error al registrar formulario nb-136:', error);
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
    <div className='nowrap'>FORM NB-136</div>
      <br />
      <div className='nowrap'>NEW BUSINESS OR DISCONTINUANCE</div>
      <br />
      <div className='nowrap'>USED BY AUTHORIZED INSPECTION AGENCIES</div>
    </div>
    <div className="container">
      <table> 
      <tbody>
        <tr>
          <td colSpan="5">
            <div>
              1.
              <input type="text" id="job_No" name="job_No" value={form136Data.job_No} onChange={handleChange} />
              <div className='nowrap'>(P.O. no., job no., etc.) </div>
            </div>
          </td>
        </tr>
        <tr>
          <td> 2. SUBMITTED TO: </td>
          <td colSpan="4">
            <div>
              <input type="text" id="name_jurisdiction" name="name_jurisdiction" value={form136Data.name_jurisdiction} onChange={handleChange} />
              <div className='nowrap'>(Name of Jurisdiction) </div>
            </div>
          </td>
        </tr>
        <tr>
          <td colSpan="5">
            <div>
              <input type="text" id="address" name="address" value={form136Data.address} onChange={handleChange} />
              (Address)
            </div>
          </td>
        </tr>
        <tr>
          <td colSpan="5">
            <div>
              <input type="text" id="telephone" name="telephone" value={form136Data.telephone} onChange={handleChange} />
              <div className='nowrap'>(Telephone no.)</div>
            </div>
          </td>
        </tr>
        <tr>
          <td>3. SUBMITTED BY:</td>
          <td colSpan="5">
            <div>
              <input type="text" id="name_ower" name="name_ower" value={form136Data.name_ower} onChange={handleChange} />
              <div className='nowrap'>(Name of Owner, User, or Certificate Holder)</div>
            </div>
          </td>
        </tr>
        <tr>
          <td colSpan="5">
            <div>
              <input type="text" id="address_owner" name="address_owner" value={form136Data.address_owner} onChange={handleChange} />
              (Address)
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div>
              4.
              <input type="text" id="name_contact" name="name_contact" value={form136Data.name_contact} onChange={handleChange} />
              <div className='nowrap'>(Name of contact)</div>
            </div>
          </td>
          <td>
            <div>
              <input type="text" id="email" name="email" value={form136Data.email} onChange={handleChange} />
              (Email)
            </div>
          </td>
          <td>
            <div>
              <input type="text" id="telephone_contact" name="telephone_contact" value={form136Data.telephone_contact} onChange={handleChange} />
              <div className='nowrap'>(Telephone no.)</div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <p> 5. LOCATION OF INSTALLATION:</p>
          </td>
          <td>
            <div className="form-option-buttons reason-options">
              <div className={`centered-option${form136Data.location === 'same_as' ? ' selected' : ''}`}>
                <input type="checkbox" id="same_as" name="location" value="same_as"
                  checked={form136Data.location === 'same_as'} onChange={() => handleOptionChange('location', 'same_as')}/>
                <div htmlFor="same_as" className='nowrap'>SAME AS #3</div>
              </div>
            </div>
          </td>
          <td>
            <div className="form-option-buttons reason-options">
              <div className={`centered-option${form136Data.location === 'stock_item' ? ' selected' : ''}`}>
                <input type="checkbox" id="stock_item" name="location" value="stock_item"
                  checked={form136Data.location === 'stock_item'} onChange={() => handleOptionChange('location', 'stock_item')}/>
                <div htmlFor="stock_item" className='nowrap'>STOCK ITEM-UNKNOWN</div>
              </div>
            </div>
            </td>
        </tr>
        <tr>
          <td colSpan="5">
            <div>
              <input type="text" id="name_installation" name="name_installation" value={form136Data.name_installation} onChange={handleChange} />
              (Name)
            </div>
          </td>
        </tr>
        <tr>
          <td colSpan="5">
            <div>
              <input type="text" id="address_installation" name="address_installation" value={form136Data.address_installation} onChange={handleChange} />
              (Address)
            </div>
          </td>
        </tr>
        <tr>
          <td><div htmlFor="unknown" className='nowrap'>6. DATE INSTALLED:</div></td>
          <td colSpan="2">
            <div>
              <input type="text" id="date_installation" name="date_installation" value={form136Data.date_installation} onChange={handleChange} />
            </div>
          </td>
          <td>
            <input type="checkbox" id="unknown_installation" name="unknown_installation" value={form136Data.unknown_installation} onChange={handleChange} />
          </td>
          <td>
            <div className='nowrap'>UNKNOWN</div>
          </td>
          <td></td>
        </tr>
        <tr>
          <td><div className='nowrap'>7. MANUFACTURER:</div></td>
          <td colSpan="4">
            <div>
              <input type="text" id="name_manufacturer" name="name_manufacturer" value={form136Data.name_manufacturer} onChange={handleChange} />
            </div>
          </td>
          <td></td>
        </tr>
        <tr>
          <td><div className='nowrap'>8. MANUFACTURER’S DATA REPORT ATTACHED:</div></td>
          <td>
            <div className={`centered-option${form136Data.data_report === 'No' ? ' selected' : ''}`}>
                <input type="checkbox" id="No" name="data_report" value="No"
                  checked={form136Data.data_report === 'No'} onChange={() => handleOptionChange('data_report', 'No')}/>
                  <div htmlFor="No">No</div>
              </div>
          </td>
          <td>
            <div className="option-buttons reason-options">
              <div className={`centered-option${form136Data.data_report === 'yes' ? ' selected' : ''}`}>
                <input type="checkbox" id="yes" name="data_report" value="yes"
                  checked={form136Data.data_report === 'yes'} onChange={() => handleOptionChange('data_report', 'yes')}/>
                  <div htmlFor="yes">Yes</div>
              </div>
            </div>
          </td>
          <td></td>
        </tr>
        <tr>
          <td> <div className='nowrap'>9. ITEM REGISTERED WITH NATIONAL BOARD:</div> </td>
          <td>
            <div className="option-buttons reason-options">
              <div className={`centered-option${form136Data.item_registered_nacional === 'No' ? ' selected' : ''}`}>
                <input type="checkbox" id="No" name="item_registered_nacional" value="No"
                  checked={form136Data.item_registered_nacional === 'No'} onChange={() => handleOptionChange('item_registered_nacional', 'No')}
                />
                <div htmlFor="No">No</div>
              </div>
            </div>
          </td>    
          <td>
            <div className="option-buttons reason-options">
              <div className={`centered-option${form136Data.item_registered_nacional === 'yes' ? ' selected' : ''}`}>
                <input type="checkbox" id="yes" name="item_registered_nacional" value="yes"
                  checked={form136Data.item_registered_nacional === 'yes'} onChange={() => handleOptionChange('item_registered_nacional', 'yes')}
                />
                <div htmlFor="yes" className='nowrap'>Yes, NB, NUMBER</div>
              </div>
            </div>
          </td>
          <td>
            <div>
              <input type="text" id="nb_number" name="nb_number" value={form136Data.nb_number} onChange={handleChange} />
            </div>
          </td>
        </tr>
        <tr>
          <td>10. ITEM IDENTIFICATION:</td>
          <td>
            <input type="text" id="type_item" name="type_item" value={form136Data.type_item} onChange={handleChange} />
            (Type)
          </td>
          <td>
            <input type="text" id="serial_item" name="serial_item" value={form136Data.serial_item} onChange={handleChange} />
            <div className='nowrap'>(Mfg. serial no.)</div>
          </td>
          <td>
            <input type="text" id="jurisdiction_item" name="jurisdiction_item" value={form136Data.jurisdiction_item} onChange={handleChange} />
            <div className='nowrap'>(Jurisdiction no.)</div>
          </td>
          <td>
            <input type="text" id="year_built" name="year_built" value={form136Data.year_built} onChange={handleChange} />
            (Year built)
          </td>
        </tr>
        <tr>
          <td>
            <input type="text" id="dimensions" name="dimensions" value={form136Data.dimensions} onChange={handleChange} />
            (Dimensions)
          </td>
          <td>
            <input type="text" id="mawp_psi" name="mawp_psi" value={form136Data.mawp_psi} onChange={handleChange} />
            (MAWP psi)
          </td>
          <td><div className='nowrap'> SAFETY RELIEF VALVE SET AT: </div></td>
          <td>
            <input type="text" id="safety_relief" name="safety_relief" value={form136Data.safety_relief} onChange={handleChange} />
            (psi)
          </td>
        </tr>
        <tr>
          <td>
          <p className='nowrap'>11. PROVIDE A TRUE FACSIMILE OF THE LEGIBLE PORTION OF THE NAMEPLATE:</p>
          </td>
          <td>
            <label className="attachment-label">
              <input type="checkbox" id="nameplate" name="nameplate" value="nameplate"
                checked={form136Data.nameplate === 'nameplate'} onChange={() => handleOptionChange('nameplate', 'nameplate')}
              /> 
              <span className="attachment-text">ATTACHED</span>
              </label>
          </td>
        </tr>
        <tr>
          <td colSpan="5">
          <p className='picture_nameplate'>THE FOLLOWING IS A TRUE FACSIMILE OF THE LEGIBLE PORTION OF THE ITEM’S ORIGINAL NAMEPLATE (IF AVAILABLE). PLEASE PRINT.</p>
          <p className='picture_nameplate'>WHERE POSSIBLE, ALSO ATTACH A RUBBING OR PICTURE OF THE NAMEPLATE.</p>
          </td>
        </tr>
        <tr>
          <td colSpan="5">
            <div class="custom-box">
              <p/>
              <p/>
              <p/>
            </div>
          </td>
        </tr>
        <tr>
          <td colSpan="5">
            <div className="traceability-section">
              <div className="text-container">
                <p className='picture_nameplate'>12. TRACEABILITY DOCUMENTATION – PROVIDE ANY DOCUMENTATION THAT WILL HELP THE JURISDICTION OR INSPECTOR VERIFY THE</p>
                <p className='picture_nameplate'>REQUESTED RE-STAMPING OR REPLACEMENT NAMEPLATE IS IN ACCORDANCE WITH THE ORIGINAL CODE OF CONSTRUCTION FOR THIS</p>
                <p className='picture_nameplate'>PRESSURE-RETAINING ITEM.</p>
              </div>
              <label className="attachment-label">
                <input type="checkbox" id="traceability" name="traceability" value="traceability"
                  checked={form136Data.traceability === 'traceability'} onChange={() => handleOptionChange('traceability', 'traceability')}
                />
                <span className="attachment-text">ATTACHED</span>
              </label>
            </div> 
          </td>
        </tr>

{/* Contenido de la segunda página */}
        <tr>
        <td colSpan="5">
            <div className="traceability-section">
              <div className="text-container">
                <p className='picture_nameplate'>13. I REQUEST AUTHORIZATION TO REPLACE THE STAMPED DATA OR NAMEPLATE ON THE ABOVE DESCRIBED PRESSURE-RETAINING</p>
                <p className='picture_nameplate'>ITEM IN ACCORDANCE WITH THE RULES OF THE NATIONAL BOARD INSPECTION CODE (NBIC).</p>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            NAME: 
          </td>
          <td colSpan={2}>
            <input type="text" id="name_user" name="name_user" value={form136Data.name_user} onChange={handleChange} />
            <p className='nowrap'>(Owner/user or “R” Certificate Holder)</p>
          </td>
          <td>
            NUMBER:
          </td>
          <td colSpan={2}>
            <input type="text" id="number_certificate" name="number_certificate" value={form136Data.number_certificate} onChange={handleChange} />
            <p className='nowrap'>(“R” Certificate Holder only)</p>
          </td>
        </tr>
        <tr>
          <td>
          SIGNATURE:
          </td>
          <td colSpan={2}>
          <input type="text" id="signature_representative" name="signature_representative" value={form136Data.signature_representative} onChange={handleChange} />
          <p className='nowrap'>(Authorized Representative)</p>
          </td>
          <td>
          DATE:
          </td>
          <td colSpan={2}>
          <input type="text" id="date_replace" name="date_replace" value={form136Data.date_replace} onChange={handleChange} />
          </td>
        </tr>
        <tr>
          <td>
            <p className='nowrap'>14. BASED ON THE TRACEABILITY PROVIDED, AUTHORIZATION IS GRANTED TO REPLACE THE STAMPED DATA OR TO REPLACE THE</p>
            <p className='nowrap'>NAMEPLATE OF THE ABOVE DESCRIBED PRESSURE-RETAINING ITEM.</p>
          </td>
        </tr>
        <tr>
          <td>SIGNATURE:</td>
          <td>
            <input type="text" id="signature_jurisdiction" name="signature_jurisdiction" value={form136Data.signature_jurisdiction} onChange={handleChange} />
            <p className='nowrap'>(Authorized Jurisdictional Representative or Inspector)</p>
          </td>
          <td>DATE:</td>
          <td>
            <input type="text" id="date_jurisdiction" name="date_jurisdiction" value={form136Data.date_jurisdiction} onChange={handleChange} />
          </td>
        </tr>
        <tr>
          <td>NATIONAL BOARD COMMISSION NO.:</td>
          <td>
          <input type="text" id="commission_national_board" name="commission_national_board" value={form136Data.commission_national_board} onChange={handleChange} />
          </td>
          <td>JURISDICTIONAL NUMBER:</td>
          <td>
          <input type="text" id="number_jurisdiction" name="number_jurisdiction" value={form136Data.number_jurisdiction} onChange={handleChange} />
          <p className='nowrap'>((If available))</p>
          </td>
        </tr>
        <tr>
          <div className="traceability-section">
            <div className="text-container">
              15. THE FOLLOWING IS A TRUE FACSIMILE OF THE ITEM’S REPLACEMENT STAMPING OR NAMEPLATE.
              <br/>
              <p className='nowrap'>(Must clearly state “replacement”)</p>
            </div>
          </div>
        </tr>
        <tr>
          <td colSpan="5">
            <div class="custom-box">
              <p/>
              <p/>
              <p/>
            </div>
          </td>
        </tr>

        <tr>
        <td colSpan="5">
            <div className="traceability-section">
              <div className="text-container">
                <p className='picture_nameplate'>16. I CERTIFY THAT TO THE BEST OF MY KNOWLEDGE AND BELIEF, THE STATEMENTS IN THIS REPORT ARE CORRECT, AND THAT THE</p>
                <p className='picture_nameplate'>REPLACEMENT INFORMATION, DATA, AND IDENTIFICATION NUMBERS ARE CORRECT AND IN ACCORDANCE WITH PROVISIONS OF</p>
                <p className='picture_nameplate'>THE NATIONAL BOARD INSPECTION CODE (NBIC).</p>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            NAME: 
          </td>
          <td colSpan={2}>
            <input type="text" id="name_user_certify" name="name_user_certify" value={form136Data.name_user_certify} onChange={handleChange} />
            <p className='nowrap'>(Owner/user or “R” Certificate Holder)</p>
          </td>
          <td>
            NUMBER:
          </td>
          <td colSpan={2}>
          <input type="text" id="number_certificate_certify" name="number_certificate_certify" value={form136Data.number_certificate_certify} onChange={handleChange} />
            <p className='nowrap'>(“R” Certificate Holder only)</p>
          </td>
        </tr>
        <tr>
          <td>
          SIGNATURE:
          </td>
          <td colSpan={2}>
          <input type="text" id="signature_representative_certify" name="signature_representative_certify" value={form136Data.signature_representative_certify} onChange={handleChange} />
          <p className='nowrap'>(Authorized Representative)</p>
          </td>
          <td>
          DATE:
          </td>
          <td colSpan={2}>
          <input type="text" id="date_replace_certify" name="date_replace_certify" value={form136Data.date_replace_certify} onChange={handleChange} />
          </td>
        </tr>
        <tr>
          <td>17. WITNESSED BY:</td>
          <td>
          <input type="text" id="name_inspector" name="name_inspector" value={form136Data.name_inspector} onChange={handleChange} />
          (Name of Inspector)
          </td>
          <td>EMPLOYER:</td>
          <td>
          <input type="text" id="employer" name="employer" value={form136Data.employer} onChange={handleChange} />
          </td>
        </tr>
        <tr>
          <td>
          SIGNATURE:
          </td>
          <td>
          <input type="text" id="signature_inspector" name="signature_inspector" value={form136Data.signature_inspector} onChange={handleChange} />
          </td>
          <td>DATE:</td>
          <td>
          <input type="text" id="date_inspector" name="date_inspector" value={form136Data.date_inspector} onChange={handleChange} />
          </td>
          <td>
          NB COMMISSION NO.:
          </td>
          <td>
          <input type="text" id="nb_commission" name="nb_commission" value={form136Data.nb_commission} onChange={handleChange} />
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

export default NB136;
