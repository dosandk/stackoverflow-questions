define(
    'app/js/view-main',
    [
        'backbone',
        'app/js/helpers/prepare-tpl'
    ],
    function(Backbone, prepareTpl) {
        return Backbone.View.extend({
            el: '#main-container',
            initialize: function() {
                console.error('init view-main');
            },
            render: function(tpl) {
                var self = this,
                    templates = prepareTpl(tpl);

                self.$el.html(_.template(templates['tplMain']));
            }
        });
    }
);