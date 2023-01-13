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
        `Portfolio/index.html`,
        'Portfolio/js/jquery.min.js',
        'Portfolio/js/fontawesome.js',
        'Portfolio/js/bootstrap.bundle.min.js',
        `Portfolio/Nawazish_Resume.pdf`,
        `Portfolio/css/style.css`,
        `Portfolio/css/bootstrap.min.css`,
        'Portfolio/fonts/UbuntuMono-Regular.woff2',
        'Portfolio/fonts/UbuntuMono-Regular.woff',
        'Portfolio/fonts/UbuntuMono-Regular.ttf',
        'Portfolio/fonts/UbuntuMono-Regular.eot',
        'Portfolio/fonts/UbuntuMono-Bold.woff2',
        'Portfolio/fonts/UbuntuMono-Bold.woff',
        'Portfolio/fonts/UbuntuMono-Bold.ttf',
        'Portfolio/fonts/UbuntuMono-Bold.eot',
        'Portfolio/fonts/Roboto-Regular.woff2',
        'Portfolio/fonts/Roboto-Regular.woff',
        'Portfolio/fonts/Roboto-Regular.ttf',
        'Portfolio/fonts/Roboto-Regular.eot',
        'Portfolio/fonts/Roboto-Medium.woff2',
        'Portfolio/fonts/Roboto-Medium.woff',
        'Portfolio/fonts/Roboto-Medium.ttf',
        'Portfolio/fonts/Roboto-Medium.eot',
        'Portfolio/fonts/Roboto-Light.woff2',
        'Portfolio/fonts/Roboto-Light.woff',
        'Portfolio/fonts/Roboto-Light.ttf',
        'Portfolio/fonts/Roboto-Light.eot',
        'Portfolio/fonts/Roboto-Bold.woff2',
        'Portfolio/fonts/Roboto-Bold.woff',
        'Portfolio/fonts/Roboto-Bold.ttf',
        'Portfolio/fonts/Roboto-Bold.eot',
        'Portfolio/fonts/fonts.css',
        'Portfolio/images/work_icon.svg',
        'Portfolio/images/upwork.svg',
        'Portfolio/images/ssuet.png',
        'Portfolio/images/runnerup.png',
        'Portfolio/images/mta.png',
        'Portfolio/images/medal-1.svg',
        'Portfolio/images/Linkedin-White.svg',
        'Portfolio/images/Linkedin.svg',
        'Portfolio/images/keyboard_1.svg',
        'Portfolio/images/ieee.png',
        'Portfolio/images/GoldMadel.svg',
        'Portfolio/images/Github-white.svg',
        'Portfolio/images/Github.svg',
        'Portfolio/images/favicon.ico',
        'Portfolio/images/envelope.svg',
        'Portfolio/images/education.svg',
        'Portfolio/images/1st.png',
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
