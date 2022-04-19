import express from 'express'; 
import path from 'path';
import fs from 'fs';

const router = express.Router()
router.get('/new', function(req,res){
    res.sendFile('./templates/new.html', { root : path.resolve() })
})

router.post('/new',function(req, res){
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

        res.redirect('/persons')
    })
    
})

router.get('/persons',function(req, res){
    fs.readFile("./data/persons.json", function(err, data){
        const personas = err ? [] : JSON.parse(data.toString())

        res.write('<html><body><a href="http://localhost:1880/new">Volver</a><ul>')
        
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

export default router