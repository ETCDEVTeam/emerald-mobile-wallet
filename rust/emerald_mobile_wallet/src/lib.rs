#[cfg(feature = "jni")]
#[allow(non_snake_case)]
pub mod android {
  extern crate jni;

  use self::jni::JNIEnv;
  use self::jni::objects::{JClass, JString};
  use self::jni::sys::jstring;

  #[no_mangle]
  pub unsafe extern fn Java_com_emerald_1mobile_1wallet_EmeraldBridge_welcomeEmerald(
    env: JNIEnv, _: JClass, platform: JString
  ) -> jstring {
    let platform: String = env.get_string(platform).unwrap().into();
    let response = format!("Emerald Wallet is Rusty on {}", platform);
    env.new_string(response).unwrap().into_inner()
  }
}

