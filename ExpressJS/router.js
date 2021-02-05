var express = require('express');
var router = express.Router();

// ([0-9]{5}) can set five-digit number only
// ([A-Z]{5}) can set five-digit letter only
router.get('/:id([0-9]{5})', function(req, res) {
    res.send('GET route on things. The id you specified is ' + req.params.id);
});

// /file/:id/:name
router.post('/:id', function(req, res) {
    res.send('POST route on things. The id you specified is ' + req.params.id);
});

module.exports = router;