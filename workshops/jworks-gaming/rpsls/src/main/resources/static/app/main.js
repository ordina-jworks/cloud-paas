import angular from 'angular';
import ngMaterial from 'angular-material';
import ngRoute from 'angular-route';
import ngCookies from 'angular-cookies';

import services from './services.js';
import controllers from './controllers.js';

console.log('Bootstrapping Angular v' + angular.version.full);

var app = angular.module('rpslsApp', ['ngMaterial', 'ngRoute', 'ngAnimate', 'ngCookies', services, controllers]);

app.config(function ($mdThemingProvider) {
    console.log('Configuring Material Design theme');
    $mdThemingProvider.theme('default')
        .primaryPalette('blue-grey')
        .accentPalette('pink');
    $mdThemingProvider.setDefaultTheme('default');
}).config(function ($routeProvider, $httpProvider) {
    console.log('Configuring Routes');
    $routeProvider
        .when('/', {
            templateUrl: 'app/home.html',
            controller: 'homeController'
        })
        .when('/signIn', {
            templateUrl: 'app/signIn.html',
            controller: 'signInController'
        })
        .otherwise({redirectTo: '/'});

    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
    $httpProvider.defaults.headers.common["Accept"] = "application/json";
    $httpProvider.defaults.headers.common["Content-Type"] = "application/json";

}).config(function ($locationProvider) {
    $locationProvider.html5Mode(false);
});
