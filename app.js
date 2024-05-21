import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

var app = express()
app.use(bodyParser.json())
app.use(cors())

const port = 3000;

var meusPedidos = [];

/* usando async como boa prática, simula a operação no mundo real */
app.get("/", async (req, res) => {
    res.status(200).json({meusPedidos}); /* retorna os pedidos com status 200 */
});

app.post("/", async (req, res) => {
    const newProduct = req.body
    meusPedidos.push(newProduct); /* adiciona o novo produto aos pedidos */
    res.status(201).json(meusPedidos); /* retorna um status 201 com o novo produto adicionado */
});

app.put('/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    let busca = meusPedidos.length > 0 && meusPedidos.filter(item => item.id === id)
    if (!busca) {
        return res.status(404).json({message: 'Pedido não foi encontrado!'});
    }
    meusPedidos[0].itens = req.body.itens;
    return res.status(200).json({meusPedidos});
});

app.delete('/', async (req, res) => {
    const id = parseInt(req.params.id)
    let busca = meusPedidos.length > 0 && meusPedidos.filter(item => item.id === id)
    if (!busca) {
        return res.status(404).json({message: 'Pedido não foi encontrado!'});
    }
    meusPedidos = meusPedidos.filter(item => item.id !== id)
    return res.status(200).json({meusPedidos});
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});