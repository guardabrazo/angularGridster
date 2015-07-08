'use strict';
app.directive('firstWidget', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'views/directives/firstWidget.html'
  };
});
