# base64-css
Replace image refs with base64 encoding in css files
<br /><br />Ex: Localize a library so you aren't reliant on external uptime

#### Before
```css
.ui-menu .ui-menu-item {
	list-style-image: url("images/ui-bg_flat_75_ffffff_40x100.png");
}
```

#### After
```css
.ui-menu .ui-menu-item {
	list-style-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAABkAQAAAADcH0/XAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAd2KE6QAAAASSURBVCjPY/gPAgyj5ChJVRIAypHyHLPbLnsAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTQtMTAtMTZUMDg6NDE6MTUtMDQ6MDBVOcWMAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE0LTEwLTE2VDA4OjQxOjE1LTA0OjAwJGR9MAAAAABJRU5ErkJggg==");
}
```


## Run via JS
```js
var baser = require('base64-css')

baser('./libs/dulce-ui/dui.css', function(err,res){
	if (!err)
		// do something with parsed css
})
```


## Run via CLI
```bash
# parse local file, writing to target in place:
node bin/cli.js -f ./test/lib.css

# parse local file, saving result in specified directory:
node bin/cli.js -f ./test/lib.css ./assets/

# parse local file, passing remote location prefix for assets:
node bin/cli.js -f ./test/lib.css -p http://code.jquery.com/ui/1.11.2/themes/smoothness

# parse remote file, saving result in specified directory:
node bin/cli.js -f http://code.jquery.com/ui/1.11.2/themes/smoothness/jquery-ui.css ./assets/
```


## Api
Missing files are logged to console.warn and skipped

### ...


## To Do
- Update readme to show full api + all opts
- Accept directory as input
	- Run against all css files in dir
- Assign default image type if not determinable
	- Normalize jpeg/jpg
- Finish ToDo test cases in test/test.js


