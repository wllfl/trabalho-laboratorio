var app = angular.module('tcc', []);

app.controller('AtacadistaCtrl', function($scope, $http) {

  $http.get('json/atacadista.json')
       .then(function(result){
          $scope.atacadistas = result.data;                
   });  
  
});