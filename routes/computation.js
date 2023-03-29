var express = require('express');

var router = express.Router();



/* GET home page. */

router.get('/', function(req, res, next) {

    var a1=(Math.random())

    var a2=(Math.random())

    var a3=(Math.random())

    var a4=(Math.random())

    var coshFunction=Math.acosh(a1)

    var logFunction=Math.log1p(a2)

    var tanFunction=Math.tan(a3)

    var srtFunction=Math.sqrt(a4)



    res.render('computation',

    {

        title:'Mounitha Vemula Computes Functions',

        a1:a1,

        a2:a2,

        a3:a3,

        a4:a4,

        f:coshFunction,
        
        r:logFunction,

        t:tanFunction,

        s:srtFunction,



    });

     

});

module.exports=router;