var express = require('express');
var router = express.Router();

function unixToDate(timestamp) {
  var a = new Date(timestamp * 1000);
  var year = a.getFullYear();
  var month = a.getFullMonth() + 1;
  var date = a.getDate();
  var time = date + "/" + month + "/" + year;
  return time;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/:day/:month/:year', function(req, res) {
  var day = req.params.day;
  var month = req.params.month;
  var year = req.params.year;
  console.log(day + month + year);

  if ()  {// REVIEW: Make sure its a date

  } else {
    //if its a timestamp
  }

});

router.get(':unix', function(req, res) {
  var timestamp = req.params.unix;
  var regex = new RegExp("\d{10}(\d{1,2})?");
  if (regex.test(timestamp)) {
    var date = unixToDate(timestamp);
    res.json({ unix : timestamp, naturalLanguage : date }))
  } else {
    res.json({ unix: null, naturalLanguage : null}))
  }
});

module.exports = router;
