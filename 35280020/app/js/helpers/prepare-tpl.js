define(
    'app/js/helpers/prepare-tpl',
    function() {
        return function(tpl) {
            var re = /<tpl[\s\t]+id=\"((?!\")\w+)\"[\s\t]*>(((?!<\/tpl).)*)<\/tpl>/g,
                templateCollection = {};

            tpl.replace(/(\r\n|\n|\r)/gm, '').replace(re, function (matchStr, id, template) {
                templateCollection[id] = template;
            });

            return templateCollection;
        };
    }
);