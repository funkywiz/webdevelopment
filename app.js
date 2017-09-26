(function(){
    var express = require('express');
    var path =  require('path');
    var app = express();
 	app.use('/', express.static(__dirname + '/client'));
    app.listen(3030);
    console.log("Server running on 3030");
})();