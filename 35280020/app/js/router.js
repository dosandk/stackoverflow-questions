define(
    'app/js/router',
    [
        'backbone',
        'app/js/view-main',
        'app/js/view-page-1',
        'app/js/view-page-2',
        'text!app/templates/default.tpl'
    ],
    function (Backbone, ViewMain, View1, View2, tpl) {
        return Backbone.Router.extend({
            routes: {
                '(/)': 'main',
                'page1': 'page1',
                'page2': 'page2'
            },
            initialize: function() {
                Backbone.history.start()
            },
            main: function() {
                var page = new ViewMain();

                page.render(tpl);
            },
            page1: function () {
                var page = new View1();

                page.render(tpl);
            },
            page2: function () {
                var page = new View2();

                page.render(tpl);
            }
        });
    }
);