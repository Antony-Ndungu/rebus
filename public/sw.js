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
    "url": "0.462352e7f0ed7278a7bf.js",
    "revision": "720fcee2e4b619a6d7cba58c4fdd4afc"
  },
  {
    "url": "0.6596820bbcf2a7f830f5.js",
    "revision": "be1844fd01b3aac7c2c1a1b09d42499f"
  },
  {
    "url": "0.744c9ae84c44a67fbe39.js",
    "revision": "dc25b20ce8f75692fb97fea6241caa4b"
  },
  {
    "url": "0.884cd155d304f1cd18eb.js",
    "revision": "67b079bd106bac7053641136c8b6730e"
  },
  {
    "url": "0.91ee31b7862f8202aa00.js",
    "revision": "864a4d806cb97d86289754c3150d4741"
  },
  {
    "url": "0.c7e2d430519cc1b69b32.js",
    "revision": "24c8a950b84cd1a1424246c4cb71856e"
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
    "url": "5.c049932bacf8636aa59f.js",
    "revision": "0eac2f884d8c97964f0425c4a2b16a98"
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
    "url": "bundle.e67879e0342f64534976.js",
    "revision": "8d142f2d9d24ea39aa8e0a05fb27b446"
  },
  {
    "url": "index.html",
    "revision": "d314d21568c743274a006cbe7139d74b"
  },
  {
    "url": "manifest.179cb5ed8411511e8e6c.js",
    "revision": "d6a7b9dec11a3ebd9f89a555e059a213"
  },
  {
    "url": "manifest.423b4db6277edf8fdf7d.js",
    "revision": "8bcdddceaf3415e0b43709e27ee9c8e6"
  },
  {
    "url": "manifest.755e542d7c8dda6cc36d.js",
    "revision": "c50ff189714fba8a8b025bb4de443c4b"
  },
  {
    "url": "manifest.a21ed31780c224cf4e41.js",
    "revision": "f65c6e150a1deea22cb25944835f48d3"
  },
  {
    "url": "manifest.a703dc7575b717aa6c8e.js",
    "revision": "9756ab677cf51d4c8bd0495db06a751e"
  },
  {
    "url": "manifest.be6eb9d734a606e1f509.js",
    "revision": "2a3406d0ba6bba74b1529a784c4c0d57"
  },
  {
    "url": "manifest.f2ec63f0234fc71379a7.js",
    "revision": "0aff9833902c284b01c3d7e23b4c13e3"
  },
  {
    "url": "style.css",
    "revision": "a64e4769f3b28dc309459cf3fdce749c"
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
