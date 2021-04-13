sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**      
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.MessageToast} MessageToast
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     */
    function (Controller, MessageToast, Models, ResourceModel) {
        "use strict";

        return Controller.extend("logaligroup.SAPUI5.controller.App", {

            onInit: function () {



            },

            onShowHello: function () {

                // Read text from i18n Model

                var oModel = this.getView().getModel("i18n").getResourceBundle();

                // Read from data Model...

                var sRecipient = this.getView().getModel().getProperty("/recipient/name");

                var sMsg = oModel.getText("hellomsg", [sRecipient]);

                MessageToast.show(sMsg);
            }
        });

        /*
            XMLView.create({
                viewName: "logaligroup.SAPUI5.view.App"
            }).then(function (oView) {
                oView.placeAt("content");
            });
            /*new Text({ text: "Hello World" }).placeAt("content");
           
           */
    });