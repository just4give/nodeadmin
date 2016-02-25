/**
 * Created by mithundas on 12/29/15.
 */
var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {

        rootPath: rootPath,
        imageRepo: "/Users/mithundas/Project_Workspace",
        apiContext:"http://localhost:4100",
        image:{
            repo: "/Users/mithundas/Project_Workspace",
            thumb:{
                height: 200,
                width:180
            },
            original:{
                height: 400,
                width:360
            }
        }


    },
    production: {
        rootPath: rootPath,

    }
}