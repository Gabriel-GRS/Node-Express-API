import express from "express";
import { v4 as uuidv4 } from 'uuid';
import { useSSRContext } from "vue";

const router = express.Router();

let usuariosData = [];

router.get('/', (req,res) => {
    console.log(usuariosData);
    res.send(usuariosData)
});

router.post('/', (req,res) => {
    const usuario = req.body;
    usuariosData.push({...usuario, id: uuidv4()});
    res.send(`${usuario.primeiroNome} adicionado a tabela`);
})

router.get('/:id', (req,res) => {
    const { id } = req.params;
    const usuarioSpotado = usuariosData.find((usuario) => usuario.id === id)
    res.send(usuarioSpotado);
})

router.delete('/:id', (req,res) => {
    const { id } = req.params;
    usuariosData = usuariosData.filter((usuario) => usuario.id !== id);
    res.send(`O usuário com o id ${id} foi deletado do banco`)
});

router.patch('/:id', (req,res) => {
    const { id } = req.params;
    const { primeiroNome, segundoNome, idade} = req.body;
    const usuario = usuariosData.find((usuario) => usuario.id === id);

    if(primeiroNome) usuario.primeiroNome = primeiroNome;
    if(segundoNome) usuario.segundoNome = segundoNome;
    if(idade) usuario.idade = idade;
  
    res.send(`O conteúdo do usuario com o id ${id} foi modificado`)
})

export default router;