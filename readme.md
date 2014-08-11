# yandex-photos [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]

Client for [Yandex Photos](http://api.yandex.ru/fotki/doc/concepts/About.xml) service API.

## Usage

```js
var fs = require('fs');

var photos = require('yandex-photos').client(token);

photos.upload(fs.createReadStream('picture.jpg'), {
    album: 'urn:yandex:fotki:alekna:album:197816'
}, function (err, result) {
    console.log(result);
});

```

## API

### client(oauth)

Creates client to Yandex Photos API.

##### oauth
Type: `String`  
Contains oauth token from OAuth authorization procedure.

### client.upload(file, [options], cb)
Uploads photo to Yandex Photos.

##### file
Type: `Buffer` or `Stream`  
Contents of photo.

##### options
Type: `Object`  
Options for upload.

###### options.album
Type: `String`

###### options.title
Type: `String`

###### options.summary
Type: `String`

## License

MIT (c) 2014 Vsevolod Strukchinsky

[npm-url]: https://npmjs.org/package/yandex-photos
[npm-image]: https://badge.fury.io/js/yandex-photos.png

[travis-url]: http://travis-ci.org/floatdrop/yandex-photos
[travis-image]: https://travis-ci.org/floatdrop/yandex-photos.png?branch=master

[depstat-url]: https://david-dm.org/floatdrop/yandex-photos
[depstat-image]: https://david-dm.org/floatdrop/yandex-photos.png?theme=shields.io
