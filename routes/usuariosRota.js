import express from "express";
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const usuariosData = [];

router.get('/', (req,res) => {
    console.log(usuariosData);
    res.send(usuariosData)
});

router.post('/', (req,res) => {
    const usuario = req.body;
    usuariosData.push({...usuario, id: uuidv4()});

    res.send(`${usuario.primeiroNome} adicionado a tabela`);
})

export default router;