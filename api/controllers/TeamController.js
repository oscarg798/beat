/**
 * TeamController
 *
 * @description :: Server-side logic for managing teams
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var TeamController = {
    getByID:getByID ,
    upload: upload
};

function onImageUploadedSuccess(id, url, res) {
    Team.update(id, {
        image: url
    }, function(err, sale) {
        if (err) {
            req.session.flash = {
                err: sails.errorMessage(err)
            }
             return res.redirect('/team/show/'+id);
        } else {
            return res.redirect('/team/show/'+id);
        }
    });
}

function onImageUploadedError(err, res) {


    return res.send(err);
}


function upload(req, res, next) {
    var image = req.file('image');
    var params = req.params.all();

    uploadImageService.uploadToS3(image, params.id, onImageUploadedSuccess,
        onImageUploadedError, res);


}

function getByID(req, res) {
        Team.findOne(req.param('teamID'), function(err, team) {

            if (err) {
                console.log(err);
                return res.json(err.message);
            } else if (team === undefined || typeof team === 'undefined') {
                return res.json('El id no existe');
            }


            return res.send({
                team: team
            });
        });
 }


module.exports = TeamController;