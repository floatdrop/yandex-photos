var sent = require('sent');
var format = require('url').format;

function Client (user, token, options) {
    options = options || {};
    this._user = user;
    this._token = token;
    this._api = options.api || 'http://api-fotki.yandex.ru/api';
}

Client.prototype.upload = function (file, options, cb) {
    if (typeof options === 'function') {
        cb = options;
        options = {};
    }

    var url = format({
        host: this._api + '/users/' + this._user + '/photos',
        query: {
            album: options.album,
            title: options.title,
            summary: options.summary
        }
    });

    sent(url, file, options, cb);
};

module.exports = Client;
