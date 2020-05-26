
// Importing Axios for HTTP requests
const axios = require('axios')

// Removing the unknown data from the API filteration
function removeUnknown(e) {
    return e !== 'Unknown';
}

// Fetch data 
// Display data in JSON format File as response
exports.resultlistwise = async (req, res, next) => {
    try {
        
        // Result API Routes (api/scores/)
routerResults.post('/save', (req, res, next) => {

    // Create Result Object for Registration
    let newResult = new Result({
        name: req.body.name,
        score: req.body.score,
        date: new Date()
    })

    // Register Result Object
    Result.registerResult(newResult, (err, result) => {
        if (err) {
            res.json({ success: false, msg: 'Score Registration Failed! ' + err })
        } else {
            res.json({ success: true, msg: 'Score Registered!' })
        }
    })

})

routerResults.get('/high-scores', (req, res, next) => {

    // Get All Scores
    Result.find({}, function (err, items) {
        if (err) {
            console.log(err)
            res.json({ err: err })
        } else {
            res.json({ results: items })
        }
    })

})


        // For true and sucess response is 200
        // For failure the response can be passed 404 and status false 
        res.status(200).json({
            status: true,
            message : 'Result List',
            data: {
                name,
                score,
                date
            }
        });

    } catch (err) {
        next(err);
    }
};