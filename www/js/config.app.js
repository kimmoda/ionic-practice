(function () {
    'use strict';
    angular
        .module('ionic')
        .constant('AppConfig', {
            routes  : {
                home : 'gallery.home',
                login: 'intro'
            },
            color   : '#00796B',
            facebook: '1024016557617380',
            parse   : {
                applicationId: '7lWT9DJntSvMKTetpoT0wL79pTG9dk4ob5pztktX',
                javascriptKey: 'UbrjB5Imc0btrAyoSb83HmCAHmFWc77JEB9AA1to'
            }
        });
})();
