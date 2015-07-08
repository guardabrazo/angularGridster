'use strict';
app.directive('secondWidget', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'views/directives/secondWidget.html'
  };
});
