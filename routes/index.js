var express = require('express');
var router = express.Router();

function unixToDate(timestamp) {
  var a = new Date(timestamp * 1000);
  //console.log(a);
  var rgx = /T(\d{2}):(\d{2}):(\d{2}).(\d{3})Z/;
  var newA = JSON.stringify(a);
  //console.log(newA.replace(rgx, ""));
  return newA.replace(rgx, "");
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
  var d = new Date();
  if (year <= d.getFullYear() && day <= 31 && month <= 12)  {
    var resDate = new Date(year + "-" + month + "-" + day).getTime() / 1000;
    console.log(resDate);
    res.json({unix : resDate, naturalFormat : year + "-" + month + "-" + day });
  } else {
    res.json({ unix: null, naturalFormat : null});
  }

});

router.get('/:unix', function(req, res) {
  var timestamp = req.params.unix;
  var regex = new RegExp("\\d{10}");
  if (regex.test(timestamp)) {
    var date = unixToDate(timestamp);
    console.log(date);
    res.json({ unix : timestamp, naturalFormat : date });
  } else {
    res.json({ unix: null, naturalFormat : null});
  }
});

module.exports = router;
