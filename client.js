var got = require('got');
var format = require('url').format;

function Client (user, token, options) {
    if (!(this instanceof Client)) { return new Client(user, token, options); }

    options = options || {};
    this._user = user;
    this._token = token;
    this._protocol = options.protocol || 'http';
    this._api = options.api || 'api-fotki.yandex.ru/api';
}

Client.prototype.upload = function (file, options, cb) {
    if (typeof options === 'function') {
        cb = options;
        options = {};
    }

    options.headers = options.headers || {};
    options.headers.Authorization = 'OAuth ' + this._token;

    var url = format({
        protocol: this._protocol,
        host: this._api + '/users/' + this._user + '/photos/',
        query: {
            album: options.album,
            title: options.title,
            summary: options.summary
        }
    });

    got(url, file, options, cb);
};

module.exports = Client;
