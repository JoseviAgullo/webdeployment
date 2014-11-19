define(function (require) {
    var system = require('durandal/system');

    return {
        activate: function () {
            system.log('home fired');
        }
    }
});