angular.module('Updatectrl',[]).controller('UpdateController',function($scope,$http,$routeParams){
    //to retrieve the data from database on show to update details
    $scope.retrieve_data=function(){
        
        $http.get('/api/about').then(function(res){
            
            console.log(res);
            $scope.receive_data=res.data;
        });
    };

    //to retrieve selected record from database to update the details on the click of update
    $scope.retrieve_data_ind=function(){

        $http.get('/api/about/'+$routeParams.id).then(function(res){
            console.log(res);
            $scope.receive_data_ind=res.data;
        });
    };

    //to save the records in the database after clicking on the update button  
    $scope.update_data=function(id){
        $scope.data=$scope.receive_data_ind[0];

        $http.put('/api/about/'+id,JSON.stringify($scope.data)).then(function(res){

            console.log(res);
            
        });
    };

});