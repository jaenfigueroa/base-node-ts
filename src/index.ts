import { users } from './../tmp/users'
import { development } from '../db/knexfile'
import express from 'express'
import knex from 'knex'

const app = express()

// Configuración de la conexión a la base de datos
const db = knex(development)

//DEVOLVER TODOS LOS USUARIOS
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

//AGREGAR UNA LISTA DE USAURIOS A LA TABLA
app.get('/save', (req, res) => {
  db('contacts')
    .insert(users)
    .then(() => {
      res.send('Datos guardados correctamente')
    })
    .catch((error) => {
      console.error('Error al guardar datos:', error)
      res.status(500).send('Error al guardar los datos')
    })
})

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000')
})
