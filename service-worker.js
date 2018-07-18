/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.3.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "70e43533d75de8a88fcdaa7aaf01acf4"
  },
  {
    "url": "assets/css/8.styles.337255ed.css",
    "revision": "aee6b8e46f3c8ae353c35b7cdc103c67"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.95ff4ad1.js",
    "revision": "05a87c974864906972e190f10fdf3fd5"
  },
  {
    "url": "assets/js/1.41e9d8a9.js",
    "revision": "fb45595929c4be0c22ba67622e365647"
  },
  {
    "url": "assets/js/2.e491ed55.js",
    "revision": "08e2ef6e839c400fdf77ef74d0dcc9ae"
  },
  {
    "url": "assets/js/3.460294e6.js",
    "revision": "ed5d203089dfc6e704e1ca9f48152bbd"
  },
  {
    "url": "assets/js/4.78a27b12.js",
    "revision": "725874c863ceabe767402245f3daec7e"
  },
  {
    "url": "assets/js/5.03bd7aae.js",
    "revision": "93d331e6222d07a505267a680d7d5085"
  },
  {
    "url": "assets/js/6.bf486d4c.js",
    "revision": "97f2a6388fb27e91d7656c63f3b9a922"
  },
  {
    "url": "assets/js/7.4cde6711.js",
    "revision": "ac21ca496d044fe1c03e88b02fbe8497"
  },
  {
    "url": "assets/js/app.24e35388.js",
    "revision": "7c28e8dc7a2c93cd566e6ae8c53d1f10"
  },
  {
    "url": "config/index.html",
    "revision": "868a6b1af869ab6c7190460270867787"
  },
  {
    "url": "guide/configuration.html",
    "revision": "3807369b1e9d9e1fd9d0d1b1dc70c0d9"
  },
  {
    "url": "guide/index.html",
    "revision": "074bb85e922c5db044aec45465ef7694"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "bb9c3abeb3a608bdebc9f9bf644a7768"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "10ddc2963640fb5e5c7ce8a449f0ea8b"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "3697fe5134722708a180ac07dcbe849a"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "9c1e2445bb24052dddf43444c9523a38"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "53251897f8a32cfb74f3a287689ad11c"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "30e442b67ba7ef9bbd32a577fdde9fde"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "414f54a92bf6f40b96cff0df0e989201"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "53251897f8a32cfb74f3a287689ad11c"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "5012f30d63de90c305332285d91456a0"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "c15816c786e9f67a060d8599eeaed54d"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "361280534de1f80c43abd3b4e4897407"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "b9a32930ec6270abc498cade9ebfb6a1"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "0dd8c43e1367baacb39480ba76d32f33"
  },
  {
    "url": "index.html",
    "revision": "0390add5c1921d0da1dcbfa1baabfa36"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "69db59dd0a1590ad266513b557403d46"
  },
  {
    "url": "zh/config/index.html",
    "revision": "bd09b3ac13f574dd8478c2f3c8e155b2"
  },
  {
    "url": "zh/guide/configuration.html",
    "revision": "bc242f2c28696dfac544a4310aa6b38a"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "2351121ec2ea5bf30564bbd397844cd3"
  },
  {
    "url": "zh/index.html",
    "revision": "1b76e1a7bd7eb1015ffe57f4a0da37bc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
