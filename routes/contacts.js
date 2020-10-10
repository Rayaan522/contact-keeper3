const express = require('express');

const router = express.Router();

// @route  GET api/contacts
// @desc  Get all Contacts
// @access  Private


router.get('/',(req,res)=>{
    res.send('Get all Users');
});

// @route  POST api/contacts
// @desc  Add a Contact
// @access  Private


router.post('/',(req,res)=>{
    res.send('Add a Contact');
});

// @route  PUT api/contacts/:id
// @desc  Update Contact
// @access  Private


router.put('/:id',(req,res)=>{
    res.send('Update a Contact');
});
// @route  DELETE api/contacts
// @desc  Delete Contact
// @access  Private


router.delete('/:id',(req,res)=>{
    res.send('Delete a Contact');
});

// Export 

module.exports = router;