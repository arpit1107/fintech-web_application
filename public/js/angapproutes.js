angular.module('angapproutes',[]).config(['$routeProvider', '$locationProvider',function($routeProvider,$locationProvider){
    $routeProvider 
        //home page
        .when('/home',{
            templateUrl: 'view/home.html',
            controller: 'HomeController'
        })
        //about us page
        .when('/about',{
            templateUrl: 'view/about.html',
            controller: 'AboutController'
        })
        //contact us page
        .when('/contact',{
            templateUrl: 'view/contact.html',
            controller: 'ContactController'
        })
        //login us page
        .when('/add',{
            templateUrl: 'view/add.html',
            controller: 'AddController'
        })
        //show page
        .when('/show',{
            templateUrl: 'view/show.html',
            controller: 'ShowController'

        })
        //update details
        .when('/update',{
            templateUrl:'view/update.html',
            controller:'UpdateController'
        })
        .when('/update/:id',{
            templateUrl: 'view/edit_update.html',
            controller: 'UpdateController'
        })
        .when('/delete',{
            templateUrl: 'view/delete.html',
            controller: 'DeleteController'
        })
    
    $locationProvider.html5Mode(true);
}]);