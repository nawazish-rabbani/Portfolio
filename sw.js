/*
 *
 *  Air Horner
 *  Copyright 2015 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */

const version = "0.0.1";
const cacheName = `NAWAZISH-DEV-${version}`;
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        `/`,
        `/index.html`,
        '/js/jquery.min.js',
        '/js/fontawesome.js',
        '/js/bootstrap.bundle.min.js',
        `/Nawazish_Resume.pdf`,
        `/css/style.css`,
        `/css/bootstrap.min.css`,
        '/fonts/UbuntuMono-Regular.woff2',
        '/fonts/UbuntuMono-Regular.woff',
        '/fonts/UbuntuMono-Regular.ttf',
        '/fonts/UbuntuMono-Regular.eot',
        '/fonts/UbuntuMono-Bold.woff2',
        '/fonts/UbuntuMono-Bold.woff',
        '/fonts/UbuntuMono-Bold.ttf',
        '/fonts/UbuntuMono-Bold.eot',
        '/fonts/Roboto-Regular.woff2',
        '/fonts/Roboto-Regular.woff',
        '/fonts/Roboto-Regular.ttf',
        '/fonts/Roboto-Regular.eot',
        '/fonts/Roboto-Medium.woff2',
        '/fonts/Roboto-Medium.woff',
        '/fonts/Roboto-Medium.ttf',
        '/fonts/Roboto-Medium.eot',
        '/fonts/Roboto-Light.woff2',
        '/fonts/Roboto-Light.woff',
        '/fonts/Roboto-Light.ttf',
        '/fonts/Roboto-Light.eot',
        '/fonts/Roboto-Bold.woff2',
        '/fonts/Roboto-Bold.woff',
        '/fonts/Roboto-Bold.ttf',
        '/fonts/Roboto-Bold.eot',
        '/fonts/fonts.css',
        '/images/work_icon.svg',
        '/images/upwork.svg',
        '/images/ssuet.png',
        '/images/runnerup.png',
        '/images/mta.png',
        '/images/medal-1.svg',
        '/images/Linkedin-White.svg',
        '/images/Linkedin.svg',
        '/images/keyboard_1.svg',
        '/images/ieee.png',
        '/images/GoldMadel.svg',
        '/images/Github-white.svg',
        '/images/Github.svg',
        '/images/favicon.ico',
        '/images/envelope.svg',
        '/images/education.svg',
        '/images/1st.png',
      ])
        .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, { ignoreSearch: true }))
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
