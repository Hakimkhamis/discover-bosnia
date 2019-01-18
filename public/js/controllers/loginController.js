var loginController = function($scope, $uibModal, $http, $window) {
    $scope.open = function (size) {
      console.log(localStorage.getItem("token"));
      var $uibModalInstance = $uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'views/loginModalContent.html',
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

    $scope.logIn = function (userInfo) {
      $http.post("/login", userInfo).then(function (response) {
        localStorage.setItem("token", response.data.token);
        window.location = ".";
      });
    }

    $scope.logout = function() {
      localStorage.removeItem("token");
      window.location = ".";
    }
}