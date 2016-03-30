angular.module('AppModule').service('MessagesProvider', MessagesProvider);

MessagesProvider.$inject = ['$rootScope'];

function MessagesProvider($rootScope) {
  var self = {
      emailPlaceholder:'Correo Electronico',
      passwordPlaceholder:'Contraseña',
      namePlaceholder:'Nombre',
      sendPlaceholder:'Enviar',
      newTeamLabel:'Registro de Equipos',
      uploadImageLabel:'Subir Image',
      selectImageLabel:'Seleccionar Imagen'
  };

  $rootScope.i18n = self;

  return self;

}
