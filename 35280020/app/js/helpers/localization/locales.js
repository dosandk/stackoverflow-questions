define(
    'app/js/helpers/localization/locales',
    function() {
        var locales = function() {
            return {
                en: 'English',
                ru: 'Russian',
                es: 'Spanish',
                fr: 'French',
                cn: 'Simplified Chinese',
                jp: 'Japanese',
                de: 'German',
                ua: 'Ukrainian',
                pt: 'Portuguese',
                pl: 'Polish',
                tw: 'Traditional Chinese',
                hi: 'Hindi',
                ta: 'Tamil',
                kn: 'Kannada',
                te: 'Telugu',
                gu: 'Gujarati',
                bn: 'Bengali',
                ml: 'Malayalam',
                he: 'Hebrew',
                ko: 'Korean',
                id: 'Indonesian',
                th: 'Thai',
                vi: 'Vietnamese',
                tr: 'Turkish',
                ar: 'Arabic',
                sv: 'Swedish',
                el: 'Greek'
            }
        };

        locales.moduleName = 'locales';
        locales.toExecute = true;

        return locales;
    }
);