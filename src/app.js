import express from 'express';
import morgan from 'morgan';
import './db.js';
import apiRoutes from './routes/api.routes.js';

const app = express();

app.use(express.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.get('/', (req, res) => res.json({ 'msg': 'Welcome to shortLink' }));

app.use('/', apiRoutes);

app.listen(process.env.PORT, console.log('Server started on port ' + process.env.PORT));

export default app;