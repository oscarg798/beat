angular.module('AppModule', []).service('MessagesProvider', MessagesProvider);

MessagesProvider.$inject = ['$rootScope'];

function MessagesProvider($rootScope) {
  var self = {
      emailPlaceholder:'Correo Electronico',
      passwordPlaceholder:'Contraseña'


  };

  $rootScope.i18n = self;

  return self;

}
