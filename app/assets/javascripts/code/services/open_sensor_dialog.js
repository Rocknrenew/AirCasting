angular.module('aircasting').factory('openSensorDialog', ['$rootScope', 'params', 'dialog', 'versioner', 'sensors',
  function($rootScope, params, dialog, versioner, sensors) {

    var openSensorDialog = function(newIds, oldIds, sessions) {
      params.update({tmp: {tmpSensorId: ""}});
      var dialogObj = dialog();
      dialogObj.title('Select a Parameter - Sensor')
        .template(versioner.path("/partials/tmp_sensor_selection_dialog.html"))
        .onClose(function(){
          if(!sensors.tmpSelected()){
            params.update({sessionsIds: []});
            var selectedSession = _(sessions.get()).detect(function(session){
              return session.$selected;
            });
            if(selectedSession){
              selectedSession.$selected = false;
            }
          }
          sessions.sessionsChanged(newIds, oldIds);
          $rootScope.$digest();
        })
        .opts({ width: 340, height: 'auto', resizable: false, modal:true, position: ["center", "center"],
        buttons: {
          "submit": function() {
            sensors.proceedWithTmp();
            dialogObj.close();
          }
        }})
        .open();

      return dialog;
    };

    return openSensorDialog;
}]);
