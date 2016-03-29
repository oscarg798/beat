angular.module('AppModule').controller('NewTeamController', NewTeamController);

NewTeamController.$inject = ['$rootScope', '$location','TeamService', 'MessagesProvider'];

function NewTeamController($rootScope, $location, teamService, MessagesProvider) {
  var self = this;

  self.team = {
    name:''
  };


  self.createTeam = createTeam;

  function createTeamSuccess(data) {
      $rootScope.teamID = data.id;
      $location.path('/team/show/'+data.id);
  }

  function createTeamFail(error) {
      console.log('Error');
  }

  function createTeam() {
      teamService.createTeam(self.team).then(createTeamSuccess,
        createTeamFail);
  }
}
