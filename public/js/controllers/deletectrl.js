angular.module('Deletectrl',[]).controller('DeleteController',function($scope,$http){
    $scope.retrieve_data=function(){
        
        $http.get('/api/about').then(function(res){

            console.log(res);
            $scope.receive_data=res.data;
        });
    };
    $scope.delete_data=function(id){

        $http.delete('/api/about'+id).then(function(res) {

            console.log(res);
            $scope.receive_data();
            
        });
    };

});