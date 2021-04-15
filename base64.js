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
	if (err) {
		if (err.code == 'ENOENT') {
			throw new Error('Missing file: ' + filePath)
		}
		throw new Error('Error fetching file: ' + filePath)
	}
	const output = getPrefixFromFilename(filePath) + data.toString('base64')
	console.log(output)
})


function getPrefixFromFilename(fn) {
	let ext = fn.split('.').pop().toLowerCase()
	if (ext == 'jpg') {
		ext = 'jpeg'
	} else if (ext == 'woff' || ext == 'woff2') {
		return 'data:application/x-font-woff;charset=utf-8;base64,'
	}
	return 'data:image/' + ext + ';base64,'
}

