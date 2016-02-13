#### [Webpack: How can I create a loader for “webpack” which takes an array of dependencies?](http://stackoverflow.com/questions/35280020/webpack-how-can-i-create-a-loader-for-webpack-which-takes-an-array-of-depende) 

#### Run project:
1. `npm install` - install all project dependencies
2. `gulp` - run local server and build project via "requirejs"

#### Build:
1. via require: `gulp build:require` - build passes
2. via webpack: `gulp build:webpack` - throws error

#### Problem:
I'm using next "load" plugin for "requirejs":
 
```javascript
define(
    function() {
        return {
            load: function(name, req, onLoad, config) {
                var rArr = /^\[([^\]]+)\]$/,
                    trimSpaces = /[\s,]+/,
                    modules = name.replace(rArr, '$1').split(trimSpaces);

                if (config.isBuild) {
                    req(modules, function() {
                        onLoad();
                    });
                }
                else {
                    req(modules, function() {
                        var argsArr = Array.prototype.slice.call(arguments),
                            index = argsArr.length,
                            helper = {};

                        while (index--) {
                            var module = argsArr[index];

                            if (module.toExecute) {
                                helper[module.moduleName] = module();
                            }
                            else {
                                helper[module.moduleName] = module;
                            }
                        }

                        onLoad(helper);
                    });
                }
            }
        }
    }
);
```
This "load" plugin allows next thing: it wraps dependencies to one object:

```javascript
define(
    'module-name',
    [
        'load![app/js/helpers/localization/locales, app/js/helpers/localization/regions]'
    ],
    function(Localization) {
        /* Localization object contains 'locales' object and 'region' object* /
    }
);
```

I'm trying to "soft" move big project from r.js-building to build via "webpack", where this "load"
plugin used in many places and I don't want change signature of all modules where this plugin was used, I need the some 
plugin for "webpack" which will be understand the signature of requirejs "load" plugin.

Maybe, somebody tell me how to write similar plugin for "webpack".
