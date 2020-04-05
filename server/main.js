import { Meteor } from 'meteor/meteor';
import {Pokemon} from '../imports/collections/pokemon';

var fs = Npm.require("fs");

Meteor.startup(() => {
  // code to run on server at startup
});


Meteor.methods({

    'pokmon.add': function(loc){
      var user = this.userId;
      if(!user){
        console.log('User not found!');
        return;
      }

      var iconPath = 'C:\\Users\\Gevindu\\pokemap\\pokeserver\\public';
      var icons = fs.readdirSync(iconPath);


      var min = Math.ceil(0);
      var max = Math.ceil(250);

      var random = Math.floor(Math.random() * (max-min)) + min;


      return Pokemon.insert({username:user,image: icons[random], longitude: loc.longitude, latitude: loc.latitude});
      


    },
    "pokemon.subtract": function(x){
      var user = this.userId;
      if(!user){
        console.log('user not signed in');
        return;
      }
      return Pokemon.remove(x);
    }

});