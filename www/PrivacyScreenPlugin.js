var exec = require('cordova/exec');

var PLUGIN_NAME = 'PrivacyScreenPlugin';

var PrivacyScreenPlugin = {
  enable: function (success, error) {
    exec(success, error, PLUGIN_NAME, 'enable', []);
  },
  disable: function (success, error) {
    exec(success, error, PLUGIN_NAME, 'disable', []);
  }
}

cordova.addConstructor(function () {
  if (!window.plugins) {window.plugins = {};}
  window.plugins.privacyscreenplugin = PrivacyScreenPlugin;
  return window.plugins.privacyscreenplugin;
});
module.exports = PrivacyScreenPlugin;