'use strict';

importScripts('sw-toolbox.js');

toolbox.precache(["html.html","style.css","s.js"]);

toolbox.router.get('/images/*', toolbox.cacheFirst);

toolbox.router.get('/*', toolbox.networkFirst, {
  networkTimeoutSeconds: 5
});