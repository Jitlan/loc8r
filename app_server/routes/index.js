var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

/*var homepageController = function (req, res){ <---Where router looks for URL
  res.render('index', {title: 'Express'}) <---Controller content
};*/

/* GET home page. */
router.get('/', ctrlMain.index);

module.exports = router;

