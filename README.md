# Mariana-Inoue-Desafio-Labs
# Serviço de Delivery
## Sobre o Projeto:

Projeto de API rest de cadastro de delivery. 

https://mariana-inoue-database.herokuapp.com/deliveries

Regras de negócio:
- Listar as entregas salvas previamente no banco de dados; 
- Cadastrar novas entregas no formulário, e ao salvar, atualizar o banco de dados e a lista com os dados da nova entrega; 
- Excluir uma entrega, removendo-a do banco de dados e da lista. 

_______________________________
Tecnologias:

|Ferramenta |	Descrição |
|-|-|
| javascript |Linguagem de programação utilizada
|nodejs	| Ambiente de execução do javascript
|express	|Framework NodeJS
|sequelize|	ORM(Object-Relational Mapper) para NodeJs baseado em promise, utilizado para os bancos de dados
|nodemon	|Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente
|dotenv | Variavéis de ambiente
|postgreSQL	|Banco de dado não relacional orietado a documentos
|DBeaver	|Ferramenta de administração de banco de dados
|Postman	|Interface gráfica para realizar os testes
|Heroku |Deploy da API
|HTML |
|CSS |


__________________________


       📁 Arquitetura
        📁 backend-labs
          |
          |-  📁 src
          |    |
          |    |- 📁 config
          |         |- 📄 db.js
          |
          |    |- 📁 controllers
          |         |- 📄 deliveriesController.js
          |         
          |
          |    |- 📁 models
          |         |- 📄 delivery.js
          |       
          |
          |    |- 📁 routes
          |         |- 📄 deliveryRoutes.js 
          |         |- 📄 index.js 
          |
          |
          |    |- 📄 app.js    
          |
          |- 📄 package-lock.json
          |- 📄 node_modules
          |- 📄 .gitignore
          |- 📄 package.json
          |- 📄 server.js
          |- 📄 .env






## Requisitos:

⭐ "/deliveries" Deverá retornar todas as deliveries
⭐ "/deliverie" Deverá cadastrar novas deliveries
⭐ "/deliverie/{:id}/" Deverá deletar as delivery por id

### Deploy realizado na plataforma nuvem Heroku
Endpoint Index
https://mariana-inoue-database.herokuapp.com
![IndexReceitas](https://user-images.githubusercontent.com/82849390/132223760-e734f993-3239-4f60-a726-5aba0087d29e.gif)

Endpoint para mostrar todas as receitas 
https://mariana-inoue-database.herokuapp.com/deliveries
![getAllReceitas](https://user-images.githubusercontent.com/82849390/132224291-00ac57d7-ca37-4e20-9332-7b7537ae7b09.gif)

Endpoint para cadastras nova receita
https://mariana-inoue-database.herokuapp.com/deliveries
![postNovaReceitas](https://user-images.githubusercontent.com/82849390/132225963-bb8ff4b8-212e-4dbc-bd20-2b4ffd390bd8.gif)

Endpoint deletar delivery por {:id}
https://mariana-inoue-database.herokuapp.com/deliveries
![deleteReceitas](https://user-images.githubusercontent.com/82849390/132226266-b155f6ca-3bfe-47c7-a050-76511a9ad8b3.gif)

_______________________________________________________________________

Dados para Collection Receitas
id: autogerado e obrigatório
nome : AllowNull: false
endereco: AllowNull: false
telefone: AllowNull: false
peso: AllowNull: false
criadoEm: data gerada automaticamente e obrigatório
API deve retornar seguinte JSON:

      [
          {
              "id": "577",
              "nome": "Gabriela pires",
              "peso": 6,
              "endereco": "rua Jureia , 682",
              "telefone": "11 976858899",
              "createdAt": "2021-11-28T15:36:13.084Z",
              "updatedAt": "2021-11-28T15:36:13.084Z"
          }
      ]

_______________________     

Desenvolvida por: Mariana Inoue 
Contato: https://www.linkedin.com/in/mariana-inoue-89279450/
