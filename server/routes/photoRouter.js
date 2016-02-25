/**
 * Created by Mithun.Das on 12/8/2015.
 */
var express = require('express');
var router = express.Router();
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({limit:'01mb'});
var fs = require('fs');
var IdGenerator = require('node-uuid');
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var config = require('../config/config')[env];
var path = require('path');
var easyimg = require('easyimage');




router.post('/upload', multipartMiddleware,function (req, res, next) {
    console.log("uploding file");
    var  file = req.files.file;
    var id = IdGenerator.v1();
    var fileName = id +  path.extname(file.name);
    var thumbnailPath = config.imageRepo+ '/repo/thumb/'+ fileName;
    var targetPath = config.imageRepo+ '/repo/'+ fileName;


    fs.rename(file.path, targetPath, function(err) {
        if(err) {
            return next(err);
        }
        //create thumbnail just after moving file to repo
        easyimg.thumbnail({
            src:targetPath, dst:thumbnailPath,
            width:180, height:200,
            x:0, y:0
        }).then(
            function(image) {

                res.json({imgSrc:config.apiContext+'/repo/thumb/'+ fileName });
            },
            function (err) {
                console.log(err);
                return next(err);
            }
        );




    });

});



module.exports = router;
