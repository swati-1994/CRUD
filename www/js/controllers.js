angular.module('starter.controllers', [])

  .controller('Ctrl', function ($scope) {
  })

  .controller('tabsCtrl', function ($scope, tabs) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});


  })

  .controller('createCtrl', function ($scope, $http, $state) {


    $scope.list = {};
    $scope.submit = function () {


      $http.post("http://192.168.1.16:3000/list", $scope.list)
        .success(function (success) {
          console.log("Success", JSON.stringify(success))
          alert("Thanks")
          $state.go('tab.read');



        })
        .error(function (data) {
          alert("ERROR");
        });

    };



  })

  .controller('deleteCtrl', function ($scope, $http) {
    $scope.list = {};
    $scope.delete = function (swati) {
      $http.delete("http://192.168.1.16:3000/list/" + swati)
        .success(function (success) {
          console.log("Success", JSON.stringify(success))
          alert("done");

        })
        .error(function (data) {
          alert("ERROR");

        })
    };




  })

  .controller('readCtrl', function ($scope, $http, $state, $ionicPopup) {

    $scope.read = function (s) {
      $http.get("http://192.168.1.16:3000/list/")
        .success(function (success) {
          $scope.list = success;
        })
        .error(function (data) {
          alert("error")
        })
    }


    $scope.delete = function (swati) {
      $http.delete("http://192.168.1.16:3000/list/" + swati)
        .success(function (success) {
          console.log("Success", JSON.stringify(success))
          alert("done");

        })
        .error(function (data) {
          alert("ERROR");

        })
    };


    $scope.email = function () {
      $scope.data = {};

      // An elaborate, custom popup
      var myPopup = $ionicPopup.show({
        template: '<input type="text" ng-model="data.email">',
        title: 'Enter email add',

        scope: $scope,
        buttons: [
          {text: 'Cancel'},
          {
            text: '<b>Save</b>',
            type: 'button-positive',
            onTap: function (e) {
              if (!$scope.data.email) {
                //don't allow the user to close unless he enters wifi password
                e.preventDefault();
              } else {
                return $scope.data.email;
              }
            }
          }
        ]
      });

      myPopup.then(function (res) {
        console.log('login!', res);
      });


    };


  })
//Show controller start
.
controller('showCtrl', function ($scope, $http) {

  $scope.read = function (s) {
    $http.get("http://192.168.1.16:3000/list/" + s)
      .success(function (success) {
        $scope.data = success;
      })
      .error(function (data) {
        alert("error")
      })

  }
})
//Show controller ends


  .controller('updateCtrl', function ($scope, $ionicPopup) {




  });
