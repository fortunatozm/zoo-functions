const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  if (animal === undefined) {
    const result = {};
    species.forEach((specie) => { result[specie.name] = specie.residents.length; });
    return result;
  }
  if (animal.sex === null || animal.sex === undefined) {
    const specieFilter = species.find((specie) => specie.name === animal.specie).residents.length;
    return specieFilter;
  }
  const spFilSex = species.find((specie2) => specie2.name
  === animal.specie).residents.filter((sexLen) => sexLen.sex === 'female');
  return spFilSex.length;
}
console.log(countAnimals({ specie: 'giraffes', sex: 'female' }));
module.exports = countAnimals;
