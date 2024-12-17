#ifdef __cplusplus
#import "react-native-fast-encoder.h"
#endif

#ifdef RCT_NEW_ARCH_ENABLED
#import "generated/RNFastEncoderSpec/RNFastEncoderSpec.h"

@interface FastEncoder : NSObject <NativeFastEncoderSpec>
#else
#import <React/RCTBridgeModule.h>

@interface FastEncoderModule : NSObject <RCTBridgeModule>
#endif
@property (nonatomic, assign) BOOL setBridgeOnMainQueue;

@end
