# base64-css
Replace image refs with base64 in css files


## Run
```
node bin/cli.js -f ./test/lib.css -p http://code.jquery.com/ui/1.11.2/themes/smoothness
# or
node bin/cli.js -f http://code.jquery.com/ui/1.11.2/themes/smoothness/jquery-ui.css
```


## To Do
- Make work with both local + remote assetPrefix
- Option to pass remote file location
	- Download + parse + save locally
- Option: targetDir
	- Where to save the result
- Accept directory as input
	- Run against all css files in dir
- Update readme to show full api + all opts
