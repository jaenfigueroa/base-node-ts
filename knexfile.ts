export const development = {
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    port: 5432,
    user: process.env.DB_USER, //tu_usuario
    password: process.env.DB_PASSWORD, //tu_contraseña
    database: process.env.DB_DATABASE //nombre_de_la_base_de_datos
  },
  migrations: {
    directory: './db/migrations'
  },
  seeds: {
    directory: './db/seeds'
  }
  // Configuraciones para otros entornos (como producción) si es necesario
}
