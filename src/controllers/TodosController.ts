import express, { Request, Response } from "express"
import { PrismaClient, Todo } from "../generated/prisma"

const TodosController = () => {
    const router = express.Router()

    router.get("/", async (req : Request, resp : Response) => {
        const prisma = new PrismaClient()
    
        const estado = req.query.estado
        const usuarioId = req.headers["usuarioid"]
    
        if (usuarioId == undefined) {
            resp.status(400).json({
                msg : "Es necesario que envies un codigo de usuario."
            })
            return
        }

        if (estado == undefined) {
            // No hay estado, devolvemos todos los TODOs
            const todos = await prisma.todo.findMany({
                relationLoadStrategy: 'join',
                where : {
                    usuarioId : parseInt(usuarioId.toString())
                },
                include : {
                    categoria : true
                }
            })
            resp.json(todos)
            return
        }
    
        // Devolvemos los TODOs filtrados por estado
        const todos = await prisma.todo.findMany({
            relationLoadStrategy: 'join',
            where : {
                estado : estado == "0" ? false : true,
                usuarioId : parseInt(usuarioId.toString())
            },
            include : {
                categoria : true
            }
        })

        resp.json(todos)
    })
    
    router.get("/:id", async (req : Request, resp : Response) => {
        const prisma = new PrismaClient()
        const id = parseInt(req.params.id)
    
        const todo = await prisma.todo.findUnique({
            where : {
                id : id
            }
        })
    
        if (todo == null) {
            // Error: no se encontro
            resp.status(400).json({
                msg : "Codigo incorrecto"
            })
        }
    
        resp.json(todo)
    })
    
    router.post("/", async (req : Request, resp : Response) => {
        const prisma = new PrismaClient()
        const todo = req.body
    
        if (todo.descripcion == undefined)
        {
            resp.status(400).json({
                msg : "Debe enviar campo"
            })
            return
        }
    
        const todoCreado = await prisma.todo.create({
            data : todo
        })
    
        resp.json({
            msg : "",
            todo : todoCreado
        })
    })
    
    router.put("/:id", async (req : Request, resp : Response) => {
        const prisma = new PrismaClient()
        const todo = req.body
        const todoId = parseInt(req.params.id)
    
        if (todoId == undefined)
        {
            resp.status(400).json({
                msg : "Debe enviar un id como parte del path"
            })
            return
        }
    
        try {
            const todoModificado = await prisma.todo.update({
                where : {
                    id : todoId
                },
                data : todo
            })
            resp.json({
                msg : "",
                todo : todoModificado
            })
        }catch( e ) {
            resp.status(400).json({
                msg : "No existe todo con ese id"
            })
        }
    })
    
    router.delete("/:id", async (req : Request, resp : Response) => {
        const prisma = new PrismaClient()
        const todoId = parseInt(req.params.id)
    
        if (todoId == undefined) {
            resp.status(400).json({
                msg : "Debe enviar un ID de Todo."
            })
            return
        }
    
        try {
            await prisma.todo.delete({
                where : {
                    id : todoId
                }
            })
            resp.json({
                msg : ""
            })
        }catch (e) {
            resp.status(400).json({
                msg : "No existe Todo con ese id"
            })
            return
        }
    })

    return router
}

export default TodosController