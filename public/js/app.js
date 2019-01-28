var app = angular.module('MyNewApp', ["ngAnimate", 'ngSanitize', 'ui.bootstrap', "ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "views/home.html",
        activeTab: "home"
    }).when("/offers", {
        templateUrl: "views/offers.html",
        activeTab: "offers"
    }).when("/news", {
        templateUrl: "views/news.html",
        activeTab: "news"
    }).when("/contact", {
        templateUrl: "views/contact.html",
        activeTab: "contact"
    })

})



app.controller('cityController', cityController)
app.controller('linksController', linksController)
app.controller('offersController', offersController)
app.controller('modalController', modalController)
app.controller('modalInstanceController', modalInstanceController)
app.controller('newsController', newsController)
app.controller('contactController', contactController)
app.controller('specialoffersController', specialoffersController )
app.controller("loginController", loginController);
app.controller("registerController", registerController);










