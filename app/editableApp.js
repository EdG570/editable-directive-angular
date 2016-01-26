angular.module('editableApp', [])
  .directive('makeEditable', function() {
    return {
      restrict: 'A',
      templateUrl: 'editable-item.html',
      scope: true,
      transclude: true

      
    };
  });