## Teste Matrix Cargo

Implementação de uma aplicação teste utilizando Node.js e ReactJs

## 🔧 Tecnologias

Esse projeto aplica as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)
- [MongoDB](https://www.mongodb.com/)

## 🖥️ Projeto
Para o desenvolvimento do servidor do projeto, utilizei Node.js conectado ao MongoDB utilizando o Sequelize para criar uma arquitetura básica de linguagens mais utilizadas.
As linguagens estão estáticas em um arquivo de utils e podem ser adicionadas novas linguagens.
No início do servidor, é realizada uma consulta a api do github para consultar a quantidade de repositório com as linguagens disponíveis no projeto.
Se houver uma nova linguagem ou mudou a quantidade de repositórios, é realizada uma atualização no banco.

## ▶️ Como Executar

#### Clonando o projeto
```
git clone https://github.com/brunomatheusc/matrixcargo
cd matrixcargo

```
#### Executando Backend
```
cd server
yarn
yarn dev
```
#### Executando Frontend
```
cd frontend
yarn
yarn start