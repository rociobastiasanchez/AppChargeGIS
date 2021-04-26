function ocultar(esto) {
    vista = document.getElementById(esto).style.display;
    if (vista == 'none') vista = 'flex';else vista = 'none';

    document.getElementById(esto).style.display = vista;
    document.getElementById(esto).style.flexDirection = 'column';
}
define(['dojo/_base/declare', 'jimu/BaseWidget'], function (declare, BaseWidget) {
    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget], {

        // Custom widget code goes here

        baseClass: 'info-anal',
        // this property is set by the framework when widget is loaded.
        // name: 'InfoAnal',
        // add additional properties here

        //methods to communication with app container:
        postCreate: function postCreate() {
            this.inherited(arguments);
            console.log('InfoAnal::postCreate');
        }

        // startup: function() {
        //   this.inherited(arguments);
        //   console.log('InfoAnal::startup');
        // },

        // onOpen: function(){
        //   console.log('InfoAnal::onOpen');
        // },

        // onClose: function(){
        //   console.log('InfoAnal::onClose');
        // },

        // onMinimize: function(){
        //   console.log('InfoAnal::onMinimize');
        // },

        // onMaximize: function(){
        //   console.log('InfoAnal::onMaximize');
        // },

        // onSignIn: function(credential){
        //   console.log('InfoAnal::onSignIn', credential);
        // },

        // onSignOut: function(){
        //   console.log('InfoAnal::onSignOut');
        // }

        // onPositionChange: function(){
        //   console.log('InfoAnal::onPositionChange');
        // },

        // resize: function(){
        //   console.log('InfoAnal::resize');
        // }

        //methods to communication between widgets:

    });
});
//# sourceMappingURL=Widget.js.map
