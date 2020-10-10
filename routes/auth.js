const express = require('express');

const router = express.Router();

// @route  GET api/auth
// @desc   Get a Logged in user
// @access  Private


router.get('/',(req,res)=>{
    res.send('Get a logged in user');
});


// @route  POST api/auth
// @desc   Auth User and get token
// @access  Public


router.post('/',(req,res)=>{
    res.send('Log in user');
});


// Export 

module.exports = router;