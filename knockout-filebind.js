ko.bindingHandlers.file = {
    init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
		$(element).attr('accept', allBindings.get("allowed").split(','));
		element.onchange = function() {
			var file = this.files[0];
			var fileArray = [];
			if (file) {
				for(var i = 0; i < this.files.length; i++){
					fileArray.push(this.files[i]);
				}
			}
			valueAccessor()(fileArray);
		};
	}
};
