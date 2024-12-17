# cmake_minimum_required(VERSION 3.4.1)
# project(FastEncoder)

# set (CMAKE_VERBOSE_MAKEFILE ON)
# set (CMAKE_CXX_STANDARD 14)

# add_library(react-native-fast-encoder            SHARED
#             ../cpp/react-native-fast-encoder.cpp
#             cpp-adapter.cpp
# )

# # Specifies a path to native header files.
# include_directories(
#             ../cpp
# )
cmake_minimum_required(VERSION 3.4.1)
project(FastEncoder)

set (CMAKE_VERBOSE_MAKEFILE ON)
set (CMAKE_CXX_STANDARD 14)

add_library(encoder_bridge SHARED IMPORTED)


file(TO_CMAKE_PATH ${NODE_MODULES_DIR} NODE_MODULES_DIR)


set_target_properties(encoder_bridge
        PROPERTIES
        IMPORTED_LOCATION ${CMAKE_SOURCE_DIR}/src/main/jniLibs/${ANDROID_ABI}/libencoder_bridge.so
        )

add_library(fast-encoder
        SHARED
        "${NODE_MODULES_DIR}/react-native/ReactCommon/jsi/jsi/jsi.cpp"
        ../cpp/react-native-fast-encoder.cpp
        ../cpp/react-native-fast-encoder.h
        fast-encoder-adapter.cpp
)

include_directories(
        fast-encoder
        PRIVATE
        "${NODE_MODULES_DIR}/react-native/ReactCommon/jsi"
        ../cpp
)

target_link_libraries(fast-encoder
        encoder_bridge
        android
        log)