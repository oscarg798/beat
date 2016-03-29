/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	show: function(req, res) {
			console.log('llege');
			res.view('user/show');
	},
	create: function (req, res) {
  		var params = req.params.all();

			User.create(params, function created(err, user) {
            if (err) {
                return res.send(err.status, err);
            }
						// return res.redirect('/user/show');
            return res.send(201, user);
      });

	}

};
