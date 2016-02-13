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