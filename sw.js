---
layout: null
---

var CACHE_NAME = 'pv8-web-cache-v1';

var urlsToCache = [
  '/',
  '/css/main.css',
  {% for page in site.html_pages %}
  '{{ page.url }}',
  {% endfor %}
  {% for post in site.posts %}
  '{{ post.url }}',
  {% endfor %}
  {% for file in site.static_files %}
  {% if file.extname == '.js' or file.path contains '/media' %} '{{ file.path }}', {% endif %}
  {% endfor %}
];

// {% if file.extname == '.js' or file.path contains '/portfolio/screenshots' or file.path contains '/portfolio/thumbnails' %} '{{ file.path }}', {% endif %}

const CACHE_STATIC = [
  '/css/main.css',
  '/media/gamification_balance.png',
  '/media/gamification_experience.png',
  '/media/gamification_gameelements.png',
  '/media/gamification_icon.png',
  '/media/gamification_journey.png',
  '/media/gamification_players.png',
  '/media/Python-logo-notext.png'
 ];

 const CACHE_APP = [
    '/',
    '/index.html',
    '/posts/',
    '/contact/'
 ];

self.addEventListener('install',function(event){
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

self.addEventListener('activate', function(event) {

  var cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
