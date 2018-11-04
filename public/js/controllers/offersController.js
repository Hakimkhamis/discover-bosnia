var offersController = function ($scope, $http) {
   $http.get("/offers").then(function (success){
       $scope.offers=success.data;
   },function(error){
       console.log(error);
   })
}