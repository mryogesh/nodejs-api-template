const router = require('express').Router('');

let aliases = [
  {route: 'api/helloworld/routes', alias: 'helloworld'}
];

aliases.forEach(
    item => router.use('/' + item.alias, require('./' + item.route)));

module.exports = router;