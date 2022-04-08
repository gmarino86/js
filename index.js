import * as http from 'http';

http.createServer(function(req,res){
    console.log(req.url)

    if(req.url == '/pedro') {
        fs.readFile('html/pedro.html',(err, data) => {
            res.write(data);
            res.end();
        })
    }
    res.write("Hola Mundo");
    res.end();
}).listen(1986)