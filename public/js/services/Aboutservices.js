angular.module('Aboutservices',[]).factory('About',['$http',function($http){
    return{
        //call to get all data 
        get : function(){
            return $http.get('/api/about');
        },
        //these will work when more API routes are defined on the node side things 
        //call to delete the data
        delete : function(){
            return $http.delete('/api/about' + id);
        }
    }
}]);