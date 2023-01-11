var shoeApp = angular.module('shoeApp', ['ngRoute']);


// shoeApp.config(function(){
//     // Componenents we use before the contents are loaded
// });
shoeApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
                  .when('/home', {
                    templateUrl: 'views/home.html'

                  })
                  .when('/directory', {
                    templateUrl: 'views/directory.html',
                    controller: 'ShoeController'
                  }).otherwise({
                    redirectTo: '/home'
                  })

}]);





// shoeApp.run(function(){

//     // Compenent executes as the application runs
// });


// $scope object on a controller is used to expose data and methods to the views
shoeApp.controller('ShoeController', ['$scope', function($scope){
    $scope.removeShoe = function(shoe){
        var removeShoe = $scope.shoes.indexOf(shoe);
       $scope.shoes.splice(removeShoe, 1);
    };

    $scope.addShoe = function(){
        $scope.shoes.push({

            name: $scope.newshoe.name,
            color: $scope.newshoe.color,
            price: parseInt($scope.newshoe.price),
            availability: true

        });

        $scope.newshoe.name="";
        $scope.newshoe.color = "";
        $scope.newshoe.price = "";
    };


   $scope.shoes = [
                        {
                            name:"Jordan 4",
                            color : 'blue',
                            price : 20,
                            availability: true, 
                            pic : "content/img/jordan.jpg"

                        },

                        {
                            name:"Nike Roma",
                            color:'red',
                            price:25,
                            availability:true, 
                            pic: "content/img/nike.jpeg"
                        },

                        {
                            name:"Vans ",
                            color:'black',
                            price:28,
                            availability:true,
                            pic : "content/img/vans.jpg"
                        },


                        {
                            name:"Airforce",
                            color:'green',
                            price:30, 
                            availability:true,
                            pic : "content/img/airforce.jpeg"

                        }

                    ]


}]);
