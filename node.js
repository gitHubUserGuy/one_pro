var http=require("http");
var server=http.createServer((request, response)=>{
	response.writeHead("content-type", "text/html, utf-8");
	
});
server.listen(8000, ()=>{

});
