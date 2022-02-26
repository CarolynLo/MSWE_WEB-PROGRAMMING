var http=require('http');
var fs=require('fs');



function serveStaticFile(res, path, contentType, responseCode) {
	if(!responseCode){
		responseCode=200;
	}
	fs.readFile(__dirname+path, function(err,data){
		if(err){
			res.writeHead(500,{'contentType':'text/plain'});
			res.end('500 - internal error');
		}
		else{
			res.writeHead(responseCode, {'Content-Type':'contentType'});
			res.end(data);
		}
	});
}
var express=require('express');
var app = express();
app.use(express.static(__dirname+'/public'));

http.createServer(app, function(req,res){
	var path=req.url;
	switch(path){
		case '/':
			serveStaticFile(res,'/index.html','text/html');
			break;
		default:
			serveStaticFile(res,'/404.html','text/html',404);
			break;
	}
}).listen(3000);

console.log('Server started: http://localhost:3000');