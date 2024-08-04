const express = require('express');

const RotasPrivatas = require('./rotas/RotasPrivadas');
const RotasPublicas = require('./rotas/RotasPublicas');
const app = express()
app.use(express.json())
app.get('/', (request,response)=>{
    return response.send(" express")
})



const host = 'localhost'
const port = 3000;
app.use(RotasPublicas);
app.use(RotasPrivatas)
app.get('/teste/:codigo',( request,response) =>{
   const query= request.query;
   let dados = "query : " + query.nome + '-'+ query.sobrenome;

   const params = request.params;
   dados += "<br> params "+ params.codigo
    return response.send(dados)
})

app.listen(3000,'localhost',()=>{
    console.log(`servidor executando em http://${host}:${port}`)

});