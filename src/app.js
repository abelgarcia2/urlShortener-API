import express from "express";
import apiRoutes from './routes/api.routes.js'

import morgan from 'morgan'

const app = express()

app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

app.get('/', (req, res) => res.json({ 'msg': 'Welcome to shortLink' }))

app.use("/", apiRoutes)

export default app