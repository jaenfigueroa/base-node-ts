import { development } from '../knexfile'
import express from 'express'
import knex from 'knex'

const app = express()

// Configuración de la conexión a la base de datos
const db = knex(development)

// Crear mis rutas
app.get('/contacts', (req, res) => {
  db.select('*')
    .from('contacts')
    .then(contact => {
      res.json(contact)
    })
    .catch(error => {
      console.error(error)
      res.status(500).json({ error: 'Error al obtener los usuarios' })
    })
})

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000')
})
