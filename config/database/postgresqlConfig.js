const {Client} = require('pg')
const client = new Client({
    user: "postgres",
    password: "Pooja1999",
    host: "localhost",
    port: 5432,
    database: "pooja"
})


const axios= require('axios')
function removeUnknown(e){
    return e !== 'Unknown';
}

exports.question= async(req, res, next)=> {
    try {

        const index= 4
        const question_id = 5
        const question_code= 555
        const question_text="Is java and javascript the same?"

        

        res.status(200).json({
            status: true,
            message: 'Questions',
            index,
            question_id,
            question_code,
            question_text
        })
    } catch (err) {
        next(err);
    }
}

const {Pool }= require('pg')
const pool=new Pool({
    user: "postgres",
    password: "Pooja1999",
    host: "localhost",
    port: 5432,
    database: "pooja"
})

pool.query('SELECT * from question', (err, res)=>{
    try{
        console.log("PostgreSQL Database Connected")
        pool.end()
        console.log(res.rows)
        
    }
    catch (err)
    {
        console.log("Error in Connecting to PostgreSQL Database", err.stack)
    }

})
