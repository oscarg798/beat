angular.module('TeamModule', []).controller('TeamController',TeamController);

function TeamController() {
  var self = this;

  self.team = {
    name:''
  };

  self.createTeam = createTeam;

  function createTeam() {
      console.log(self.team.name);
  }
}
