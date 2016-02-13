define(
    'app/js/view-main',
    [
        'backbone',
        'app/js/helpers/prepare-tpl',
        'load![app/js/helpers/localization/locales, app/js/helpers/localization/regions]'
    ],
    function(Backbone, prepareTpl, Localization) {
        return Backbone.View.extend({
            el: '#main-container',
            initialize: function() {
                console.error('init view-main');
                console.log('Localization', Localization);
            },
            render: function(tpl) {
                var self = this,
                    templates = prepareTpl(tpl);

                self.$el.html(_.template(templates['tplMain']));
            }
        });
    }
);