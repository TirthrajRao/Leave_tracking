// Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
//
// You are hereby granted a non-exclusive, worldwide, royalty-free license to use,
// copy, modify, and distribute this software in source code or binary form for use
// in connection with the web services and APIs provided by Facebook.
//
// As with any software that integrates with the Facebook platform, your use of
// this software is subject to the Facebook Developer Principles and Policies
// [http://developers.facebook.com/policy/]. This copyright notice shall be
// included in all copies or substantial portions of the software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
// IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@class FBSDKAccessToken;

/**
  Describes the result of a login attempt.
 */
NS_SWIFT_NAME(LoginManagerLoginResult)
@interface FBSDKLoginManagerLoginResult : NSObject

- (instancetype)init NS_UNAVAILABLE;
+ (instancetype)new NS_UNAVAILABLE;

/**
  the access token.
 */
@property (copy, nonatomic, nullable) FBSDKAccessToken *token;

/**
  whether the login was cancelled by the user.
 */
@property (readonly, nonatomic) BOOL isCancelled;

/**
  the set of permissions granted by the user in the associated request.

 inspect the token's permissions set for a complete list.
 */
@property (copy, nonatomic) NSSet<NSString *> *grantedPermissions;

/**
  the set of permissions declined by the user in the associated request.

 inspect the token's permissions set for a complete list.
 */
@property (copy, nonatomic) NSSet<NSString *> *declinedPermissions;

/**
  Initializes a new instance.
 @param token the access token
 @param isCancelled whether the login was cancelled by the user
 @param grantedPermissions the set of granted permissions
 @param declinedPermissions the set of declined permissions
 */
- (instancetype)initWithToken:(nullable FBSDKAccessToken *)token
                  isCancelled:(BOOL)isCancelled
           grantedPermissions:(NSSet<NSString *> *)grantedPermissions
          declinedPermissions:(NSSet<NSString *> *)declinedPermissions
NS_DESIGNATED_INITIALIZER;
@end

NS_ASSUME_NONNULL_END
