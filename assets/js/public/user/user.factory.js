angular.module('UserModule').factory('UserService', UserService);

UserService.$inject = ['$http'];

function UserService($http) {

  var self = {
    createUser:createUser
  };

  return  self;

  function createUserSucess(data, status) {
    $http.post('/user/show',data);
  }

  function createUser(user) {
    return  $http.post('/user/create?email=' +
    user.email + '&password='+user.password).success(createUserSucess);
  }

}
