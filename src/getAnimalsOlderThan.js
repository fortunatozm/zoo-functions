const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const pNames = species.find((pName) => pName.name === animal);
  return pNames.residents.every((pAge) => pAge.age >= age);
}

// console.log(getAnimalsOlderThan('lions', 7));
module.exports = getAnimalsOlderThan;
