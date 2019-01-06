const express = require('express');
var nunjucks = require('nunjucks');
var app = express();
var port = process.env.PORT || 5000;

app.set('view engine', 'html');
app.set('port', (process.env.PORT || 5000));

nunjucks.configure((__dirname+'/views'), {
	autoescape: true,
	express: app
});

app.use(express.static(__dirname + '/public'));

app.get(['/',';index.html'],function(req, res){
    res.render('index.html');
});

app.listen(port, function(){
    console.log('listening on *:' + port);

});