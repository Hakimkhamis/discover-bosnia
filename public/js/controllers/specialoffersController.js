var specialoffersController = function ($scope, $http) {
    $http.get("/specialoffers").then(function (success){
        $scope.specialoffers=success.data;
    },function(error){
        console.log(error);
    })
 }