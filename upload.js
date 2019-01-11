var csv = require('fast-csv');
var mongoose = require('mongoose');
var Users = require('./models/user');
const _ = require('lodash');
 
exports.post = function (req, res) {
    if (!req.files)
        return res.status(400).send('No files were uploaded.');
     
    var userFile = req.files.file;
 
    var user= [];
         
    csv
     .fromString(userFile.data.toString(), {
         headers: true,
         ignoreEmpty: true
     })
     .on("data", function(data){
         data['_id'] = new mongoose.Types.ObjectId();
          
         user.push(data);
         console.log(data);
         
     })
     .on("end", function(){
    Users.create(user, function(err, documents) {
            if (err) throw err;
         });
          
         res.send(user.length + ' authors have been successfully uploaded.');
     });
    // .on("finish", () => {
    //     console.log("done");
    //     const uniqueDataToInsert = _.uniqBy(user, ['email', 'fName', 'lName', 'userType'])
    //     Users.create(uniqueDataToInsert, {remove: true,"remove-duplicates": true}).then((result) => {
    //      res.send("done");
    //     }).catch((error) => {
    //         res.status(500).send(JSON.stringify(error));
    //     });
    // });
};