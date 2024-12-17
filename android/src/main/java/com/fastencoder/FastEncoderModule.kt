package com.fastencoder

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule

@ReactModule(name = FastEncoderModule.NAME)
class FastEncoderModule(reactContext: ReactApplicationContext) :
  NativeFastEncoderSpec(reactContext) {

    external fun initialize(jsiPtr: Long);
    external fun destruct();
  
    companion object {
      init {
        System.loadLibrary("fast-encoder")
      }
    }
    
  @ReactMethod(isBlockingSynchronousMethod = true)
  fun install(): Boolean {
    Log.d(TAG, "installing2")
    try {
      val contextHolder = this.reactApplicationContext.javaScriptContextHolder!!.get()
      if (contextHolder.toInt() == 0) {
        Log.d(TAG, "context not available")
        return false
      }
      initialize(contextHolder)
      Log.i(TAG, "successfully installed")
      return true
    } catch (exception: java.lang.Exception) {
      Log.e(TAG, "failed to install JSI", exception)
      return false
    }
  }

  override fun getName(): String {
    return NAME
  }

  override fun onCatalystInstanceDestroy() {
    destruct();
  }

  companion object {
    const val NAME = "FastEncoder"
  }
}
