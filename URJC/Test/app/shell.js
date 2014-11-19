define(['plugins/router'], function (router) {
    return {
        router: router,
        activate: function () {
            return router.map([
                { route: ['', 'home'], moduleId: 'viewmodels/home', title: 'Home'},
                { route: ['page'], moduleId: 'viewmodels/page', title: 'Page' },
            ]).buildNavigationModel()
              .activate();
        }
    };
});