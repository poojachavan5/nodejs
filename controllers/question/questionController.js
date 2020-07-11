const axios= require('axios')
function removeUnknown(e){
    return e !== 'Unknown';
}

exports.question= async(req, res, next)=> {
    try {
        
        pool.query('SELECT NOW()', (err, res)=>{
            try{
                console.log("PostgreSQL Database Connected", res.rows[0])
                pool.end()
                console.log(res)
            }
            catch (err)
            {
                console.log("Error in Connecting to PostgreSQL Database", err.stack)
            }
        })
    }
        

        //res.status(200).json({
         //   status: true,
           // message: 'Questions',
            //index,
            //question_id,
            //question_code,
            //question_text
         catch (err) {
        next(err);
    }
}


