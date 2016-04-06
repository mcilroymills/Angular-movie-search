app.controller('myController', ['$scope', '$http', function($scope, $http) {

  $scope.title = '';

  $scope.search = function (title) {
      $http({
      method: 'GET',
      url: 'http://www.omdbapi.com/?t='+ $scope.title
    })
    .then(function(results){
      $scope.results = results;
      console.log(results);
    });
  };
}]);