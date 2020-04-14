'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets/AssetManifest.json": "24db2b1ae87e978ca7c5a6f89fd29efd",
"/assets/assets/APP_ICON.jpg": "bd2b9fd15e497657924ab89b4978eb6c",
"/assets/assets/APP_ICON.png": "8a9be83f5cbdafe7e5a39c8b8c84db12",
"/assets/assets/auglogo_new.png": "384fe25cedcd5b3e2e6896198c3a8846",
"/assets/assets/augmentify_logo.png": "2a1ba2eb2418d7a866513ff3591d6a15",
"/assets/assets/blue-1.png": "aaebcd8585f23785c845488900888265",
"/assets/assets/blue-2.png": "5464dce9d580ff19b2487d4317abc21f",
"/assets/assets/blue-3.png": "d2a92dc389fcd7d72571538908e80d5c",
"/assets/assets/blue-4.png": "2f7303ddbc8e2abeedfee2e2a36993df",
"/assets/assets/cigarette.jpg": "1c4bedaad9855561f22b712b797096b0",
"/assets/assets/disease_1.png": "efdb689a8ebbf622bda53d494b730c4c",
"/assets/assets/fluai_logo.png": "1000ba2ac8d89f8e9f031ad631306fbf",
"/assets/assets/fonts/Montserrat/Montserrat-Bold.ttf": "ade91f473255991f410f61857696434b",
"/assets/assets/fonts/Montserrat/Montserrat-Italic.ttf": "a7063e0c0f0cb546ad45e9e24b27bd3b",
"/assets/assets/fonts/Montserrat/Montserrat-Light.ttf": "409c7f79a42e56c785f50ed37535f0be",
"/assets/assets/fonts/Montserrat/Montserrat-Medium.ttf": "c8b6e083af3f94009801989c3739425e",
"/assets/assets/fonts/Montserrat/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"/assets/assets/healthcare.jpeg": "0696b1fd512e579be0ea33e3fa6ace54",
"/assets/assets/health_cycle_logo.png": "14e70c8944217aa3a98433699afff53e",
"/assets/assets/logo1.png": "f685b0526d36f711015196c34c0f78b3",
"/assets/assets/logo2.png": "251d009f55600d18c6e3ff1c18589f77",
"/assets/assets/logo3.png": "251d009f55600d18c6e3ff1c18589f77",
"/assets/assets/logo4.png": "251d009f55600d18c6e3ff1c18589f77",
"/assets/assets/logo5.png": "251d009f55600d18c6e3ff1c18589f77",
"/assets/assets/logo6.png": "251d009f55600d18c6e3ff1c18589f77",
"/assets/assets/logo7.png": "251d009f55600d18c6e3ff1c18589f77",
"/assets/assets/logo_splash.png": "655c76c3c40eed5c40d422ba33c83fcb",
"/assets/assets/mandarin_logo.png": "7e0b5726d5840df8007264c882dbea11",
"/assets/assets/man_default.png": "eabb78e3c58bfbfdbf546d14a1570d19",
"/assets/assets/man_fever.png": "2bc5da7b30a0b754b14516d81fc264cc",
"/assets/assets/man_gradient.png": "ad3d1d219c68d5287259a3079d9bc983",
"/assets/assets/man_lungs.png": "7638e31ab51859a75498e8e2de77b4ff",
"/assets/assets/man_sneeze.png": "0db2446a514deac4bd374843d6fcf0dc",
"/assets/assets/nose.png": "7a1ea714dde1d028023f9831603deb1d",
"/assets/assets/plane.png": "cea075ce7ea54446ee3554997bbf320b",
"/assets/assets/renew_test.png": "a6099f58240ea4c964d807428f080499",
"/assets/assets/shield.png": "1c482e846969e126e20d47e2bf8a8013",
"/assets/assets/tireness.png": "47db3034fc8b4a5da92d46b735f86d86",
"/assets/assets/virus1.png": "d1987df7ec27314535831b824be0aa57",
"/assets/assets/virus2.png": "9225bd9ff92c7db9bf8b38df21a34e2b",
"/assets/assets/virus3.png": "9225bd9ff92c7db9bf8b38df21a34e2b",
"/assets/assets/virus4.png": "3d25d6b4743c93de33649b2f04d40e97",
"/assets/assets/virus5.png": "3a2976f59317d005c1decedfb6538418",
"/assets/assets/vomit.png": "6d4079c7f4b77160a78f05208874535f",
"/assets/assets/warning_1.png": "ac244fb241242194b8fd19b74090c04f",
"/assets/assets/washhands.png": "be1908ef09cdf9813039f15c3ccf4304",
"/assets/assets/wheelthing.png": "fa9de205a0cca6b93c84af6630e729e2",
"/assets/assets/white_tick.png": "f04ff3b4726c6bccbececcacb542efe2",
"/assets/assets/who_icon.png": "3cb88ddfd29a408933bb1fecf04f18d8",
"/assets/assets/woman_default.png": "eccf5067ad81a487c8eef46c4a1dfd3b",
"/assets/assets/woman_gradient.png": "563fd2049a7e8ca0029dcec7e33b77cb",
"/assets/assets/yesil_logo.png": "a36ceafbe1e70629326aef3f1e8464f3",
"/assets/assets/yesil_logo_big.png": "fd11f6c7c32632e902f5d3c80e07e3da",
"/assets/assets/yesil_splash.png": "e0c4ff0dd3ee644c2dc7a2435aaf7c29",
"/assets/FontManifest.json": "4ed18f4621284a576c099c7943c291f9",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/LICENSE": "9016e47cf83f01661f19323bd250a9b3",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "9559a564cf6e02fcaa859798cabc8fc1",
"/main.dart.js": "440ed2c77a88694d825e9eadf34481d1",
"/manifest.json": "80453022a61a561432d84d7b14625a3e"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
