angular.module('AppModule', []).service('MessagesProvider', MessagesProvider);

MessagesProvider.$inject = ['$rootScope'];

function MessagesProvider($rootScope) {
  var self = {
      emailPlaceholder:'Correo Electronico',
      passwordPlaceholder:'Contraseña',
      namePlaceholder:'Nombre',
      sendPlaceholder:'Enviar'

  };

  $rootScope.i18n = self;

  return self;

}
