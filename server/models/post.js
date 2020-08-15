let sqlite = require('sqlite3');
let path = require('path');
// let db = new sqlite.Database(path.join(__dirname + '../../database.db'));
var db = new sqlite.Database('./database.sqlite3');

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