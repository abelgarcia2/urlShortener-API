import express from "express";
import morgan from 'morgan'

import apiRoutes from './routes/api.routes.js'
import { PORT } from './config.js'
import './db.js'


const app = express()

app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

app.get('/', (req, res) => res.json({ 'msg': 'Welcome to shortLink' }))

app.use("/", apiRoutes)

app.listen(PORT, console.log('Server started on port ' + PORT))

export default app