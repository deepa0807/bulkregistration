const json2csv = require('json2csv').parse;
 
exports.get = function(req, res) {
 
    var fields = [
        'email',
        'fName',
        'lName',
        'userType'
    ];
    const csv = json2csv({ data: '', fields: fields });
    // var csv = json2csv({ data: '', fields: fields });
 
    res.set("Content-Disposition", "attachment;filename=user_details.csv");
    res.set("Content-Type", "application/octet-stream");
 
    res.send(csv);
 
};