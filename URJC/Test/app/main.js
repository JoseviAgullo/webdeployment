requirejs.config({
    paths: {
        'text': '../lib/require/text',
        'durandal':'../lib/durandal/js',
        'plugins' : '../lib/durandal/js/plugins',
        'knockout': '../lib/knockout/knockout-3.1.0',
        'jquery': '../lib/jquery/jquery-1.9.1'
    }
});

define(['durandal/system', 'durandal/app', 'durandal/viewLocator'],
    function (system, app, viewLocator) {

        system.debug(true);

        app.title = 'Universidad Rey Juan Carlos';

        app.configurePlugins({
            router: true,
            observable: true
        });

        app.start().then(function () {
            viewLocator.useConvention('viewmodels','views');
            app.setRoot('shell');
        });
    }
);