var registerController = function($scope, $uibModal, $http, $window, $location, ) {
  $scope.open = function (size) {
    console.log(localStorage.getItem("token"));
    var $uibModalInstance = $uibModal.open({
      animation: true,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'views/registerModalContent.html',
      size: size,
      scope: $scope
    }); 

    $scope.ok = function() {
      $uibModalInstance.close();
    }

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  };
  
  $scope.isHidden = function() {
    return localStorage.getItem("token") === null;
  }


  
  $scope.add_user = function(){
    $http.post('/register', $scope.user).then(function(data){
      console.log(data.status);
      if(data.status == 204){
        toastr.error("Email already exists");
      //  $scope.user.name = "";
        $scope.users.email = "";
        //$scope.user.password = "";
       
      } else{
      $scope.user = null;
      toastr.success("You are successfully registered! Please Login!", "Registration Successfull!");
      $location.url('/');
      //$scope.users_list.push(data);
      }
    });
  }


  $scope.text = "password";
  $scope.change = function () {
   if ($scope.text == "password") {
       $scope.text = "text";
   } else {
       $scope.text = "password";
   }
 }

}























