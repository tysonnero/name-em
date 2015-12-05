angular.module('starter.controllers', [])

  .controller('DashCtrl', function($scope) {
  })

  .controller('ChatsCtrl', function($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
      Chats.remove(chat);
    };
  })

  .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })

  .controller('AccountCtrl', function($scope) {
    $scope.settings = {
      enableFriends: true
    };
  })

  .controller('StatesCtrl', StatesCtrl);

function StatesCtrl(StatesService, $ionicContentBanner, ionicToast) {
  this.$ionicContentBanner = $ionicContentBanner;
  this.ionicToast = ionicToast;
  this.states = StatesService.get();
  this.available = angular.copy(this.states);
  this.matched = [];
}

StatesCtrl.prototype.add = function(searchText) {

  // TODO:
  // Abstract this method out to call a sub-routine that returns a promise
  // Use the promise to display alerts

  if (!searchText) return this.showAlert(['Missing state'], 'error');

  // Do a fuzzy search to accommodate for misspellings
  var f = new Fuse(this.available);
  var result = f.search(searchText, {threshold: 0.5, distance: 0});
  if (!result.length) return this.showAlert([searchText + ' not found'], 'error');

  // TODO:
  // If score is exact match, proceed
  // Otherwise, confirm

  // Assume the first item on the array
  var matchedIndex = result[0];
  var match = this.available[matchedIndex];

  // First letter of match should equal input
  if (match.toLowerCase().charAt(0) !== searchText.toLowerCase().charAt(0)) return this.showAlert([searchText + ' not found'], 'error');

  // Input should be at least half the length of match
  if (searchText.length < (Math.floor(match.length / 2))) return this.showAlert([searchText + ' not found'], 'error');

  // Add searchText to the matched array
  this.matched.push(match);

  // Remove searchText from the available list
  this.available.splice(matchedIndex, 1);

  this.showAlert([match + ' added to list'], 'info');

  // Reset form
  this.searchText = '';
  this.searchForm.$setPristine();
};

StatesCtrl.prototype.remove = function(item) {

  var matchedIndex = this.matched.indexOf(item);
  var originalIndex = this.states.indexOf(item);

  // Remove from matched list
  this.matched.splice(matchedIndex, 1);

  // Add back to available list
  this.available.splice(originalIndex, 0, item);

  this.showAlert([item + ' removed from list'], 'info');

  // TODO: Confirm removal
};

StatesCtrl.prototype.showAlert = function(text, type) {
  this.$ionicContentBanner.show({
    text: text,
    autoClose: 2500,
    type: type
  });
};
