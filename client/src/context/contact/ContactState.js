import React, { useReducer } from 'react';
//uuid generate random id becaues before working with api we will work with hardcoded data
import { v4 as uuid } from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Jane Doe',
        phone: '876-768-876',
        email: 'doe@gmail.com',
        type: 'professional',
      },
      {
        id: 2,
        name: 'Zapata',
        phone: '123-768-876',
        email: 'zoe@gmail.com',
        type: 'personal',
      },
      {
        id: 3,
        name: 'Kurt Weller',
        phone: '890-768-876',
        email: 'kurt@gmail.com',
        type: 'professional',
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);
  //here state will allow us access any state in the state.
  //dispatch will allow us disptach any object to the reducer that is contactReducer.

  //Add Contact
  const addContact = (contact) => {
    contact.id = uuid();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  //Delete Contact

  //Set Current Contact

  //Clear Current Contact

  //Update Contact

  //Filter Contacts

  //Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
