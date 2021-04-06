//Chamando o Express
const express = require('express');
//Instanciando na variável app
const app = express();

//Chamando os Dados json
const data = require("./data.json");

//Express precisa usar o Json
app.use(express.json());

// http://pipipipopo/clients(o /clients é um endpoint)

//Verbos HTTP para comunicação com os resources
// GET: Receber dados de um Resource;
// POST: Enviar dados ou informações para serem processados por um Resource;
// PUT: Atualizar dados de um Resource;
// Delete: Deletar um Resource

//O Express permite colocar uma callback function dentro que vai processar nossa requisição.

// Req e Res, depois de processar minha requisição  eu vou obter

//Bloquinho de notas do garçom
app.get("/clients", function(req, res){
    res.json(data);
});

app.get("/clients/:id", function(req, res){
    const { id } = req.params;
    const client = data.find(cli => cli.id == id);

    if(!client) return res.status(204).json();

    res.json(client);

});
//Salvar um client
app.post("/clients", function(req, res){
    const {name, email } = req.body;

    //Salvar

    res.json({ name, email });

});

app.put("/clients/:id", function(req, res){

    const { id } = req.params;
    const client = data.find(cli => cli.id == id);

    if(!client) return res.status(204).json();

    const { name } = req.body;

    client.name = name;

    res.json(client);

});

app.delete("/clients/:id", function(req, res) {
    const { id } = req.params;
    const clientsFiltered = data.filter(client => client.id != id);
  
    res.json(clientsFiltered);
  });
  


//Iniciar o Servidor
app.listen(3000, function() {
    console.log("Server is running");
});


//JSON = JavaScript Object Notation
//https://jsonplaceholder.typicode.com/users (dados fakes)