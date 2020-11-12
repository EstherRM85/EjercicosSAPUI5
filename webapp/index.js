sap.ui.define([
		"sap/ui/core/mvc/XMLView"
	],

	function (XMLView) {
		XMLView.create({
			viewName: "Logali.MyProyecto.view.App"
		}).then(function (oView) {
			oView.placeAt("content");
		});
	});