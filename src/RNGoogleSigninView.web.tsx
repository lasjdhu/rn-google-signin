import * as React from 'react';

import { RNGoogleSigninViewProps } from './RNGoogleSignin.types';

export default function RNGoogleSigninView(props: RNGoogleSigninViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
