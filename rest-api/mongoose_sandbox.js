'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/sandbox');

var db = mongoose.connection;

db.on('error', function(err) {
  console.error('connection error:', err);
});

db.once('open', function() {
  console.log('The database connection was a schmasching suschesch');
  // All database communication goes here:
  //Create Schema
  var Schema = mongoose.Schema;
  var AnimalSchema = new Schema({
    type: {type: String, default: "goldfish"},
    color: {type: String, default: "golden"},
    size: String,
    mass: {type: Number, default: 0.003},
    name: {type: String, default: "Doris"}
  });

  AnimalSchema.pre('save', function(next) {
    if (this.mass >= 100) {
      this.size = 'big';
    } else if (this.mass >= 5 && this.mass< 100) {
      this.size = 'medium';
    } else {
      this.size = 'small';
    }
    next();
  });

  // Custom method
  AnimalSchema.statics.findSize = function(size, callback) {
    //this == Animal
    return this.find({size: size}, callback);
  }

  // Instance method
  AnimalSchema.methods.findSameColor = function(callback) {
    //this == document
    return this.model('Animal').find({color: this.color}, callback);
  }

  var Animal = mongoose.model('Animal', AnimalSchema);

  var elephant = new Animal({
    type: 'elephant',
    color: 'Grey',
    mass: 2000,
    name: 'dembo'
  });

  var animal = new Animal({}); //Goldfish

  var whale = new Animal({
    type: 'Whale',
    color: 'Blue',
    mass: 6000000,
    name: 'Beluga'
  });

  var animalData = [
    {
      type: "Mouse",
      color: 'Tan',
      mass: 0.03,
      name: 'Mickey'
    },
    {
      type: "Nutria",
      color: 'Brown',
      mass: 6.32,
      name: 'Gretchen'
    },
    {
      type: "Wolf",
      color: 'Grey',
      mass: 50,
      name: 'Howler'
    },
    elephant,
    animal,
    whale
  ];

  //Remove all existing documents before saving
  Animal.remove({}, function(err) {
    if(err) console.log('Remove failed.', err);

    Animal.create(animalData, function(err, animals) {
        if(err) console.log('Save failed.', err);

        Animal.findOne({type: 'elephant'}, function(err, elephant) {
          elephant.findSameColor(function(err, animals) {
            animals.forEach(function(animal) {
                console.log(animal.name + ' the ' + animal.color + ' ' + animal.type + ' is a ' + animal.size + '-sized animal.');
            });
            db.close(function() {
              console.log('db connection closed.');
            });
          });
        });
      });
    });


  // PYRAMID OF DOOM
  // Animal.remove({}, function(err) {
  //   if(err) console.log('Remove failed.', err);
  //
  //     elephant.save(function(err) {
  //       if(err) console.log('Save failed.', err);
  //
  //       animal.save(function(err) {
  //         if(err) console.log('Save failed.', err);
  //
  //           whale.save(function(err) {
  //             if(err) console.log('Save failed.', err);
  //
  //             Animal.find({}, function(err, animals) {
  //               animals.forEach(function(animal) {
  //                   console.log(animal.name + ' the ' + animal.color + ' ' + animal.type);
  //               });
  //               db.close(function() {
  //                 console.log('db connection closed.');
  //               });
  //             });
  //           });
  //         });
  //       });
  //     });

  });
