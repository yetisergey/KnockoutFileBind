# KnockoutFileBind
Bind for knockout.

Steps to use:
1. Add input in your page with type="file" and data-bind="file: files, allowed:'.doc,.docx'".
files - observablearray.
allowed - supported file extensions.
```html
<input multiple type="file" data-bind="file: files, allowed:'.doc,.docx'"/>
```
2. Add observablearray(files) to your ViewModel.
```js
var ViewModel = {
 files:ko.observableArray()
}
$(function(){
 ko.applyBindings(ViewModel);
})
```

You can take your files like this.
```js
ViewModel.files()
```
