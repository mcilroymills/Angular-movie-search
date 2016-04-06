app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/search.html',
      controller: 'searchController'
    })
    .when('/show/:id', {
      templateUrl: 'partials/show.html',
      controller: 'showController'
    })
    .otherwise('/');
});