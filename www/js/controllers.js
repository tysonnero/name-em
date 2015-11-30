angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($scope) {
  })

  .controller('ChatsCtrl', function ($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
      Chats.remove(chat);
    };
  })

  .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })

  .controller('AccountCtrl', function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  })

  .controller('StatesCtrl', StatesCtrl);

function StatesCtrl(StatesService) {
  this.states = StatesService.get();
  this.available = this.states;
  this.matched = [];
}

StatesCtrl.prototype.findState = function (state) {

  // Check if we have a match
  var matchedIndex = this.available.indexOf(state);
  if (matchedIndex === -1) return;

  // Add state to teh matched array
  var matched = this.available[matchedIndex];
  this.matched.push(matched);

  // Remove state from the available list
  this.available.splice(matchedIndex, 1);
};
