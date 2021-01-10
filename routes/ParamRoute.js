var express = require('express');
var router = express.Router();
var Controller = require('./Controllers/ParameterController')

var AWS = require("aws-sdk");
let awsConfig = {
    "region": "us-west-2",
    "endpoint": "http://dynamodb.us-west-2.amazonaws.com",
    "accessKeyId": "AKIAIEEPSAAJ526TCQ3A", "secretAccessKey": "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"
};

AWS.config.update(awsConfig);
let docClient = new AWS.DynamoDB.DocumentClient();

// router.get('/', (req, res) => {
//     Controller.getData().then(data => {
//         res.status(true).send({data: data});
//     }).catch(err => {
//         res.status(false).send({message: "error"});
//     })
// });


router.get('/getParameters',(req,res)=>{
    var params = {
        TableName : 'ESP8266TEST',
        IndexName : 'device-TIM-index',
        KeyConditionExpression : 'device = :deviceVal',
        ExpressionAttributeValues : {
        ':deviceVal' : "4468785"
        }
    };
    docClient.query(params, function(err, data) {
        if (err) {
            res.send(err)
            console.error("Unable to read item. Error JSON:", JSON.stringify(err,
                    null, 2));
        } else {
            console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
            res.send(data)
        }
    });
})


module.exports = router;
