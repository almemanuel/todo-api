import { Router } from 'express'
import { getTodos, createTodo } from '../controllers/todo.controller'

const router = Router()

router.post('/todos', createTodo)
router.get('/todos', getTodos)

export default router
