import fs from 'fs'
import * as http from 'http'

http.createServer(function(req,res){
    let recurso = req.url

    if(recurso === '/pedro.html'){
        fs.readFile('./html/pedro.html', function (err, data) {
            res.write(data);
        })
    } else {
        res.write('<p>Hola Mundo</p>')
    }
    res.end();

}).listen(1880)