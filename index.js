import express from 'express';
import bodyParser from 'body-parser';
import usuariosRota from './routes/usuariosRota.js';

const app = express();
const PORT = 5000;


app.use(bodyParser.json());

app.use('/usuarios', usuariosRota);

app.get('/', (req,res) => res.send('Página inicial'));


app.listen(PORT, () => console.log(`Servidor rodando na porta http://localhost:${PORT}`));