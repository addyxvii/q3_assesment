angular.module('warRoom')
  .controller('overviewController', overviewController)

  overviewController.$inject = ['$scope', 'ServerService'] ;

  function overviewController($scope, 'ServerService'){
    ServerService.getStaus()
      .then(function(servers){
        $scope.servers = servers;
      });
  }

  ServerController.$inject = ['$scope', 'ServerService', '$stateParams', 'StatusService']
