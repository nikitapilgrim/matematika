(function() {

  var Nanobar = require('nanobar');
  var target = document.querySelector('#progress');

  var options = {
    classname: 'progress-bar',
    id: 'progress',
    target: target,
  };
  var nanobar = new Nanobar(options);
  window.nanobar = nanobar;
})();
