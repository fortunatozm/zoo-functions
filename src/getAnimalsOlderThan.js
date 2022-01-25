const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  // console.log();
  const pNames = species.find((pName) => pName.name === animal);
  return pNames.residents.every((pAge) => pAge.age >= age);

  // return pNames;
}

console.log(getAnimalsOlderThan('lions', 7));
module.exports = getAnimalsOlderThan;
