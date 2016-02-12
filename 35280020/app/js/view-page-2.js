define(
    'app/js/view-page-2',
    [
        'backbone',
        'app/js/helpers/prepare-tpl'
    ],
    function(Backbone, prepareTpl) {
        return Backbone.View.extend({
            el: '#main-container',
            initialize: function() {
                console.error('init view-page-2');
            },
            render: function(tpl) {
                var self = this,
                    templates = prepareTpl(tpl);

                self.$el.html(_.template(templates['tplPage2']));
            }
        });
    }
);