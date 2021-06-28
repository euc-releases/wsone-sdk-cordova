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
    "airwatch-sdk-plugin": "2.4.0",
    "cordova-plugin-whitelist": "1.3.4"
  };
});