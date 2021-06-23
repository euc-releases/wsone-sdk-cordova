cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "airwatch-sdk-plugin.AirwatchSDK",
      "file": "plugins/airwatch-sdk-plugin/www/airwatch.js",
      "pluginId": "airwatch-sdk-plugin",
      "clobbers": [
        "plugins.airwatch"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "airwatch-sdk-plugin": "2.5.0"
  };
});