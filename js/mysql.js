// trayendo al modulo mysql
const mysql = require('mysql')

// conexion con el servidor de mysql
const conexion = mysql.createConnection({
    // createConnection recibe un object with 4 properties
    // host is the siste where estare working
    host: 'localhost',
    user: 'neurai',
    password: 'neurai21',
    database: 'neurai'
})

// ahora nos conectamos
// lo primero que recibe esta conexion es el error
conexion.connect((err) => {
    // entonces, si recibe el error, que lance el error
    if (err) throw err

    // si no recibe el error
    console.log('Conexión exitosa')
})