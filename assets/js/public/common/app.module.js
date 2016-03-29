angular.module('AppModule', ['ngRoute'], AppModule);

AppModule.$inject = ['$routeProvider', '$locationProvider'];

function AppModule($routeProvider, $locationProvider) {
  $routeProvider
  .when('/team/new', {
    templateUrl: '../js/public/team/views/new.html'
  })
  .when('/team/show/:id', {
    templateUrl: '/views/show.html'
  })
  .otherwise({redirectTo: '/team/new'});;

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}
