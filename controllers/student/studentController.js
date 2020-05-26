// Importing Axios for HTTP requests
const axios = require('axios')

// Removing the unknown data from the API filteration
function removeUnknown(e) {
    return e !== 'Unknown';
}

// Fetch data 
// Display data in JSON format File as response
exports.studentlistwise = async (req, res, next) => {
    try {
        
        // We are taking link from the user side.
        // This is to check how passing parameters work in NodeJS
        const link =  req.body.link;
        // Using axios library to fetch data from the JSON output
        const studentsList = (
            await axios.get(link)
        ).data;
        const student = Object.keys(studentsList).filter(removeUnknown);
        const result = {};
        student.name((studentName) => {
        result[studentName] = Object.keys(
            studentsList[studentName]['studentData']
        ).filter(removeUnknown);
        });


        // For true and sucess response is 200
        // For failure the response can be passed 404 and status false 
        res.status(200).json({
            status: true,
            message : 'Student List',
            data: {
                data : result
            }
        });

    } catch (err) {
        next(err);
    }
};