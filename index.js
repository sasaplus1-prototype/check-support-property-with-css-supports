(function(){

  'use strict';

  var property = document.getElementById('js-property'),
      value = document.getElementById('js-value'),
      condition = document.getElementById('js-condition');

  var execute1 = document.getElementById('js-execute-1'),
      execute2 = document.getElementById('js-execute-2');

  var result1 = document.getElementById('js-result-1'),
      result2 = document.getElementById('js-result-2');

  execute1.addEventListener('click', function() {
    result1.innerHTML = CSS.supports(property.value, value.value);
  }, false);

  execute2.addEventListener('click', function() {
    result2.innerHTML = CSS.supports(condition.value);
  }, false);

}());
