/**
 * Match.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      visitorTeam:{
         model: 'Team',
         required:true
      },
      matchDate:{
        type:'date',
        required:true
      },
      stadium:{
        type:'string',
        required:true
      },
      localTeam:{
          model: 'Team',
          required:true
      }
  }
};
