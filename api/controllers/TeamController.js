/**
* TeamController
*
* @description :: Server-side logic for managing teams
* @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
*/

module.exports = {
	getByID:function (req, res) {
		Team.findOne(req.param('teamID'), function(err, team) {

			if(err){
				console.log(err);
				return res.json(err.message);
			}else if(team === undefined || typeof team === 'undefined'){
				return res.json('El id no existe');
			}

			return res.sender({team:team});
		});
	}
};
