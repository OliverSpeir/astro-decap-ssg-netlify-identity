/* eslint-disable */
var CustomPreview = createClass({
	render: function () {
		var entry = this.props.entry;

		// Add 'prose' class to the div for the tailwind typography styles
		return h("div", { className: "prose" }, this.props.widgetFor("body"));
	},
});

// Register the custom preview template for a specific collection
CMS.registerPreviewTemplate("blog", CustomPreview);
