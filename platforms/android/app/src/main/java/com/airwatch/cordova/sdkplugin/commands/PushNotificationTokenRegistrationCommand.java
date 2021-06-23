/*
 * Copyright (c) 2020 AirWatch, LLC. All rights reserved.
 *  This product is protected by copyright and intellectual property laws in  the United States and other countries
 *  as well as by international treaties.
 *  AirWatch products may be covered by one or more patents listed at
 *  http://www.vmware.com/go/patents.
 */
package com.airwatch.cordova.sdkplugin.commands;

import android.net.Uri;
import android.text.TextUtils;

import com.airwatch.cordova.sdkplugin.AirwatchBridge;
import com.airwatch.cordova.sdkplugin.AirwatchSDKPlugin;
import com.airwatch.sdk.AirWatchSDKException;
import com.airwatch.util.Logger;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;



public class PushNotificationTokenRegistrationCommand implements Command{
    public static int NO_ERROR=0;
    public static int TOKEN_NOT_SPECIFIED=1;
    @Override
    public void execute(CallbackContext callbackContext, JSONArray args, AirwatchBridge bridge) throws AirWatchSDKException {
        String token;
        try{
            token =args.getString(0);
            bridge.registerPushNotificationToken(token);
            if(TextUtils.isEmpty(token)){
                callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR, TOKEN_NOT_SPECIFIED));
                Logger.e(AirwatchSDKPlugin.LOG_TAG,"Token is empty");
            }
            callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK, NO_ERROR));
        }catch (JSONException e){
            callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.JSON_EXCEPTION, TOKEN_NOT_SPECIFIED));
            Logger.e(AirwatchSDKPlugin.LOG_TAG,"Unable to set token "+e);
        }

    }
}

