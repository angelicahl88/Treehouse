'use strict';

const originalFlavours = ['Chocholate', 'Vanilla'];
const newFlavours = ['Strawberry', 'Chocholate Chip'];
const inventory = ['Rocky Road', ...originalFlavours, 'Neopolitan', ...newFlavours];

console.log(inventory);