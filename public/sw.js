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
    "url": "0.744c9ae84c44a67fbe39.js",
    "revision": "dc25b20ce8f75692fb97fea6241caa4b"
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
    "url": "5.a397fecb61460f5be0c9.js",
    "revision": "2fbb5e89e75c48d712b9364881863e7f"
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
    "url": "bundle.dc0725eb38be45ddeab3.js",
    "revision": "fdb6bcbaed270587a1259a2a3b696266"
  },
  {
    "url": "index.html",
    "revision": "f0f053fe616fa93242db56c4fc8c49bf"
  },
  {
    "url": "manifest.442c33caf548627fa090.js",
    "revision": "a309e11edf12c75f91a45658b08874b1"
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
