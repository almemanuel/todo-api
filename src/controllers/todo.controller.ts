import 'dotenv/config'
import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import { PrismaPg} from '@prisma/adapter-pg'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
const prisma = new PrismaClient({ adapter })

// GET /todos - lista todos os to-dos
export const getTodos = async (req: Request, res: Response) => {
  const todos = await prisma.todo.findMany()
  res.json(todos)
}

// POST /todos - cria um novo to-do
export const createTodo = async (req: Request, res: Response) => {
    const { title} = req.body
    const todo = await prisma.todo.create({
        data: { title}
    })
    res.status(201).json(todo)
}
