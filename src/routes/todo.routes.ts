import { Router } from 'express'
import { getTodos, getById, createTodo, updateTodo, deleteTodo } from '../controllers/todo.controller'

const router = Router()

router.get('/todos', getTodos)
router.get('/todos/:id', getById)

router.post('/todos', createTodo)

router.put('/todos/:id', updateTodo)

router.delete('/todos/:id', deleteTodo)

export default router
