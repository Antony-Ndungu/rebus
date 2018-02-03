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
    "url": "0.de71cb08766eb49feced.js",
    "revision": "c045b82b868fa8a2846e218e94ad1fd3"
  },
  {
    "url": "1.1264487aabf8f87212b4.js",
    "revision": "660537bfebfd5aadd575cc9cde3cf9f5"
  },
  {
    "url": "2.242d3ee10d483e073ac2.js",
    "revision": "d5b14f0934dd0855c4ed5a708c0bd05f"
  },
  {
    "url": "5.7ca0e87e928ea51edf5a.js",
    "revision": "623e804d59154d9088cdd85ebf2b070a"
  },
  {
    "url": "6.fa5d765e3f2eddbdbbf7.js",
    "revision": "52e899ec38aa366bc2f69f5a4db80728"
  },
  {
    "url": "7.215fb636589554797cd0.js",
    "revision": "2ca98b059fd2c96972e1394fb5de20e0"
  },
  {
    "url": "bundle.af17601d483ce2613031.js",
    "revision": "2ba173c435eb45d4b5690d0b5e5aa1f4"
  },
  {
    "url": "index.html",
    "revision": "fa9f0aaf1747a39324011c7c72dcd70c"
  },
  {
    "url": "manifest.83e179ad63168bf9906f.js",
    "revision": "76960c3b80c1f5f6d93b1ee68e24fdd9"
  },
  {
    "url": "vendor.64cfe7d1904667164a51.js",
    "revision": "183721275058e713d2f49f8e8ce72406"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
