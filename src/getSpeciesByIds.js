const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  // console.log(ids);
  if (ids === null) {
    return [];
  }
  return species.filter((animalId) => ids.includes(animalId.id));
}

module.exports = getSpeciesByIds;
