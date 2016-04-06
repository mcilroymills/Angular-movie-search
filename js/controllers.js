app.controller('searchController', ['$scope', '$http', function($scope, $http) {

  $scope.title = '';
  $scope.results = [];
  $scope.error = false;

  $scope.search = function (title) {
      $http({
      method: 'GET',
      url: 'http://www.omdbapi.com/?s='+ $scope.title
    })
    .then(function(results){
      if (results.data.Search) {
        $scope.results = results.data.Search;
        $scope.error = false;
        console.log(results);
      }
      else {
        $scope.error = true;
        $scope.results = [];
      }
    });
  };
}]);

app.controller('showController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

  $scope.poster = '';
  $scope.title = '';
  $scope.year = '';
  $scope.rated = '';
  $scope.released= '';
  $scope.runtime = '';
  $scope.genre = '';
  $scope.director = '';
  $scope.writer = '';
  $scope.actors = '';
  $scope.plot = '';
  $scope.awards = '';

  $http({
    method: 'GET',
    url: 'http://www.omdbapi.com/?i='+ $routeParams.id
  })
  .then(function(result){

    $scope.poster = result.data.Poster;
    $scope.title = result.data.Title;
    $scope.year = result.data.Year;
    $scope.rated = result.data.Rated;
    $scope.released = result.data.Released;
    $scope.runtime = result.data.Runtime;
    $scope.genre = result.data.Genre;
    $scope.director = result.data.Title;
    $scope.writer = result.data.Writer;
    $scope.actors = result.data.Actors;
    $scope.plot = result.data.Plot;
    $scope.awards = result.data.Awards;
  });

}]);