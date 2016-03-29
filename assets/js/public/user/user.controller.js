angular.module('UserModule').controller('UserController', UserController);

UserController.$inject = ['UserService'];

function UserController(userService) {

    var self = this;

    self.user = {
      email:'',
      password:''
    };

    self.createUser = createUser;

    function createUser() {
        console.log(self.user.email + ' ' + self.user.password);
        userService.createUser(self.user);
    }
}
