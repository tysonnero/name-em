angular.module('starter.services', [])

  .factory('Chats', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var chats = [{
      id: 0,
      name: 'Ben Sparrow',
      lastText: 'You on your way?',
      face: 'img/ben.png'
    }, {
      id: 1,
      name: 'Max Lynx',
      lastText: 'Hey, it\'s me',
      face: 'img/max.png'
    }, {
      id: 2,
      name: 'Adam Bradleyson',
      lastText: 'I should buy a boat',
      face: 'img/adam.jpg'
    }, {
      id: 3,
      name: 'Perry Governor',
      lastText: 'Look at my mukluks!',
      face: 'img/perry.png'
    }, {
      id: 4,
      name: 'Mike Harrington',
      lastText: 'This is wicked good ice cream.',
      face: 'img/mike.png'
    }];

    return {
      all: function () {
        return chats;
      },
      remove: function (chat) {
        chats.splice(chats.indexOf(chat), 1);
      },
      get: function (chatId) {
        for (var i = 0; i < chats.length; i++) {
          if (chats[i].id === parseInt(chatId)) {
            return chats[i];
          }
        }
        return null;
      }
    };
  })

  .factory('StatesService', function () {

    var statesExpanded = [
      { name: 'Alabama', hints:[]},
      { name: 'Alaska', hints:[]},
      { name: 'Arizona', hints:[]},
      { name: 'Alabama', hints:[]},
      { name: 'Arkansas', hints:[]},
      { name: 'California', hints:[]},
      { name: 'Colorado', hints:[]},
      { name: 'Connecticut', hints:[]},
      { name: 'Delaware', hints:[]},
      { name: 'Florida', hints:[]},
      { name: 'Georgia', hints:[]},
      { name: 'Hawaii', hints:[]},
      { name: 'Idaho', hints:[]},
      { name: 'Illinois', hints:[]},
      { name: 'Indiana', hints:[]},
      { name: 'Iowa', hints:[]},
      { name: 'Kansas', hints:[]},
      { name: 'Kentucky', hints:[]},
      { name: 'Louisiana', hints:[]},
      { name: 'Maine', hints:[]},
      { name: 'Maryland', hints:[]},
      { name: 'Massachusetts', hints:[]},
      { name: 'Michigan', hints:[]},
      { name: 'Minnesota', hints:[]},
      { name: 'Mississippi', hints:[]},
      { name: 'Missouri', hints:[]},
      { name: 'Montana', hints:[]},
      { name: 'Nebraska', hints:[]},
      { name: 'Nevada', hints:[]},
      { name: 'New Hampshire', hints:[]},
      { name: 'New Jersey', hints:[]},
      { name: 'New Mexico', hints:[]},
      { name: 'New York', hints:[]},
      { name: 'North Carolina', hints:[]},
      { name: 'North Dakota', hints:[]},
      { name: 'Ohio', hints:[]},
      { name: 'Oklahoma', hints:[]},
      { name: 'Oregon', hints:[]},
      { name: 'Pennsylvania', hints:[]},
      { name: 'Rhode Island', hints:[]},
      { name: 'South Carolina', hints:[]},
      { name: 'South Dakota', hints:[]},
      { name: 'Tennessee', hints:[]},
      { name: 'Texas', hints:[]},
      { name: 'Utah', hints:[]},
      { name: 'Vermont', hints:[]},
      { name: 'Virginia', hints:[]},
      { name: 'Washington', hints:[]},
      { name: 'West Virginia', hints:[]},
      { name: 'Wisconsin', hints:[]},
      { name: 'Wyoming', hints:[]}
    ];

    var states = [
      'Alabama',
      'Alaska',
      'Arizona',
      'Arkansas',
      'California',
      'Colorado',
      'Connecticut',
      'Delaware',
      'Florida',
      'Georgia',
      'Hawaii',
      'Idaho',
      'Illinois',
      'Indiana',
      'Iowa',
      'Kansas',
      'Kentucky',
      'Louisiana',
      'Maine',
      'Maryland',
      'Massachusetts',
      'Michigan',
      'Minnesota',
      'Mississippi',
      'Missouri',
      'Montana',
      'Nebraska',
      'Nevada',
      'New Hampshire',
      'New Jersey',
      'New Mexico',
      'New York',
      'North Carolina',
      'North Dakota',
      'Ohio',
      'Oklahoma',
      'Oregon',
      'Pennsylvania',
      'Rhode Island',
      'South Carolina',
      'South Dakota',
      'Tennessee',
      'Texas',
      'Utah',
      'Vermont',
      'Virginia',
      'Washington',
      'West Virginia',
      'Wisconsin',
      'Wyoming'
    ];

    return {
      get: function () {
        return states;
      }
    };

  });

