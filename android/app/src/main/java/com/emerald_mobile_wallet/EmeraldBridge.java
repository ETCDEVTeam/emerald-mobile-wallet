package com.emerald_mobile_wallet;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class EmeraldBridge extends ReactContextBaseJavaModule {
    static {
        System.loadLibrary("emerald_mobile_wallet");
    }

    @Override
    public String getName() {
        return "EmeraldBridge";
    }

    public EmeraldBridge(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @ReactMethod
    public void talkToRust(String platform, Promise promise) {
        promise.resolve(welcomeEmerald(platform));
    }

    private static native String welcomeEmerald(String platform);
}
