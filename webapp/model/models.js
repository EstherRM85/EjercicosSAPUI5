sap.ui.define([
		"sap/ui/model/json/JSONModel"
	],
	
	function (JSONModel) {
		return {
			createRecipient: function(){
				var oData = {
					recipient: {
						name: "word"
					}
				};
				return new JSONModel(oData);
			}
		};
	});