var mysql=require('mysql');

var con=mysql.createConnection({
host:"35.200.193.57",
	user:"root",
	password:"root",
	database:"testcloudsql"
});

con.connect(function(err){
	if(err) throw err;
	console.log("Connected");
	var sql="INSERT INTO `batch_details` (batch_id, publish_status, message_id, message) VALUES(1, 1, '9876545678', 'published message')";
	con.query(sql,function(err,result){
		if(err) throw err;
		console.log("1 Record Inserted, ID:"+result.insertId);
	});
});