

// Importing Axios for HTTP requests
const axios = require('axios')

// Removing the unknown data from the API filteration
function removeUnknown(e) {
    return e !== 'Unknown';
}

exports.questions = async (req, res, next) => {
    try {


    // Get All Questions
    questionsModel.find({}, function (err, items) {
        if (err) {
            console.log(err)
            res.json({ err: err })
        } else {
            res.json({ questions: items })
        }

})


        // For true and sucess response is 200
        // For failure the response can be passed 404 and status false 
        res.status(200).json({
            status: true,
            message : 'Question List',
            data: {
                id,
                question,
                options,
                answer
            }
        });

    } catch (err) {
        next(err);
    }
};