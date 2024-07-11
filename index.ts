import type { Request, Response } from 'express'
import express from 'express'
import path from 'path'

const app = express()
const port = 3000

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'src/part1.html'))
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
