var modalController = function($uibModal, $log) {
    var modal = this;
  
    modal.open = function (cityName, cityDescription, cityImage, size) {
      var modalInstance = $uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'views/homeModalContent.html',
        controller: 'modalInstanceController',
        controllerAs: 'modal',
        size: size,
        resolve: {
          data: function () {
            return {
                name: cityName,
                description: cityDescription,
                image: cityImage
            };
          }
        }
      });
    };
}

var modalInstanceController = function($uibModalInstance, data) {
    var modal = this;
    modal.city = data;
    
    modal.ok = function () {
      $uibModalInstance.close();
    };
  
    modal.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
}