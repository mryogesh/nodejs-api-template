let bl = require('./bl');
let router = require('express').Router('');

router.get('/', bl.h);

module.exports = router;