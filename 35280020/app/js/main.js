require.config({
    baseUrl: './',
    paths: {
        jquery: 'app/js//libs/jquery',
        underscore: 'app/js/libs/underscore',
        backbone: 'app/js/libs/backbone',
        text: 'app/js/libs/text',
        load: 'app/js/libs/load'
    }
});

require(
    [
        'app/js/router'
    ],
    function(Router) {
        new Router();

        return false;
    }
);