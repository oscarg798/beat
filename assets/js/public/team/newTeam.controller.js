angular.module('AppModule').controller('NewTeamController', NewTeamController);

NewTeamController.$inject = ['$location','TeamService', 'MessagesProvider'];

function NewTeamController($location, teamService, MessagesProvider) {
  var self = this;

  self.team = {
    name:''
  };


  self.createTeam = createTeam;

  function createTeamSuccess(data) {
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
