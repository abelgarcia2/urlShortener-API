import express from "express";
import apiRoutes from './routes/api.routes.js'

const app = express()

app.use(express.json())

app.get('/', (req, res) => res.json({ 'msg': 'Welcome to shortLink' }))

app.use("/", apiRoutes)

export default app