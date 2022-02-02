const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

const vect1 = [];
const vect2 = [];
const vect3 = [];
const vect4 = [];

const allByLoc = () => {
  species.forEach((anyLoc) => {
    if (anyLoc.location === 'NE') {
      vect1.push(anyLoc.name);
    }
    if (anyLoc.location === 'NW') {
      vect2.push(anyLoc.name);
    }
    if (anyLoc.location === 'SE') {
      vect3.push(anyLoc.name);
    }
    if (anyLoc.location === 'SW') {
      vect4.push(anyLoc.name);
    }
  });
  return { NE: vect1, NW: vect2, SE: vect3, SW: vect4 };
};
const names = (namee) => {
  // const objname = {};
  const vecname = [];
  let vecname2;
  species.filter((namees) => namees.location === 'NE' && namees.name
  === 'lions').forEach((fname) => {
    vecname2 = fname.residents.forEach((nname) => vecname.push(nname.name));
  });
  return { lions: vecname2 };
};
  // return vecname;
// const nameSex = () => {
// };
// const nameOrder = () => {

// };
// const nameSexOrder = () => {

// };

function getAnimalMap(options) {
  // seu código aqui
  if (!options || !options.includeNames) {
    return allByLoc();
  }
}

// console.log(getAnimalMap({ sex: 'female' }));
// console.log(allByLoc());
console.log(names({ includeNames: true }));
module.exports = getAnimalMap;
