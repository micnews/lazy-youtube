var test = require('tape');

var node = {
  nodeType: 'tag',
  getAttribute: function () {
    return 'ABCD';
  },
  style: {},
  querySelector: function () {
    return node;
  },
  attachEvent: function () {}
};

global.window = {};
global.document = {
  querySelector: function() {
    return node;
  }
};

global.Image = function () {
  var self = this;
  self.__defineSetter__('src', function () {
    self.onload.call(self, {});
  });
};

var lazyYoutube = require('./');

test('basic', function (t) {
  lazyYoutube(node);
  t.end();
});
