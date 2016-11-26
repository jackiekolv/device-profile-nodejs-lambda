exports.handler = (event, context, callback) => {
    var mysql      = require('mysql');
    var connection = mysql.createConnection(process.env.connection_string);
    
    connection.connect();
    
    var sqlInsert = "INSERT INTO test.device_profile (account_id, device_id, os, phone) "
    			    + "VALUES (?, ?, ?, ?);";
    var values = [event.walletId, event.deviceId, event.os, event.phone];
    
    connection.query(sqlInsert, values, function(err, result) {
        if (err) throw err;
        console.log('Database Result: ', result);
    });
    
    connection.end();
    callback(null, "SUCCESS");
};