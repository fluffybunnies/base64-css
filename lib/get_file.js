
var fs = require('fs')
,httpGet = require('./http_get')


module.exports = function(filePath, cb){
	if (pathIsRemote(filePath)) {
		httpGet(filePath, function(err,data){
			if (err)
				return cb(err);
			cb(false, data);
		});
	} else {
		fs.readFile(filePath, function(err,data){
			if (err)
				return cb(err);
			cb(false, data);
		});
	}
}


function pathIsRemote(filePath){
	return /^https?:\/\//.test(filePath);
}

