angular.module('AppModule').controller('ShowTeamController', ShowTeamController);

ShowTeamController.$inject = ['$timeout', '$routeParams', 'TeamService', 'MessagesProvider'];

function ShowTeamController($timeout, $routeParams, TeamService, MessagesProvider) {
    var self = this;

    self.team = {};

    self.teamID = '';

    self.upload= upload;

    self.uploadAction= '';



    function getTeamSucess(data) {
        $timeout(function() {
            self.team = data.team;
            self.uploadAction= '/team/upload/'+self.team.id;
        }, 0);

    }

    function getTeamFail(error) {
        console.log(error);
    }


    function getTeam() {
        self.teamID = $routeParams.id;

        TeamService.getTeam(self.teamID).then(getTeamSucess,
            getTeamFail);

    }

    function uploadSuccess(data) {
    	console.log(data);
    }

    function uploadFail(error) {
    	console.log(JSON.stringify(error));
    }

    function upload(file) {
    	TeamService.uploadTeamImage(file).then(uploadSuccess,
    		uploadFail);
    }

    getTeam();

}