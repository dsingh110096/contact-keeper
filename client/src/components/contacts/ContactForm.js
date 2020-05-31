import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';
import AlertContext from '../../context/alert/alertContext';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const alertContext = useContext(AlertContext);
  const { addContact, updateContact, current, clearCurrent } = contactContext;
  const { setAlert } = alertContext;

  //useEffect works as component did mount
  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal',
      });
    }
  }, [current]);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal',
  });

  const { name, email, phone, type } = contact;

  const onChange = (e) => setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    if (name === '' || email === '' || phone === '') {
      setAlert('Please fill all fields', 'success');
    }
    if (current === null) {
      addContact(contact);
      setContact({ name: '', email: '', phone: '', type: 'personal' });
    } else {
      updateContact(contact);
    }
    clearCurrent();

    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit} autoComplete='off'>
      <h2 className='text-primary'>{current ? 'Edit Contact' : 'Add Contact'}</h2>
      <input type='text' placeholder='Name' value={name} name='name' onChange={onChange} />
      <input type='email' placeholder='Email' value={email} name='email' onChange={onChange} />
      <input type='text' placeholder='Phone' value={phone} name='phone' onChange={onChange} />
      <h5>Contact Type</h5>
      <input
        type='radio'
        name='type'
        value='personal'
        checked={type === 'personal'}
        onChange={onChange}
      />{' '}
      Personal{' '}
      <input
        type='radio'
        name='type'
        value='professional'
        checked={type === 'professional'}
        onChange={onChange}
      />{' '}
      Professional{' '}
      <div>
        <input
          type='submit'
          value={current ? 'Update Contact' : 'Add Contact'}
          className='btn btn-block btn-primary'
        />
      </div>
      {current && (
        <div>
          <button
            className='btn btn-light btn-block'
            onClick={() => {
              clearCurrent();
            }}
          >
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
