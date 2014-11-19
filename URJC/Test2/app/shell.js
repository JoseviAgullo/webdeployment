define(['plugins/router'], function (router) {
    return {
        router: router,
        activate: function () {
            return router.map([
                { route: [''], moduleId: '', title: ''}
            ]).buildNavigationModel()
              .activate();
        }
    };
});