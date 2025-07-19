import { registerWebModule, NativeModule } from 'expo';

import { RNGoogleSigninModuleEvents } from './RNGoogleSignin.types';

class RNGoogleSigninModule extends NativeModule<RNGoogleSigninModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(RNGoogleSigninModule, 'RNGoogleSigninModule');
