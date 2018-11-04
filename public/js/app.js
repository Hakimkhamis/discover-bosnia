var app = angular.module('MyNewApp', ["ngRoute"]);
app.config(function($routeProvider){
$routeProvider.when("/", {
    templateUrl:"views/home.html",
    activeTab:"home"
}).when("/offers", {
    templateUrl:"views/offers.html",
    activeTab:"offers"
})





})
app.controller('cityController', cityController)
app.controller('linksController', linksController)
app.controller('offersController', offersController)