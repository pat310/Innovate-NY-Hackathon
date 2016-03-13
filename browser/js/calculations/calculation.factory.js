'use strict';

angular.module('InnovateNYP')
.factory('Calculation', function(){
  let Calculation = {};

  //sample function -> remove later
  Calculation.add = function(a, b){
    return a + b
  }

  return Calculation;
})

/*
  this factory will be used like a class later on.
  example use: (Calculation get's injected into the controller)
  let added = Calculation.add(1, 4); //returns 5
*/