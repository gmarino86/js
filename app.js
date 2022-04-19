import express from "express";
import PersonasRouter from './routes/persons.route.js';

const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({
    extended: false
}))
app.use(PersonasRouter)

app.listen(1880, function () {
    console.log("Hola Mundo!")
})