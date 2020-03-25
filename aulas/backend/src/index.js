const express = require('express');
const routes = require('./routes');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(routes);

/*Métodos HTTP
GET: busca uma informação do back-end
POST: criar informação no back-end
PUT: alterar informação no back-end
DELETE: deletar uma informação no back-end
*/

/**
 * Tipos de parâmetros
 *
 * Query: Parametros nomeados enviados na rota após o simbolo '?'.
 * Route: Parametros para identificar recursos. 
 * Request Body: criar e alterar recursos.
 * 
 */

 /**
  * SQL: MySQL, PostgreSQL, SQLite, Oracle, Microsoft SQL Server.
  * NoSQL: MongoDB, CouchDB, etc...
  */

app.listen(3333);
