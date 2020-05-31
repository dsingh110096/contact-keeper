import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const { _id, name, email, phone, type } = contact;

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {name}{' '}
        <span
          style={{ float: 'right' }}
          className={'badge ' + (type === 'professional' ? 'badge-success' : 'badge-primary')}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
          {/*basically here chatAt(0) will convert first letter to upparcase and show it erase all character of the word so to get all other charcter back we use slice type.slice(1) slice will leave of the first charater and all character will come back except first one(basically slice remove it from string) because we have already have at by using chatAt()*/}
        </span>
      </h3>
      <ul className='list'>
        {email && (
          <li>
            <i className='fas fa-envelope-open'></i> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className='fas fa-phone'></i> {phone}
          </li>
        )}
      </ul>
      <p>
        <button className='btn btn-dark btn-sm' onClick={() => setCurrent(contact)}>
          Edit
        </button>
        <button
          className='btn btn-danger btn-sm'
          onClick={() => {
            deleteContact(_id);
            clearCurrent();
          }}
        >
          Delete
        </button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};
export default ContactItem;
