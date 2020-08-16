let sqlite = require('sqlite3');
let path = require('path');
var db = new sqlite.Database('./server/database.sqlite3');

module.exports.getPosts = function () {
    return new Promise(function (resolve, reject) {
        db.serialize(function () {
            db.all("SELECT rowid AS id, info FROM lorem", function (err, row) {
                if(!err) {
                    resolve(row)
                } else [
                    reject(err)
                ]
            });
        })

    })

}