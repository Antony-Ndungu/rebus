importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "0.5dcca7a7d0fd96001ab9.js",
    "revision": "53606976bd842eb13201f28ac0cc90d6"
  },
  {
    "url": "1.00902fdfb5cea57f39bd.js",
    "revision": "259ada1a95eb30300528243bd00157ff"
  },
  {
    "url": "2.6da6a8c913e625628ab8.js",
    "revision": "0917acb1197863e2b472f68dbc2eebdd"
  },
  {
    "url": "5.3abfa81e11536629cd5c.js",
    "revision": "393b3b0cf5cdd7e9559af0156e80b209"
  },
  {
    "url": "6.f07fc3268abcad0686a4.js",
    "revision": "6d2b43b6c16e51431bf569eb631fc324"
  },
  {
    "url": "7.5786b278838cd65e6e8b.js",
    "revision": "ac467aab7e1df1bc9865c3fb395eb9ed"
  },
  {
    "url": "bundle.a4c39f9ebaa449c33166.js",
    "revision": "53ab0b5f3534d64a6c0da93ab7c237b4"
  },
  {
    "url": "index.html",
    "revision": "86cadd765ded3c8d6416a80b92b10db8"
  },
  {
    "url": "manifest.78767a6339b008526575.js",
    "revision": "19b1bbf41517887b6f3cd44edaba43d4"
  },
  {
    "url": "vendor.df880b3233240d0e67d8.js",
    "revision": "e8e18af75c0c6e5a511664cd749120da"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
