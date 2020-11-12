sap.ui.define([
		"sap/ui/core/mvc/Controller",
		"sap/m/MessageToast",
		"Logali/MyProyecto/model/models",
		"sap/ui/model/resource/ResourceModel"
	],
	function (Controller, MessageToast,models,ResourceModel) {
		"ZONA PRIVADA";

		return Controller.extend("Logali.MyProyecto.controller.App", {

			onInit: function () {
				//set model on view
				this.getView().setModel(models.createRecipient());
				
				//set i18n model on view
				var i18nModel = new ResourceModel({
					bundleName:"Logali.MyProyecto.i18n.i18n"
				});
				this.getView().setModel(i18nModel,"i18n");
			},

			onShowHello: function () {
				MessageToast.show("Hello word");
			}

		});
	});