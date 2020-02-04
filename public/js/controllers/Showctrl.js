angular.module('Showctrl',[]).controller('ShowController',function($scope,$http){
    $scope.retrieve_data=function(){
        
        $http.get('/api/about').then(function(res){

            console.log(res);
            $scope.receive_data=res.data;
        });
    };

});