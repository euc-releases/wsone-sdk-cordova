//
//  index.js
//  WS1 SDK integration with Apache Cordova Sample App
//
//  Copyright © 2021 VMware, Inc. All rights reserved. This product is protected
//  by copyright and intellectual property laws in the United States and other
//  countries as well as by international treaties. VMware products are covered
//  by one or more patents listed at http://www.vmware.com/go/patents.
//
 
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log('Running cordova' + cordova.platformId + '@' + cordova.version);
    initialiseSDK()
    
}
function deviceReadyForInformation(){
    document.addEventListener('deviceready', fetchInformation , false);
}
//when device is ready, call setSDKEventListener API to initialise WS1 SDK.
function initialiseSDK() {
    window.plugins.airwatch.setSDKEventListener(function(event, error) {
        if (event === "initSuccess") {
            console.log('Init Success');
        }
    });
}

//fetch details for information settings
function fetchInformation() {
    getUsername();
    getGroupID();
    getServerName();
}

//Gets the enrolled user's username
function getUsername() {
    window.plugins.airwatch.username(function(username) {
            document.getElementById("username").innerHTML = username;
        },
        function() {
            console.log("error");
        });
}

//Gets the enrolled user's group ID
function getGroupID() {
    window.plugins.airwatch.groupId(function(groupID) {
            document.getElementById("groupID").innerHTML = groupID;
        },
        function() {
            console.log("error");
        });
}

//Get the name of the server to which the device is enrolled
function getServerName() {
    window.plugins.airwatch.serverName(function(serverName) {
            document.getElementById("serverName").innerHTML = serverName;
        },
        function() {
            console.log("error");
        });
}

//fetch details for information settings
function fetchDLPSettings() {
    enableCopyPasteSettings();
    allowOfflineSettings();
    restrictDocumentToAppsSettings();
}

//Gets the "allow copy/paste" setting for the profile. If true, then the user can copy and paste between managed apps.
function enableCopyPasteSettings() {
    window.plugins.airwatch.allowCopyPaste(function(isCopyPasteEnabled) {
            document.getElementById("enableCopyPaste").innerHTML = isCopyPasteEnabled;
        },
        function() {
            console.log("error");
        });
}

//Gets any custom settings provided in the app's profile.
function allowOfflineSettings() {
    window.plugins.airwatch.allowOffline(function(allowOfflineEnabled) {
            document.getElementById("allowOffline").innerHTML = allowOfflineEnabled;
        },
        function() {
            console.log("error");
        });
}

//Gets the "allow offline use" setting for the profile. If true, then the user can use managed apps when not connected to the network.
function restrictDocumentToAppsSettings() {
    window.plugins.airwatch.restrictDocumentToApps(function(isRestrictDocumentToAppsEnabled) {
            document.getElementById("restrictDocumentsToApps").innerHTML = isRestrictDocumentToAppsEnabled;
        },
        function() {
            console.log("error");
        });
}

//fetch details for custom settings
function fetchCustomSettings() {
    window.plugins.airwatch.customSettings(function(customSettings) {
            document.getElementById("customSettings").innerHTML = customSettings;
        },
        function() {
            console.log("error");
        });
}
