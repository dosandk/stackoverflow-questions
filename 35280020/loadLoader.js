'use strict';

const path = require("path");

function loadLoader() {
    return JSON.parse(this.request.match(/\?(.+?)$/)[1])
            .map(module =>
                `exports['${path.basename(module, '.js')}'] = require('${module}');`).join('\n');
}

module.exports = loadLoader;