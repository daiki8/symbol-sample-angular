// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
export const environment = {
  production: false,
  // nodeUrl: 'http://symbol-sakura-16.next-web-technology.com:3000', // mainnet
  nodeUrl: 'https://sym-test.opening-line.jp:3001',                   // testnet
  samplePrivateKey: '8E273B0E9C7DA98293D38B130B6B27505B6E2785261CBEAD649F34EF7EA04F90',
  sampleTargetAddress: 'TCLQ3QKUFV6I35FVDXVMB7X4CWI3FLAOVQGNKCQ', // faucet address
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
