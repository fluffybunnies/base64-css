#!/usr/local/bin/node
// node ./base64 ./bg-temp.png
//

const fs = require('fs')
,path = require('path')


let filePath = process.argv[2]
if (!filePath) {
	throw new Error('Missing image file path')
}
filePath = path.join(__dirname, filePath)


fs.readFile(filePath, (err,data) => {
	const prefix = 'data:image/'+getContentTypeFromFilename(filePath)+';base64,'
	if (err) {
		if (err.code == 'ENOENT') {
			throw new Error('Missing file: ' + filePath)
		}
		throw new Error('Error fetching file: ' + filePath)
		return done()
	}
	const output = prefix+data.toString('base64')
	console.log(output)
})


function getContentTypeFromFilename(fn)  {
	var ext = fn.split('.').pop().toLowerCase()
	if (ext == 'jpg') {
		ext = 'jpeg'
	}
	return ext
}

