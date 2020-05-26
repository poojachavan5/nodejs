const {Client} = require('pg')
const client = new Client({
    user: "postgres",
    password: "Pooja1999",
    host: "localhost",
    port: 5432,
    database: "pooja"
})

client.connect()
.then(() => console.log("Connected Successfully"))
.then(() => client.query("select * from Student_answers"))
.then(results => console.table(results.rows))
.catch(e => console.log(e))
.finally(() => client.end())
