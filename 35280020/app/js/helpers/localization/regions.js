define(
    'app/js/helpers/localization/regions',
    function() {
        var languageRegions = function() {
            return {
                '1' : 'Africa',
                '2' : 'Asia',
                '3' : 'ANZ',
                '4' : 'Eastern Europe',
                '5' : 'India',
                '6' : 'Latin America',
                '7' : 'Middle East',
                '8' : 'Western Europe',
                '9' : 'U.S',
                '10': 'Russia',
                '0' : 'Select region',
                'all': 'All regions'
            }
        };

        languageRegions.moduleName = 'languageRegions';
        languageRegions.toExecute = true;

        return languageRegions;
    }
);
