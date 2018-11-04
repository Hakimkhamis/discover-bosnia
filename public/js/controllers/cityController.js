var cityController = function ($scope, $http) {
    $http.get("/cities").then(function(response) {
        $scope.cities = response.data;
    }, function(error) {
        console.log(error);
    })
}