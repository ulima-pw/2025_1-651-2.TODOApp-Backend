import express, { Request, Response } from "express"
import dotenv from "dotenv"
import { listaTODOs, TODO } from "./data"
import bodyParser from "body-parser"

dotenv.config()
const app = express()

// Configuracion del servidor HTTP para recibir peticiones
// por el payload (cuerpo)y convertirlos en objetos js/ts
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended : true
}))

const PORT = process.env.PORT


app.get("/", (req : Request, resp : Response) => {
    resp.send("Endpoint raiz")
})

app.get("/todos", (req : Request, resp : Response) => {
    const todos = listaTODOs
    resp.json(todos)
})

app.get("/todos/:id", (req : Request, resp : Response) => {
    const id = req.params.id

    let todoEncontrado : TODO | null = null
    for (let todo of listaTODOs) {
        if (todo.id.toString() == id) {
            todoEncontrado = todo
            break;
        }
    }

    if (todoEncontrado == null) {
        // Error: no se encontro
        resp.status(400).json({
            msg : "Codigo incorrecto"
        })
    }

    resp.json(todoEncontrado)
})

app.post("/todos", (req : Request, resp : Response) => {
    const todo = req.body
    const todos = listaTODOs

    if (todo.descripcion == undefined)
    {
        resp.status(400).json({
            msg : "Debe enviar campo"
        })
        return
    }

    todos.push({
        descripcion : todo.descripcion,
        id : new Date().getTime()
    })

    resp.json({
        msg : ""
    })
})

app.listen(PORT, () => {
    console.log(`Se inicio servidor en puerto ${PORT}`)
})