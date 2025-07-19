// Reexport the native module. On web, it will be resolved to RNGoogleSigninModule.web.ts
// and on native platforms to RNGoogleSigninModule.ts
export { default } from './RNGoogleSigninModule';
export { default as RNGoogleSigninView } from './RNGoogleSigninView';
export * from  './RNGoogleSignin.types';
