sap.ui.define(
    [
        "sap/ui/core/UIComponent",
        "logaligroup/SAPUI5/model/Models",
        "sap/ui/model/resource/ResourceModel"
    ],

    /**
     * @param {typeof sap.ui.core.UIComponent} UIComponent
     */
    function (UIComponent, Models, ResourceModel) {

        return UIComponent.extend("logaligroup.SAPUI5.Component", {

            metadata: {
                manifest: "json"


            },
            init: function () {

                //Call Init Function of the parent..

                UIComponent.prototype.init.apply(this, arguments);

                // Set Data Model On The View

                this.setModel(Models.createRecipient());

                // Set Data Model On The View

                var i18nModel = new ResourceModel({

                    bundleName: "logaligroup.SAPUI5.i18n.i18n"
                });

                this.setModel(i18nModel, "i18n");

            }
        });
    }
);