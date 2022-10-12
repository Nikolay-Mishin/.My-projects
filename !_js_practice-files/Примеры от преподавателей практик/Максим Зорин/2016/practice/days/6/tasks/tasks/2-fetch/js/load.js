
function load(url, done) {
  var callbackId = 'data1482239687205';
  window[callbackId] = done;

  var script = document.createElement('script');
  script.addEventListener('load', function(event) {
    script.parentNode.removeChild(script);
    delete window[callbackId];
  });
  document.querySelector('body').appendChild(script);
  script.setAttribute('src', url);
}
