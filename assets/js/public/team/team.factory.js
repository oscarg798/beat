angular.module('AppModule').factory('TeamService', TeamService);

TeamService.$inject = ['$http', '$q'];

function TeamService($http, $q) {

    var self = {
            createTeam: createTeam,
            getTeam: getTeam,
            uploadTeamImage:uploadTeamImage
        },
        idd = '';

    return self;

    function createTeam(team) {
        var createTeamPromise = $q.defer();

        $http.post('/team/create', team)
            .success(function(data, status) {
                createTeamPromise.resolve(data);
            })
            .error(function(error) {
                createTeamPromise.reject(error);
            });

        return createTeamPromise.promise;
    }

    function getTeam(teamID) {
        var getTeamPromise = $q.defer();

        $http.post('/team/getByID', {
            teamID: teamID
        })
            .success(function(data) {
                getTeamPromise.resolve(data);
            })
            .error(function(error) {
                getTeamPromise.reject(error);
            });

        return getTeamPromise.promise;
    }

    function uploadTeamImage(teamImage) {
       
    }




}