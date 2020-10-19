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
           

        ],
        current:null,
        filtered:null
    };
    const [state,dispatch] = useReducer(contactReducer,initialState);

    // Add Contact

const addContact = (contact ) => {
      contact.id = uuid.v4;
    dispatch({ type:ADD_CONTACT,payload:contact});

}
    // delete contact

    const deleteContact = id => {
      dispatch({ type:DELETE_CONTACT,payload:id});
  
  }

    // Set Current contact
    const setCurrent = contact => {
        dispatch({ type:SET_CURRENT,payload:contact});
    
    }


    // Clear Current contact
    const clearCurrent = () => {
        dispatch({ type:CLEAR_CURRENT});
    
    }

    // Update Contact
    const updateContact = contact => {
        dispatch({ type:UPDATE_CONTACT,payload:contact});
    
    }

    // Filter contacts
    const filterContacts = text => {
        dispatch({ type:FILTER_CONTACTS,payload:text});
    
    }

    // Clear filters

    const clearFilter = () => {
        dispatch({ type:CLEAR_FILTER});
    
    }

    return (
      <ContactContext.Provider
      value= {{
            contacts:state.contacts,
            current:state.current,
            filtered:state.filtered,
            addContact,
            deleteContact,
            setCurrent,
            clearCurrent,
            updateContact,
            filterContacts,
            clearFilter
      }}
      
      >

      {props.children}
      </ContactContext.Provider>
    );
     

};

export default ContactState;