/*

*/
var fs = require('fs')
,path = require('path')
,httpGet = require('./lib/http_get')
,parseSource = require('./lib/parse_source')

module.exports = function(filePath, assetPrefix, callback){
	if (typeof assetPrefix == 'function') {
		callback = assetPrefix;
		assetPrefix = null;
	}
	if (!assetPrefix)
		assetPrefix = path.dirname(filePath);
	if (assetPrefix[assetPrefix.length-1] != '/')
		assetPrefix += '/';
	//console.log('assetPrefix',assetPrefix);

	getSource(filePath, function(err,data){
		if (err)
			return callback(err);
		parseSource(data, assetPrefix, callback);
	});
}


function getSource(filePath, cb){
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


