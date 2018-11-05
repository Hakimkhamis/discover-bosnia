var contactController = function ($scope, $http) {
    $http.get("/contact").then(function (success){
        $scope.contact=success.data;
    },function(error){
        console.log(error);
    })
 }