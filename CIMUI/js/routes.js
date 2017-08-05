angular
.module('app')
.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$breadcrumbProvider', function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $breadcrumbProvider) {

  $urlRouterProvider.otherwise('/cimmain');

  $ocLazyLoadProvider.config({
    // Set to true if you want to see what and when is dynamically loaded
    debug: true
  });

  $breadcrumbProvider.setOptions({
    prefixStateName: 'app.main',
    includeAbstract: true,
    template: '<li class="breadcrumb-item" ng-repeat="step in steps" ng-class="{active: $last}" ng-switch="$last || !!step.abstract"><a ng-switch-when="false" href="{{step.ncyBreadcrumbLink}}">{{step.ncyBreadcrumbLabel}}</a><span ng-switch-when="true">{{step.ncyBreadcrumbLabel}}</span></li>'
  });

  $stateProvider
  .state('app', {
    abstract: true,
    templateUrl: 'views/common/layouts/full.html',
    //page title goes here
    ncyBreadcrumb: {
      label: 'Root',
      skip: true
    },
    resolve: {
      loadCSS: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load CSS files
        return $ocLazyLoad.load([{
          serie: true,
          name: 'Font Awesome',
          files: ['css/font-awesome.min.css']
        },{
          serie: true,
          name: 'Simple Line Icons',
          files: ['css/simple-line-icons.css']
        }]);
      }],
      loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
        // you can lazy load files for an existing module
        return $ocLazyLoad.load([{
          serie: true,
          name: 'chart.js',
          files: [
            'bower_components/chart.js/dist/Chart.min.js',
            'bower_components/angular-chart.js/dist/angular-chart.min.js'
          ]
        }]);
      }],
    }
  })  
  .state('app.Area', {
    url: '/Area',
    templateUrl: 'views/area.html',
    //page title goes here
    ncyBreadcrumb: {
      label: 'Area',
    },
    //page subtitle goes here
    params: { subtitle: 'Welcome to CIM' },
    resolve: {
      loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
        // you can lazy load files for an existing module
        return $ocLazyLoad.load([
          {
            serie: true,
            name: 'chart.js',
            files: [
              'bower_components/chart.js/dist/Chart.min.js',
              'bower_components/angular-chart.js/dist/angular-chart.min.js'
            ]
          },
        ]);
      }],
      loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load controllers
        return $ocLazyLoad.load({
          files: ['js/controllers/services.js',
        	  	  'js/controllers/lotlist.js']
        });
      }]
    }
  })  
  .state('app.Bank', {
    url: '/Bank',
    templateUrl: 'views/bank.html',
    //page title goes here
    ncyBreadcrumb: {
      label: 'Bank',
    },
    //page subtitle goes here
    params: { subtitle: 'Welcome to CIM' },
    resolve: {
      loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
        // you can lazy load files for an existing module
        return $ocLazyLoad.load([
          {
            serie: true,
            name: 'chart.js',
            files: [
              'bower_components/chart.js/dist/Chart.min.js',
              'bower_components/angular-chart.js/dist/angular-chart.min.js'
            ]
          },
        ]);
      }],
      loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load controllers
        return $ocLazyLoad.load({
          files: ['js/controllers/services.js',
        	  	  'js/controllers/lotlist.js']
        });
      }]
    }
  })  
  .state('app.Station', {
    url: '/Station',
    templateUrl: 'views/station.html',
    //page title goes here
    ncyBreadcrumb: {
      label: 'Station',
    },
    //page subtitle goes here
    params: { subtitle: 'Welcome to CIM' },
    resolve: {
      loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
        // you can lazy load files for an existing module
        return $ocLazyLoad.load([
          {
            serie: true,
            name: 'chart.js',
            files: [
              'bower_components/chart.js/dist/Chart.min.js',
              'bower_components/angular-chart.js/dist/angular-chart.min.js'
            ]
          },
        ]);
      }],
      loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load controllers
        return $ocLazyLoad.load({
          files: ['js/controllers/services.js',
        	  	  'js/controllers/lotlist.js']
        });
      }]
    }
  })  
  .state('app.Eqipment', {
    url: '/Equipment',
    templateUrl: 'views/equipment.html',
    //page title goes here
    ncyBreadcrumb: {
      label: 'Equipment',
    },
    //page subtitle goes here
    params: { subtitle: 'Welcome to CIM' },
    resolve: {
      loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
        // you can lazy load files for an existing module
        return $ocLazyLoad.load([
          {
            serie: true,
            name: 'chart.js',
            files: [
              'bower_components/chart.js/dist/Chart.min.js',
              'bower_components/angular-chart.js/dist/angular-chart.min.js'
            ]
          },
        ]);
      }],
      loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load controllers
        return $ocLazyLoad.load({
          files: ['js/controllers/services.js',
        	  	  'js/controllers/equipinfo.js']
        });
      }]
    }
  })  
  .state('app.Scheduling', {
    url: '/Scheduling',
    templateUrl: 'views/scheduling.html',
    //page title goes here
    ncyBreadcrumb: {
      label: 'Scheduling',
    },
    //page subtitle goes here
    params: { subtitle: 'Welcome to CIM' },
    resolve: {
      loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
        // you can lazy load files for an existing module
        return $ocLazyLoad.load([
          {
            serie: true,
            name: 'chart.js',
            files: [
              'bower_components/chart.js/dist/Chart.min.js',
              'bower_components/angular-chart.js/dist/angular-chart.min.js'
            ]
          },
        ]);
      }],
      loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load controllers
        return $ocLazyLoad.load({
          files: ['js/controllers/services.js',
        	  	  'js/controllers/lotlist.js']
        });
      }]
    }
  })  
  .state('app.Durable', {
    url: '/Durable',
    templateUrl: 'views/durable.html',
    //page title goes here
    ncyBreadcrumb: {
      label: 'Durable',
    },
    //page subtitle goes here
    params: { subtitle: 'Welcome to CIM' },
    resolve: {
      loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
        // you can lazy load files for an existing module
        return $ocLazyLoad.load([
          {
            serie: true,
            name: 'chart.js',
            files: [
              'bower_components/chart.js/dist/Chart.min.js',
              'bower_components/angular-chart.js/dist/angular-chart.min.js'
            ]
          },
        ]);
      }],
      loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load controllers
        return $ocLazyLoad.load({
          files: ['js/controllers/services.js',
        	  	  'js/controllers/lotlist.js']
        });
      }]
    }
  })
  .state('app.InterFab', {
    url: '/InterFab',
    templateUrl: 'views/interfab.html',
    //page title goes here
    ncyBreadcrumb: {
      label: 'InterFab',
    },
    //page subtitle goes here
    params: { subtitle: 'Welcome to CIM' },
    resolve: {
      loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
        // you can lazy load files for an existing module
        return $ocLazyLoad.load([
          {
            serie: true,
            name: 'chart.js',
            files: [
              'bower_components/chart.js/dist/Chart.min.js',
              'bower_components/angular-chart.js/dist/angular-chart.min.js'
            ]
          },
        ]);
      }],
      loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load controllers
        return $ocLazyLoad.load({
          files: ['js/controllers/services.js',
        	  	  'js/controllers/lotlist.js']
        });
      }]
    }
  })
  .state('app.General', {
    url: '/General',
    templateUrl: 'views/general.html',
    //page title goes here
    ncyBreadcrumb: {
      label: 'General',
    },
    //page subtitle goes here
    params: { subtitle: 'Welcome to CIM' },
    resolve: {
      loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
        // you can lazy load files for an existing module
        return $ocLazyLoad.load([
          {
            serie: true,
            name: 'chart.js',
            files: [
              'bower_components/chart.js/dist/Chart.min.js',
              'bower_components/angular-chart.js/dist/angular-chart.min.js'
            ]
          },
        ]);
      }],
      loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load controllers
        return $ocLazyLoad.load({
          files: ['js/controllers/services.js',
        	  	  'js/controllers/lotlist.js']
        });
      }]
    }
  })
 .state('app.Options', {
    url: '/Options',
    templateUrl: 'views/options.html',
    //page title goes here
    ncyBreadcrumb: {
      label: 'Option',
    },
    //page subtitle goes here
    params: { subtitle: 'Welcome to CIM' },
    resolve: {
      loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
        // you can lazy load files for an existing module
        return $ocLazyLoad.load([
          {
            serie: true,
            name: 'chart.js',
            files: [
              'bower_components/chart.js/dist/Chart.min.js',
              'bower_components/angular-chart.js/dist/angular-chart.min.js'
            ]
          },
        ]);
      }],
      loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load controllers
        return $ocLazyLoad.load({
          files: ['js/controllers/services.js',
        	  	  'js/controllers/lotlist.js']
        });
      }]
    }
  })
  .state('app.main', {
    url: '/cimmain',
    templateUrl: 'views/cimmain.html',
    //page title goes here
    ncyBreadcrumb: {
      label: 'Home',
    },
    //page subtitle goes here
    params: { subtitle: 'Welcome to ROOT powerfull Bootstrap & AngularJS UI Kit' },
    resolve: {
      loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
        // you can lazy load files for an existing module
        return $ocLazyLoad.load([
          {
            serie: true,
            name: 'chart.js',
            files: [
              'bower_components/chart.js/dist/Chart.min.js',
              'bower_components/angular-chart.js/dist/angular-chart.min.js'
            ]
          },
        ]);
      }],
      loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load controllers
        return $ocLazyLoad.load({
          files: ['js/controllers/main.js']
        });
      }]
    }
  })
  .state('app.Lot', {
    url: '/Lot',
    templateUrl: 'views/lotlist.html',
    //page title goes here
    ncyBreadcrumb: {
      label: 'Lot',
    },
    //page subtitle goes here
    params: { subtitle: 'Welcome to CIM' },
    resolve: {
      loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
        // you can lazy load files for an existing module
        return $ocLazyLoad.load([
          {
            serie: true,
            name: 'chart.js',
            files: [
              'bower_components/chart.js/dist/Chart.min.js',
              'bower_components/angular-chart.js/dist/angular-chart.min.js'
            ]
          },
        ]);
      }],
      loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load controllers
        return $ocLazyLoad.load({
          files: ['js/controllers/services.js',
        	  	  'js/controllers/lotlist.js']
        });
      }]
    }
  })
  .state('app.lotinfo', {
    url: '/lotinfo/:lotId',
    templateUrl: 'views/lotinfo.html',
    //page title goes here
    ncyBreadcrumb: {
      label: 'Lot Info',
    },
    //page subtitle goes here
    params: { subtitle: 'Welcome to CIM' },
    resolve: {
      loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
        // you can lazy load files for an existing module
        return $ocLazyLoad.load([
          {
            serie: true,
            name: 'chart.js',
            files: [
              'bower_components/chart.js/dist/Chart.min.js',
              'bower_components/angular-chart.js/dist/angular-chart.min.js'
            ]
          },
        ]);
      }],
      loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load controllers
        return $ocLazyLoad.load({
          files: ['js/controllers/services.js',
        	  	  'js/controllers/lotinfo.js']
        });
      }]
    }
  })
 .state('app.startlot', {
    url: '/startlot/:lotId',
    templateUrl: 'views/startlot.html',
    //page title goes here
    ncyBreadcrumb: {
      label: 'Start Lot',
    },
    //page subtitle goes here
    params: { subtitle: 'Welcome to CIM' },
    resolve: {
      loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
        // you can lazy load files for an existing module
        return $ocLazyLoad.load([
          {
            serie: true,
            name: 'chart.js',
            files: [
              'bower_components/chart.js/dist/Chart.min.js',
              'bower_components/angular-chart.js/dist/angular-chart.min.js'
            ]
          },
        ]);
      }],
      loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load controllers
        return $ocLazyLoad.load({
          files: ['js/controllers/services.js',
        	  	  'js/controllers/startlot.js']
        });
      }]
    }
  })  
 .state('app.Processes', {
    url: '/Process',
    templateUrl: 'views/processes.html',
    //page title goes here
    ncyBreadcrumb: {
      label: 'Process',
    },
    //page subtitle goes here
    params: { subtitle: 'Welcome to CIM' },
    resolve: {
      loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
        // you can lazy load files for an existing module
        return $ocLazyLoad.load([
          {
            serie: true,
            name: 'chart.js',
            files: [
              'bower_components/chart.js/dist/Chart.min.js',
              'bower_components/angular-chart.js/dist/angular-chart.min.js'
            ]
          },
        ]);
      }],
      loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load controllers
        return $ocLazyLoad.load({
          files: ['js/controllers/services.js',
        	  	  'js/controllers/processlist.js']
        });
      }]
    }
  })
  .state('app.processinfo', {
    url: '/processinfo/:processId',
    templateUrl: 'views/processinfo.html',
    //page title goes here
    ncyBreadcrumb: {
      label: 'Process Info',
    },
    //page subtitle goes here
    params: { subtitle: 'Welcome to CIM' },
    resolve: {
      loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
        // you can lazy load files for an existing module
        return $ocLazyLoad.load([
          {
            serie: true,
            name: 'chart.js',
            files: [
              'bower_components/chart.js/dist/Chart.min.js',
              'bower_components/angular-chart.js/dist/angular-chart.min.js'
            ]
          },
        ]);
      }],
      loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load controllers
        return $ocLazyLoad.load({
          files: ['js/controllers/services.js',
        	  	  'js/controllers/processinfo.js']
        });
      }]
    }
  })
  .state('app.startlotprocess', {
    url: '/startlotprocess/:lotId',
    templateUrl: 'views/startlotprocess.html',
    //page title goes here
    ncyBreadcrumb: {
      label: 'Start Lot',
    },
    //page subtitle goes here
    params: { subtitle: 'Welcome to CIM' },
    resolve: {
      loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
        // you can lazy load files for an existing module
        return $ocLazyLoad.load([
          {
            serie: true,
            name: 'chart.js',
            files: [
              'bower_components/chart.js/dist/Chart.min.js',
              'bower_components/angular-chart.js/dist/angular-chart.min.js'
            ]
          },
        ]);
      }],
      loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load controllers
        return $ocLazyLoad.load({
          files: ['js/controllers/services.js',
        	  	  'js/controllers/startlot.js']
        });
      }]
    }
  }) 
  .state('app.lothistory', {
    url: '/lothistory/:lotId',
    templateUrl: 'views/lothistory.html',
    //page title goes here
    ncyBreadcrumb: {
      label: 'Lot History',
    },
    //page subtitle goes here
    params: { subtitle: 'Welcome to CIM' },
    resolve: {
      loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
        // you can lazy load files for an existing module
        return $ocLazyLoad.load([
          {
            serie: true,
            name: 'chart.js',
            files: [
              'bower_components/chart.js/dist/Chart.min.js',
              'bower_components/angular-chart.js/dist/angular-chart.min.js'
            ]
          },
        ]);
      }],
      loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load controllers
        return $ocLazyLoad.load({
          files: ['js/controllers/services.js',
        	  	  'js/controllers/lothistory.js']
        });
      }]
    }
  })  
  .state('appSimple', {
    abstract: true,
    templateUrl: 'views/common/layouts/simple.html',
    resolve: {
      loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
        // you can lazy load files for an existing module
        return $ocLazyLoad.load([{
          serie: true,
          name: 'Font Awesome',
          files: ['css/font-awesome.min.css']
        },{
          serie: true,
          name: 'Simple Line Icons',
          files: ['css/simple-line-icons.css']
        }]);
      }],
    }
  })

  // Additional Pages
  .state('appSimple.login', {
    url: '/login',
    templateUrl: 'views/pages/login.html'
  })
  .state('appSimple.register', {
    url: '/register',
    templateUrl: 'views/pages/register.html'
  })
  .state('appSimple.404', {
    url: '/404',
    templateUrl: 'views/pages/404.html'
  })
  .state('appSimple.500', {
    url: '/500',
    templateUrl: 'views/pages/500.html'
  })
}]);