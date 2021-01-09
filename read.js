var AWS = require("aws-sdk");
let awsConfig = {
    "region": "us-west-2",
    "endpoint": "http://dynamodb.us-west-2.amazonaws.com",
    "accessKeyId": "AKIAI5Q2SLBW2YDVNETQ", "secretAccessKey": "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"
};

AWS.config.update(awsConfig);
let docClient = new AWS.DynamoDB.DocumentClient();
let fetchOneByKey = function () {
    var params = {
        TableName: "ESP8266TEST",
        Select: "ALL_ATTRIBUTES",
        ScanIndexForward:"false",
        Limit:1,
    };
    
    docClient.scan(params, function (err, data) {
        if (err) {
            console.log("fetchOneByKey::error - " + JSON.stringify(err, null, 2));
        }
        else {
            console.log("fetchOneByKey::success - " + JSON.stringify(data, null, 2));
        }
    })
}

let fetchdata = function () {
    var params = {
        TableName : 'ESP8266TEST',
        IndexName : 'device-index',
        KeyConditionExpression : 'device = :deviceVal',
        ExpressionAttributeValues : {
        ':deviceVal' : '4468785'
        }
    };
         
    docClient.query(params, function(err, data) {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err,
                    null, 2));
        } else {
            console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
        }
    });
}

// fetchOneByKey();
fetchdata();
