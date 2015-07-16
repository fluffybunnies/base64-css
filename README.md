# base64-css
Replace image refs with base64 in css files


## Run
```
# parse local file, passing location of assets:
node bin/cli.js -f ./test/lib.css -p http://code.jquery.com/ui/1.11.2/themes/smoothness
# or grab remote file:
node bin/cli.js -f http://code.jquery.com/ui/1.11.2/themes/smoothness/jquery-ui.css
```


## To Do
- Update readme to show full api + all opts
- Accept directory as input
	- Run against all css files in dir

