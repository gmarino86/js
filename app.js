import express from "express";
import fs from 'fs';

const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({
    extended: false
}))

app.post('/new',function(req, res){
    fs.readFile("./data/persons.json", function(err, data){
        const personas = err ? [] : JSON.parse(data.toString())

        let persona = {
            name:req.body.name,
            type: req.body.type
        }

        personas.push(persona);

        fs.writeFile('./data/persons.json', JSON.stringify(personas), function(err){
            console.log(err)
        })
        res.redirect('http://localhost:1880/new.html')
    })
    
})

app.get('/persons',function(req, res){
    fs.readFile("./data/persons.json", function(err, data){
        const personas = err ? [] : JSON.parse(data.toString())

        res.write('<html><body><ul>')
        
        personas.forEach(a => {
            res.write(`
                <li>
                Nombre: ${a.name}, Typo: ${a.type}
                </li>                
            `)
        });

        res.write('</ul></body></html>')
        res.end()
    })
    
})

app.listen(1880, function () {
    console.log("Hola Mundo!")
})