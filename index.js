'use strict'

var npm = require('npm')

module.exports = function getRepository (name, callback) {
  npm.load(function () {
    npm.commands.view([name], function (err, info) {
      if (err) { return callback(err) }

      return callback(null, info.repository)
    })
  })
}
