angular.module('starter.controllers', [])

  .controller('StatesCtrl', StatesCtrl);

function StatesCtrl(StatesService, $ionicContentBanner, ionicToast) {
  this.StatesService = StatesService;
  this.$ionicContentBanner = $ionicContentBanner;
  this.ionicToast = ionicToast;

  this.states = this.StatesService.get();
  this.matched = [];
}

StatesCtrl.prototype.add = function(searchText) {

  // TODO:
  // Abstract this method out to call a sub-routine that returns a promise
  // Use the promise to display alerts

  if (!searchText) return this.showAlert(['No state entered. Please enter a value.'], 'error');

  // Do a fuzzy search to accommodate for misspellings
  var f = new Fuse(this.states);
  var result = f.search(searchText, {threshold: 0.5, distance: 0});
  if (!result.length) return this.showAlert([searchText + ' not found. Check your spelling.'], 'error');

  // TODO:
  // If score is exact match, proceed
  // Otherwise, confirm

  // Assume the first item on the array
  var matchedIndex = result[0];
  var match = this.states[matchedIndex];

  // First letter of match should equal input
  if (match.toLowerCase().charAt(0) !== searchText.toLowerCase().charAt(0)) return this.showAlert(['Possible match but first letter incorrect.'], 'error');

  // Input should be at least half the length of match
  if (searchText.length < (Math.floor(match.length / 2))) return this.showAlert(['Possible match but too short.'], 'error');

  // Is the state already matched?
  var exists = this.matched.indexOf(match);
  if(exists !== -1) return this.showAlert([match + ' already added. Try another state.'], 'error');

  // Add searchText to the matched array
  this.matched.push(match);

  this.showAlert([match + ' added to list'], 'info');

  // Reset form
  this.searchText = '';
  this.searchForm.$setPristine();
};

StatesCtrl.prototype.remove = function(item) {

  var matchedIndex = this.matched.indexOf(item);

  // Remove from matched list
  this.matched.splice(matchedIndex, 1);

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
