import express from 'express'
import fetch from 'node-fetch'
import cors from 'cors'

const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(cors())

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log('Server started on port ' + PORT))

app.post('/shorten', (req, res) => {
    fetch('https://short-link-api.vercel.app/?query=' + req.body.url)
        .then(data => data.json()).then(data => res.json({ url: data['click.ru'] }))
})