const data = require('../data/zoo_data');

const { employees } = data;
// const { species } = data;

// const especie = species.map((spname) => spname.id);

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const filt = employees.filter((names) => names.id
  === id).map((venames) => venames.responsibleFor);
  return filt;
}

console.log(getOldestFromFirstSpecies('0e7b460e-acf4-4e17-bcb3-ee472265db83'));
// console.log(especie);
module.exports = getOldestFromFirstSpecies;
