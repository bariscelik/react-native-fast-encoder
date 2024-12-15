#include <jni.h>
#include "react-native-fast-encoder.h"

extern "C"
JNIEXPORT jdouble JNICALL
Java_com_fastencoder_FastEncoderModule_nativeMultiply(JNIEnv *env, jclass type, jdouble a, jdouble b) {
    return fastencoder::multiply(a, b);
}
