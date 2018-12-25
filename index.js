(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classConcat () {
    var classes = [];

    for (var i = 0; i < arguments.length; i++) {
      var arg = arguments[i];
      if(!arg) continue;

      var argType = typeof arg;
      
      if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
        var inner = classConcat.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
    }

    return classes.join(' ');
  }
  
  if (typeof module !== 'undefined' && module.exports) {
    classConcat.default = classConcat;
    module.exports = classConcat;
  } else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
    // register as 'classnames', consistent with npm package name
    define('classconcat', [], function () {
      return classConcat;
    });
  } else {
    window.classConcat = classConcat;
  }
}());