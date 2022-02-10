//This file is a sort of mini backend server.

const jsonServer = require('json-server'); //Gets package we installed on terminal e.g. npm i json-server
const server = jsonServer.create(); //Invokes and uses the new server
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);
server.listen(port);