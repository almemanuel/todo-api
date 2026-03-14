import express from 'express'
import 'dotenv/config'
import todoRoutes from './routes/todo.routes'

const app = express()
const PORT = 3000

app.use(express.json())
app.use(todoRoutes)

// callback than runs when the server is running
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
