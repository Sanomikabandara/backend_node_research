
var AWS = require("aws-sdk");
let awsConfig = {
    "region": "us-west-2",
    "endpoint": "http://dynamodb.us-west-2.amazonaws.com",
    "accessKeyId": "AKIAI5Q2SLBW2YDVNETQ", "secretAccessKey": "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"
};

AWS.config.update(awsConfig);
let docClient = new AWS.DynamoDB.DocumentClient();

let save = function () {

     var input = {
         "ec": "", "tds": "", "created_on": new Date().toString(),
    };
    var params = {
        TableName: "ESP8266TEST",
        Item:  input
    };
    docClient.put(params, function (err, data) {

        if (err) {
            console.log("save::error - " + JSON.stringify(err, null, 2));                      
        } else {
            console.log("save::success" );                      
        }
    });
}

save();