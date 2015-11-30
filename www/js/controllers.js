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

StatesCtrl.prototype.findState = function (searchText) {

  if (!searchText) return;

  // Do a fuzzy search to accommodate for misspellings
  var f = new Fuse(this.available);
  var result = f.search(searchText, {threshold: 0.5, distance: 0});
  if (!result.length) return;

  // TODO:
  // If score is exact match, proceed
  // Otherwise, confirm

  // Assume the first item on the array
  var matchedIndex = result[0];
  var match = this.available[matchedIndex];

  // First letter of match should equal input
  if (match.toLowerCase().charAt(0) !== searchText.toLowerCase().charAt(0)) return;

  // Input should be at least half the length of match
  if (searchText.length < (Math.floor(match.length / 2))) return;

  // Add searchText to the matched array
  this.matched.push(match);

  // Remove searchText from the available list
  this.available.splice(matchedIndex, 1);

  // Reset form
  this.searchText = '';
  this.searchForm.$setPristine();
};
