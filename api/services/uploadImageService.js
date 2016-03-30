/**
 * !!Personalizar!!
 *Servicio que permite subir imagenes al servidor
 * @filename nombre del archivo a crear
 * @image imagen recibida de tipo file
 * @path el nombre del directorio donde se guardara
 * @id id del objeto al que se le asignara la imagen
 * @res
 */
exports.uploadImg = function(fileName, image, path, id, res) {

    var newImage = image;
    var uploadPath = process.cwd() + '/assets/images/' + path + '/';
    var file = uploadPath + fileName;


    newImage.upload({
        dirname: uploadPath,
        saveAs: fileName
    }, function onUploadComplete(err, files) {
        if (err) {
            console.log('error!');
            return res.serverError(err);
        }

        if (path == 'service') {
            return res.redirect('/sale/changeImage?uploadPath=' + file + '&saleId=' + id);
        }

    });


};

exports.uploadToS3 = function(image, id, onUploadSuccess, onUploadError, res) {

    console.log(configProvider.amazonKeys.amazonS3BucketName);

    image
        .upload({
            adapter: require('skipper-s3'),
            key: configProvider.amazonKeys.amazonS3Key,
            secret: configProvider.amazonKeys.amazonS3SecretKey,
            bucket: configProvider.amazonKeys.amazonS3BucketName
        }, function whenDone(err, uploadedFiles) {
            if (err) {
                console.log('Error imagen ' +err);
                onUploadError(err, res);
            } else if (uploadedFiles === undefined ||
                typeof uploadedFiles === 'undefined' || uploadedFiles.length === 0) {
                    onUploadError({message:'No se pudo subir'}, res);
                    console.log('Error imagen' + uploadedFiles);
            } else {
                onUploadSuccess(id,
                    uploadedFiles[0].extra.Location, res);

            }
            return;

        });
};

/**
 *Servicio que permite subir imagenes al servidor
 * @filename nombre del archivo a crear
 * @image imagen recibida de tipo string en base64
 * @path el nombre del directorio donde se guardara
 */
exports.upload = function(filename, image, path) {

    //operaciones para convertir la imagen recibida en base64 a binario
    //requiere el modulo atob
    var atob = require('atob');
    var binaryImg = atob(image);
    var length = binaryImg.length;
    var ab = new ArrayBuffer(length);
    var ua = new Uint8Array(ab);
    for (var i = 0; i < length; i++) {
        ua[i] = binaryImg.charCodeAt(i);
    }
    var bitmap = new Buffer(ua, 'base64');
    var filename1 = filename + ".png";
    sails.fs.writeFile('assets/images/' + path + '/' + filename1, bitmap, function(err) {
        if (err) {
            console.log(err);
            return;
        }
        console.log('save it ');

    });

};