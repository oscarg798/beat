angular.module('AppModule').controller('ShowTeamController', ShowTeamController);

ShowTeamController.$inject = ['$rootScope', 'TeamService', 'MessagesProvider'];

function ShowTeamController($rootScope, TeamService,  MessagesProvider) {
   var self = this;

   self.teamID = '';

   function getTeam() {
      self.teamID = $rootScope.teamID;
      $rootScope.teamID= null;
   }

   getTeam();

}
