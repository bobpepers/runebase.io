var fs = require("fs");
var port = 3000;
var express = require("express");

var app = express();
app.use(express.static(__dirname + "/public")); //use static files in ROOT/public folder
app.use('/assets', [
    express.static(__dirname + '/node_modules/jquery/dist/'),
    express.static(__dirname + '/node_modules/jquery.easing/'),
    express.static(__dirname + '/node_modules/bootstrap/dist/js/'), //?
    express.static(__dirname + '/node_modules/waypoints/lib/'),
    express.static(__dirname + '/node_modules/owl.carousel/dist/'),
    express.static(__dirname + '/node_modules/jquery-countto/'),
    express.static(__dirname + '/node_modules/magnific-popup/dist/'),
]);

app.get("/", function(request, response){ //root dir
    response.send(express.static(__dirname + "/public"));
});

app.listen(port, () => console.log('app listening on port ' + port))
