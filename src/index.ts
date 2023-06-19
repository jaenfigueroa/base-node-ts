import { development } from '../knexfile';
import express from 'express';
import knex from 'knex';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

// Configuración de la conexión a la base de datos
const db = knex(development);

// Ejemplo de ruta que utiliza Knex para realizar una consulta
app.get('/contacts', (req, res) => {
  db.select('*')
    .from('Contacts')
    .then(contact => {
      res.json(contact);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener los usuarios' });
    });
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
