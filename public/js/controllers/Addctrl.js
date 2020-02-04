angular.module('Addctrl',[]).controller('AddController',function($scope,$http){
    $scope.send_data=function(){

        $http.post('/api/about',$scope.form_data).then(function(respo){

            console.log(respo);
        })
    }
    $scope.validate=function(){
        alert("function calling happen...");
        $http.get('/api/about',$scope.form_data).then(function(req){
            
            $scope.receive_data=res.data;
            receive_data
        });
        
    }

});