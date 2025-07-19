import { NativeModule, requireNativeModule } from 'expo';

import { RNGoogleSigninModuleEvents } from './RNGoogleSignin.types';

declare class RNGoogleSigninModule extends NativeModule<RNGoogleSigninModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<RNGoogleSigninModule>('RNGoogleSignin');
