import React , { useReducer } from 'react';
// import uuid from 'uuid';
 import {v4 as uuid} from 'uuid'; 
//  import uuid from 'uuid/v4';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';

import {

    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types';

// create a state

const ContactState = props => {
    const initialState = {
        contacts:[
            {
                id:1,
                name:'jill johnson',
                email:'jill@gmail.com',
                phone:'111-111-111',
                type:'personal'

            },
            {
                id:2,
                name:'jim johnson',
                email:'jim@gmail.com',
                phone:'333-333-333',
                type:'professional'

            },
            {
                id:3,
                name:'maddinson',
                email:'mad@gmail.com',
                phone:'555-555-555',
                type:'professional'

            }
           

        ]
    };
    const [state,dispatch] = useReducer(contactReducer,initialState);

    // Add Contact
const addContact = (contact ) => {
      contact.id = uuid.v4;
    dispatch({ type:ADD_CONTACT,pay_load:contact});

}
    // delete contact

    // Set Current contact

    // Clear Current contact

    // Update Contact

    // Filter contacts

    // Clear filters

    return (
      <ContactContext.Provider
      value= {{
            contacts:state.contacts,
            addContact
      }}
      
      >

      {props.children}
      </ContactContext.Provider>
    );
     

};

export default ContactState;