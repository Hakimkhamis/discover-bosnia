var newsController = function ($scope, $http) {
    $http.get("/news").then(function (success) {
        $scope.news = success.data;

    }, function (errow) {
        console.log(erre);
    })
}