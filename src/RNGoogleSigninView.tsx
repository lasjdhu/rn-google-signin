import { requireNativeView } from 'expo';
import * as React from 'react';

import { RNGoogleSigninViewProps } from './RNGoogleSignin.types';

const NativeView: React.ComponentType<RNGoogleSigninViewProps> =
  requireNativeView('RNGoogleSignin');

export default function RNGoogleSigninView(props: RNGoogleSigninViewProps) {
  return <NativeView {...props} />;
}
