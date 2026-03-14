import express from 'express'

const app = express()
const PORT = 3000

app.use(express.json())

// callback than runs when the server is running
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
