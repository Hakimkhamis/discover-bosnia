var app = angular.module('MyNewApp', ["ngAnimate", 'ngSanitize', 'ui.bootstrap', "ngRoute"]);
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
app.controller('modalController', modalController)
app.controller('modalInstanceController', modalInstanceController)

