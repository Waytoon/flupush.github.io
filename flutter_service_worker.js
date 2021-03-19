'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon-16x16.png": "893f5bd526adf87b2bb5728696db8b2c",
"version.json": "6d85168016f4814f4228f583538a0b19",
"favicon.ico": "52c478fa1c1dcad67f60efec1c8dc89c",
"index.html": "69e5143e55b41547a71fa9770dd1be47",
"/": "69e5143e55b41547a71fa9770dd1be47",
"apple-icon.png": "1157ec3bd9a566fd69afa343f8816553",
"apple-icon-144x144.png": "1319625615cbaf05a5c54d72c7928489",
"android-icon-192x192.png": "058c2aa52bc55ce415ec99e96dcb35b0",
"apple-icon-precomposed.png": "1157ec3bd9a566fd69afa343f8816553",
"apple-icon-114x114.png": "6abfdf8550e5e5af0ed0a6451ec8ca48",
"main.dart.js": "9f864d88fb04ae1e3d10b43b7b6874e2",
"ms-icon-310x310.png": "f640b15c179e96a409793712e7b5fc0d",
"manifest2.json": "997465669e8fcf23092b05984e1a82be",
"ms-icon-144x144.png": "1319625615cbaf05a5c54d72c7928489",
"apple-icon-57x57.png": "7f433c4d21f5bb670f01813b91fe4dc6",
"apple-icon-152x152.png": "b0aa405b97c58807b86f722b95f88064",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"ms-icon-150x150.png": "f6b496ea1af1b7820ba9ca01e6369027",
"android-icon-72x72.png": "db081da1bb7253a3033915cd4b2ef31e",
"android-icon-96x96.png": "8efddc5bf659b7a4dfe109a9cebc53a9",
"android-icon-36x36.png": "3d1e99ac5d850c0be14c359017de3e1d",
"apple-icon-180x180.png": "f60f6e37211341a47c477cab7c7924bf",
"favicon-96x96.png": "8efddc5bf659b7a4dfe109a9cebc53a9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "997465669e8fcf23092b05984e1a82be",
"android-icon-48x48.png": "d62d4ac37f4dd8a2f10e3cfbc18906f9",
"apple-icon-76x76.png": "7f382785d7c11b998d10d0051bb26a29",
"apple-icon-60x60.png": "514fd11c515737a40b79a6c6e735fa17",
"assets/AssetManifest.json": "edc29b6803798324593f339d88b88bce",
"assets/NOTICES": "e5b0b0b766fc75d66483c69a6092743f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/images/watch.png": "4100ef2a167b7b4b9161ce8c3b108bd9",
"assets/assets/images/bg_header.jpg": "71a5edbdb245b59c1b2a2de1ed08a3a3",
"assets/assets/images/bg_squares.png": "a21771d4e39417d3d324fc1079403047",
"assets/assets/images/boat.png": "e73ee35de37fb64d2fe89bbf00e2a701",
"assets/assets/images/coffee.png": "685c6cada04858b86fe001ca4eb4d144",
"assets/assets/images/hero-background.svg": "315f681b21d741760b158323863a82a2",
"assets/assets/images/wallet.png": "a9a84058bf9ac756bb417e205441522c",
"assets/assets/images/hero.png": "9cf0ba233382ff410c5c9a2653f3a9cf",
"assets/assets/images/bedroom.png": "c359cc8ef6b0acb410c38dcf0ee16f36",
"assets/assets/images/ship.png": "7f1d4cbd8c7abc13a6a828d3658bd8ff",
"assets/assets/images/galaxy.jpg": "b4a84efeb4c1ff627a9b2fe179adb490",
"assets/assets/images/main.png": "dc5bd859e70167c64f85ac27210adf2f",
"assets/assets/images/messanger.png": "beacdbb3a93df25674af2f5302f5633a",
"assets/assets/images/icon_rss_feed.png": "462e7d83841103ebbc0a31502aedef92",
"assets/assets/images/dart_logo_128x.png": "ba08ff08a5b526f3dd9b24dda14e037e",
"assets/assets/images/tools2.png": "a90b67709479facd303e0b3ad0d4c55a",
"assets/assets/images/home.png": "22ee3f8aafeb1be5bfbcf2a5b60b1752",
"assets/assets/images/tools.png": "7f890944f7d38ae17c53c12a90af0309",
"assets/assets/images/notebook.png": "9d5590aef194c85efbbfb1453c74aced",
"assets/assets/images/image_packages_3.png": "2b4bdf5fdbaa7e20442a4223a0962125",
"assets/assets/images/icon1.png": "a81f49ac844dfdf9ca5ba7914fabe58a",
"assets/assets/images/image_packages_2.png": "b3553157fe684920b157e137f0b706ed",
"assets/assets/images/skype.png": "955d4329bf55cd47008c2edd6c08ad99",
"assets/assets/images/image_packages_1.png": "0373a157f2f7633f128917ef28b91950",
"assets/assets/images/logo.png": "3987472d6b63ccfbb32c1fe12a30309b",
"assets/assets/images/location.png": "b6daddaf3cc1c943c5f54e590ece2fe0",
"assets/assets/images/macbook.png": "d8f9521add17deebc6f61c8b09ebb54a",
"assets/assets/images/bg_img_2.png": "8257ef89b2dfeab767578260965a7e2d",
"assets/assets/images/development.png": "edb887512e75bd055eea5b20379afc17",
"assets/assets/images/ui-design.png": "4f90aa80ca87601bb6c11806e25d609d",
"assets/assets/images/polaroid.png": "e60e184336f7d8949c7e604914c7f8aa",
"assets/assets/images/writing-tools.png": "ed608f7f0d4a6a464de047c6c01d2edd",
"assets/assets/images/imac.png": "36ac287ce6d078b037f50fa9b32829c0",
"assets/assets/images/school-bag.png": "f4ebbadb8b68f228af4a3641b1ffe132",
"assets/assets/images/programming.png": "813e6a26318ace2ccf8ce57f264aa7cc",
"assets/assets/images/whatsapp.png": "e33ef8b852729cd9dd7c6af3837f9b23",
"assets/assets/images/console.svg": "56efb15dab89d16309f1f60f46b62f21",
"assets/assets/images/pub_dev_logo.png": "e0f3812dab2087bcc847c2f2689028f2",
"assets/assets/images/icon_bug_report.png": "ef57e920159ee41be3695af3821d3fd5",
"assets/assets/images/forhome.png": "957537e2fe55bc2a3f1a557f0fcb3abf",
"assets/assets/images/image.png": "b643682ff82d54aad5d72a66c79cb8cb",
"assets/assets/images/coding.png": "294c10eee421a3261c0a0b5f0cfad7d8",
"assets/assets/images/about-1.png": "139d2d2dca2660f8d863f04c8a07e2eb",
"assets/assets/images/icon_verified_publisher.png": "da303ab5cc4f075c881bee0b1912f6e7",
"browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"android-icon-144x144.png": "1319625615cbaf05a5c54d72c7928489",
"apple-icon-72x72.png": "db081da1bb7253a3033915cd4b2ef31e",
"apple-icon-120x120.png": "a0da03c4df3c94556338079ea246971d",
"favicon-32x32.png": "d4ef63d29988aec2b5de2c1a7fdc762d",
"ms-icon-70x70.png": "4c0d84f3eef5702f9ffbe38bb56c0f99"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
