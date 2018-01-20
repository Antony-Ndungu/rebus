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
    "url": "0.91ee31b7862f8202aa00.js",
    "revision": "864a4d806cb97d86289754c3150d4741"
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
    "url": "5.44b46bb73ac7611183fa.js",
    "revision": "a766d867ec75e960a2ce7dbcaaae9d2a"
  },
  {
    "url": "6.455011877adce2562f0a.js",
    "revision": "19c8955124fef4be76f9b5aad258494d"
  },
  {
    "url": "7.437a821c01cf3760e8ff.js",
    "revision": "9836dad5335c62885e468dbab6cebcfb"
  },
  {
    "url": "bundle.e67879e0342f64534976.js",
    "revision": "8d142f2d9d24ea39aa8e0a05fb27b446"
  },
  {
    "url": "index.html",
    "revision": "c917fe184e812ceb6b337fe0b3d1aede"
  },
  {
    "url": "manifest.2188b9192bcffdc3cc6d.js",
    "revision": "643d361dcf83bae3135d8243612bb93c"
  },
  {
    "url": "vendor.a2416f678ea1b82ea59a.js",
    "revision": "9a780538f485719727f2e7bcbbb74079"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
